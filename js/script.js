window.onload = function() {
document.getElementById('addTodoButton').addEventListener("click",
function(event) {
  event.preventDefault();
  var text = document.getElementById("todoTextArea").value;
  if(text.replace(/\s/g, '').length) {
    var list = document.getElementById("list");
    var chk = document.createElement("input");
    chk.type = "checkbox";
    chk.name = "name";
    chk.value = text;
    chk.id = "id";
    chk.className = "check"

    var label = document.createElement("label");

    label.htmlFor = "id"

    label.appendChild(document.createTextNode(text));

    list.appendChild(chk);
    list.appendChild(label);
    list.appendChild(document.createElement("BR"));
  }
});

document.getElementById('markTodoButton').addEventListener("click",
function(event) {
  event.preventDefault();
  var boxes = document.getElementsByClassName("check");
  for(let i = 0; i < boxes.length; i++){
    boxes[i].checked = true;
  }
});
document.getElementById('clearTodoButton').addEventListener("click",
function(event) {
  event.preventDefault();
  var boxes = document.getElementsByClassName("check");
  for(let i = 0; i < boxes.length; i++){
    boxes[i].checked = false;
  }
});
document.getElementById('deleteTodoButton').addEventListener("click",
function(event) {
  event.preventDefault();
  const myNode = document.getElementById("list");
  myNode.innerHTML = '';
});
}
