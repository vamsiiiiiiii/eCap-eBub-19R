// const a=document.querySelector("#btn");
// a.addEventListener("click",function (){
//     alert("btn clciked")
// })

document.querySelector("#grandParent").addEventListener("click",(e)=>{
    console.log("grand")
    e.stopPropagation()
},true)
document.querySelector("#parent").addEventListener("click",()=>{
    console.log("parent")
},false)
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("child")
    // e.stopPropagation()
},true)


