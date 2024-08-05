function leapyear(year) {
    return (year % 100===0)? (year % 400 ===0 ):(year % 4 ===0)
}
function checkLeapYear() {
    const yearInput = document.getElementById('yearInput').value
    const resultDiv = document.getElementById('result')


    if (yearInput) {
        const isLeapYear = leapyear(parseInt(yearInput,10))
        if (isLeapYear) {
            resultDiv.innerHTML = `${yearInput} is a Leap Year.`
    }else{
        resultDiv.innerHTML = `${yearInput} is not a Leap Year.`
    }
}else {
        resultDiv.innerHTML = 'Please Enter a Valid Year'
}
    }









