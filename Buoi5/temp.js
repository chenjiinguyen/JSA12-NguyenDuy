let students = [
    {
        "name": "Phung An",
        "age": "12",
        "location": "Hanoi",
        "sothich": ["Music","Movies","Sleep"]
    },
    {
        name: "Thanh",
        age: 12,
        location: "Haiphong",
        sothich: ["Music","Movies","Shopping"]
    },
    {
        name: "Kiet",
        age: 15,
        location: "Ninhbinh",
        sothich: ["Movies","Shopping"]
    },
];
// let value = JSON.stringify(students);
// // localStorage.setItem("name","Duy");
// localStorage.setItem("students",value);

let students_string = localStorage.getItem("students");
let students_array = JSON.parse(students_string)

let todolist = ["ABC","BCD","CEF","Value"]

let result = document.getElementById("result")
result.innerHTML = ""

let li = document.createElement("li");
li.innerHTML = "Value"
result.appendChild(li)