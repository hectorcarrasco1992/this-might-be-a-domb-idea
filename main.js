const paragraph = document.querySelector('p')
paragraph.style.color= 'lightblue'

const heading = document.querySelector("h1")
heading.style.fontSize ="10px"

const newParagraph = document.querySelector('p')

newParagraph.innerText="Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress."


const halfT = document.querySelector('#item-13')
halfT.style.opacity= '.5'

const newItem3 = document.querySelector('#item-3')
newItem3.innerText='I say, HI!'

const picture = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
document.querySelector('#dino').src= picture;
document.querySelector('#dino').style.height ='300px'

//const myPIcture = "https://daveceddia.com/images/love-js-hate-css.png"

const myimage =document.createElement('img')
myimage.src= "https://daveceddia.com/images/love-js-hate-css.png"
const wrapperDiv= document.querySelector('div')

const newDiv = document.createElement('div')
newDiv.appendChild(myimage)
wrapperDiv.appendChild(newDiv)



const newItem = document.createElement('li')
newItem.class ='item'
newItem.id = 'item-16'
newItem.innerText='I wont be Fooled Again'
const list =document.querySelector('ul')
list.appendChild(newItem)