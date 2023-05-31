

 

const endDate =  prompt("Enter the Date and Time ");

document.getElementById("end-date").innerText =endDate;

const inputs = document.querySelectorAll("input");

 function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    const Days= Math.floor((diff/3600)/24);
    const Hours =Math.floor((diff/3600)%24);
    const Minutes= Math.floor( (diff/60)%60 );
    const seconds =Math.floor(diff)%60;
    if(diff<0){
        return;
    }
 inputs[0].value =Days;
 inputs[1].value =Hours;
 inputs[2].value =Minutes;
 inputs[3].value =seconds;
   //Convet into Days   -- miliseconds to days 
    

 }
//  Initial Call
 clock ();



setInterval( ()=>{clock()},1000);

 /***
  * 1 day = 24 hrs
  * 1 hr = 60 mins
  * 60 min = 3600 sec
  */


