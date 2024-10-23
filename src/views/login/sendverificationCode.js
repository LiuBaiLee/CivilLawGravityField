export default function sendverificationCode () {
  // eslint-disable-next-line camelcase
  const verification_input = document.querySelector('.account-box>input')
  // eslint-disable-next-line camelcase
  const verification_button = document.querySelector('.verification-button')
  // 当 verification_input 不为空时开放 verification_button
  if (verification_input.value.trim() === '') {
    alert('请输入您的邮箱')
  } else {
    // 提交发送验证码的请求
    // 发送 GET 请求

    // 改变button样式：禁用60s
    verification_button.disabled = true
    // 定义倒计时
    let count = 60
    const countdown = setInterval(function () {
      count--
      verification_button.innerHTML = `再过${count}s才能发送`
      if (count <= 0) {
        clearInterval(countdown)
      }
    }, 1000)
    // 倒计时结束启用按钮
    setTimeout(function () {
      verification_button.disabled = false
      verification_button.innerHTML = '点我发送验证码'
    }, 60000)
  }
}
