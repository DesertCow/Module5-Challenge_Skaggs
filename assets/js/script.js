//
//
// // Clayton Skaggs
// 5-26-2022
// ==================== Varriable Decleration =====================

var currentTime = moment();

var masterKey = "WorkDayScheduleData";


// Grab Display Fields in HTML
var currentTimeEl = document.querySelector(".currentDayCL");
var currentHourEl = document.querySelector(".currentTimeCL");

var meetingTextInput9 = document.querySelector(".hourMeetingInfo9");
var meetingTextInput10 = document.querySelector(".hourMeetingInfo10");
var meetingTextInput11 = document.querySelector(".hourMeetingInfo11");
var meetingTextInput12 = document.querySelector(".hourMeetingInfo12");
var meetingTextInput13 = document.querySelector(".hourMeetingInfo13");
var meetingTextInput14 = document.querySelector(".hourMeetingInfo14");
var meetingTextInput15 = document.querySelector(".hourMeetingInfo15");
var meetingTextInput16 = document.querySelector(".hourMeetingInfo16");
var meetingTextInput17 = document.querySelector(".hourMeetingInfo17");

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



//var objCount = 0;


// // ################################## Button Listeners ##################################

saveButton9.addEventListener("click", function (clickEvent) {

  if (planner[0].saveButtonFlag) {
    meetingTextInput9.readOnly = true;
    meetingTextInput9.style.backgroundColor = '#EBB938';

    changeToClearButton(0, 9);
    saveMeetingInfo(masterKey, 0, meetingTextInput9.value);

  } else {
    meetingTextInput9.readOnly = false;
    changeToSaveButton(0, 9);
    meetingTextInput9.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton10.addEventListener("click", function (clickEvent) {

  if (planner[1].saveButtonFlag) {
    meetingTextInput10.readOnly = true;
    meetingTextInput10.style.backgroundColor = '#EBB938';

    changeToClearButton(1, 10);
    saveMeetingInfo(masterKey, 1, meetingTextInput10.value);

  } else {
    meetingTextInput10.readOnly = false;
    changeToSaveButton(1, 10);
    meetingTextInput10.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton11.addEventListener("click", function (clickEvent) {

  if (planner[2].saveButtonFlag) {
    meetingTextInput11.readOnly = true;
    meetingTextInput11.style.backgroundColor = '#EBB938';

    changeToClearButton(2, 11);
    saveMeetingInfo(masterKey, 2, meetingTextInput11.value);

  } else {
    meetingTextInput11.readOnly = false;
    changeToSaveButton(2, 11);
    meetingTextInput11.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton12.addEventListener("click", function (clickEvent) {

  if (planner[3].saveButtonFlag) {
    meetingTextInput12.readOnly = true;
    meetingTextInput12.style.backgroundColor = '#EBB938';

    changeToClearButton(3, 12);
    saveMeetingInfo(masterKey, 3, meetingTextInput12.value);

  } else {
    meetingTextInput12.readOnly = false;
    changeToSaveButton(3, 12);
    meetingTextInput12.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton13.addEventListener("click", function (clickEvent) {

  if (planner[4].saveButtonFlag) {
    meetingTextInput13.readOnly = true;
    meetingTextInput13.style.backgroundColor = '#EBB938';

    changeToClearButton(4, 13);
    saveMeetingInfo(masterKey, 4, meetingTextInput13.value);

  } else {
    meetingTextInput13.readOnly = false;
    changeToSaveButton(4, 13);
    meetingTextInput13.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton14.addEventListener("click", function (clickEvent) {

  if (planner[5].saveButtonFlag) {
    meetingTextInput14.readOnly = true;
    meetingTextInput14.style.backgroundColor = '#EBB938';

    changeToClearButton(5, 14);
    saveMeetingInfo(masterKey, 5, meetingTextInput14.value);

  } else {
    meetingTextInput14.readOnly = false;
    changeToSaveButton(5, 14);
    meetingTextInput14.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton15.addEventListener("click", function (clickEvent) {

  if (planner[6].saveButtonFlag) {
    meetingTextInput15.readOnly = true;
    meetingTextInput15.style.backgroundColor = '#EBB938';

    changeToClearButton(6, 15);
    saveMeetingInfo(masterKey, 6, meetingTextInput15.value);

  } else {
    meetingTextInput15.readOnly = false;
    changeToSaveButton(6, 15);
    meetingTextInput15.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton16.addEventListener("click", function (clickEvent) {

  if (planner[7].saveButtonFlag) {
    meetingTextInput16.readOnly = true;
    meetingTextInput16.style.backgroundColor = '#EBB938';

    changeToClearButton(7, 16);
    saveMeetingInfo(masterKey, 7, meetingTextInput16.value);

  } else {
    meetingTextInput16.readOnly = false;
    changeToSaveButton(7, 16);
    meetingTextInput16.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

saveButton17.addEventListener("click", function (clickEvent) {

  if (planner[8].saveButtonFlag) {
    meetingTextInput17.readOnly = true;
    meetingTextInput17.style.backgroundColor = '#EBB938';

    changeToClearButton(8, 17);
    saveMeetingInfo(masterKey, 8, meetingTextInput17.value);

  } else {
    meetingTextInput17.readOnly = false;
    changeToSaveButton(8, 17);
    meetingTextInput17.style.backgroundColor = '#FAEDCD';
  }
  clickEvent.preventDefault();
});

// ################################## Mouse Over/Out Listeners ##################################

saveButton9.addEventListener('mouseover', function handleMouseOver() {

  if (planner[0].saveButtonFlag) {
    saveButton9.style.backgroundColor = '#515B2F';
  } else {
    saveButton9.style.backgroundColor = '#FABCBF';
  }

});

saveButton9.addEventListener('mouseout', function handleMouseOut() {
  if (planner[0].saveButtonFlag) {
    saveButton9.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton9.style.backgroundColor = '#F46269';
  }
});

saveButton10.addEventListener('mouseover', function handleMouseOver() {

  if (planner[1].saveButtonFlag) {
    saveButton10.style.backgroundColor = '#515B2F';
  } else {
    saveButton10.style.backgroundColor = '#FABCBF';
  }

});

saveButton10.addEventListener('mouseout', function handleMouseOut() {
  if (planner[1].saveButtonFlag) {
    saveButton10.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton10.style.backgroundColor = '#F46269';
  }
});

saveButton11.addEventListener('mouseover', function handleMouseOver() {

  if (planner[2].saveButtonFlag) {
    saveButton11.style.backgroundColor = '#515B2F';
  } else {
    saveButton11.style.backgroundColor = '#FABCBF';
  }

});

saveButton11.addEventListener('mouseout', function handleMouseOut() {
  if (planner[2].saveButtonFlag) {
    saveButton11.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton11.style.backgroundColor = '#F46269';
  }
});

saveButton12.addEventListener('mouseover', function handleMouseOver() {

  if (planner[3].saveButtonFlag) {
    saveButton12.style.backgroundColor = '#515B2F';
  } else {
    saveButton12.style.backgroundColor = '#FABCBF';
  }

});

saveButton12.addEventListener('mouseout', function handleMouseOut() {
  if (planner[3].saveButtonFlag) {
    saveButton12.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton12.style.backgroundColor = '#F46269';
  }
});

saveButton13.addEventListener('mouseover', function handleMouseOver() {

  if (planner[4].saveButtonFlag) {
    saveButton13.style.backgroundColor = '#515B2F';
  } else {
    saveButton13.style.backgroundColor = '#FABCBF';
  }

});

saveButton13.addEventListener('mouseout', function handleMouseOut() {
  if (planner[4].saveButtonFlag) {
    saveButton13.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton13.style.backgroundColor = '#F46269';
  }
});

saveButton14.addEventListener('mouseover', function handleMouseOver() {

  if (planner[5].saveButtonFlag) {
    saveButton14.style.backgroundColor = '#515B2F';
  } else {
    saveButton14.style.backgroundColor = '#FABCBF';
  }

});

saveButton14.addEventListener('mouseout', function handleMouseOut() {
  if (planner[5].saveButtonFlag) {
    saveButton14.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton14.style.backgroundColor = '#F46269';
  }
});

saveButton15.addEventListener('mouseover', function handleMouseOver() {

  if (planner[6].saveButtonFlag) {
    saveButton15.style.backgroundColor = '#515B2F';
  } else {
    saveButton15.style.backgroundColor = '#FABCBF';
  }

});

saveButton15.addEventListener('mouseout', function handleMouseOut() {
  if (planner[6].saveButtonFlag) {
    saveButton15.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton15.style.backgroundColor = '#F46269';
  }
});

saveButton16.addEventListener('mouseover', function handleMouseOver() {

  if (planner[7].saveButtonFlag) {
    saveButton16.style.backgroundColor = '#515B2F';
  } else {
    saveButton16.style.backgroundColor = '#FABCBF';
  }

});

saveButton16.addEventListener('mouseout', function handleMouseOut() {
  if (planner[7].saveButtonFlag) {
    saveButton16.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton16.style.backgroundColor = '#F46269';
  }
});

saveButton17.addEventListener('mouseover', function handleMouseOver() {

  if (planner[8].saveButtonFlag) {
    saveButton17.style.backgroundColor = '#515B2F';
  } else {
    saveButton17.style.backgroundColor = '#FABCBF';
  }

});

saveButton17.addEventListener('mouseout', function handleMouseOut() {
  if (planner[8].saveButtonFlag) {
    saveButton17.style.backgroundColor = '#CCD5AE';
  } else {
    saveButton17.style.backgroundColor = '#F46269';
  }
});

// ==================== Function Decleration  =====================

function init() {

  // preventDefault();

  // Add Time to Front Page
  currentTime.format("MMM Do YYYY");
  currentTimeEl.textContent = currentTime.format("MMM Do YYYY");
  currentHourEl.textContent = currentTime.format("h:mm A");

  //colorTime = currentTime.format("H");
  colorTime = 22;
  console.log("Color Time = " + colorTime)

  for (var i = 9; i < 18; i++) {

    var iBoxVar;

    if (i < colorTime) {
      //Past
      iBoxVar = "meetingTextInput" + i + ".style.backgroundColor = '#C0C5BF'";
      if (8 < i < 18) {
        eval(iBoxVar);
      }


    } else {
      //Future
      iBoxVar = "meetingTextInput" + i + ".style.backgroundColor = '#D4A373'";
      if (8 << i << 18) {
        eval(iBoxVar);
      }

    }
  }

  //Set Current Time box to green

  if ((8 < colorTime) && (colorTime < 18)) {
    var currentBoxVar = "meetingTextInput" + colorTime + ".style.backgroundColor = '#CCD5AE'";
    console.log("currentBoxEVAL = " + currentBoxVar)
    eval(currentBoxVar);
  }

  console.log("Init Complete!");
}

// ################# saveMeetingInfo #################
function saveMeetingInfo(key, time, data) {

  var tempPlanner = JSON.parse(localStorage.getItem(key));

  console.log("tempPlanner||   tempPlanner[" + time + "].meetingNotes = meetingTextInput" + (time + 9) + ".value;")
  console.log("FFFGFGFG = " + meetingTextInput17.value);
  eval("tempPlanner[" + time + "].meetingNotes = meetingTextInput" + (time + 9) + ".value;")

  //console.log("Save Meeting DATA = " + meetingTextInput.value)
  //console.log("Save Meeting DATA Stringify = " + JSON.stringify(meetingTextInput.value))
  //localStorage.setItem(hour + "-meetingInfo", meetingTextInput.value);
  eval("localStorage.setItem(key, JSON.stringify(meetingTextInput" + (time + 9) + ".value));");
  eval('localStorage.setItem("0 - meetingInfo", JSON.stringify(meetingTextInput' + (time + 9) + '.value));');

}



// ################# changeToClearButton #################
function changeToClearButton(Count, row) {
  console.log("Flag = " + planner[Count].saveButtonFlag + " | " + Count);
  planner[Count].saveButtonFlag = false;
  eval("saveButton" + row + ".textContent = 'Clear';");
  eval("saveButton" + row + ".style.backgroundColor = '#F46269'");

}

// ################# changeToSaveButton #################
function changeToSaveButton(Count, row) {
  console.log("Flag = " + planner[Count].saveButtonFlag + " | " + Count);
  planner[Count].saveButtonFlag = true;
  eval("saveButton" + row + ".textContent = 'Save'");
  eval("saveButton" + row + ".style.backgroundColor = '#515B2F'");
}


// ################# updateSchedule #################
function updateSchedule(data, time, storeOBJ) {

  console.log("This Function stores [" + data + "] For the corresponding time " + time);

  storeOBJ[time].meetingNotes = data;
  console.log("Notes = " + storeOBJ[time].meetingNotes);
  //console.log("Notes = " + planner[time].saveButtonFlag);

  storeToLocal(storeOBJ, masterKey);

  pageRefresh(storeOBJ);

}

// ################# loadSchedule #################
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

// ################# pageRefresh #################
function pageRefresh(storeOBJ) {

  // Refresh all Meetings notes on page with the data from storeOBJ
  console.log("Add Refresh Logic Here")

  //Refresh each meeting info block on page

  meetingTextInput9.value = storeOBJ[0].meetingNotes;
  meetingTextInput10.value = storeOBJ[1].meetingNotes;
  meetingTextInput11.value = storeOBJ[2].meetingNotes;
  meetingTextInput12.value = storeOBJ[3].meetingNotes;
  meetingTextInput13.value = storeOBJ[4].meetingNotes;
  meetingTextInput14.value = storeOBJ[5].meetingNotes;
  meetingTextInput15.value = storeOBJ[6].meetingNotes;
  meetingTextInput16.value = storeOBJ[7].meetingNotes;
  meetingTextInput17.value = storeOBJ[8].meetingNotes;

  //Update all buttons to reflect state defined by planner.saveButtonFlag

}

// ################# FUNC_NAME #################

// =========================== MAIN  ==============================

init();
// Now waiting for user to press Start or High Score Button...

//loadDataFromLocal(0);

updateSchedule("Weekly Technical Project Sync", 0, planner);
updateSchedule("1:1 meeting with Manager", 1, planner);
updateSchedule("Pair Coding Session", 2, planner);
updateSchedule("Peer Code Review", 3, planner);
updateSchedule("Lunch", 4, planner);
updateSchedule("Training Session", 5, planner);
updateSchedule("Coding Block", 6, planner);
updateSchedule("Coding Block", 7, planner);
updateSchedule("SUM Meeting + Happy Hour", 8, planner);
// =========================== END MAIN  ==========================