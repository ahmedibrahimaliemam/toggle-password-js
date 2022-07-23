let input=document.getElementById("input") ;
let btn=document.getElementById("btn") ;
btn.onclick=function(){
    if(input.getAttribute("type")=="password"){
        input.setAttribute("type","text") ;
        btn.innerHTML="Hide" ;
    }
    else{
        input.setAttribute("type","password") ;
        btn.innerHTML="Show" ;
    }
}