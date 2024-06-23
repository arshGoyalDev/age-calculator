// calculate age

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const calBtn = document.querySelector(".cal-btn");

calBtn.addEventListener("click", (e) => {
  errorEmpty();
})

//empty error

const errorEmpty = function() {
  day.value === "" ? emptyErrorStyle(day,true) : emptyErrorStyle(day, false);
  month.value === "" ? emptyErrorStyle(month, true) : emptyErrorStyle(month, false);
  year.value === "" ? emptyErrorStyle(year, true) : emptyErrorStyle(year, false);
}

const emptyErrorStyle = function (el, errorState) {
  const label = el.parentElement.querySelector("label");
  const errorText = el.parentElement.querySelector(".error-text");

  if (errorState) {
    el.classList.add("border-primary-lightRed");
    el.classList.remove("border-neutral-lightGrey");
    label.classList.add("text-primary-lightRed");
    label.classList.remove("text-neutral-smokeyGray");
    errorText.textContent = "This field is required"    
  } else {
    el.classList.remove("border-primary-lightRed");
    el.classList.add("border-neutral-lightGrey");    
    label.classList.remove("text-primary-lightRed");
    label.classList.add("text-neutral-smokeyGray");
    errorText.textContent = ""    
  }
}