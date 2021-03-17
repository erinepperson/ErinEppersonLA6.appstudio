
btnAdd.onclick=function(){
    let name = inptName.value
    let firstNumber = Number(inptFirst.value)
    let secondNumber = Number(inptSecond.value)
    let result = firstNumber + secondNumber
    lblAnswer.value = (name + ", the sum is " + result)
}

btnMultiply.onclick=function(){
    let name = inptName.value
    let firstNumber = Number(inptFirst.value)
    let secondNumber = Number(inptSecond.value)
    let result = firstNumber * secondNumber
    lblAnswer.value = (name + ", the product is " + result)
}

btnClear.onclick=function(){
    let name = ""
    let firstNumber = ""
    let secondNumber = ""
    lblAnswer.value = ""
}
