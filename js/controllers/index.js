// RENDER PRODUCT FEATURE
function getDataProduct() {
  var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
  });

  promise.then(function (res) {
    renderCarousel(res.data.content);
    renderProduct(res.data.content);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

// RENDER CAROUSEL
function renderCarousel(arrCarousel){
  var contentHTML = ``;
  for (var index = 0; index < 3; index++) {
    var carouselProduct = arrCarousel[index];
    if (index == 0){
      contentHTML += `
        <div class="carousel-item active">
            <img src="./images/image6.png" class="d-block w-100" alt="..." />
            <img class="carousel_product" src="${carouselProduct.image}" alt="" />
            <div class="carousel_product_detail">
              <h1>${carouselProduct.name}</h1>
              <h3>${
                carouselProduct.description.length > 30
                  ? carouselProduct.description.substr(0, 30) + '...'
                  : carouselProduct.description
              }</h3>
              <button>Buy Now</button>
            </div>
          </div>`;
    } else {
      contentHTML += `
        <div class="carousel-item">
            <img src="./images/image6.png" class="d-block w-100" alt="..." />
            <img class="carousel_product" src="${carouselProduct.image}" alt="" />
            <div class="carousel_product_detail">
              <h1>${carouselProduct.name}</h1>
              <h3>${
                carouselProduct.description.length > 30
                  ? carouselProduct.description.substr(0, 30) + '...'
                  : carouselProduct.description
              }</h3>
              <button>Buy Now</button>
            </div>
          </div>`;
    }
    
  }

  document.querySelector('#carousel_product_render').innerHTML = contentHTML;
}

function renderProduct(arrProduct) {
  var contentHTML = ``;
  for (var index = 0; index < arrProduct.length; index++) {
    var product = arrProduct[index];
    contentHTML += `
        <div class="col-md-4">
          <div class="card bg-light" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${
                product.description.length > 100
                  ? product.description.substr(0, 100) + '...'
                  : product.description
              }
              </p>
              <a href="./detail.html?id=${product.id}" class="btn">Buy Now</a>
              <a href="#" class="btn product_price">${product.price} $</a>
            </div>
          </div>
        </div>`;
  }

  document.querySelector('#data-product').innerHTML = contentHTML;
}

getDataProduct();
