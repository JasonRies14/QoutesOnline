const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random?tags=technology";

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by " + author.innerHTML);
}

function shareonwhatsapp() {
    window.open("https://wa.me/?text=" + quote.innerHTML + " - by " + author.innerHTML);
}