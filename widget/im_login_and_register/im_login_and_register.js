/**
 *
 *
 *
 *
 * 
 */
var Vue=require("Vue");

let data={
	nowTemp:'login',
	username:'',
	password:'',
	confirmPassword:''
}
module.exports=Vue.component("comp-im_login_and_register",{
	template:__inline("im_login_and_register.html"),
	props:[],
	data:function(){
		return data;
	},
	methods:{
		toLogin:function(){
			this.nowTemp='login';
		},
		login:function(){

		},
		toRegister:function(){
			this.nowTemp='register';
		},
		register:function(){

		}
	},
	ready:function(){
		var self=this;
	}
});