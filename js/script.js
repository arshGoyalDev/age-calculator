// calculate age

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

calBtn.addEventListener("click", (e) => {
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
  let error = false;

  day.value === ""
    ? (toggleError(day, true, emptyErrorText), (error = true))
    : (toggleError(day), (error = false));
  month.value === ""
    ? (toggleError(month, true, emptyErrorText), (error = true))
    : toggleError(month),
    (error = false);
  year.value === ""
    ? (toggleError(year, true, emptyErrorText), (error = true))
    : toggleError(year),
    (error = false);

  return error;
};

// Error Type 2 = invalid error

const invalidErrorText = "Must be a valid ";

const errorInvalid = function () {
  let error = false;

  day.value >= 0 && day.value <= 31
    ? (toggleError(day), (error = false))
    : toggleError(day, true, invalidErrorText + "day"),
    (error = true);
  (month.value >= 0) & (month.value <= 12)
    ? (toggleError(month), (error = false))
    : toggleError(month, true, invalidErrorText + "month"),
    (error = true);
  year.value >= 1970 && year.value <= new Date().getFullYear()
    ? (toggleError(year), (error = false))
    : toggleError(year, true, "Must be in the past"),
    (error = true);

  return error;
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
