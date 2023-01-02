let moon = document.getElementsByClassName( "fa-moon" )[0];
let calculatorContanier = document.getElementsByClassName( "calculator" )[0];
let iconsHolder = document.getElementsByClassName( "body_Upper" )[0];
let sun = document.getElementsByClassName( "fa-sun" )[0];
let footer_border = document.getElementsByClassName( "row_6" )[0];
let h2 = document.querySelectorAll( "h2" ).forEach( element => {
    element.style.color = "white";

} );

let outuput = document.getElementById( 'inputText' );
let dateAndTime = new Date();

let timeHolder = document.getElementById( 'time' );

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    timeHolder.style.color="#F1BB00";
    timeHolder.style.fontWeight="bold";
    setTimeout(showTime, 1000);
    
}

showTime();



let calculate = ( number ) => {

    // outuput.style.color="white";
    outuput.value = outuput.value + number;
    outuput.style.color = "orange";


    outuput.style.transition = "all 0.5s ease 0s";


}
let result = () => {

    try {
        outuput.value = eval( outuput.value );
    }
    catch ( err ) {
        alert( "Add Valid Input" );
    }
}


let clr = () => {

    outuput.value = " ";
}

let del = () => {
    outuput.value = outuput.value.slice( 0, -1 );
}
moon.addEventListener( "click", turnLightMoon = () => {
    moon.style.color = "#000";
    sun.style.color = "#000";
    iconsHolder.style.background = "#fff";
    iconsHolder.style.borderRadius = "2px 2px 2px 2px rgba(0,0,0,0.25)";
    sun.style.cursor = "pointer";
    moon.style.cursor = "pointer";
    calculatorContanier.style.background = '#fff';
    footer_border.style.background = "#000";
    calculatorContanier.style.transition = "all 0.9s ease 0s";
    let icons = document.querySelectorAll( "i" ).forEach( icon => {
        icon.style.color = "#000";
    } );
    let buttons = document.querySelectorAll( "button" ).forEach( ( button ) => {
        button.style.background = "#fff";
        button.style.color = "#000";
    } );
    let parargrpah = document.querySelectorAll( "p" ).forEach( element => {
        element.style.color = "black";
    } );

    let h2 = document.querySelectorAll( "h2" ).forEach( element => {
        element.style.color = "black";

    } );


} );

sun.addEventListener( "click", turnLightSun = () => {
    iconsHolder.style.background = "#292D36";
    moon.style.color = "#fff";
    sun.style.color = "#fff";
    calculatorContanier.style.background = '#292D36';
    footer_border.style.background = "white";
    calculatorContanier.style.transition = "all 0.9s ease 0s";
    let icons = document.querySelectorAll( "i" ).forEach( icon => {
        icon.style.color = "white";
    } );
    let buttons = document.querySelectorAll( "button" ).forEach( ( button ) => {
        button.style.background = "#292D36";
        button.style.color = "#fff";

    } );
    let parargrpah = document.querySelectorAll( "p" ).forEach( element => {
        element.style.color = "#fff";
    } );
    let h2 = document.querySelectorAll( "h2" ).forEach( element => {
        element.style.color = "white";

    } );
} );

