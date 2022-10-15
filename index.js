var displayGreeting = document.getElementById("dategreeting");
var d = new Date();


//to date String
//displayGreeting.innerHTML=d.toDateString();

//displayGreeting.innerHTML=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

var myDate= function (){
    var displayGreeting = document.getElementById("dategreeting");
    var d = new Date();
    var hour=d.getHours();
    if (hour<12){
        var greeting = "Hurray! It is morning";
    }else if(hour==12){
        greeting = "It is noon";
    }
    else if(hour>12 && hour<=16){
        greeting="It is Afternoon";
    }else if (hour>16 && hour<=19){
        greeting="It is Evening";
    }else if(hour>19 && hour<=24){
        greeting="It is Night";
    } else {
        greeting="";
    }
    displayGreeting.innerHTML= "<h3 style='color:white; background:green; border-radius:20px; padding:10px;'>"+ greeting +"</h3>" + "<h4 style='color:blue'>The Time is </h4>" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

setInterval(myDate, 1000);