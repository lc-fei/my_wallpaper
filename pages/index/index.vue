<template>
	<view class="home-layout">
		<swiper class="banner" indicator-dots="true" active-class="swiper-active">
			<swiper-item><image src="@/common/images/banner1.jpg" mode="aspectFill"/></swiper-item>
			<swiper-item><image src="@/common/images/banner2.jpg" mode="aspectFill"/></swiper-item>
			<swiper-item><image src="@/common/images/banner3.jpg" mode="aspectFill"/></swiper-item>
		</swiper>
	</view>
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue';
// import {onReachBottom} from '@dcloudio/uni-app'
</script>

<style lang="scss">
	.banner {
		width: 750rpx;
		overflow: hidden;
		padding: 0 25rpx;
		swiper-item {
			border-radius: 20rpx;
		}
	}
	
	swiper-active {
		background-color: red;
	}
</style>
