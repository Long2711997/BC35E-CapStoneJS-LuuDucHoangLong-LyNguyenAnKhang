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
}
