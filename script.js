const nightmode= document.querySelector("#nightmode");
const logo= document.querySelector("#logo");
const portfolio=document.querySelector("#port");
const secondh1=document.querySelector("#secondh1");
const firsth1=document.querySelector("#firsth1");
const third=document.querySelector("#third");
const resume=document.querySelector(".resume");
const button=document.querySelector("#btn");
const contact=document.querySelector("#contact");
const light=document.querySelector("#lightmode");
const span=document.querySelector("#span");
const icon=document.querySelector("#first");
const icon2=document.querySelector("#first2");
const icon3=document.querySelector("#first3");
const icon4=document.querySelector("#first4");



function darkmode(){
    logo.style.color="white";
    portfolio.style.color="white";
    secondh1.style.color="rgb(40, 40, 119)";
    firsth1.style.color="white";

    third.style.color="rgb(40, 40, 119)";
    span.style.color="white";
    document.body.style.background ="black";
    resume.style.background=" rgb(13, 137, 185)";
    button.style.color="black";
    icon.style.color="rgb(40, 40, 119)";
    icon2.style.color="rgb(40, 40, 119)";
    icon3.style.color="rgb(40, 40, 119)";
    icon4.style.color="rgb(40, 40, 119)";

    
    button.style.border="3px solid black";
    nightmode.style.display="none";
    light.style.display="flex";
    light.style.color="white";
    



    
    contact.style.color="black";
}
function lightmode() {
    logo.style.color="black";
    portfolio.style.color="black";
    secondh1.style.color="black";
    third.style.color="black";
    document.body.style.background ="white";
    resume.style.background="black";
    button.style.color="white";
    icon.style.color="black";
    icon2.style.color="black";
    icon3.style.color="black";
    icon4.style.color="black";
    span.style.color="rgba(13,137,185)";
    firsth1.style.color="rgba(13,137,185)";
    logo.style.color="rgba(13,137,185)";
    
    
    button.style.border="3px solid rgb(13, 137, 185)";
    nightmode.style.color="black";
    nightmode.style.display="flex";
    
    contact.style.color="white";
}

