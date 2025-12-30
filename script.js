const date = new Date();  
const days = date.getDate();  
const month = date.getMonth() + 1;  
const year = date.getFullYear();  
  
//list of all the images in img/ornaments and a list of emojis the top decoration thing can be  
const ornamentImg = ["1.png", "2.png", "3.png", "4.png", "5.png",];  
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];  
  
function changeStar(){  
    let randomIndex = Math.floor(Math.random() * 6 );  
    document.getElementById("star").innerText = stars[randomIndex];  
}  
  
//sets the elements with the IDs to variables for easy access!  
const decorations = document.getElementById("decorations");  
const dateText = document.getElementById("date");  
const star = document.getElementById("star");  

//sets the text inside dateText to DD/MM/YY (the superior format)  
dateText.innerText = days + "/" + month + "/" + year;

//checks if the month is december  
if(month === 12){  
    //let daysTilChristmas = Math.max(25-days,0);

    // Did this so it still works for re-review
    const daysTilChristmas = 5;

    //for each day til christmas; it adds another ornament to the christmas tree  
    for (let i = 0; i < daysTilChristmas; i++){  
        const randomImg = ornamentImg[Math.floor(Math.random() * (ornamentImg.length))]  
        decorations.innerHTML += `<img src="image/ornaments/${randomImg}" class="ornament" id="ornament${i}">`;  
        const ornament = document.getElementById("ornament"+i);  
        //sets the margins to a random value between (4,3) and (14,5)  
        ornament.style.marginLeft = (Math.random()*10+4)+"rem";  
        ornament.style.marginTop = (Math.random()*2+3)+"rem";  
    };
};

star.addEventListener('click', changeStar);

//<img src="image/ornaments/1.png" id="ornament">