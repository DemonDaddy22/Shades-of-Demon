var span = document.getElementById("intro-cap");
var i = 0;
setInterval(textChanger, 2000);

function textChanger(){
    var texts = ['Developer', 'Foodie', "Photographer", "Person"];
    span.innerHTML = texts[i];
    i = (i+1)%4;
}