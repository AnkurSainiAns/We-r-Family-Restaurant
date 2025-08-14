let namecEl=document.getElementById("namec")
let emailcEl=document.getElementById("emailc")
let mobilecEl=document.getElementById("mobilec")
let cdisEl=document.getElementById("cdis")
let submitcEl=document.getElementById("submitc")
submitcEl.addEventListener("click",function(){
    console.log("hello contact")
    if(namecEl.value==="" && emailcEl.value==="" && mobilecEl.value===""){
        alert("please, Fill in the data before submitting it")
        cdisEl.textContent="please, Fill in the data before submitting it"
    }
    else{
        alert("We will contact you soon ⌛")
        cdisEl.textContent="We will contact you soon ⌛"
    }
})