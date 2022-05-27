//
//
// // Clayton Skaggs
// 5-26-2022
// ==================== Varriable Decleration =====================

var currentTime = moment();

var masterKey = "WorkDayScheduleData";


// Grab Display Fields in HTML
var currentTimeEl = document.querySelector(".currentDayCL");
var meetingTextInput = document.querySelector(".hourMeetingInfo");

var saveButton9 = document.querySelector(".hourSave9");
var saveButton10 = document.querySelector(".hourSave10");
var saveButton11 = document.querySelector(".hourSave11");
var saveButton12 = document.querySelector(".hourSave12");
var saveButton13 = document.querySelector(".hourSave13");
var saveButton14 = document.querySelector(".hourSave14");
var saveButton15 = document.querySelector(".hourSave15");
var saveButton16 = document.querySelector(".hourSave16");
var saveButton17 = document.querySelector(".hourSave17");


var planner = [
  {
    "hour": "9am",
    "meetingNotes": "Temp",
    "saveButtonFlag": true,
  },
  {
    "hour": "10am",
    "meetingNotes": "Temp",
    "saveButtonFlag": true,
  },
  {
    "hour": "11am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "12am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "13am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "14am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "15am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "16am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  },
  {
    "hour": "17am",
    "meetingNotes": "",
    "saveButtonFlag": true,
  }
]



var objCount = 0;


// ################# Button Listeners #################

saveButton9.addEventListener("click", function (clickEvent) {

  if (planner[objCount].saveButtonFlag) {
    meetingTextInput.readOnly = true;
    meetingTextInput.style.backgroundColor = '#EBB938';

    changeToClearButton(objCount);

    // saveMeetingInfo(clickEvent);
    //saveMeetingInfo(objCount, objCount);
    saveMeetingInfo(masterKey, 0, meetingTextInput.value)
  } else {
    meetingTextInput.readOnly = false;
    changeToSaveButton(objCount);
    meetingTextInput.style.backgroundColor = '#FAEDCD';
  }

  clickEvent.preventDefault();
});

// ################# Mouse Over Listeners #################

saveButton9.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton9.style.backgroundColor = '#515B2F';
  } else {
    saveButton9.style.backgroundColor = '#E5D2FC';
  }

});

saveButton9.addEventListener('mouseout', function handleMouseOut() {
  saveButton9.style.backgroundColor = '#CCD5AE';
});

saveButton10.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton10.style.backgroundColor = '#515B2F';
  } else {
    saveButton10.style.backgroundColor = '#E5D2FC';
  }

});

saveButton10.addEventListener('mouseout', function handleMouseOut() {
  saveButton10.style.backgroundColor = '#CCD5AE';
});

saveButton11.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton11.style.backgroundColor = '#515B2F';
  } else {
    saveButton11.style.backgroundColor = '#E5D2FC';
  }

});

saveButton11.addEventListener('mouseout', function handleMouseOut() {
  saveButton11.style.backgroundColor = '#CCD5AE';
});

saveButton12.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton12.style.backgroundColor = '#515B2F';
  } else {
    saveButton12.style.backgroundColor = '#E5D2FC';
  }

});

saveButton12.addEventListener('mouseout', function handleMouseOut() {
  saveButton12.style.backgroundColor = '#CCD5AE';
});

saveButton13.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton13.style.backgroundColor = '#515B2F';
  } else {
    saveButton13.style.backgroundColor = '#E5D2FC';
  }

});

saveButton13.addEventListener('mouseout', function handleMouseOut() {
  saveButton13.style.backgroundColor = '#CCD5AE';
});

saveButton14.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton14.style.backgroundColor = '#515B2F';
  } else {
    saveButton14.style.backgroundColor = '#E5D2FC';
  }

});

saveButton14.addEventListener('mouseout', function handleMouseOut() {
  saveButton14.style.backgroundColor = '#CCD5AE';
});

saveButton15.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton15.style.backgroundColor = '#515B2F';
  } else {
    saveButton15.style.backgroundColor = '#E5D2FC';
  }

});

saveButton15.addEventListener('mouseout', function handleMouseOut() {
  saveButton15.style.backgroundColor = '#CCD5AE';
});

