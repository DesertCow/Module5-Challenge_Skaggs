//
//
// // Clayton Skaggs
// 5-26-2022
// ==================== Varriable Decleration =====================

var currentTime = moment();


// Grab Display Fields in HTML
var currentTimeEl = document.querySelector(".currentDayCL");
var meetingTextInput = document.querySelector(".hourMeetingInfo");

var saveButton = document.querySelector(".hourSave");


console.log("TIME " + currentTimeEl);

var planner = [
  {
    "hour": "9am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {

  },
]



var objCount = 0;


// ################# Button Listeners #################

saveButton.addEventListener("click", function (clickEvent) {

  if (planner[objCount].saveButtonFlag) {
    meetingTextInput.readOnly = true;
    meetingTextInput.style.backgroundColor = '#EBB938';

    changeToClearButton(objCount);

    saveMeetingInfo(clickEvent);
  } else {
    meetingTextInput.readOnly = false;
    changeToSaveButton(objCount);
    meetingTextInput.style.backgroundColor = '#FAEDCD';
  }


  clickEvent.preventDefault();
});

// ################# Mouse Over Listeners #################

saveButton.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton.style.backgroundColor = '#515B2F';
  } else {
    saveButton.style.backgroundColor = '#E5D2FC';
  }

});

saveButton.addEventListener('mouseout', function handleMouseOut() {
  saveButton.style.backgroundColor = '#CCD5AE';
});



// ==================== Function Decleration  =====================

function init() {

  // preventDefault();

  // Add Time to Front Page
  currentTime.format("MMM Do YYYY");
  currentTimeEl.textContent = currentTime.format("MMM Do YYYY");
  console.log("Init Complete!");
}

// ################# FUNC_NAME #################

function saveMeetingInfo(event) {


  //console.log("Save Meeting DATA = " + meetingTextInput.value)
  //console.log("Save Meeting DATA Stringify = " + JSON.stringify(meetingTextInput.value))
  localStorage.setItem("meetingInfo", meetingTextInput.value);
  //localStorage.setItem("meetingInfo", JSON.stringify(meetingTextInput.value));

}


// ################# changeToClearButton #################
function changeToClearButton(Count) {
  planner[Count].saveButtonFlag = false;
  saveButton.textContent = "Clear";
  saveButton.style.backgroundColor = '#A462F4';

  console.log("Flag = " + planner[Count].saveButtonFlag)
}

// ################# changeToSaveButton #################
function changeToSaveButton(Count) {
  planner[Count].saveButtonFlag = true;
  saveButton.textContent = "Save";
  saveButton.style.backgroundColor = '#515B2F';

  console.log("Flag = " + planner[Count].saveButtonFlag)
}

// ################# FUNC_NAME #################


// ################# FUNC_NAME #################



// ################# FUNC_NAME #################


// ################# FUNC_NAME #################

// =========================== MAIN  ==============================

init();
// Now waiting for user to press Start or High Score Button...


// =========================== END MAIN  ==========================