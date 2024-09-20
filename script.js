

const input = document.getElementById("task-input")
const button = document.getElementById("add-task-btn")
const list = document.getElementById("task-list")

button.addEventListener("click", (e) =>{
    e.preventDefault()

    const storeinput = document.createElement("li")
    storeinput.innerText = input.value 

    list.appendChild(storeinput)

    input.value = ""

    storeinput.addEventListener("click", () =>{
        storeinput.remove()
    } )
    
})



