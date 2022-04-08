// 1)
const xMen = document.getElementById(`x-men`);

// 2)
const centered = document.getElementsByClassName(`center`);

// 3)
// const batman = document.querySelector(`div h2`);
const batman = document.querySelector(`#batman`);

// 4)
const h3s = document.querySelectorAll(`h3`);

// 5)
const h1 = document.querySelector(`h1`);
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;

// 6)
const honorableMentions = document.getElementsByID(`honorable-mentions`);
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;

// 7)
const aTag = document.querySelector(`a`);
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";

// 8)
h1.classList.add(`background`, `text-color`);

// 9)
h1.classList.remove(`background`);

// 10)
const h4 = document.createElement(`h4`);
h4.innerText = "Is Avater: The Last Airbender A Superhero Show?";
const body =document.querySelector(`body`);
body.prepend(h4);

// 11)
const h5 = document.createElement(`h5`);
h5.innerText = "Heroes in a half shell Turtle Power!";
aTag.insertAdjacentElement(`afterend`, h5);

// 12)
const li = document.querySelector(`ul>li`);
li.remove();

// 13)
const divs = document.querySelectorAll(`div`);
divs.forEach((div) => {
    div.classList.toggle(`background`);
});

// 14)
const avengers = [
    "Forever",
    "Fight",
    "As",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];
const newRay = document.createElement(`span`);
function adding (a){
    for (i=0; i<a.length; i++){
        newArray.innerText += a[i]+ ` `;
    }
    body.append(newRay);
};
adding(avengers);