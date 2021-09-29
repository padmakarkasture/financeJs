// dom selection

const exBtn = document.getElementById("expense-btn");
const  inBtn = document.getElementById("income-btn");
const tbody = document.getElementById("tbody");


//variable declaration
let Id;
let transaction;
let counter;
let foodex=0;
let clothex=0;
let otherex=0;


//load from local storage
let data = localStorage.getItem("warehouse");
if(data){
   
 transaction=JSON.parse(data);
 Id = transaction.length;
 transaction.forEach((item)=>{
     if(item.expense){
         addEx(item.amount, item.category, item.description)
     }else if(item.income){
         addIn(item.amount, item.category, item.description)
     }
 })
}else{

transaction=[];
 Id=0;
 counter=1;

}
//collect expense event

exBtn.addEventListener("click",(arg)=>{
 let ex_amount=document.getElementById("ex-amount").value;
 let ex_category=document.getElementById("ex-category").value;
 let ex_desc = document.getElementById("ex-description").value;
 if(ex_amount=="" || ex_category=="" || ex_desc==""){
    alert("enter appropriate values")
}else{
    let amount= parseInt(ex_amount);
     // add to variable
     transaction.push({
        amount:amount,
        category:ex_category,
        description:ex_desc,
        id:Id,
        expense:true,
        income:false
    });
    Id++;
    
    localStorage.setItem("warehouse", JSON.stringify(transaction));

    Id++;

    addEx(amount, ex_category,ex_desc);
    alert("added succesfully")

window.location.reload();

}
})
//collect income event
inBtn.addEventListener("click",(arg)=>{
    let in_amount=document.getElementById("in-amount").value;
    let in_category=document.getElementById("in-category").value;
    let in_desc = document.getElementById("in-description").value;
    if(in_amount=="" || in_category=="" || in_desc==""){
       alert("enter appropriate values")
   }else{
        in_amount= parseInt(in_amount);
       
        transaction.push({
            amount:in_amount,
            category:in_category,
            description:in_desc,
            id:Id,
            expense:false,
            income:true
        });
        localStorage.setItem("warehouse", JSON.stringify(transaction));
        Id++;

       addIn(in_amount, in_category,in_desc);

       alert("added succesfully")
   
   }
   })

//add expense function

function addEx(amount,category,description){
    //dom manipulation
    const item =`
   <tr>
                   
                    <td style="color:red;"  class="text-center">${amount}</td>
                    <td  class="text-center">${category}</td>
                    <td  class="text-center">${description}</td>
                  </tr>
   `;
   tbody.insertAdjacentHTML("beforeend",item);
   counter++;
   if(category=="food"){
       foodex=foodex+parseInt(amount);
       console.log(foodex)
   }
   if(category=="clothes"){
    clothex=clothex+parseInt(amount);
    console.log(clothex)
}
if(category=="other"){
   otherex=otherex+parseInt(amount);
    console.log(clothex)
}


}
// add income function
function addIn(amount,category,description){
     //dom manipulation
     const item =`
   <tr>
               
                    <td style="color:green;"  class="text-center">${amount}</td>
                    <td  class="text-center">${category}</td>
                    <td class="text-center">${description}</td>
                  </tr>
   `;
   tbody.insertAdjacentHTML("beforeend",item);
   counter++;


   

    
}

//add local storage function

