
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

let Todo = document.getElementById("Todoapp");
let btn1 = document.getElementById("BTN");

let buttonColor = document.getElementById("BtnColor");

let textChange = document.getElementById("text");
let inputText  = document.getElementById("input");

let colorText = ["red","black"];

buttonColor.addEventListener("click",()=>{
    let randomColor = colorText[Math.floor(Math.random()* colorText.length)];
    listContainer.style.color = randomColor; 
    listContainer.style.fontWeight = "bold"; 

    
})


inputText.addEventListener("input", ()=>{
    textChange.style.color = inputText.value;
    textChange.style.fontSize = inputText.value;
    textChange.style.fontFamily = inputText.value;
});


let color = ["red","white","orange","aqua","pink"];

btn1.addEventListener("click", function (){
    let randomColor = color[Math.floor(Math.random()* color.length)];
     Todo.style.background = randomColor; 

});

// yle.backgroundColor = "green";


inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && inputBox.value !== ''){
        if(inputBox.value === ""){
            alert("You Must write Somthing!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";           
            li.appendChild(span);
        }
    
        inputBox.value = "";
        saveData();
    }
})

function addTask(){
    if(inputBox.value === ""){
        alert("You Must write Somthing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}


listContainer.addEventListener('click', function (e) {  
    if (e.target.tagName === "LI") {   
        e.target.classList.toggle("checked");
      
       
        saveData()
    }
     else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

        saveData()
    }

}, false);


function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
    
}

function showTask() {   
    listContainer.innerHTML  = localStorage.getItem("data");

}
showTask();

