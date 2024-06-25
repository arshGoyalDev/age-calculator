// calculate age

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

let errorDay = "";
let errorMonth = "";
let errorYear = "";

calBtn.addEventListener("click", (e) => {
  errorEmpty();
  errorInvalid();
  // if (errorEmpty()) {
  //   console.log("error");
  // } else if (errorInvalid()) {
  //     console.log("error");
  // } else {
  //   console.log("age");
  // }
});

// Error Type 1 = empty error

const emptyErrorText = "This field is required";

const errorEmpty = function () {
  day.value === ""
    ? (toggleError(day, true, emptyErrorText), (errorDay = "empty"))
    : (toggleError(day), (errorDay = ""));
  month.value === ""
    ? (toggleError(month, true, emptyErrorText), (errorMonth = "empty"))
    : (toggleError(month), (errorMonth = ""));
  year.value === ""
    ? (toggleError(year, true, emptyErrorText), (errorYear = "empty"))
    : (toggleError(year), (errorYear = ""));
};

// Error Type 2 = invalid error

const invalidErrorText = "Must be a valid ";

const errorInvalid = function () {
  Number(day.value) >= 0 && Number(day.value) <= 31
    ? errorDay === "empty"
      ? console.log("hello")
      : (toggleError(day), (errorDay = ""))
    : (toggleError(day, true, invalidErrorText + "day"),
      (errorDay = "invalid"));

  Number(month.value) >= 0 && Number(month.value) <= 12
    ? errorMonth === "empty"
      ? console.log("hello")
      : (toggleError(month), (errorMonth = ""))
    : (toggleError(month, true, invalidErrorText + "month"),
      (errorMonth = "invalid"));

  Number(year.value) <= new Date().getFullYear()
    ? errorYear === "empty"
      ? console.log("hello")
      : (toggleError(year), (errorYear = ""))
    : (toggleError(year, true, "Must be in the past"), (errorYear = "invalid"));
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
