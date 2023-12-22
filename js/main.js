
var main = document.getElementById('main');
var mainprod = document.getElementById('mainprod');
var allproduct = document.getElementById('allproduct');
var opacityDiv = document.getElementById('opacityDiv');

var ajax = new XMLHttpRequest;

ajax.open("GET",'https://fakestoreapi.com/products');

ajax.send();

ajax.onreadystatechange = function(){
    if(ajax.readyState == 4){
        var data = JSON.parse(ajax.response);
        console.log(data)
        var res = "";
        for(var i=0; i<data.length; i++){
            res += 
            `
            <div id="container">
            <img src="${data[i].image}">
            <h3>${data[i].title}</h3>
            <div>
                <h2>${data[i].price}$</h2>
                <button onclick="showMore(${i})">Show More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
            `
        }
       main.innerHTML = res;
    }
}




function showMore(i){

    var data = JSON.parse(ajax.response);
    dataprod = 
    `
        <div class="product" id="product">
            <img src="${data[i].image}">
            <div>
                <h3>title: ${data[i].title}</h3><hr>
                <h3>category: ${data[i].category}</h3><hr>
                <h3 contenteditable="true">description: ${data[i].description}</h3><hr>
                <h3>count: ${data[i].rating.count}</h3><hr>
                <h3>rate: ${data[i].rating.rate}</h3><hr>
                <h3 id="price">price: ${data[i].price}$</h3>
                
            </div>
        </div>
    `;
    mainprod.innerHTML = dataprod; 
    opacityDiv.style.display = "block";
    closeprod.style.display = "block";
    mainprod.style.display = "block";
}


function removeprod(){
    mainprod.style.display = "none";
    opacityDiv.style.display = "none";
    closeprod.style.display = "none";
}

opacityDiv.onclick = removeprod;
window.onscroll = removeprod;

mainprod.style.display = "none";
opacityDiv.style.display = "none";
closeprod.style.display = "none";
