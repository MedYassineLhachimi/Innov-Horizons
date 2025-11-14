const fadeTopGroup = document.querySelectorAll("#fade-top")
const fadeRightGroup = document.querySelectorAll("#fade-right")
const fadeBottomGroup = document.querySelectorAll("#fade-bottom")
const fadeLeftGroup = document.querySelectorAll("#fade-left")
const fadeInGroup = document.querySelectorAll("#fade-in")

let options = {
    threshold: 0.5,
    rootMargin: "100px 100px 100px 100px"
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
}, options)

fadeTopGroup.forEach(el => {
    observer.observe(el)
})

fadeRightGroup.forEach(el => {
    observer.observe(el)
})

fadeBottomGroup.forEach(el => {
    observer.observe(el)
})

fadeLeftGroup.forEach(el => {
    observer.observe(el)
})

fadeInGroup.forEach(el => {
    observer.observe(el)
})