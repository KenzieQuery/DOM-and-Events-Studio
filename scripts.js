// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    alert("The window loaded!")
    //buttons
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById(("left"));
    let rocketImage = document.getElementById("")

    //html elements we are effecting with our buttons
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")

    takeOffButton.addEventListener("click", function(){
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeOffConfirmation === true){ //same as if(takeOffConfirmation){}
            flightStatus.innerHTML = "Shuttle in flight!"
            shuttleBackground.style = "background-color: blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    })

    landingButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style = "background-color: green";
        spaceShuttleHeight.innerHTML = 0
    })

    abortButton.addEventListener("click", function(){
        let abortMissionConfirmation = window.confirm("Confirm that you want to abort the mission.")
        if(abortMissionConfirmation === true){ //same as if(takeOffConfirmation){}
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style = "background-color: green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    
    upButton.addEventListener("click", function (){
        let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
        spaceShuttleHeight.innerHTML = shuttleHeightNumber + 10000; 
        let bottomPosition = rocketImage.style.bottom;
        let bottomPositionNumber = parseInt(bottomPosition);
        let movement = bottomPositionNumber + 10 + 'px';
        // assign this style.bottom protperty to a string ie. "10px"
        rocketImage.style.bottom = movement;
    })

    downButton.addEventListener("click", function (){
        let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
        spaceShuttleHeight.innerHTML = shuttleHeightNumber - 10000; 
    })

    // upButton.addEventListener("")
    // downButton.addEventListener("")
    // rightButton.addEventListener("")
    // leftButton.addEventListener("")

})



