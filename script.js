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

// const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log("Form Submmited")
// }

// const form=document.querySelector("form")
// form.addEventListener("submit",handleSubmit)

// console.log("first line")
// setTimeout(()=> (console.log("After 2 sec")),2000)
// console.log("second line")


// setTimeout(()=>(
//     alert("Danger site is not secure")
// ),3*1000)


// const timerId=setInterval(() => {
//     console.log("Heloo Students")
// }, 1000)

// setTimeout(()=> (
//     clearInterval(timerId)
// ),10*1000)


// count=1
// const timerId=setInterval(() => {
//     console.log(count)
//     count+=1
// }, 1000)

// setTimeout(()=> (
//     clearInterval(timerId)
// ),10*1000)


// console.log("Starting homework...")
// setTimeout(() => {
//     console.log("Homework done!")
//     console.log("starting dinner...")
//     setTimeout(() => {
//         console.log("Dinner done!")
//         console.log("starting ready to go out...")
//         setTimeout(()=>{
//             console.log("Going to the playground")

//         },2000)

//     },2000)


// },2000)



// function finishHomework(callback) {
//   console.log("Starting homework...");
//   setTimeout(() => {
//     console.log("Homework done!");
//     callback();
//   }, 2000);
// }

// function eatDinner(callback) {
//   console.log("Starting dinner...");
//   setTimeout(() => {
//     console.log("Dinner done!");
//     callback();
//   }, 1500);
// }

// function goToPlayground() {
//   console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner
// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground();
//   });
// })


const input=document.querySelector("#task")
const btn=document.querySelector(".btn")
const lists=document.querySelector(".list")
btn.addEventListener("click",(e)=>{
  e.preventDefault()
  const id=document.createElement("li")
  const deleteButton=document.createElement("button")
  
  li.innerText=input.value
  lists.appendChild(li)
  input.value=""
})