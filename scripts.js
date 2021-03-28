// Write your JavaScript code here.
function init () {
    const shuttleBack = document.getElementById("shuttleBackground");
    const button1 = document.getElementById("takeoff");
    const button2 = document.getElementById("landing");
    const button3 = document.getElementById("missionAbort");
    const status = document.getElementById("flightStatus");
    const spaceHeight = document.getElementById("spaceShuttleHeight");
    const buttonUp = document.getElementById("bUp");
    const buttonDown = document.getElementById("bDown");
    const buttonRight = document.getElementById("bRight");
    const buttonLeft = document.getElementById("bLeft");
    const imgrocket = document.getElementById("rocket");

    buttonUp.addEventListener("click",function(){
        spaceHeight.innerHTML = Number(spaceHeight.innerHTML) + 10000;
        imgrocket.style.top = imgrocket.offsetTop - 10 + 'px';
    });

    buttonDown.addEventListener("click",function(){
        spaceHeight.innerHTML = Number(spaceHeight.innerHTML) - 10000;
        imgrocket.style.top = imgrocket.offsetTop + 10 + 'px';
    });
    
    buttonRight.addEventListener("click",function(){        
        imgrocket.style.left = imgrocket.offsetLeft + 10 + 'px';
    });

    buttonLeft.addEventListener("click",function(){
        imgrocket.style.left = imgrocket.offsetLeft - 10 + 'px';
    });

    button1.addEventListener("click",function(){
        let conf1 =window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (conf1==true)
        {            
            status.innerHTML = "Shuttle in flight";
            shuttleBack.style.backgroundColor = "blue";
            spaceHeight.innerHTML = 10000 ;
        }  
    });
    button2.addEventListener("click",function(){
        let conf2 =window.confirm("The shuttle is landing. Landing gear engaged");
        if(conf2==true)
        {
            status.innerHTML = "The shuttle has landed.";
            shuttleBack.style.backgroundColor = "green";
            spaceHeight.innerHTML = 0;
        }
        

    });
    button3.addEventListener("click",function(){
        let conf3 =window.confirm("Confirm that you want to abort the mission.");
        if(conf3==true)
        {
            status.innerHTML = "Mission aborted";
            shuttleBack.style.backgroundColor = "green";
            spaceHeight.innerHTML = 0;
        }
        

    });
}

// Remember to pay attention to page loading!
window.addEventListener("load", init);