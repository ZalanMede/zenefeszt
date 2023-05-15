const [red, green, blue] = [65,105,225]
const section2 = document.querySelector('.section2')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 1500
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})