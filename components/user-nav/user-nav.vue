<template>
	<view class="user-nav">
		<navigator :url="url">
			<view class="left">
				<uni-icons :type="iconName" size="25" style="margin-right: 10rpx;" class="big-uni-icons"></uni-icons>
				<view class="text">{{text}}</view>
			</view>
			<view class="right">
				<view v-if="isNumber" style="font-size: 30rpx;">{{number}}</view>
				<view><uni-icons type="right" size="20" color="#666"></uni-icons></view>
			</view>
		</navigator>
	</view>
</template>

<script setup lang="ts">
	defineProps({
		url: {
			type: String,
		},
		iconName: {
			type: String
		},
		text: {
			type: String
		},
		isNumber: {
			type: Boolean,
			default: false
		},
		number: {
			type: Number
		}
	})
</script>

<style scoped lang="scss">
	.user-nav {
		width: 690rpx;

		navigator {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;
			padding: 0 30rpx;
			border-bottom: 1px solid #eee;

			.right,
			.left {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.right {
				view {
					color: #666;
				}
			}
		}
	}
</style>