document.getElementById('coupon-field').addEventListener('keyup',function(event){
    const text = event.target.value
    const applyBtn = document.getElementById('apply-btn')
    if(text==='DOM'){
        applyBtn.removeAttribute('disabled')
    }
    else{
        applyBtn.setAttribute('disabled',true)
        
    }
    
})


function handleClick(){
    const handlerStatus = document.getElementById('price')
    const discount30 = (30/100)*892;
    const sellingPrice = 892 - discount30;
    handlerStatus.innerText = parseInt(sellingPrice);
    const couponField = document.getElementById('coupon-field')
    couponField.value=''
   
}