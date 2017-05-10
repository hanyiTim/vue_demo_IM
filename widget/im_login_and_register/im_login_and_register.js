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
	login_username:'',
	login_password:'',
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
			if(this.login_username !== this.username || this.login_password !== this.password){
				alert("用户名或者密码错误");
				return false;
			}
			window.location.href=`http://${window.location.host}/page/user/user.html`;
		},
		toRegister:function(){
			this.nowTemp='register';
		},
		register:function(){
			if(this.username == "" || this.password == "" || this.confirmPassword == ""){
				alert("用户名，密码或者确认密码未输入");
				return false;
			}
			if(this.password !== this.confirmPassword){
				alert("两次输入密码不一致");
				return false;
			}
			console.log(this.username,this.password,this.confirmPassword);
			this.toLogin();
		},
		changeView:function(event,str){
			let target=event.target;
			let nextElement=target.nextElementSibling;
			let previousElement=target.previousElementSibling;
			let changeDisplay=(ele,str) => {
				if(ele && ele.style){
					ele.style.display=str;
				}
			}
			if(event.target.value == ""){
				if(str == 'focus'){
					changeDisplay(target,"none");
					changeDisplay(nextElement,"block");
					nextElement.focus();
				}else{
					changeDisplay(target,"none");
					changeDisplay(previousElement,"block");
				}
			}
		}
	},
	ready:function(){
		var self=this;
	}
});