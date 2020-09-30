window.onscroll = function () { myFunction() };

var navbar = document.getElementById('header');
var sticky = 56;
var i = 1;

function myFunction() {
  console.log(screen.width);
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    if(screen.width<=1024){
      document.getElementById('categories').classList.add('cate-fixed');
      
    }
  } else {
    navbar.classList.remove("sticky");
    document.getElementById('categories').classList.remove('cate-fixed');
  }
}

// $('.dropdown').on('mouseleave', function(){
//   setTimeout(function(){$('.dropdown-content').css({},900)
// })var i=1;
// $('.dropdown').on('mouseover', function(){
//   $('.dropdown-content').css({'display':'block'})
// })

// change IMG banner
function changeIMGBanner() {
  if (i > 3) { i = 1 }
  $('#banner-primary').attr('src', 'img/banner' + i + '.jpg')
  $('#banner-primary').css({ 'animation': 'none' });
  setTimeout(function () {
    $('#banner-primary').css({ 'animation': 'changeBanner 1.5s' });
  }, 5000);
}
setInterval(function () {
  changeIMGBanner();
  i++;
}, 5000)

// Slide-deal-product
var deal_page = 2;

function changeDealPage() {
  if (deal_page > 2) { deal_page = 1 }
  deal_list_item = '';
  if (deal_page == 1) {
    for (let count = 0; count < 6; count++) {
      deal_list_item += `
        <div class="deal-list-item item">
          <div class="img">
            <img src="${dealProduct.page1[count].img}" alt="${dealProduct.page1[count].img}">
          </div>
          <div class="description">
            <p>${dealProduct.page1[count].des}</p>
            <h2>${dealProduct.page1[count].price}</h2>
            <b> ${dealProduct.page1[count].root} </b> <span> ${dealProduct.page1[count].sale}</span>
          </div>
        </div>`
    }
  }
  if (deal_page == 2) {
    for (let count = 0; count < 6; count++) {
      deal_list_item += `
      <div class="deal-list-item item">
        <div class="img">
          <img src="${dealProduct.page2[count].img}" alt="${dealProduct.page2[count].img}">
        </div>
        <div class="description">
          <p>${dealProduct.page2[count].des}</p>
          <h2>${dealProduct.page2[count].price}</h2>
          <b> ${dealProduct.page2[count].root} </b> <span> ${dealProduct.page2[count].sale}</span>
        </div>
      </div>`
    }
  }
  $('#deal-list').css({ 'animation': 'none' });
  $('#deal-list').html(deal_list_item);
  setTimeout(function () {
    $('#deal-list').css({ 'animation': 'slide-product 1s' });
  }, 0)
  deal_page++;
}

function collection_product() {
  var collection_list = '';
  for (let j = 0; j < 8; j++) {
    collection_list += `
    <div class="collection-item item">
        <h5>${collection[j].title}</h5>
        <p>${collection[j].count}</p>
        <div class="img">
          <img src="${collection[j].img1}" alt="${collection[j].img1}">
          <img src="${collection[j].img2}" alt="${collection[j].img2}">
          <img src="${collection[j].img3}" alt="${collection[j].img3}">
        </div>
      </div>`
  }
  $('#collection-list').html(collection_list);
}

function person_product() {
  var person_list = '';
  for (let j = 0; j < 22; j++) {
    person_list += `
    <div class="person-product-item item">
                    <div class="img">
                        <img src="${person_item[j].img}" alt="${person_item[j].img}">
                    </div>
                    <div class="content">
                        <p>
                          ${person_item[j].des}
                        </p>
                        <h2>${person_item[j].price}</h2>
                        <b> ${person_item[j].root} </b> <span> ${person_item[j].sale} </span>
                        <div class="vote">
                            <div class="star">`

    for (let a = 0; a < person_item[j].star; a++) {
      person_list += '<i class="fa fa-star" aria-hidden="true"></i>';
    }

    person_list += `</div>
                            <span>
                              ${person_item[j].city}
                            </span>
                        </div>
                    </div>
                </div>`
  }
  $('#person-product').html(person_list);
}


function list_product() {
  var listProduct = '';
  for (let j = 0; j < 16; j++) {
    listProduct += `
    <div class="list-product-item item">
                    <div class="img">
                        <img src="${product_list[j].img}" alt="${product_list[j].img}">
                    </div>
                    <p>${product_list[j].des}</p>
                </div>`
  }
  $('#list-product').html(listProduct);
}
var click=1;
function loadMore(){
  let height = 329;
  if (screen.width>1024){
    if (click == 1){
      $('#person-product').css({'height':height*3.01+'px','animation':'loadMore1 1s'})
    }
    if (click == 2){
      $('#person-product').css({'height':height*4.01+'px','animation':'loadMore2 1s'})
    }
    if (click == 2){
      $('#loadMore').hide();
    }
  }else{
    if (click == 1){
      $('#person-product').css({'height':height*4.01+'px','animation':'loadMore2 1s'})
    }
    if (click == 2){
      $('#person-product').css({'height':height*5.01+'px','animation':'loadMore3 1s'})
    }
    if (click == 2){
      $('#loadMore').hide();
    }
  }  
  click++;
}

function drop_left_show(){
  $('#drop-left').show();
}
function drop_left_hide(){
  $('#drop-left').hide();
}

$('#drop-left').on('mouseover',function(){
  $('#drop-left').show();
});

$('#drop-left').on('mouseout',function(){
   $('#drop-left').hide();
});

function getContent(list){
  $.each(type,function(i,v){
    if (i==list){
      let text = '';
      for (let j=0;j < v.length; j++){
        text+= `<li><a href="">- ${v[j]} </a></li>`
      }
      $('#drop-left').html(
        `<ul>
          ${text}
        </ul>
        `
      );
    }
  })
}



$(document).ready(function () {
  collection_product();
  list_product();
  person_product();
});