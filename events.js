function popUp(){
    
        alert("You have clicked me!!")
}

var btn=document.getElementById("myBtn")
btn.addEventListener("click",function(){
    btn.textContent="changed..."

})   

var id1=document.getElementById("id1")
function changeColor(){
  id1.style.background="yellow"  
}

function hide(){
    id1.style.background="white"
}