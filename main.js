let stopbtn = document.getElementById("stopButton")
let slowbtn = document.getElementById("slowButton")
let gobtn = document.getElementById("goButton")
let stoplight1 = document.getElementById("stopLight")
let slowLight1 = document.getElementById("slowLight")
let goLight1 = document.getElementById("goLight")





function stop () {
    stopbtn.addEventListener("click", function myfun(){
        blackClor()
        stoplight1.style.backgroundColor = "red";


    })
}stop();



function slow () {
    slowbtn.addEventListener("click", function myfun(){
        blackClor()
        slowLight1.style.backgroundColor = "yellow";
   


    })
}slow();



function go () {
    gobtn.addEventListener("click", function myfun(){
        blackClor()
        goLight1.style.backgroundColor = "green";
        
        


    })
}go();


function blackClor() {

    stoplight1.style.backgroundColor = "black";
    slowLight1.style.backgroundColor = "black";
    goLight1.style.backgroundColor = "black";
    
}


