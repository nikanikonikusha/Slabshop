function checkInputs(){
    if ($('.inp')[0].value != 0 && $('.inp')[0].value != 0) {
        return true
    } else {
        return false
    }
}

$('button.submit').click(function (e) {
    checkInputs()
    if (checkInputs() == true) {
        $('.transaction-status').addClass('show');
        $('.innercontent p').text(`You've successfully transfered $${$('.inp')[1].value} to ${$('.inp')[0].value}`);
        setTimeout(() => {
            $('.innercontent').addClass('show')
        }, 500);
        setTimeout(() => {
            $('.transaction-status').removeClass('show');
            $('.innercontent').removeClass('show')
            $('.inp').each(function (index, element) {
                element.value = ''
            });
        }, 2000);
    } else {
        alert("Fill missing inputs")
    }
});

{/* <div class="col-xxl-2 col-lg-4">
        <div class="content">
          <div class="imgdiv">
            <img src="img/foryou/Image.png" alt="">
          </div>
          <div class="textcontent">
            <p class="category">Computed & Laptop</p>
            <h6>Neve Strix Pro L123 (2021) - TP399K 1TB</h6>
            <div class="pricing">
              <p class="pricetag">$415.10</p>
              <div class="rating">
                <span class="star">
                  <img src="svg/star.svg" alt="">
                </span> 
                <span class="score">4.7</span>
              </div>
            </div>
            <div class="info">
              <div class="location">
                <img src="svg/mappin.svg" alt="">
                <p>Kota Bandung</p>
              </div>
              <p class="sold">390 Sold</p>
            </div>
          </div>
        </div>
      </div> */}


let Products;

function hrefClick() {
  $('.for-you .row .col-xxl-2 .content').each(function (index, element) {
    console.log(element);
    $(element).click(function (e) { 
      e.preventDefault();
      window.open(`details.html#${index + 1}`)
    });
  });
}

function log() {
  console.log(1)
}

fetch('https://fakestoreapi.com/products')
.then(function (resp) {
    return resp.json();
}).then(function (data) {
    $(data).each(function (index, element) {
        let Card = `<div class="col-xxl-2 col-lg-4">
        <div class="content">
          <div class="imgdiv">
            <img src="${element.image}" alt="">
          </div>
          <div class="textcontent">
            <p class="category">${element.category}</p>
            <h6>${element.title}</h6>
            <div class="pricing">
              <p class="pricetag">$${element.price}</p>
              <div class="rating">
                <span class="star">
                  <img src="svg/star.svg" alt="">
                </span> 
                <span class="score">${element.rating.rate}</span>
              </div>
            </div>
            <div class="info">
              <div class="location">
                <img src="svg/mappin.svg" alt="">
                <p>Kota Bandung</p>
              </div>
              <p class="sold">${element.rating.count} Sold</p>
            </div>
          </div>
        </div>
      </div>`
      $('.for-you .row').append(Card);
    });
}).then(hrefClick)

