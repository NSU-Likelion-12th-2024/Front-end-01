const idInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const emailInput = document.querySelector("#email-input");
const idError = document.querySelector("#id-error");
const passwordError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const toggleEyeIcon = document.querySelector(".toggle-password");
const errorList = document.querySelector("#form-hints");
const idPattern = /^[a-z0-9_-]{5,20}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function validateID(event) {
  if (!event.target.value) {
    idError.textContent = "아이디를 입력해 주세요.";
    idError.style.color = "red";
  } else if (!idPattern.test(event.target.value)) {
    idError.textContent = "아이디는 5~20자의 영문 소문자, 숫자와 특수기호만 사용 가능합니다.";
    idError.style.color = "red";
  } else {
    idError.textContent = "";
  }
}
idInput.addEventListener("blur", validateID);

function validatePassword(event) {
  if (!event.target.value) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    passwordError.style.color = "red";
  } else if (!passwordPattern.test(event.target.value)) {
    passwordError.textContent = "비밀번호는 8~16자 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다.";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "";
  }
}
passwordInput.addEventListener("blur", validatePassword);

function validateEmail(event) {
  if (!emailPattern.test(event.target.value)) {
    emailError.textContent = "올바른 이메일 주소를 입력해 주세요.";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "";
  }
}
emailInput.addEventListener("change", validateEmail);

function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
toggleEyeIcon.addEventListener("click", togglePasswordVisibility);
