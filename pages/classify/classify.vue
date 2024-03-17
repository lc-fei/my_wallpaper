<template>
	<view class="classify colorBg">
		<view class="theme">
			<view class="body">
				<theme-item v-for="item in 15"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
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