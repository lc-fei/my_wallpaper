<template>
	<view class="preview">
		<swiper circular :current="index" @change="indexChange">
			<swiper-item v-for="(item, index) in storeClassList">
				<image v-if="currentList?.includes(index)" @click="maskChange" :src="item.picurl" mode="aspectFill">
				</image>
			</swiper-item>
		</swiper>

		<view class="mask" v-if="maskState">
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight()+'px'}">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<view class="count">{{index + 1}} / {{storeClassList.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>

				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">{{currentInfo?.score}}分</view>
				</view>
				<view class="box" @click="BtDownload">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>


		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text selectable class="value">{{currentInfo?._id}}</text>
						</view>

						<view class="row">
							<view class="label">分类：</view>
							<text class="value class">{{classifyRef}}</text>
						</view>

						<view class="row">
							<view class="label">发布者：</view>
							<text class="value">{{currentInfo?.nickname}}</text>
						</view>

						<view class="row">
							<text class="label">评分：</text>
							<view class='value roteBox'>
								<uni-rate readonly touchable value="3.5" size="16" />
								<text class="score">{{currentInfo?.score}}</text>
							</view>
						</view>

						<view class="row">
							<text class="label">摘要：</text>
							<view class='value'>
								{{currentInfo?.description}}
							</view>
						</view>

						<view class="row">
							<text class="label">标签：</text>
							<view class='value tabs'>
								<view class="tab" v-for="item in currentInfo?.tabs">{{item}}</view>
							</view>
						</view>
						<view class="copyright">
							声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>


		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title" v-if="currentInfo?.isScore">已评分~</view>
					<view class="title" v-else>评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>

				<view class="content" v-if="currentInfo?.isScore">
					<uni-rate :value="currentInfo.userScore" allowHalf disabled color="#FFCA3E" />
					<text class="text">{{currentInfo.userScore}}分</text>
				</view>
				<view class="content" v-else>
					<uni-rate v-model="userScore" allowHalf />
					<text class="text">{{userScore}}分</text>
				</view>

				<view class="footer">
					<button @click="submitScore" :disabled="currentInfo?.isScore" type="default" size="mini"
						plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup lang="ts">
	import { PreviewDaum } from '@/api/types'
	import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
	import { apiSetupScore, apiWriteDownload } from "@/api/api"
	import {
		ref,
		Ref
	} from 'vue';
	import {
		getStatusBarHeight, // 刘海高度
		getTitleBarHeight, // 胶囊信息
		getNavBarHeight, // 
		getLeftIconLeft // 头条小程序兼容优化
	} from '@/utils/system'
	import { error } from 'console';
	import { gotoHome } from '@/utils/common'
	interface UniPopupComponent {
		open : () => void
		close : () => void
	}
	const maskState = ref(true);
	const infoPopup = ref<UniPopupComponent | null>(null);
	const scorePopup = ref<UniPopupComponent | null>(null);
	const currentInfo = ref<PreviewDaum>()
	let userScore = ref<string>('5')


	//点击info弹窗
	const clickInfo = () => {
		if (infoPopup.value) {
			infoPopup.value.open();
		}
	}

	//点击关闭信息弹窗
	const clickInfoClose = () => {
		if (infoPopup.value) {
			infoPopup.value.close();
		}

	}

	//评分弹窗
	const clickScore = () => {
		if (scorePopup.value) {
			scorePopup.value.open();
		}
	}
	//关闭评分框
	const clickScoreClose = () => {
		if (scorePopup.value) {
			scorePopup.value.close();
		}
	}

	//确认评分
	const submitScore = async () => {
		try {
			uni.showLoading({
				title: '加载中...'
			})
			clickScoreClose()
			const res = await apiSetupScore({
				classid: classifyRef.value,
				wallId: currentInfo.value?._id,
				userScore: userScore.value,
			})
			console.log(res, 'ressss')

			if (res.errCode === 0) {
				uni.showToast({
					title: "评分成功",
					icon: "none"
				})
				console.log("评分了");
				storeClassList.value[index.value].userScore = userScore.value
				storeClassList.value[index.value].isScore = true
				uni.setStorageSync('storeClassList', storeClassList)
			}
			else {
				uni.showToast({
					title: res.errMsg,
					icon: "none"
				})
			}
		} catch (e) {
			//TODO handle the exception
			console.log(e.message)
			uni.hideLoading()
		}

	}


	//遮罩层状态
	const maskChange = () => {
		maskState.value = !maskState.value
	}


	//返回上一页
	const goBack = () => {
		uni.navigateBack()
	}

	// 下载
	const BtDownload = async () => {
		// #ifdef H5
		uni.showModal({
			content: "请长按保存壁纸",
			showCancel: false
		})
		// #endif
		// #ifndef H5
		try {
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
			let {
				classid,
				_id: wallId
			} = currentInfo.value as PreviewDaum;
			let res = await apiWriteDownload({
				classid,
				wallId
			})
			// 获取临时网址
			uni.getImageInfo({
				src: currentInfo.value?.picurl as string,
				success: (res) => {
					const { path } = res
					// 下载图片
					uni.saveImageToPhotosAlbum({
						filePath: path,
						success: (res) => {
							console.log('chenggl')
						},
						fail: (err) => {
							if (err.errMsg == 'saveImageToPhotosAlbum:fail cancel') {
								uni.showToast({
									title: '保存失败，请重新点击下载',
									icon: "none"
								})
								return;
							}
							// 如果不是用户主动取消 =》 权限问题
							uni.showModal({
								title: "授权提示",
								content: "需要授权保存相册",
								success: res => {
									if (res.confirm) {
										uni.openSetting({
											success: (setting) => {
												console.log(
													setting);
												if (setting
													.authSetting[
													'scope.writePhotosAlbum'
												]) {
													uni.showToast({
														title: "获取授权成功",
														icon: "none"
													})
												} else {
													uni.showToast({
														title: "获取权限失败",
														icon: "none"
													})
												}
											}
										})
									}
								}
							})
						},
						complete: () => {
							uni.hideLoading()
						}
					})
				},
				fail: (e) => {
					console.log('获取临时地址失败', e)
					throw new Error(e)
				}
			})
		} catch (e) {
			//TODO handle the exception
			uni.showModal({
				content: e.message,
			})
		}
		// #endif
	}

	// 数据传递
	let storeClassList = ref<PreviewDaum[]>(uni.getStorageSync("storeClassList") || null)
	let index = ref<number>(0)
	const classifyRef = ref<string>()
	let currentList = ref<Array<number>>([])

	const addList = (index : number) => {
		currentList.value?.push(
			index,
			index === 0 ? storeClassList.value.length - 1 : index - 1,
			index === storeClassList.value.length ? 0 : index + 1
		)
		currentList.value = [...new Set(currentList.value)]
	}

	storeClassList.value = storeClassList.value.map((item : PreviewDaum) => {
		return {
			...item,
			picurl: item.smallPicurl.replace('_small.webp', '.jpg')
		}
	})

	// 拿到id，寻找点击的哪个壁纸
	onLoad((e) => {
		if (e) {
			const { id, classify } = e
			if (!id) gotoHome()
			classifyRef.value = classify
			index.value = storeClassList.value.findIndex(item => item._id === id)
			currentInfo.value = storeClassList.value[index.value]
			addList(index.value)
		}
	})
	const indexChange = (e : any) => {
		index.value = e.detail.current
		currentInfo.value = storeClassList.value[index.value]
		addList(index.value)
	}


	// 分享

	onShareAppMessage((e) => {
		return {
			title: "咸虾米壁纸",
			path: "/pages/preview/preview?id=" + currentInfo.value?._id + "&classify=" + classifyRef.value
		}
	})


	//分享朋友圈
	onShareTimeline(() => {
		return {
			title: "咸虾米壁纸",
			query: "id=" + currentInfo.value?._id + "&classify=" + classifyRef.value
		}
	})
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mask {
			&>view {
				position: absolute;
				left: 0;
				margin: auto;
				color: #fff;
				right: 0;
				width: fit-content;
			}

			.goBack {
				position: absolute;
				width: 38px;
				height: 38px;
				background: rgba(0, 0, 0, 0.5);
				left: 30rpx;
				margin-left: 0;
				border-radius: 100px;
				top: 0;
				backdrop-filter: blur(10rpx);
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.count {
				top: 10vh;
				background: rgba(0, 0, 0, 0.3);
				font-size: 28rpx;
				border-radius: 40rpx;
				padding: 8rpx 28rpx;
				backdrop-filter: blur(10rpx);
			}

			.time {
				font-size: 140rpx;
				top: calc(10vh + 80rpx);
				font-weight: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}

			.date {
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
			}

			.footer {
				background: rgba(255, 255, 255, 0.8);
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				color: #000;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);

				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;

					.text {
						font-size: 26rpx;
						color: $text-font-color-2;
					}
				}
			}
		}

		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				color: $text-font-color-2;
				font-size: 26rpx;
			}

			.close {
				padding: 6rpx;
			}
		}

		.infoPopup {
			background: #fff;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			overflow: hidden;

			scroll-view {
				max-height: 60vh;

				.content {
					.row {
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						line-height: 1.7em;

						.label {
							color: $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}

						.value {
							flex: 1;
							width: 0;
						}

						.roteBox {
							display: flex;
							align-items: center;

							.score {
								font-size: 26rpx;
								color: $text-font-color-2;
								padding-left: 10rpx;
							}
						}

						.tabs {
							display: flex;
							flex-wrap: wrap;

							.tab {
								border: 1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
							}
						}

						.class {
							color: $brand-theme-color;
						}


					}

					.copyright {
						font-size: 28rpx;
						padding: 20rpx;
						background: #F6F6F6;
						color: #666;
						border-radius: 10rpx;
						margin: 20rpx 0;
						line-height: 1.6em;
					}

				}
			}
		}

		.scorePopup {
			background: #fff;
			padding: 30rpx;
			width: 70vw;
			border-radius: 30rpx;

			.content {
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;

				.text {
					color: #FFCA3E;
					padding-left: 10rpx;
					width: 80rpx;
					line-height: 1em;
					text-align: right;
				}
			}

			.footer {
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}


	}
</style>