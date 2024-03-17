<template>
	<view class="home-layout colorBg">
		<swiper class="banner" indicator-dots="true" active-class="swiper-active">
			<swiper-item>
				<image src="@/common/images/banner1.jpg" mode="aspectFill" />
			</swiper-item>
			<swiper-item>
				<image src="@/common/images/banner2.jpg" mode="aspectFill" />
			</swiper-item>
			<swiper-item>
				<image src="@/common/images/banner3.jpg" mode="aspectFill" />
			</swiper-item>
		</swiper>

		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text>公告：</text>
			</view>
			<view class="center">
				<swiper autoplay interval="2000" duration="300" vertical="true">
					<swiper-item
						v-for="item in 4">欢迎来到柚见壁纸djwladdjasldjaksldjlawdjaqwjdaksljdoasdujiaos{{item}}</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20" color="#A7A7A7"></uni-icons>
			</view>
		</view>

		<view class="select">
			<view class="select-title">
				<common-title>
					<template #name>每日推荐</template>
					<template #custom>
						<view class="icon">
							<uni-icons type="calendar" size="30rpx"></uni-icons>
						</view>
						<view class="data">
							<uni-dateformat :date="new Date()" format="dd日"></uni-dateformat>
						</view>
					</template>
				</common-title>
			</view>
			<view class="body">
				<scroll-view scroll-x show-scrollbar="true">
					<view v-for="item in 6">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>

		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>More+</template>
			</common-title>
			<view class="body">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
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

		.banner {
			height: 345rpx;
			width: 750rpx;
			overflow: hidden;
			border-radius: 20rpx;

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

			:deep() {
				.uni-icons {
					color: $brand-theme-color !important;
				}
			}
		}

		.center {
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

		.right {
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}


	.select {
		:deep() {
			.uni-icons {
				color: $brand-theme-color !important;
			}
		}

		scroll-view {
			white-space: nowrap;

		}

		.body {
			width: 720rpx;
			margin-left: 30rpx;

			view {
				margin-right: 15rpx;
				height: 446rpx;
				width: 202rpx;
				display: inline-block;

				image {
					height: 100%;
					width: 100%;
				}
			}

			view:last-child {
				margin-right: 30rpx;
			}
		}


	}


	.theme {
		.body {
			width: 750rpx;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 10rpx;
			padding: 0 30rpx 30rpx 30rpx;
		}
	}

	swiper-active {
		background-color: red;
	}
</style>