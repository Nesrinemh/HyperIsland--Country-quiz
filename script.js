// _____________________________________________________
// State variables
// _____________________________________________________
const startBtnEl = document.querySelector("#start-btn");
const userNameInputEl = document.querySelector("#userNameInput");
let userName;
//create local storage
//pointsystem, variable

//

// _____________________________________________________
// Event listners
// _____________________________________________________

startBtnEl.addEventListener("click", function (e) {
  e.preventDefault;
  if (userNameInputEl.value == "") {
    alert(`Please write your Nickname`);
    startBtnEl.disabled = true;
  } else {
    userName = userNameInputEl.value;
  }
});

export  userName;
