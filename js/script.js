// calculate btn

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

calBtn.addEventListener("click", (e) => {
  checkError();

  if (!errorDay && !errorMonth & !errorYear) {
    calculateAge();
  }
});

// calculate age

const daysDisplay = document.querySelector("#days-display");
const monthsDisplay = document.querySelector("#months-display");
const yearsDisplay = document.querySelector("#years-display");

const daysText = document.querySelector("#days-text");
const monthsText = document.querySelector("#months-text");
const yearsText = document.querySelector("#years-text");

let dayCount = 0;
let monthCount = 0;
let yearCount = 0;

let ageDays = 0;
let ageMonths = 0;
let ageYears = 0;

// func() to calculate age

const calculateAge = function () {
  dayCount = 0;
  monthCount = 0;
  yearCount = 0;

  const dateOfBirth = `${month.value}-${day.value}-${year.value}`;

  const dateOfBirthTime = new Date(dateOfBirth).getTime();
  const currentTime = new Date().getTime();

  const diff = new Date(currentTime - dateOfBirthTime);

  ageDays = Number(Math.abs(diff.getDate()) - 1);
  ageMonths = Number(Math.abs(diff.getMonth() + 1) - 1);
  ageYears = Number(Math.abs(diff.getFullYear()) - 1970);

  ageDays === 1
    ? (daysText.textContent = "day")
    : (daysText.textContent = "days");
  ageMonths === 1
    ? (monthsText.textContent = "month")
    : (monthsText.textContent = "months");
  ageYears === 1
    ? (yearsText.textContent = "year")
    : (yearsText.textContent = "years");

  daysDisplay.classList.remove("md:tracking-xl");
  monthsDisplay.classList.remove("md:tracking-xl");
  yearsDisplay.classList.remove("md:tracking-xl");

  setInterval(animation, 50);
};

// animation

const animation = function () {
  dayCount < ageDays ? dayCount++ : (dayCount = ageDays);
  monthCount < ageMonths ? monthCount++ : (monthCount = ageMonths);
  yearCount < ageYears ? yearCount++ : (yearCount = ageYears);

  daysDisplay.textContent = dayCount;
  monthsDisplay.textContent = monthCount;
  yearsDisplay.textContent = yearCount;
};

// Errors

let errorDay = false;
let errorMonth = false;
let errorYear = false;

// func() to check error

const checkError = function () {
  errorEmptyDay();
  errorEmptyMonth();
  errorEmptyYear();
  errorInvalid();

  if (!errorDay && !errorMonth && !errorYear) {
    errorWholeForm();
  }
};

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

  Number(year.value) <= new Date().getFullYear() - 1
    ? errorEmptyYear()
    : (toggleError(year, true, "Must be in the past"), (errorYear = true));
};

// Error Type 3 = whole form error

const errorWholeForm = function () {
  const labelDay = day.parentElement.querySelector("label");
  const labelMonth = month.parentElement.querySelector("label");
  const labelYear = year.parentElement.querySelector("label");
  const errorTextCont = day.parentElement.querySelector(".error-text");

  const numberOfDays = new Date(
    Number(year.value),
    Number(month.value),
    0
  ).getDate();

  if (Number(day.value) <= numberOfDays) {
    errorDay = false;
    errorMonth = false;
    errorYear = false;
    if (labelDay.classList.contains("text-primary-lightRed")) {
      toggleErrorWholeForm(labelDay, labelMonth, labelYear, errorTextCont, "");
    }
  } else {
    errorDay = true;
    errorMonth = true;
    errorYear = true;
    toggleErrorWholeForm(
      labelDay,
      labelMonth,
      labelYear,
      errorTextCont,
      "Must be a valid date"
    );
  }
};

// toggleError

// for error 1 & error 2

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

// for error 3

const toggleErrorWholeForm = function (
  labelDay,
  labelMonth,
  labelYear,
  errorTextCont,
  errorText
) {
  day.classList.toggle("border-primary-lightRed");
  day.classList.toggle("border-neutral-lightGrey");

  month.classList.toggle("border-primary-lightRed");
  month.classList.toggle("border-neutral-lightGrey");

  year.classList.toggle("border-primary-lightRed");
  year.classList.toggle("border-neutral-lightGrey");

  labelDay.classList.toggle("text-neutral-smokeyGray");
  labelDay.classList.toggle("text-primary-lightRed");
  labelMonth.classList.toggle("text-neutral-smokeyGray");
  labelMonth.classList.toggle("text-primary-lightRed");
  labelYear.classList.toggle("text-neutral-smokeyGray");
  labelYear.classList.toggle("text-primary-lightRed");

  errorTextCont.textContent = errorText;
};
