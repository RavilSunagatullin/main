let firstNum = ''
let secondNum = ''
let mark = ''
let finish = false
let oldFirstNum = ''
let counter = 0



const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']   
const action = ['+', '-', 'x', '/']
const additionFunction = ['-/+', 'del']

const out = document.querySelector('.calc__info')

document.querySelector('.ac').addEventListener('click', function clearAll(){
    firstNum = ''
    secondNum = ''
    mark = ''
    finish = false
    out.textContent = 0
    counter = 0
    removeHistory()
    localStorage.clear()
})

document.querySelectorAll('.calc__btn').forEach(elem => {
    elem.addEventListener('click', function(event){
        if(event.target.classList.contains('.ac')) return

        const key = event.target.textContent
        
        if(digit.includes(key)){
            if(secondNum === '' && mark === ''){
                firstNum+=key
                out.textContent = Intl.NumberFormat("ru").format(firstNum);
            }
            else if(firstNum!=='' && secondNum!=='' && finish==true){
                secondNum =key
                out.textContent = Intl.NumberFormat("ru").format(secondNum);
                finish=false
            }
            else{
                secondNum+=key
                out.textContent = Intl.NumberFormat("ru").format(secondNum);
            }
        }
        if(additionFunction.includes(key)){
            if(key==='-/+'){
                firstNum=firstNum/(-1)
                out.textContent = firstNum
            }
            if(key==='del'){
                firstNum= firstNum.toString()
                secondNum= secondNum.toString()
                if(firstNum!=='' && secondNum===''){
                    firstNum=firstNum.substring(0, firstNum.length-1)
                    out.textContent = Intl.NumberFormat("ru").format(firstNum);
                }
                if(firstNum!=='' && secondNum!==''){
                    secondNum=secondNum.substring(0, secondNum.length-1)
                    out.textContent = Intl.NumberFormat("ru").format(secondNum);
                }
                if(firstNum===''){
                    out.textContent = 0
                }
            }
        }
        if(action.includes(key)){
            mark =key
            out.textContent = mark
            return
        }
        if(key === '='){
            if(secondNum==''){
                secondNum= firstNum
            }
            switch(mark){
                case'+':
                    oldFirstNum= firstNum
                    firstNum=(+firstNum)+(+secondNum)
                    if(+firstNum<1 || +firstNum<-1){
                        firstNum=(+firstNum).toFixed(3)
                    }
                    break
                case'-':
                    oldFirstNum= firstNum
                    firstNum=(+firstNum)-(+secondNum)
                    if(+firstNum<1 || +firstNum<-1){
                        firstNum=(+firstNum).toFixed(3)
                    }
                    break
                case'/':
                    oldFirstNum= firstNum
                    if(secondNum === '0'){
                        out.textContent= 'Ошибка'
                        firstNum= ''
                        secondNum=''
                        mark=''
                        oldFirstNum = ''
                        return
                    }
                    firstNum=(+firstNum)/(+secondNum)
                    if(+firstNum<1 || +firstNum<-1){
                        firstNum=(+firstNum).toFixed(3)
                    }
                    break
                case'x':
                    oldFirstNum= firstNum
                    firstNum=(+firstNum)*(+secondNum)
                    if(firstNum==0){
                        firstNum=(+firstNum)*(+secondNum)
                    }else if(firstNum<1 || firstNum<-1){
                        firstNum=(+firstNum).toFixed(3)
                    }
                    break
        }
        finish=true
        out.textContent = Intl.NumberFormat("ru").format(firstNum);
        history(firstNum, secondNum, mark)


    }
})
})

function history(firstNum, secondNum, mark){
    const historyList = document.querySelector('.history__list')
    counter +=1

    let today = new Date()
    let hour =today.getHours()
    let minutes = today.getMinutes()
    if(minutes<10){
        minutes.toString()
        minutes = '0'+minutes
    }

    const historyText = document.createElement('li')
    historyText.innerText = `${oldFirstNum} ${mark} ${secondNum} = ${firstNum} время: ${hour}:${minutes}`
    historyList.append(historyText)
    localStorage.setItem(counter, `${historyText.innerText}`)

    historyText.addEventListener('click', function(event){
        this.remove()
        console.log(counter)
        localStorage.removeItem(counter)
    })
 
    if(counter >= 20){
        const removeLi = document.querySelector('li')
        removeLi.remove()
       
    }

   
   
}
function removeHistory(){
    const li = document.querySelectorAll('li')
    li.forEach(element => {
        element.remove()
    });
}

