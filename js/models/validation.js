function Validation() {
  // Check empty
  this.checkEmpty = function (value, errorSelector, info) {
    if (value === null || value.trim() === '') {
      document.querySelector(
        errorSelector
      ).innerHTML = `<p class="errorMessage">Vui lòng nhập ${info}</p>`;
      document.querySelector(errorSelector).style.display = 'block';
      return false;
    }

    document.querySelector(errorSelector).innerHTML = '';
    document.querySelector(errorSelector).style.display = 'none';
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

  // Check email format
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

  // Check phone format
  this.checkPhoneFormat = function (value) {
    var phoneFormat = /^[0-9]+$/;

    if (value.match(phoneFormat)) {
      document.querySelector('#phoneError').innerHTML = '';
      document.querySelector('#phoneError').style.display = 'none';
      return true;
    }

    document.querySelector('#phoneError').innerHTML = 'Vui lòng nhập số';
    document.querySelector('#phoneError').style.display = 'block';
    return false;
  };

  // Check password format
  this.checkPasswordFormat = function (value) {
    var passwordFormat =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

    if (value.match(passwordFormat)) {
      document.querySelector('#passwordError').innerHTML = '';
      document.querySelector('#passwordError').style.display = 'none';
      return true;
    }

    document.querySelector('#passwordError').innerHTML =
      'Mật khẩu cần chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
    document.querySelector('#passwordError').style.display = 'block';
    return false;
  };

  // Check length
  this.checkLength = function (value, errorSelector, message, min, max) {
    if (value.length >= min && value.length <= max) {
      document.querySelector(errorSelector).innerHTML = '';
      document.querySelector(errorSelector).style.display = 'none';
      return true;
    }

    document.querySelector(errorSelector).innerHTML = message;
    document.querySelector(errorSelector).style.display = 'block';
    return false;
  };
}
