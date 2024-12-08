function calculate()
{
    const principalinput = document.getElementById("principle");
    const rateinput = document.getElementById("rate");
    const timeinput = document.getElementById("time");
    const totalAmount = document.getElementById("total");

    let principal = Number (principalinput.value);
    let time = Number (timeinput.value);
    let rate = Number (rateinput.value);

    if(principal<0 || isNaN(principal)){
        principal=0;
        principal.value=0;
    }
    if(time<0 || isNaN(time)){
        time=0;
        time.value=0;
    }
    if(rate<0 || isNaN(rate)){
        rate=0;
        rate.value=0;
    }
        
    let result=principal+((principal*rate*time)/100);
    
    
    totalAmount.textContent = result.toLocaleString(undefined,"currency","USD");
 
}
