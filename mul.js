const displayedImage = document.querySelector('.display');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const gallaryimages=["Heeriye(PaglaSongs).mp3","Aagi Aagi - Ee Nagaraniki Emaindi ! Telugu.mp3","Avicii_-_Levels.mp3"]
/* Declaring the alternative text for each image file */

const altText=["picture 1","picture 2","picture 3","picture 4","picture 5"]

/* Looping through images */
for(i=0; i < gallaryimages.length;i++){

    const newImage = document.createElement('img');

    newImage.setAttribute('src', gallaryimages[i]);

    newImage.setAttribute('alt', altText[i]);

    thumbBar.appendChild(newImage);

    newImage.addEventListener('click',()=>{

     displaye.setAttribute("src",newImage.getAttribute("src"));

     displaye.setAttribute('alt',newImage.getAttribute("alt"));  

    });

    }

 /* Wiring up the Darken/Lighten button */