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

tip(123)


