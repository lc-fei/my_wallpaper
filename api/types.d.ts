type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

// 请求配置类型
export interface Config {
	url : string,
	data ?: object,
	method ?: Method,
	header ?: objectd
}


// getHomeBar
export interface HomeBarRoot {
	errCode : number
	errMsg : string
	data : HomeBarDaum[]
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

export interface ClassifyRoot {
	errCode : number
	errMsg : string
	data : ClassifyDaum[]
	author : string
	timeCost : number
}

export interface ClassifyDaum {
	name : string
	sort : number
	picurl : string
	select : boolean
	updateTime : number
	_id : string
}