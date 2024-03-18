
var searchForm = document.getElementById('search-event');
var searchBox = document.getElementById('search-box');
var searchResults = document.getElementById("result-container");
var showMorebtn = document.getElementById("btn");


let keyword = " ";
let page = 1;
const access_key = "yLm5LYoZzMRHtSmmwzIyAU260rygznggTZXGzKcPPU8"
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page===1){
        searchResults.innerHTML=" ";
    }
    
    const results = data.results;
    results.map((result) =>{
        const image = document.createElement('img');
        image.src= result.urls.small;

        const imgLink = document.createElement("a");
        imgLink.href= result.links.html;
        imgLink.target='_blank';

        imgLink.appendChild(image);
        searchResults.appendChild(imgLink);
    })
    
    
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page= 1;
    searchImages();
})

showMorebtn.addEventListener("click",(e)=>{
    page++;
    searchImages();
})





//toggle function//
// var toggleBtn = document.querySelector("#toggle-btn");
var body = document.querySelector("body");
// let toggle = true;
// toggleBtn.addEventListener('click',function(){
//     if(toggle){
//         body.style.backgroundColor = 'white';
//         toggleBtn.classList.remove('toggle1');
//         toggleBtn.classList.add('toggle1-active');

//     }else{
//         body.style.backgroundColor = "black";
//         toggleBtn.classList.remove("toggle1-active");
//         toggleBtn.classList.add("toggle1");
//     }
// })
const element = document.getElementById('toggle-btn');
const toggle2 =  document.querySelector("#toggle2");
const h2 = document.querySelector("section h2");
const resultBox = document.querySelector("#result-container");
const showMoreBtn = document.querySelector("#btn");

element.addEventListener('click', function() {
    this.classList.toggle('toggle1');
    this.classList.toggle('toggle1-active');
    body.classList.toggle('body');
    body.classList.toggle('body2');
    toggle2.classList.toggle("toggle2");
    toggle2.classList.toggle("toggle2-active");
    h2.classList.toggle('h2');
    showMoreBtn.classList.toggle("btn");

});