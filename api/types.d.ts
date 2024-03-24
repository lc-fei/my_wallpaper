type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

// 请求配置类型
export interface Config {
	url : string,
	data ?: object,
	method ?: Method,
	header ?: objectd
}


// getHomeBar
export interface Root {
	errCode : number
	errMsg : string
	data : Daum[]
	author : string
	timeCost : number
}

export interface HomeBarDaum {
	_id : string
	sort : number
	target : string
	picurl : string
	url : string
	appid ?: string
}