let input = document.getElementById("bar");
let button = document.getElementById("button");
let list = document.getElementById("list");
let clear = document.getElementById("clear");

let itemArr = JSON.parse(localStorage.getItem("items")) || [];

let data = JSON.parse(localStorage.getItem("items"))

button.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value !== '') {
        let li = document.createElement("li");
        li.textContent = input.value;

        itemArr.push(input.value);
        localStorage.setItem("items", JSON.stringify(itemArr));

        list.appendChild(li);

        input.value = '';
    }
});

data.forEach(data => {
    let li = document.createElement("li");
    li.textContent = data
    list.appendChild(li)
})

clear.addEventListener("click", () => {
    localStorage.clear();
});
