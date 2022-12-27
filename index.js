import './index.css'
import WEBPACK_IMG from './assets/webpack.png'

console.log('Hello world')

function createImg(src) {
  const jsImageHTML = document.createElement('img')
  jsImageHTML.classList.add('js-image')
  jsImageHTML.src = src

  document.body.append(jsImageHTML)
}


function createTitle(text) {
  const titleHTML = document.createElement('h1')
  titleHTML.classList.add('title')
  titleHTML.textContent = text

  document.body.append(titleHTML)
}

createTitle('I love Webpack')
createImg(WEBPACK_IMG)
