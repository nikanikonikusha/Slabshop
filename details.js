let product_id = (window.location.hash.split('#')[1])
fetch(`https://fakestoreapi.com/products/${product_id}`)
.then(function (response) {
  return response.json();
}).then(function (Card_info) {
  let info_Card = `<div class="col-lg-3">
    <div class="img-div">
      <img class="card-img-top" src="${Card_info.image}" alt="Card image cap">
    </div>
  </div>
  <div class="col-lg-5">\
    <div class="content">
      <h5 class="card-title">${Card_info.title}</h5>
      <p class="card-text">$${Card_info.price}</p>
      <p class="card-text">${Card_info.category}</p>
      <p class="card-text">${Card_info.description}</p>
      <p class="card-text">Count: ${Card_info.rating.count}</p>
    </div>
  </div>`

  $('.container .row').append(info_Card);
})