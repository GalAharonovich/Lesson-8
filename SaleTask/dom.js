function reveal(button) {
    const password = document.getElementById("password")
    const type = password.type

    if (type === "password") {
        password.type = "text"
        button.innerText = "hide password"
    } else {
        password.type = "password"
        button.innerText = "Reveal password"
    }
}


function changeColor(button) {
    if (button.style = "background-color:green;") {
        button.style = "background-color:red;"
    }
    if (button.classList.contains("bomb")) {
        alert("You lose...");
    }
}

function initiateBoard(){
    const board = document.getElementById("board")
    arr.forEach((el, row) =>{
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("row")

        el.forEach((cell, column) => {
            const colDiv = document.createElement("div")
            colDiv.classList.add("col")  
            rowDiv.appendChild(colDiv)

        })

        board.appendChild()
    })
}

initiateBoard()


const arr = new Array(8).fill(new Array(8).fill(false))
arr[0][3] = true
console.log(arr)

