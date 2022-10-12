function getUserInput() {
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;
  var passwordConfirm = document.querySelector('#passwordConfirm').value;
  var name = document.querySelector('#name').value;
  var phone = document.querySelector('#phone').value;
  var gender =
    document.querySelector('input[name="gender"]:checked').value === 'true'
      ? true
      : false;

  var isValid = true;
  var validation = new Validation();

  isValid &=
    validation.checkEmpty(email, '#emailError', 'email') &&
    validation.checkEmailFormat(email);

  isValid &=
    validation.checkEmpty(password, '#passwordError', 'mật khẩu') &&
    validation.checkLength(
      password,
      '#passwordError',
      'Độ dài mật khẩu phải từ 6 - 10 ký tự',
      6,
      10
    ) &&
    validation.checkPasswordFormat(password);

  isValid &=
    validation.checkEmpty(
      passwordConfirm,
      '#passwordConfirmError',
      'xác nhận mật khẩu'
    ) && validation.checkPasswordConfirm();

  isValid &= validation.checkEmpty(name, '#nameError', 'tên');

  isValid &=
    validation.checkEmpty(phone, '#phoneError', 'số điện thoại') &&
    validation.checkPhoneFormat(phone) &&
    validation.checkLength(
      phone,
      '#phoneError',
      'Độ dài số điện thoại phải là 10 số',
      10,
      10
    );

  if (isValid) {
    var user = new User(email, password, name, phone, gender);

    return user;
  }

  return null;
}

document
  .querySelector('#submitRegister')
  .addEventListener('click', function () {
    var user = getUserInput();

    if (user) {
      var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user,
      });

      promise.then(function (result) {
        console.log(result.data);
      });

      promise.catch(function (error) {
        console.log(error.response?.data);
      });
    }
  });
