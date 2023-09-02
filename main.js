const countElement = document.querySelector('.counter')
let count = 0

function add() {
count++
countElement.innerHTML = count
}

function less() {
    count--
    if (count < 0) {
      return  reset()
    }
    countElement.innerHTML = count
}
function reset() {
    count = 0
    countElement.innerHTML = count
}