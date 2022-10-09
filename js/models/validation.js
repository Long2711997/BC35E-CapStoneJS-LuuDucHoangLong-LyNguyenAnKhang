function Validation() {
  // Check empty
  this.checkEmpty = function (value, inputSelector, info) {
    if (value === null || value.trim() === '') {
      document.querySelector(
        inputSelector
      ).innerHTML = `<p class="errorMessage">Vui lòng nhập ${info}</p>`;
      document.querySelector(inputSelector).style.display = 'block';
      return false;
    }

    document.querySelector(inputSelector).innerHTML = '';
    document.querySelector(inputSelector).style.display = 'none';
    return true;
  };

  // Check password confirm
  this.checkPasswordConfirm = function () {
    var password = document.querySelector('#password').value;
    var passwordConfirm = document.querySelector('#passwordConfirm').value;

    if (passwordConfirm !== password) {
      document.querySelector('#passwordConfirmError').innerHTML =
        'Xác nhận mật khẩu chưa giống với mật khẩu';
      document.querySelector('#passwordConfirmError').style.display = 'block';
      return false;
    }

    document.querySelector('#passwordConfirmError').innerHTML = '';
    document.querySelector('#passwordConfirmError').style.display = 'none';
    return true;
  };

  this.checkEmailFormat = function (value) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(emailFormat)) {
      document.querySelector('#emailError').innerHTML = '';
      document.querySelector('#emailError').style.display = 'none';
      return true;
    }

    document.querySelector('#emailError').innerHTML =
      'Vui lòng nhập đúng định dạng email';
    document.querySelector('#emailError').style.display = 'block';
    return false;
  };

  this.checkPhoneFormat = function (value) {
    var phoneFormat = /^[0-9]+$/;

    if (value.match(phoneFormat)) {
      document.querySelector('#phoneError').innerHTML = '';
      document.querySelector('#phoneError').style.display = 'none';
      return true;
    }

    document.querySelector('#phoneError').innerHTML =
      'Vui lòng nhập đúng định dạng số điện thoại';
    document.querySelector('#phoneError').style.display = 'block';
    return false;
  };
}
