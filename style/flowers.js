let container = document.querySelector('div.container')

// FIRST DIV 
let newCard = document.createElement('div')
newCard.classNme = 'post11'
let heading = document.createElement('h3')
heading.textContent = 'November'
let cardImage = document.createElement('img')
cardImage.src = './images/chrys.jpg'
let cardText = document.createElement('p')
cardText.textContent = 'The chrysanthemum symbolize loyalty and honesty.'

newCard.appendChild(heading);
newCard.appendChild(cardImage);
newCard.appendChild(cardText);
container.appendChild(newCard);


// SECOND DIV 
let newCard1 = document.createElement('div')
newCard1.classNme = 'post12'
let heading1 = document.createElement('h3')
heading1.textContent = 'December'
let cardImage1 = document.createElement('img')
cardImage1.src = './images/narc.jpg'
let cardText1 = document.createElement('p')
cardText1.textContent = 'The narcissus symbolize hope and wealth as hollies symbolize protection and defense.'

newCard1.appendChild(heading1);
newCard1.appendChild(cardImage1);
newCard1.appendChild(cardText1);
container.appendChild(newCard1);