saveButton16.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton16.style.backgroundColor = '#515B2F';
  } else {
    saveButton16.style.backgroundColor = '#E5D2FC';
  }

});

saveButton16.addEventListener('mouseout', function handleMouseOut() {
  saveButton16.style.backgroundColor = '#CCD5AE';
});

saveButton17.addEventListener('mouseover', function handleMouseOver() {

  if (planner[objCount].saveButtonFlag) {
    saveButton17.style.backgroundColor = '#515B2F';
  } else {
    saveButton17.style.backgroundColor = '#E5D2FC';
  }

});

saveButton17.addEventListener('mouseout', function handleMouseOut() {
  saveButton17.style.backgroundColor = '#CCD5AE';
});



// ==================== Function Decleration  =====================

function init() {

  // preventDefault();

  // Add Time to Front Page
  currentTime.format("MMM Do YYYY");
  currentTimeEl.textContent = currentTime.format("MMM Do YYYY");

  //loadDataFromLocal(masterKey);


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

function saveMeetingInfo(key, time, data) {

  var tempPlanner = JSON.parse(localStorage.getItem(key));

  tempPlanner[time].meetingNotes = meetingTextInput.value;

  //console.log("Save Meeting DATA = " + meetingTextInput.value)
  //console.log("Save Meeting DATA Stringify = " + JSON.stringify(meetingTextInput.value))
  //localStorage.setItem(hour + "-meetingInfo", meetingTextInput.value);
  localStorage.setItem(key, JSON.stringify(meetingTextInput.value));
  localStorage.setItem("0-meetingInfo", JSON.stringify(meetingTextInput.value));

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
function updateSchedule(data, time, storeOBJ) {

  console.log("This Function stores [" + data + "] For the corresponding time " + time);

  storeOBJ[time].meetingNotes = data;
  console.log("Notes = " + storeOBJ[time].meetingNotes);
  //console.log("Notes = " + planner[time].saveButtonFlag);

  storeToLocal(storeOBJ, masterKey);

  pageRefresh(storeOBJ);



}

function loadSchedule() {

  console.log("This Functions loads the previous session data ");

}

// ################# loadDataFromLocal #################
function loadDataFromLocal(key) {

  // Load planner Object from local Storeage and set equal to planner OBJ

  console.log("Load Key = " + key + " ||");
  console.log("Local Store Meeting Text =" + JSON.parse(localStorage.getItem(key)));
  //meetingTextInput.value = JSON.parse(localStorage.getItem(hour + "-meetingInfo"));
  planner = JSON.parse(localStorage.getItem(key));

  // console.log("Notes Loaded to Planner 0 = " + planner[0].meetingNotes)
  // console.log("Notes Loaded to Planner 1 = " + planner[1].meetingNotes)
  // console.log("Notes Loaded to Planner 2 = " + planner[2].meetingNotes)
  // console.log("Notes Loaded to Planner 3 = " + planner[3].meetingNotes)
}

// ################# storeToLocal #################
function storeToLocal(data, key) {

  console.log("Store Key = " + key + " || Data: " + JSON.stringify(data));

  localStorage.setItem(key, JSON.stringify(data));

  console.log("Local Store Meeting Text =" + JSON.parse(localStorage.getItem(key)));
  //meetingTextInput.value = JSON.parse(localStorage.getItem(hour + "-meetingInfo"));
  //meetingTextInput.value = JSON.parse(localStorage.getItem("0-meetingInfo"));
}

// ################# FUNC_NAME #################
function pageRefresh(storeOBJ) {

  // Refresh all Meetings notes on page with the data from storeOBJ
  console.log("Add Refresh Logic Here")

  //Refresh each meeting info block on page

  meetingTextInput.value = storeOBJ[0].meetingNotes;

  //Update all buttons to reflect state defined by planner.saveButtonFlag

}

// ################# FUNC_NAME #################

// =========================== MAIN  ==============================

init();
// Now waiting for user to press Start or High Score Button...

//loadDataFromLocal(0);

updateSchedule("Hello Test1 2 3", 0, planner);
updateSchedule("HellDSAASSADSA", 3, planner);
updateSchedule("HelSADASDSA1 2 3", 2, planner);
// =========================== END MAIN  ==========================