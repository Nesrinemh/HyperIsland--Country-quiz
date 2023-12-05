// _____________________________________________________
// State variables
// _____________________________________________________
const startBtnEl = document.querySelector("#start-btn");
const userNameInputEl = document.querySelector("#userNameInput");

//create local storage
//pointsystem, varible

// // _____________________________________________________
// // functions
// // _____________________________________________________

// _____________________________________________________
// Event listners
// _____________________________________________________

startBtnEl.addEventListener("click", function (e) {
  e.preventDefault;
  console.log("clicked");
  if (userNameInputEl.value == "") {
    alert(`Please write your Nickname`);
    startBtnEl.disabled = true;
  }
});

// how to fetch array and object at the same time. and to call loop of object

// how to fetch array and object at the same time. and to call loop of object

// Reset Modal
