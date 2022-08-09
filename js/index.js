
const title = document.querySelector('.title-game');
const text = document.getElementsByClassName('social-text');
const socialCard = document.querySelector('.aside');
const aux = "Cybergrama"
let aux2 = ""
let count = 0
function getRandomString(size) {
    var randomString = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    for (var i = 0; i < size; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomString;
}



const timer = setInterval(()=>{
    if(count<10){
        aux2 = aux2 + aux[count]
        const aux3 = getRandomString(9-count)
        
        title.innerHTML = aux2 + aux3
        count++
    }else{
        console.log(aux.length)
       
        clearInterval(timer);
    }
    
}, 150)

function showText(){

}

socialCard.addEventListener('mouseenter', (event)=>{
    event.preventDefault();
    setTimeout(function(){
        for(let i=0; i<text.length;i++){
            text[i].style.display = "block";
        }
    },500);
});

socialCard.addEventListener('mouseleave', (event)=>{
    event.preventDefault();
    for(let i=0;i<text.length;i++){
        text[i].style.display = "none";
    }
    
});





