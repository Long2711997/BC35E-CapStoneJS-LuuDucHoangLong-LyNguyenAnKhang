function getAPIDetailProduct() {
  var urlParam = new URLSearchParams(window.location.search);
  var id = urlParam.get('id');

  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: 'GET',
  });

  promise.then(function (result) {
    console.log(result.data);

    displayProduct(result.data.content);
  });

  promise.catch(function (error) {
    console.log(error.response?.data);
  });
}

function displayProduct(product) {
  var sizesContent = '';

  for (var i = 0; i < product.size.length; i++) {
    sizesContent += `
      <button class="btn-size">${product.size[i]}</button>
    `;
  }

  document.querySelector('.pInfo__name').innerHTML = product.name;
  document.querySelector('.pInfo__desc').innerHTML = product.description;
  document.querySelector('.pInfo__price').innerHTML = `$${product.price}`;
  document.querySelector('.productDetail__image img').src = product.image;
  document.querySelector('.pInfo__sizes').innerHTML = sizesContent;
}

getAPIDetailProduct();
