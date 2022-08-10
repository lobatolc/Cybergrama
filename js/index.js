
const title = document.querySelector('.title-game');
const text = document.getElementsByClassName('social-text');
const socialCard = document.querySelector('.aside');
const titleSave = "Cybergrama"
let auxTitle = ""
let count = 0
let socialIsVisible = false
function getRandomString(size) {
    var randomString = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!*';
    for (var i = 0; i < size; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return randomString;
}



const timer = setInterval(()=>{
    if(count<10){
        auxTitle = auxTitle + titleSave[count]
        const aux3 = getRandomString(9-count)
        
        title.innerHTML = auxTitle + aux3
        count++
    }else{
        console.log(titleSave.length)
       
        clearInterval(timer);
    }
    
}, 150)

function showText(){

}

socialCard.addEventListener('mouseenter', (event)=>{
    event.preventDefault();
    socialIsVisible = true
    setTimeout(function(){
        if(socialIsVisible){
            for(let i=0; i<text.length;i++){
                text[i].style.display = "block";
            }
        }
        
    },300);
});

socialCard.addEventListener('mouseleave', (event)=>{
    event.preventDefault();
    socialIsVisible = false
    for(let i=0;i<text.length;i++){
        text[i].style.display = "none";
    }
    
});





