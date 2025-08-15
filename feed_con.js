let fsubmitEl=document.getElementById("fsubmit")
let fdisEl=document.getElementById("fdis")
let fnameEl=document.getElementById("fname")
let femailEl=document.getElementById("femail")
let fmobileEl=document.getElementById("fmobile")
let ffeedbackEl=document.getElementById("ffeedback")
fsubmitEl.addEventListener("click",function(){
    console.log("hello feedback")
   if(fnameEl.textContent==="" && femailEl.textContent==="" && fmobileEl.textContent==="" && ffeedbackEl.value==""){
    alert("please, Fill in the data before submitting it")
    fdisEl.textContent="please, Fill in the data before submitting it"
   }
   else{
    alert("The data has been successfully submitted ")
    fdisEl.textContent="feedback has been successfully submitted "
   }
})

