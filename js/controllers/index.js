// RENDER PRODUCT FEATURE

function getDataProduct() {
  var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
  });

  promise.then(function (res) {
    renderProduct(res.data.content);
  });

  promise.catch(function (err) {
    console.log(err);
  });
}

function renderProduct(arrProduct) {
  var contentHTML = ``;
  for (var index = 0; index < arrProduct.length; index++) {
    var product = arrProduct[index];
    contentHTML += `
        <div class="col-4">
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
