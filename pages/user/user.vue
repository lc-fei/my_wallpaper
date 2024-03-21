<template>
	<view class="userLayout colorBg">
		<custom-nav-bar title="用户"></custom-nav-bar>
		<view class="head">
			<view class="avatar">
				<image src="../../static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">
				100.100.100.100
			</view>
			<view class="from">来自于: 山东</view>
		</view>

		<view class="list-1">
			<user-nav url="/pages/classlist/classlist" iconName="download-filled" text="我的下载" isNumber="true"
				number="1">
			</user-nav><user-nav url="/pages/classlist/classlist" iconName="star-filled" text="我的评分" isNumber="true"
				number="1">
			</user-nav><user-nav url="/pages/classlist/classlist" iconName="chatboxes-filled" text="联系客服"></user-nav>
		</view>
		<view class="list-2">
			<user-nav url="/pages/classlist/classlist" iconName="notification-filled" text="订阅更新"></user-nav>
			<user-nav url="/pages/classlist/classlist" iconName="flag-filled" text="常见问题"></user-nav>
		</view>
	</view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
	.head {
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.avatar {
			height: 160rpx;
			width: 160rpx;
			overflow: hidden;
			border-radius: 80rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.ip {
			margin: 38rpx 0 24rpx 0;
			font-size: 44rpx;
			color: #333;
		}

		.from {
			font-size: 28rpx;
			color: #aaa;
		}

	}

	.list-1,
	.list-2 {
		width: 690rpx;
		margin: 0 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid #eee;

		:deep() {
			.big-uni-icons {
				color: $brand-theme-color !important;
			}
		}
	}

	.list-1 {
		margin-top: 100rpx;
	}

	.list-2 {
		margin-top: 50rpx;
	}
</style>