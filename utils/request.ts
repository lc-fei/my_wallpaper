
const BASE_URL : string = 'https://tea.qingnian8.com/api/bizhi'
import { Config } from '@/api/types'

// 封装request函数，错误集中处理
export const request = (config : Config) : Promise<any> => {
	const { url, data = {}, method, header = {} } = config
	const ComUrl : string = BASE_URL + url
	return new Promise((resolve, reject) => {
		uni.request({
			url: ComUrl,
			data,
			method,
			header,
			success: (res) => {
				if (res.data.errCode === 0) resolve(res.data)
				else if (res.data.errCode === 400) {
					uni.showModal({
						title: '错 误',
						content: res.data.errMsg,
						showCancel: false
					})
					reject(res.data)
				} else {
					uni.showToast({
						title: res.data.errMsg,
						icon: 'none',
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}