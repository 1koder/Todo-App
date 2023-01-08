let todoContainer = document.getElementById("todoContainer")
let inputField = document.getElementById("inputField");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    todos.appendChild(paragraph);
    
    
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick", function () {
        todos.removeChild(paragraph)
    })
})