document.body.style.fontFamily='justanotherhand'
document.body.style.backgroundColor= 'silver'
document.body.style.color='black'


let resetbutton=document.querySelector('#reset')

function resetpage(){
    document.body.style.color=('black');document.body.style.backgroundColor=('silver')
}
resetbutton.addEventListener('click', resetpage)





let colorbutton =document.querySelector("#please")

function changebackgroundcolor(){
    document.body.style.backgroundColor ='black';document.body.style.color='white'
}

colorbutton.addEventListener("click", changebackgroundcolor);



let colorbutton2 =document.querySelector("#gabe")

function changebackgroundcolor2(){
    document.body.style.backgroundColor ='white';document.body.style.color="black"
}

colorbutton2.addEventListener("click", changebackgroundcolor2);










