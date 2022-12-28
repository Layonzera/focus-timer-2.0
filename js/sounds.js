export default function () {
  const buttonTree = new Audio('./audio/Floresta.wav')

  const buttonRain = new Audio('./audio/Chuva.wav')

  const buttonCoffeShop = new Audio('./audio/Cafeteria.wav')

  const buttonFireplace = new Audio('./audio/Lareira.wav')

  buttonTree.loop = true
  buttonRain.loop = true
  buttonCoffeShop.loop = true
  buttonFireplace.loop = true

  function audioTree() {
    buttonTree.play()
  }

  function audioRain() {
    buttonRain.play()
  }

  function audioCoffeShop() {
    buttonCoffeShop.play()
  }

  function audioFireplace() {
    buttonFireplace.play()
  }

  function audioTreeStop() {
    buttonTree.pause()
  }

  function audioRainStop() {
    buttonRain.pause()
  }

  function audioCoffeShopStop() {
    buttonCoffeShop.pause()
  }

  function audioFireplaceStop() {
    buttonFireplace.pause()
  }

  return {
    audioTree,
    audioRain,
    audioCoffeShop,
    audioFireplace,
    audioTreeStop,
    audioRainStop,
    audioCoffeShopStop,
    audioFireplaceStop
  }
}
