const idInput = document.querySelector("#input-id-field");
const passwordInput = document.querySelector("#input-pass-field");
const emailInput = document.querySelector("#input-email-field");
const idError = document.createElement("li");
const passwordError = document.createElement("li");
const emailError = document.createElement("li");
const toggleEyeIcon = document.querySelector(".toggle-visibility");
const errorList = document.querySelector("#form-hints");
const idPattern = /^[a-z0-9_-]{5,20}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function validateID(event) {
  if (!event.target.value) {
    idError.style.color = "red";
    idError.textContent = "아이디를 입력해 주세요.";
    errorList.appendChild(idError);
  } else if (!idPattern.test(event.target.value)) {
    idError.style.color = "red";
    idError.textContent = "아이디는 5~20자의 영문 소문자, 숫자와 특수기호만 사용 가능";
    errorList.appendChild(idError);
  } else {
    idError.remove();
  }
}
idInput.addEventListener("blur", validateID);


function validatePassword(event) {
  if (!event.target.value) {
    passwordError.style.color = "red";
    passwordError.textContent = "비밀번호를 입력해주세요.";
    errorList.appendChild(passwordError);
  } else if (!passwordPattern.test(event.target.value)) {
    passwordError.style.color = "red";
    passwordError.textContent = "비밀번호는 8~16자 영문 대/소문자, 숫자, 특수문자 포함";
    errorList.appendChild(passwordError);
  } else {
    passwordError.remove();
  }
}
passwordInput.addEventListener("blur", validatePassword);


function validateEmail(event) {
  if (!emailPattern.test(event.target.value)) {
    emailError.style.color = "red";
    emailError.textContent = "올바른 이메일 주소를 입력";
    errorList.appendChild(emailError);
  } else {
    emailError.remove();
  }
}
emailInput.addEventListener("change", validateEmail);


function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
toggleEyeIcon.addEventListener("click", togglePassword);




