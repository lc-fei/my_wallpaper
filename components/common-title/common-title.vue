<template>
	<view class="common-title">
		<view class="name">
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
	.common-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 0 30rpx;
		align-items: center;

		.name {
			font-size: 40rpx;
		}

		.custom {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			font-size: 25rpx;
		}
	}
</style>