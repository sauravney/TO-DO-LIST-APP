const input = document.querySelector("#input-box");
const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  if (input.value == " ") {
    alert("Write Something u mf");
    list.innerHTML = " ";
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    save();
  }
  input.value = " ";
});
list.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    save();
  }
});
function save() {
  localStorage.setItem("data", list.innerHTML);
}
function show() {
  list.innerHTML = localStorage.getItem("data");
}
show();
