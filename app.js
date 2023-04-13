const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("your name is too long");
  }
}

loginButton.addEventListener("click");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
  info.preventDefalut();
  //브라우저가 자동적으로 submit을 하면 새로고침하는 기본 방식 방지
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //요소 숨기기
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`; //strings + 변수
  //greeting.innerText = "Hello" + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.className.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${savedUsername}`;
}

function handleLinkClick(event) {
  event.preventDefalut(); //링크로 가는 기본 동작을 막음
}
