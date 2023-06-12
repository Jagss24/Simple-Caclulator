function display(value) {
    document.querySelector('p').innerHTML += value
}

function calculate() {
    let value = document.querySelector('p').innerHTML
    let result
    try {
        result = eval(value)
    } catch (err) {
        document.querySelector('p').innerHTML = 'Error'
    }
    document.getElementById('result').innerHTML = result
}
function clearone() {
    let val = document.querySelector('p').innerHTML
    if (val == 'undefined') {
        document.querySelector('p').innerHTML = ""
    }
    else {
        let newval = val.slice(0, val.length - 1)
        document.querySelector('p').innerHTML = newval
    }

}
function clearscreen() {
    document.querySelector('p').innerHTML = ""
}

