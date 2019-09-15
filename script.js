//placeholder is for setting the data retrived from the endpoint
const dataPlaceholder = document.querySelector(".data-placeholder");

//the endpoint and a proxy to be able to access from client side
const address = "http://test.stevejohnson.io/";
const proxy = "https://cors-anywhere.herokuapp.com/";
const url = proxy + address;

//DOM selecting for first question
const questionOneTrue = document.querySelector("#question1-yes");
const questionOneFalse = document.querySelector("#question1-no");
const questionOneSub = document.querySelector("#question1-sub");

//DOM selecting for second question
const questionTwoTrue = document.querySelector("#question2-yes");
const questionTwoFalse = document.querySelector("#question2-no");
const questionTwoSub = document.querySelector("#question2-sub");

//DOM selecting the slider
const slider = document.querySelector(".slider");
const slidervalue = document.querySelector(".slider-value");


//fetch data from the provided endpoint and set it in the header
function fetchData() {
    return fetch(url)
        .then(response => response.json())
        .then(response => (dataPlaceholder.innerHTML = response.value))
        .catch(err => console.log(err));
}

//dynamically display questions
function checkRadioOne() {
    if (questionOneFalse.checked) {
        questionOneSub.classList.remove("hidden");
    } else if (questionOneTrue.checked) {
        questionOneSub.classList.add("hidden");
    }
}

function checkRadioTwo() {
    if (questionTwoFalse.checked) {
        questionTwoSub.classList.remove("hidden");
    } else if (questionTwoTrue.checked) {
        questionTwoSub.classList.add("hidden");
    }
}

function setSliderPercent() {
    slidervalue.innerHTML = `${slider.value}%`;
}

document.addEventListener("DOMContentLoaded", function() {
    setSliderPercent();
    checkRadioOne();
    checkRadioTwo();
    fetchData();
});
