//Task create a name
function initiateName(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const newDiv = document.createElement("div");
    const newPara = document.createElement("p");
    newPara.innerHTML = firstName;
    newPara.style = "color: red; text-decoration: underline;";
    newDiv.appendChild(newPara);

    const secondPara = document.createElement("p");
    secondPara.innerHTML = lastName;
    secondPara.style = "width: 50px; border: solid 1px black;";
    newDiv.appendChild(secondPara);
    document.body.appendChild(newDiv);
    }
