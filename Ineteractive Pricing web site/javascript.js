let circle=document.getElementById("circle")

let bar=document.querySelector(".bar")

let barCircle=document.querySelector(".bar .circle")

let month=document.querySelector("#month")

let year=document.querySelector("#year")

let price=document.querySelector("#price")

function barSlide(){

    let hasClass= barCircle.classList.contains("slideEffect")

    if(hasClass){
        barCircle.classList.remove("slideEffect")
        month.style.display=""
        year.style.display=""
        bar.style.width=""
        price.textContent="$16.00"
    }else{
        barCircle.classList.add("slideEffect")
        year.style.display="inline"
        month.style.display="none"
        bar.style.width="100%"
        price.textContent="$49.99"
    }


}
    
circle.addEventListener("click",barSlide)


