products = [
    {
        name: "KFC Chizza",
        des: "KFC tung món ăn độc đáo lần đầu tiên xuất hiện tại Việt Nam",
        img: "https://www.simplemost.com/wp-content/uploads/2017/02/chizza.jpg",
    },
    {
        name: "Cơm Gà",
        des: "Cơm Gà Truyền thống KFC",
        img: "https://shipdoandemff.com/wp-content/uploads/2018/05/C%C6%A1m-G%C3%A0-Truy%E1%BB%81n-th%E1%BB%91ng-KFC.jpg",
    },
    {
        name: "Cơm Mèo",
        des: "Cơm Gà Truyền thống KFC",
        img: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/245147419_2917407361830813_3723978433826714206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZSXHzdHbomUAX-U8Oj_&tn=Vv1VWuhsfMVlwGgu&_nc_ht=scontent.fdad1-3.fna&oh=f0b11e0ce953984b1223e6cffb791c08&oe=616D4759",
    },
    {
        name: "Cơm Mèo",
        des: "Cơm Gà Truyền thống KFC",
        img: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/245147419_2917407361830813_3723978433826714206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZSXHzdHbomUAX-U8Oj_&tn=Vv1VWuhsfMVlwGgu&_nc_ht=scontent.fdad1-3.fna&oh=f0b11e0ce953984b1223e6cffb791c08&oe=616D4759",
    },
    {
        name: "Cơm Mèo",
        des: "Cơm Gà Truyền thống KFC",
        img: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/245147419_2917407361830813_3723978433826714206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZSXHzdHbomUAX-U8Oj_&tn=Vv1VWuhsfMVlwGgu&_nc_ht=scontent.fdad1-3.fna&oh=f0b11e0ce953984b1223e6cffb791c08&oe=616D4759",
    },
    {
        name: "Cơm Mèo",
        des: "Cơm Gà Truyền thống KFC",
        img: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/245147419_2917407361830813_3723978433826714206_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZSXHzdHbomUAX-U8Oj_&tn=Vv1VWuhsfMVlwGgu&_nc_ht=scontent.fdad1-3.fna&oh=f0b11e0ce953984b1223e6cffb791c08&oe=616D4759",
    },
];

let menu = document.querySelector(".menu");
menu.innerHTML = "";
for(let i = 0; i < products.length; i++){
    let pro = products[i];
    menu.innerHTML +=  `
    <div class="item">
        <div class="product-view">
            <img class="product-img" src="${pro.img}"/>
            <button class="button-add" value="${pro.name}">Add to Cart</button>
        </div>
        <div class="product-content">
            <h3>${pro.name}</h3>
            <p>
                ${pro.des}
            </p>
        </div>
    </div>
    `;
}