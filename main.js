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


let Products;

function hrefClick() {
  $('.for-you .row .col-xxl-2 .content').each(function (index, element) {
    $(element).click(function (e) { 
      e.preventDefault();
      window.open(`details.html#${index + 1}`)
    });
  });
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


let countDownDate = new Date("Jan 1, 2025 15:23:43").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(hours);
  $('.hours').text(hours);
  $('.minutes').text(minutes);
  $('.seconds').text(seconds);
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

$('.category button').click(function (e) { 
  $('.category-dropdown').toggleClass('show');
});

$('.location button').click(function (e) { 
  $('.location-dropdown').toggleClass('show');
});

console.log($('.drpdown-toggler'));