<template>
	<view>
		<view class="theme-item">
			<view class="body" v-if="!isMore">
				<navigator url="/pages/classlist/classlist">
					<image src="../../common/images/classify2.jpg" mode="aspectFill"></image>
					<view class="mask">AI美图</view>
					<view class="tab">3天前更新</view>
				</navigator>
			</view>
			<view class="more" v-else>
				<navigator url="/pages/classify/classify">
					<view class="body">
						<image src="../../common/images/more.jpg" mode="aspectFill"></image>
						<view class="mask">
							<uni-icons type="more-filled" size="34rpx" color="#fff"></uni-icons>
							<view class="text">更多</view>
						</view>
					</view>
				</navigator>
			</view>
		</view>

	</view>
</template>

<script setup lang="ts">
	defineProps({
		isMore: {
			type: Boolean,
			default: false
		}
	})
</script>

<style scoped lang="scss">
	.theme-item {
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;

		.body {
			height: 340rpx;

			navigator {
				height: 340rpx;

				image {
					height: 100%;
					width: 100%;
				}

				.mask {
					width: 100%;
					height: 70rpx;
					position: absolute;
					bottom: 0;
					left: 0;
					background-color: rgba(0, 0, 0, 0.2);
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					backdrop-filter: blur(20rpx);
					font-weight: 600;
					font-size: 30rpx;
				}

				.tab {
					position: absolute;
					left: 0;
					top: 0;
					background-color: rgba(250, 129, 90, 0.7);
					backdrop-filter: (10rpx);
					color: #fff;
					font-size: 22rpx;
					padding: 6rpx 14rpx;
					border-radius: 0 0 20rpx 0;
					// 整体缩小， 再加上偏移就达到了以左下角为基准的缩小效果
					transform: scale(0.8);
					transform-origin: left top;
				}
			}
		}

		.more {
			height: 340rpx;

			navigator {
				height: 340rpx;

				image {
					height: 100%;
					width: 100%;
				}

				.mask {
					width: 100%;
					height: 100%;
					position: absolute;
					bottom: 0;
					left: 0;
					background-color: rgba(0, 0, 0, 0.2);
					color: #fff;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					backdrop-filter: blur(20rpx);
					font-weight: 600;
					font-size: 28rpx;
				}
			}

		}
	}
</style>