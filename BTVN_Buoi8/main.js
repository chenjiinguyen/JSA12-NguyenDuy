let url = "https://617ab8bccb1efe001700ffe6.mockapi.io/students";
fetch(url).then(res => res.json()).then(data => {
    let students = document.querySelector(".students");
    students.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        let d = data[i];
        students.innerHTML +=  `
        <div class="student">
            <img class="stu-avatar" src="${d.avatar}" alt="">
            <div class="stu-info">
                <h4>ID: ${d.id}</h4>
                <h4>${d.name}</h4>
                <h4>Dia Chi: ${d.address}</h4>
                <button>Điểm Danh</button>
            </div>
        </div>
        `;
    }
});
