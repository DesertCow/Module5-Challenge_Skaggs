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

    // saveMeetingInfo(clickEvent);
    saveMeetingInfo(objCount, objCount);
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

  //loadDataFromLocal(0);
  //loadDataFromLocal(1);
  //loadDataFromLocal(2);
  //loadDataFromLocal(3);
  //loadDataFromLocal(4);
  //loadDataFromLocal(5);
  //loadDataFromLocal(6);

  console.log("Init Complete!");
}

// ################# FUNC_NAME #################

function saveMeetingInfo(hour, data) {


  //console.log("Save Meeting DATA = " + meetingTextInput.value)
  //console.log("Save Meeting DATA Stringify = " + JSON.stringify(meetingTextInput.value))
  //localStorage.setItem(hour + "-meetingInfo", meetingTextInput.value);
  localStorage.setItem(hour + "-meetingInfo", JSON.stringify(meetingTextInput.value));
  localStorage.setItem("0-meetingInfo", JSON.stringify(meetingTextInput.value));

}

// ################# loadDataFromLocal #################
function loadDataFromLocal(hour) {

  var key = hour + "-meetingInfo";
  console.log("Hour =" + key);
  console.log("Local Store Meeting Text =" + JSON.parse(localStorage.getItem("0-meetingInfo")));
  //meetingTextInput.value = JSON.parse(localStorage.getItem(hour + "-meetingInfo"));
  meetingTextInput.value = JSON.parse(localStorage.getItem("0-meetingInfo"));
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

// =========================== MAIN  ==============================

init();
// Now waiting for user to press Start or High Score Button...

loadDataFromLocal(0);
// =========================== END MAIN  ==========================