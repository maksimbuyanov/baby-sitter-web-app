console.log(window.Telegram.WebApp)

const tg = window.Telegram.WebApp

tg.MainButton.show()
const submitButton = document.querySelector('#submit')
const form = document.querySelector('form')

form.addEventListener('submit',(e)=> {
  e.preventDefault()
  const login = form.elements.login.value
  const password = form.elements.password.value
  debugger
})

Telegram.WebApp.onEvent('mainButtonClicked', function(){
  const login = form.elements.login.value
  const password = form.elements.password.value
  const data = JSON.stringify({login,password})
  tg.sendData(data);
});

