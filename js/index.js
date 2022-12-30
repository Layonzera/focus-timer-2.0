import Sound from './sounds.js'

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonSoundTree = document.querySelector('.sound-tree')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeShop = document.querySelector('.sound-coffe-shop')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')
const buttonBgLight = document.querySelector('.bg-light')
const buttonBgDark = document.querySelector('.bg-dark')
const bgContainer = document.querySelector('.container')
const inputForest = document.querySelector('#in-forest')
const inputRain = document.querySelector('#in-rain')
const inputCoffe = document.querySelector('#in-coffe')
const inputFire = document.querySelector('#in-fire')
let minutes = Number(minutesDisplay.textContent)
let timeOut

const sound = Sound()

function countdown() {
  timeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if (minutes <= 0) {
      resetTimer()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, 0)
  secondsDisplay.textContent = String(seconds).padStart(2, 0)
}

function resetTimer() {
  updateDisplay(minutes, 0)
  clearTimeout(timeOut)
}

function bgDark() {
  bgContainer.style.backgroundColor = 'hsla(0, 0%, 100%, 1)'
  document.documentElement.style.setProperty(
    '--button-color',
    'hsla(240, 9%, 89%, 1)'
  )
  document.documentElement.style.setProperty(
    '--color-text',
    'hsla(240, 6%, 21%, 1)'
  )

  document.documentElement.style.setProperty('--fill', 'hsla(240, 6%, 21%, 1)')

  document.documentElement.style.setProperty(
    '--button-color-hover',
    'hsla(194, 97%, 31%, 1)'
  )

  document.documentElement.style.setProperty(
    '--color-fig',
    'hsla(240, 6%, 21%, 1)'
  )

  document.documentElement.style.setProperty('--color-slider', '#323238')
}

function bgLight() {
  bgContainer.style.backgroundColor = 'hsla(240, 5%, 7%, 1)'
  document.documentElement.style.setProperty(
    '--button-color',
    'hsla(240, 6%, 17%, 1)'
  )
  document.documentElement.style.setProperty(
    '--color-text',
    'hsla(0, 0%, 100%, 1)'
  )

  document.documentElement.style.setProperty('--fill', 'hsla(240, 7%, 78%, 1)')

  document.documentElement.style.setProperty(
    '--button-color-hover',
    'hsla(195, 74%, 15%, 1)'
  )

  document.documentElement.style.setProperty(
    '--color-fig',
    'hsla(240, 7%, 78%, 1)'
  )

  document.documentElement.style.setProperty('--color-slider', '#fff')
}

buttonPlay.addEventListener('click', function () {
  if (minutes <= 0) {
    minutes = 25
    minutesDisplay.textContent = minutes
  }
  countdown()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
})

buttonPlus.addEventListener('click', function () {
  minutes = minutes + 5
  if (minutes >= 0) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
})

buttonLess.addEventListener('click', function () {
  minutes = minutes - 5
  if (minutes >= 0) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
  }
})

buttonSoundTree.addEventListener('click', function () {
  if (!buttonSoundTree.classList.contains('active')) {
    buttonSoundTree.classList.add('active')
    buttonSoundRain.classList.remove('active')
    buttonSoundCoffeShop.classList.remove('active')
    buttonSoundFireplace.classList.remove('active')
    sound.audioTree()
    sound.audioRainStop()
    sound.audioCoffeShopStop()
    sound.audioFireplaceStop()
  } else {
    buttonSoundTree.classList.remove('active')
    sound.audioTreeStop()
  }
})

buttonSoundRain.addEventListener('click', function () {
  if (!buttonSoundRain.classList.contains('active')) {
    buttonSoundTree.classList.remove('active')
    buttonSoundRain.classList.add('active')
    buttonSoundCoffeShop.classList.remove('active')
    buttonSoundFireplace.classList.remove('active')
    sound.audioTreeStop()
    sound.audioRain()
    sound.audioCoffeShopStop()
    sound.audioFireplaceStop()
  } else {
    buttonSoundRain.classList.remove('active')
    sound.audioRainStop()
  }
})

buttonSoundCoffeShop.addEventListener('click', function () {
  if (!buttonSoundCoffeShop.classList.contains('active')) {
    buttonSoundTree.classList.remove('active')
    buttonSoundRain.classList.remove('active')
    buttonSoundCoffeShop.classList.add('active')
    buttonSoundFireplace.classList.remove('active')
    sound.audioTreeStop()
    sound.audioRainStop()
    sound.audioCoffeShop()
    sound.audioFireplaceStop()
  } else {
    buttonSoundCoffeShop.classList.remove('active')
    sound.audioCoffeShopStop()
  }
})

buttonSoundFireplace.addEventListener('click', function () {
  if (!buttonSoundFireplace.classList.contains('active')) {
    buttonSoundTree.classList.remove('active')
    buttonSoundRain.classList.remove('active')
    buttonSoundCoffeShop.classList.remove('active')
    buttonSoundFireplace.classList.add('active')
    sound.audioTreeStop()
    sound.audioRainStop()
    sound.audioCoffeShopStop()
    sound.audioFireplace()
  } else {
    buttonSoundFireplace.classList.remove('active')
    sound.audioFireplaceStop()
  }
})

inputForest.addEventListener('input', () => {
  sound.buttonTree.volume = inputForest.value
})

inputRain.addEventListener('input', () => {
  sound.buttonRain.volume = inputRain.value
})

inputCoffe.addEventListener('input', () => {
  sound.buttonCoffeShop.volume = inputCoffe.value
})

inputFire.addEventListener('input', () => {
  sound.buttonFireplace.volume = inputFire.value
})

buttonBgDark.addEventListener('click', function () {
  buttonBgLight.classList.remove('hide')
  buttonBgDark.classList.add('hide')
  bgLight()
})

buttonBgLight.addEventListener('click', function () {
  buttonBgLight.classList.add('hide')
  buttonBgDark.classList.remove('hide')
  bgDark()
})
