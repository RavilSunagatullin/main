const submit = document.querySelector('#submit')
let out = document.getElementById('input-id')

submit.addEventListener('click', function(event){
     counting(out)
})

document.querySelectorAll('.calc__btn').forEach(elem => {
    elem.addEventListener('click', function(event){
        key = event.target.textContent
        if(key == 'ac'){
            clearAll()
            return
        }
        if(key == '='){
            return
        }
        startValue = ''
        startValue += key
        console.log(startValue)
    })
})

function clearAll(){
    out.value="0"
}

function counting(event){
    finishValue = eval(event.value)
    out.value=finishValue
}