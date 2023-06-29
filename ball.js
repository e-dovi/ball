var black = document.getElementById("black");
var positionX=0;
var reverse = false;
//console.log(parseInt('2000px'));
function moveBall(){
    
        if(reverse === false){
            positionX += 10;
            black.style.left = positionX + "px";
        }
        else{
            positionX -= 10; 
            black.style.left = positionX + "px";
        }
        if (positionX > 1430 || positionX <= 0){
            reverse = !reverse;
            document.body.appendChild(document.createElement("div")).style.background = `rgb(${Math.floor(Math.random() * 190)}, ${Math.floor(Math.random() * 190)}, ${Math.floor(Math.random() * 190)})`;
        }
  

    //document.body.style.backgroundColor = "white";
}
//console.log("Hello World!");
 setInterval(moveBall, 10);
 function arrange(){
    var others = document.getElementsByTagName("div");
    for(let i=0; i<others.length; i++){
        others[i].style.left = Math.floor(Math.random() *1000) +"px";
        others[i].style.top = Math.floor(Math.random() *600) +"px";
    }
    
 }
 setInterval(arrange, 3500);