<script lang="ts" >
	export default {
		onLaunch: function() : void{
			console.log('App Launch')
		},
		onShow: function() : void{
			console.log('App Show')
		},
		onHide: function() : void{
			console.log('App Hide')
		}
	} 
</script>

<style setup>
	/*每个页面公共css */
	@import url("common/style/new_file.css");
</style>
