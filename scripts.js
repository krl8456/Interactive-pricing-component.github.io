const perMonthValues = [8, 12, 16, 24, 36]
const perYearValues = [72, 108, 144, 216, 324]
const pageViews = [10, 50, 100, 500, 1]
const slider = document.querySelector('#range')
const dollar = document.querySelector('.dollar')
const toggle = document.querySelector('.toogle')
const pageViewsTxt = document.querySelector('.pageviews')
const toogleBackground = document.querySelector('.toogle-background')
const per = document.querySelector('.per')


dollar.textContent = '$' + perMonthValues[slider.value] + '.00'
if (pageViews[slider.value] === 1) {
    pageViewsTxt.textContent = pageViews[slider.value] + 'M PAGEVIEWS'
}
else {
    pageViewsTxt.textContent = pageViews[slider.value] + 'K PAGEVIEWS'
}


slider.oninput = function() {
    dollar.textContent = '$' + perMonthValues[this.value] + '.00';
    if (pageViews[slider.value] === 1) {
        pageViewsTxt.textContent = pageViews[this.value] + 'M PAGEVIEWS'
    }
    else {
        pageViewsTxt.textContent = pageViews[this.value] + 'K PAGEVIEWS'
    }
}
slider.addEventListener('input', () => {
    const value = slider.value * 25;
    const color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%)${value}%)`
    slider.style.background = color
})
// toogle.addEventListener('click', () => {
//     if (toogleBackground.style.backgroundColor === 'hsl(225, 20%, 60%)') {
//         dollar.textContent = '$' + perYearValues[this.value] + '.00'
//         per.textContent = '/year'
//     }
//     else {
//         dollar.textContent = '$' + perMonthValues[this.value] + '.00'
//         per.textContent = '/month'
//     }
// })