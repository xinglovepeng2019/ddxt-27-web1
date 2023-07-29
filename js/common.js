// axios基地址
// baseURL 将自动加在url的前面  除非url是一个绝对的url

/* 
 axios({
  url:"/login"
 })

 axios({
  url:'/register'
 })


*/

axios.defaults.baseURL = 'http://ajax-api.itheima.net'


function tip(msg){
  const toastDom = document.querySelector("#myToast")
  const toast = new bootstrap.Toast(toastDom)
  // 修改内容并显示
  document.querySelector('.toast-body').innerHTML = msg
  toast.show()
}

// tip(123)


// 抽取校验函数 (判断是否登录)
// 访问首页  已登录 ---进入首页    未登录---提示用户--跳转到登录页面

function checkLogin(){
  const token = localStorage.getItem('user-token')
  console.log(token,"token")  
  // token 为null 说明没有
  if(token ===null){
    tip("请先登录")
    setTimeout(()=>{
    location.href="login.html"
    },1000)
  }
}

// 渲染用户名
function renderUserName(){
  // 读取并渲染用户名
  const username = localStorage.getItem('user-name')
  console.log(username)
  document.querySelector("#user").innerText =username
}

// 退出登录
/* 
 退出登录函数----绑定点击事件 ---删除用户名和token
*/

function registerLogout(){
   document.querySelector('#logout').addEventListener('click',function(){
    //  清除用户名和token
    localStorage.removeItem('user-name')
    localStorage.removeItem('user-token')
    // 跳转到登录页面
    location.href='./login.html'
   })
}

