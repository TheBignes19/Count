const result = document.querySelector(`.result`)

let count = 0

function add() {
    count++
    result.innerHTML = count
}

function reset() {
    count = 0
    result.innerHTML = count
}

function less() {
    count--
    if (count < 0){
        return reset()
    }
    result.innerHTML = count
}
