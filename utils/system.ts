const SYSTEM_INFO = uni.getSystemInfoSync();


// 获取刘海屏高度
export const getStatusBarHeight = () : number => SYSTEM_INFO.statusBarHeight || 15;

// 获取胶囊按钮的信息（定位top 和 盒子高度-高度整个导航栏的高度，并不只是胶囊的高度）
export const getTitleBarHeight = () : number => {
	if (uni.getMenuButtonBoundingClientRect) {
		let { top, height } = uni.getMenuButtonBoundingClientRect();
		// 这里是返回的胶囊按钮占据盒子的他高度，top - getstatusbarheight是margin，heignt + margin * 2就是盒子高度
		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40;
	}
}

export const getNavBarHeight = () : number => getStatusBarHeight() + getTitleBarHeight();

export const getLeftIconLeft = () : number => {
	// #ifdef MP-TOUTIAO
	let { leftIcon: { left, width } } = tt.getCustomButtonBoundingClientRect();
	return left + parseInt(width);
	// #endif

	return 0;
}