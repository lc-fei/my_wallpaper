<template>
	<view class="classlist">
		<view class="content">
			<navigator :url="'/pages/preview/preview?id=' + item._id + '&classify=' + nameRef" class="item"
				v-for="item in classList">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { onLoad, onReachBottom, onUnload } from '@dcloudio/uni-app'
	import { apiWallList } from '@/api/api'
	import { ref } from 'vue'
	import { PreviewDaum } from '@/api/types'
	import { gotoHome } from '@/utils/common'
	const classList = ref<PreviewDaum[]>([])
	const num = ref<number>(1)
	const idRef = ref<number>()
	const noData = ref<boolean>(false)
	const nameRef = ref<string>()
	const getClassList = async () => {
		const res = await apiWallList({
			classid: idRef.value,
			pageNum: num.value,
			pageSize: 12
		})
		num.value++
		if (res.data.length === 0) noData.value = true
		classList.value = [...classList.value, ...res.data]
		uni.setStorageSync("storeClassList", classList.value)
	}

	onLoad(async (e) => {
		if (e) {
			const { id, name } = e
			if (!id) {
				gotoHome()
			}
			idRef.value = id
			nameRef.value = name
			uni.setNavigationBarTitle({
				title: name
			})
			getClassList()
			console.log('获取数据', classList.value)
		}
	})
	onReachBottom(() => {
		if (!noData.value) {
			getClassList()
			console.log('触底', classList.value)
		}
		else {
			console.log('触底，但是没有了')
		}
	})


	onUnload(() => {
		uni.removeStorageSync("storeClassList")
	})
</script>
<style lang="scss" scoped>
	.classlist {
		.content {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>