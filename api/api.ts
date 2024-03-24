import { request } from '@/utils/request'
import { Root } from '@/api/types'
// 箭头函数因为是用const设的，所以还是要用: () => Promise<any>这种方式表示其类型
export const getHomeBanner : () => Promise<Root> = () => {
	return request({
		url: "/homeBanner"
	})
}