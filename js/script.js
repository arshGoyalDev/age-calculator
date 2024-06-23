// calculate age

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

calBtn.addEventListener("click", (e) => {
  errorEmpty();
});

// Error Type 1 = empty error

const emptyErrorText = "This field is required";

const errorEmpty = function () {
  day.value === "" ? toggleError(day, true, emptyErrorText) : toggleError(day);
  month.value === ""
    ? toggleError(month, true, emptyErrorText)
    : toggleError(month);
  year.value === ""
    ? toggleError(year, true, emptyErrorText)
    : toggleError(year);
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
