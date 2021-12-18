// From "Query String" to "Object"
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let url = "https://61ab60d7264ec200176d415d.mockapi.io/news";
async function getAPI() {
    let response = await fetch(url);
    let data = await response.json();
    let id = params.id;
    let news = {};

    // Get news by id
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            news = data[i];
            break;
        }
    }

    // If news is not found
    if (news.id == undefined) {
        // Alert message
        alert("Không tìm thấy bài viết");
    } else {
        // If news is found
        // Render news
        document.getElementById("title").innerHTML = news.title;
        document.getElementById("content").innerHTML = news.description;
        document.getElementById("thumb").src = news.thumbnail;
    }


}

getAPI();