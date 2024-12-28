//Task find a number

let firstCar = {
    name: "Kia Picanto",
    description: "Kia Picanto - This is a very good car with low price",
    price: 65
}

let secondCar = {
    name: "Seat Arona",
    description: "Seat Arona - This is a very strong car with normal price",
    price: 85
}

let thirdCar = {
    name: "Hyundai i20",
    description: "Hyundai i20 - This is a very bad car with low price",
    price: 70
}

let fourthCar = {
    name: "Seat Ibiza",
    description: "Seat Ibiza - This is a very small car with good price",
    price: 50
}
const cars = [firstCar, secondCar, thirdCar, fourthCar]

const result = document.createElement("div");


function findTheNumber() {

    result.replaceChildren();

    let textNumber = document.getElementById("firstNumber").value
    let number = parseInt(textNumber)
    let filterdCars = cars.filter(item => item.price <= number);

    filterdCars.forEach(car => {
        const div = document.createElement("div");
        div.style = "border: 1px solid red";
        const titleLabel = document.createElement("h1");
        const priceLabel = document.createElement("h3");
        const descriptionLabel = document.createElement("p");

        titleLabel.textContent  = car.name;
        priceLabel.textContent  = "The price is: " + car.price + " NIS";
        descriptionLabel.textContent  = "Description: " + car.description;



        div.appendChild(titleLabel);
        div.appendChild(priceLabel);
        div.appendChild(descriptionLabel);

        result.appendChild(div);


    })

    document.body.appendChild(result);



}
//     if (number <= cars[index].price) {
//         const newDiv = document.createElement("div");
//         const newPara = document.createElement("p");
//         newDiv.classList.add("addedDiv")
//         newPara.innerHTML = cars[index].description
//         newPara.classList.add("addedPara")
//         newDiv.appendChild(newPara);
//         document.body.appendChild(newDiv);
// }