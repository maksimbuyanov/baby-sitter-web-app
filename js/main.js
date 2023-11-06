console.log(window.Telegram.WebApp);

const tg = window.Telegram.WebApp;

tg.MainButton.show();
tg.MainButton;

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  debugger;
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  const queryId = tg.initDataUnsafe?.query_id;
  const data = JSON.stringify({ login, password, queryId });
  tg.sendData(data);
});
