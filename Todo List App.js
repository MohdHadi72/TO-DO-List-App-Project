
let inputBox = document.getElementById("input-box");
let ListCont = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ""){
        alert("You Must write Somthing!");
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}

ListCont.addEventListener('click', function (e) {
    
    if (e.target.tagName === "li") {   
        e.target.classList.toggle("checked");
    }
     else if (e.target.tagName === "span") {
        e.target.parentElement.remove();
    }

}, false);
