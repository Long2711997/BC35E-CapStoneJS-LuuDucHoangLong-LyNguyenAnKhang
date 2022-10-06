document
  .querySelector('.submitRegister')
  .addEventListener('click', function () {
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    var passwordConfirm = document.querySelector('.passwordConfirm').value;
    var name = document.querySelector('.name').value;
    var phone = document.querySelector('.phone').value;
    var gender = document.querySelector('.gender').value;
  });
