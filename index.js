console.log("This is my index.js file");
// initialize the news api parameters

// let source = 'Zee Business';
// let apiKey = '30d6d57346924999b9c57223c82736a4'

// grab the news container
let newsAccordian = document.getElementById('newsAccordian');

// create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?source=${source}&apiKey=${apiKey}`, true);
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=30d6d57346924999b9c57223c82736a4', true);

//  What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHTML = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse${index}"
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    <span class="badge bg-success"><b>Breaking News ${index+1}:</b> </span>${element["title"]}
                </button>
            </h2>

            <div id="collapse${index}" class="accordion-collapse " aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordian">
                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_main"> Read more here </a> </div>
            </div>
        </div>`;

            newsHTML += news;
        });

        newsAccordian.innerHTML = newsHTML;

    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();

