// const para=document.getElementsByClassName("para")
// para[0].textContent="This is now Updated"
// para[2].style.color="red"
// console.log(para)

// const para2=document.querySelectorAll(".para")
// para2[0].textContent="This is now Updated"
// para2[2].style.color="red"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContext))

// const para=document.querySelectorAll(".para")
// para[0].innerText="This is now Updated" //does not work on hidden text
// para[0].textContent="This is now Updated"
// para[2].style.color="red"
// para[2].innerHTML="<div><b>Hello World<div>"
// console.log(para)




// 16 january 2025

// const button=document.querySelector(".btn")


// const button2=document.querySelector(".btn2")




// // button.classList.remove("btn")
// // button.classList.toggle("btn")

// function message(){
//     alert("You have clicked the button")

// }
// button.addEventListener("click",message)

// button2.addEventListener("click",function(){
//        button.removeEventListener("click",message)
// })
    



// // const button2=document.querySelector("button2")
// // button2.classList.add("btn2")


// const btn=document.querySelector(".btn")
// btn.addEventListener("keydown",function(event){
//     console.log(event.key)
// })

// btn.addEventListener("keyup",function(event){
//     console.log(event.key)
// })

const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("Form Submmited")
}

const form=document.querySelector("form")
form.addEventListener("submit",handleSubmit)