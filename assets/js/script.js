//
//
// // Clayton Skaggs
// 5-26-2022
// ==================== Varriable Decleration =====================

var currentTime = moment();


// Grab Display Fields in HTML
var currentTimeEl = document.querySelector(".currentDayCL");

console.log("TIME " + currentTimeEl);


// ==================== Function Decleration  =====================

function init() {

  // preventDefault();

  // Add Time to Front Page
  currentTime.format("MMM Do YYYY");
  currentTimeEl.textContent = currentTime.format("MMM Do YYYY");
  console.log("Init Complete!");
}

// ################# FUNC_NAME #################

// =========================== MAIN  ==============================

init();
// Now waiting for user to press Start or High Score Button...


// =========================== END MAIN  ==========================