<template>
	<view class="classify colorBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="theme">
			<view class="body">
				<theme-item v-for="item in classifyData" :data="item" :id="item._id"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { getClassify } from '@/api/api'
	import { ClassifyDaum } from '@/api/types'
	let classifyData = ref<ClassifyDaum[] | undefined>(undefined)
	const myGetClassify = async () => {
		classifyData.value = (await getClassify({
			pageSize: 20
		})).data
		console.log('专题精选', classifyData.value)
	}
	myGetClassify()
</script>

<style lang="scss">
	.theme {
		.body {
			width: 750rpx;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 10rpx;
			padding: 0 30rpx 30rpx 30rpx;
		}
	}
</style>