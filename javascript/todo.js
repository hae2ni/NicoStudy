const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = [];
//const 대신 let으로 업데이트 가능 하도록 설정ㅅ

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //   localStorage에 array 넣기
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";

  button.addEventListener("click");
  li.appendChild(span);
  //   append는 맨 마지막에 놓여야함
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is turn of", item);
}

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  //   parsedToDos.forEach(sayHello);
  //   parsedToDos.forEach((item) => console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo);
}

// forEach는 array의 각 item에 대한 function을 실행할 수 있게 함
