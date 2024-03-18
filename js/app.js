const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    if(counter >= slides.length)return;
    slideImage()
}

const goNext = () => {
    counter++
    if(counter >= slides.length)return;
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}