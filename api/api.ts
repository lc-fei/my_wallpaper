import { request } from '@/utils/request'
import { HomeBarRoot, ClassifyRoot } from '@/api/types'
// 箭头函数因为是用const设的，所以还是要用: () => Promise<any>这种方式表示其类型
export const getHomeBanner : () => Promise<HomeBarRoot> = () => {
	return request({
		url: '/homeBanner'
	})
}

export const getClassify : (data : object) => Promise<ClassifyRoot> = (data) => {
	return request(({
		url: '/classify',
		data
	}))
}
export const apiGetDayRandom = () => {
	return request({ url: "/randomWall" })
}

export const apiGetNotice = (data = {}) => {
	return request({
		url: "/wallNewsList",
		data
	})
}

export const apiWallList = (data = {}) => {
	return request({
		url: '/wallList',
		data
	})
}

export const apiSetupScore = (data = {}) => {
	return request({
		url: '/setupScore',
		data
	})
}