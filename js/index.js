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
