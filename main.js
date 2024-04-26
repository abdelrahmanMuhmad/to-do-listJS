const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
  if (InputBox.value === '') {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveDate()
}

ListContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") 
  {
    e.target.classList.toggle('checked'); // Corrected typo here
    saveDate()
  }
   else if (e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
    saveDate()
  }
}, false);


function saveDate() {
  localStorage.setItem("data" , ListContainer.innerHTML)
}

function showTask() {
  ListContainer.innerHTML = localStorage.getItem("data")
}

showTask()