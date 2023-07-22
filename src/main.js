
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");
  inputSection = document.querySelector(".inputSection");
  pendingTasks = document.querySelector(".pending-tasks");

function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.margin = "1rem";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0";
  clearButton.style.pointerEvents = "none";
}
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
  }
  // const container = document.querySelector(".container");
  // container.display.backgroundColor = "#fff";
});
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

function deleteTask(e) {
  e.parentElement.remove();
  allTasks();
}
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});

const themeBtn = document.querySelector("#theme-btn");
// const textTheme = document.querySelector(".text");

themeBtn.onclick = () => {
  themeBtn.classList.toggle("bi-sun");
  if (themeBtn.classList.contains("bi-sun")) {
    document.body.classList.add("dark");
    inputSection.classList.add("dark");
    inputField.style.backgroundColor = "#142649";
    inputField.style.color = "#a09b9b";
    pendingTasks.style.backgroundColor = "#142649";
    main.style.backgroundImage = "url(img/bg-desktop-dark.jpg)";

  } else {
    document.body.classList.remove("dark");
    inputSection.classList.remove("dark");
    inputField.style.backgroundColor = "#fff";
    inputField.style.color = "#a09b9b";
    pendingTasks.style.backgroundColor = "#fff";
    main.style.backgroundImage = "url(img/bg-desktop-light.jpg)";
  }
} 
