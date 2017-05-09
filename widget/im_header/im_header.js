/**
 *
 *
 *
 *
 * 
 */
var Vue=require("Vue");

module.exports=Vue.component("comp-im_header",{
	template:__inline("im_header.html"),
	props:[],
	ready:function(){
		var self=this;
	},
	data:function(){
		return {
			menuStatus:false
		}
	},
	methods:{
		changeMenuStatus:function(){
			this.menuStatus=!this.menuStatus;
		},
		signOut:function(){
			console.log('退出');
			window.location.href=`http://${window.location.host}/page/index/index.html`;
			this.menuStatus=false;
		},
		closeMessageTip:function(){
			console.log('取消桌面消息提醒');
			this.menuStatus=false;
		}
	}
});