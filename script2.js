var button=document.getElementById("enter");
var Input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var color1=document.getElementById("firstColor");
var color2=document.getElementById("secondColor");
var body1=document.getElementById("gradiant");

console.log(body1);
console.log(color1.value);


function inputvalue() {
    return Input.value.length;
}
function creatlistItem(){
     var li=document.createElement("li");
    li.appendChild(document.createTextNode(Input.value));
    ul.appendChild(li);
    Input.value = "";
}
function addlistafterclick() {
    if (inputvalue() > 0 ){
        creatlistItem()
    }}
function addlistafterkeypress() {
        if (inputvalue() > 0 && event.keyCode==13){
            creatlistItem()
        }}

button.addEventListener("click", addlistafterclick);
Input.addEventListener("keypress", addlistafterkeypress);

function colorChanging() {
    body1.style.background=
        "linear-gradient(to right,"
        + color1.value
        +", " 
        + color2.value
        +")";
}

color1.addEventListener("input", colorChanging );
color2.addEventListener("input", colorChanging );


 

