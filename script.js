let transSumEI = document.getElementById("currency")
let mountEI = document.getElementById('mount')
let sumEI = document.getElementById("sum")
let resultEI = document.getElementById("result")


const sumCurrent =()=>{
    let transEI = transSumEI.value
    let mount = mountEI.value
    let resEI = transEI*mount

    resultEI.innerHTML = ':' + resEI.toFixed(2)

   
}

sumEI.addEventListener('click', sumCurrent);

