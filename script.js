//your code here
const addTodo=document.getElementById("addTodoBtn");
const input=document.getElementById("newTodoInput");
const ol=document.getElementById("todoList");
addTodo.addEventListener("click",()=>{
	if(input.value){
		const li=document.createElement("li");
		li.innerText=input.value
		ol.appendChild(li);
	}
	input.value=""
})
