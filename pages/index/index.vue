<template>
	<view class="home-layout">
		<swiper class="banner" indicator-dots="true" active-class="swiper-active">
			<swiper-item><image src="@/common/images/banner1.jpg" mode="aspectFill"/></swiper-item>
			<swiper-item><image src="@/common/images/banner2.jpg" mode="aspectFill"/></swiper-item>
			<swiper-item><image src="@/common/images/banner3.jpg" mode="aspectFill"/></swiper-item>
		</swiper>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#2AB18D"></uni-icons>
				<text>公告：</text>
			</view>
			<view class="center">
				<swiper autoplay interval="2000" duration="300" vertical="true">
					<swiper-item v-for="item in 4">欢迎来到柚见壁纸djwladdjasldjaksldjlawdjaqwjdaksljdoasdujiaos{{item}}</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20" color="#A7A7A7"></uni-icons>
			</view>

			
		</view>
	</view>
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue';
// import {onReachBottom} from '@dcloudio/uni-app'
</script>

<style lang="scss">
	.home-layout {
		width: 750rpx;
		height: 345rpx;
		.banner {
			width: 750rpx;
			height: 345rpx;
			overflow: hidden;
			swiper-item {
				border-radius: 20rpx;
				padding: 0 30rpx;
				image {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	
	.notice {
		width: 690rpx;
		height: 80rpx;
		display: flex;
		line-height: 80rpx;
		background-color: #F9F9F9;
		border-radius: 80rpx;
		margin: 0 auto;
		margin-top: 30rpx;
		.left {
			width: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;  
			}
		}
		.center  {
			flex: 1;
			swiper {
				width: 100%;
				height: 100%;
				line-height: 80rpx;
			    &-item {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;  
		}
		
	
	
	swiper-active {
		background-color: red;
	}
</style>
