const perMonthValues = [8, 12, 16, 24, 36]
const perYearValues = [72, 108, 144, 216, 324]
const pageViews = [10, 50, 100, 500, 1]
const slider = document.querySelector('#range')
const dollar = document.querySelector('.dollar')
const toggle = document.querySelector('.toogle')
const pageViewsTxt = document.querySelector('.pageviews')
const toogleBackground = document.querySelector('.toogle-background')
const toogle = document.querySelector('.toogle')
const per = document.querySelector('.per')
const toogleCheckbox = document.querySelector('.toogle-checkbox')


dollar.textContent = '$' + perMonthValues[slider.value] + '.00'
pageViewsContent(slider)


slider.oninput = function() {
    dollar.textContent = '$' + perMonthValues[this.value] + '.00';
    pageViewsContent(this)
}
slider.addEventListener('input', () => {
    const value = slider.value * 25
    const color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%)${value}%)`
    slider.style.background = color
})
toogle.addEventListener('click', () => {
    if(!toogleCheckbox.checked) {
       sliderOnClick(perMonthValues, '/month')
    }
    else {
        sliderOnClick(perYearValues, '/year')
    }             
})
function pageViewsContent(context) {
    if (pageViews[slider.value] === 1) {
        pageViewsTxt.textContent = pageViews[context.value] + 'M PAGEVIEWS'
    }
    else {
        pageViewsTxt.textContent = pageViews[context.value] + 'K PAGEVIEWS'
    }
}
function sliderOnClick(values, text) {
    dollar.textContent = '$' + values[slider.value] + '.00'
        per.textContent = text
        slider.oninput = function() {
            dollar.textContent = '$' + values[this.value] + '.00'
            per.textContent = text
            pageViewsContent(this)
        }   
}