// calculate age

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

let errorDay = false;
let errorMonth = false;
let errorYear = false;

calBtn.addEventListener("click", (e) => {
  errorEmptyDay();
  errorEmptyMonth();
  errorEmptyYear();
  errorInvalid();

  

});

// Error Type 1 = empty error

const emptyErrorText = "This field is required";

const errorEmptyDay = function () {
  day.value === ""
    ? (toggleError(day, true, emptyErrorText), (errorDay = true))
    : (toggleError(day), (errorDay = false));
};

const errorEmptyMonth = function () {
  month.value === ""
    ? (toggleError(month, true, emptyErrorText), (errorMonth = true))
    : (toggleError(month), (errorMonth = false));
};

const errorEmptyYear = function () {
  year.value === ""
    ? (toggleError(year, true, emptyErrorText), (errorYear = false))
    : (toggleError(year), (errorYear = false));
};

// Error Type 2 = invalid error

const invalidErrorText = "Must be a valid ";

const errorInvalid = function () {
  Number(day.value) >= 0 && Number(day.value) <= 31
    ? errorEmptyDay()
    : (toggleError(day, true, invalidErrorText + "day"), (errorDay = true));

  Number(month.value) >= 0 && Number(month.value) <= 12
    ? errorEmptyMonth()
    : (toggleError(month, true, invalidErrorText + "month"),
      (errorMonth = true));

  Number(year.value) <= new Date().getFullYear()
    ? errorEmptyYear()
    : (toggleError(year, true, "Must be in the past"), (errorYear = true));
};

// toggleError

const toggleError = function (el, errorState = false, errorText = "") {
  const label = el.parentElement.querySelector("label");
  const errorTextCont = el.parentElement.querySelector(".error-text");
  if (errorState) {
    el.classList.add("border-primary-lightRed");
    el.classList.remove("border-neutral-lightGrey");
    label.classList.add("text-primary-lightRed");
    label.classList.remove("text-neutral-smokeyGray");
  } else {
    el.classList.remove("border-primary-lightRed");
    el.classList.add("border-neutral-lightGrey");
    label.classList.remove("text-primary-lightRed");
    label.classList.add("text-neutral-smokeyGray");
  }

  errorTextCont.textContent = errorText;
};
