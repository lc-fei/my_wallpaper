<template>
	<view class="classlist">
		<div class="phantom"></div>
		<view class="content" scroll-y="true">
			<navigator :url="'/pages/preview/preview?id=' + item._id + '&classify=' + nameRef" class="item"
				v-for="item in visibleData" id="items" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { onLoad, onReachBottom, onUnload, onPageScroll } from '@dcloudio/uni-app'
	import { apiWallList } from '@/api/api'
	import { computed, onMounted, ref } from 'vue'
	import { PreviewDaum } from '@/api/types'
	import { gotoHome } from '@/utils/common'
	const items = ref(null)
	const list = ref(null)
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
		}
	})
	onReachBottom(async () => {
		if (!noData.value) {
			await getClassList()
			initPositions()
			console.log('触底', classList.value)
		}
		else {
			console.log('触底，但是没有了')
		}
	})


	onUnload(() => {
		uni.removeStorageSync("storeClassList")
	})

	onMounted(async () => {
		await getClassList()
		console.log('获取数据', classList.value)
		initItemSize()
		initPositions()
	})

	// 下面是虚拟列表的实现
	onPageScroll((e) => {
		scrollEvent(e)
		console.log(visibleData.value);
	})


	const itemSize = ref(0)
	const bufferNum = 3
	const visibleCount = ref(Math.floor(uni.getWindowInfo().windowHeight / itemSize.value) * 3)
	const startIndex = ref(0)
	const endIndex = ref(visibleCount.value + bufferNum)
	const visibleData = computed(() => classList.value.slice(startIndex.value, endIndex.value))
	const positions = ref<{
		index : number,
		height : number,
		top : number,
		bottom : number
	}[] | undefined>(undefined)
	const listHeight = computed(() => positions.value ? positions.value[positions.value?.length - 1].bottom : 0)
	const offsetTop = ref(0)

	// 就算是列数不同，最重要的是把initPositions维护好，就可以在原本布局下实现虚拟列表
	const initItemSize = () => {
		const query = uni.createSelectorQuery().in(this)
		query.select('#items').boundingClientRect(rect => {
			itemSize.value = rect.height
		}).exec()
	}


	const initPositions = () => {
		positions.value = classList.value.map((item, index) => {
			const heightNum = ~~(index / 3)
			return {
				index,
				height: itemSize.value,
				top: itemSize.value * heightNum,
				bottom: itemSize.value * (heightNum + 1),
			}
		})
		console.log('我维护了positions', positions.value);
	}
	// 出错：positions是空的
	const getStartIndex = (scrollTop : any) => {
		if (positions.value) {
			const item = positions.value.find((item) => item.bottom > scrollTop)!
			console.log(item, '我找到了item');
			return item.index - bufferNum < 0 ? 0 : item.index - bufferNum
		}
		else return 0
	}
	const getEndIndex = (start : any) => {
		return Math.min(start + visibleCount.value + bufferNum + bufferNum, classList.value.length)
	}

	const setOffsetTop = () => {
		offsetTop.value = startIndex.value >= 1 ? positions.value![startIndex.value - 1].bottom : 0
	}
	const scrollEvent = (e : any) => {
		const scrollTop = e.scrollTop
		console.log(scrollTop);
		startIndex.value = getStartIndex(scrollTop)
		endIndex.value = getEndIndex(startIndex.value)
		setOffsetTop()
		console.log(startIndex.value, 'start');
		console.log(endIndex.value, 'end');
	}
</script>
<style lang="scss" scoped>
	.classlist {
		position: relative;

		.phantom {
			position: absolute;
			width: 1px;
			z-index: -1;
		}

		.content {
			position: absolute;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx;
			width: 100%;



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