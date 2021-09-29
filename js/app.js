// dom selection

const exBtn = document.getElementById("expense-btn");
const  inBtn = document.getElementById("income-btn");
const tbody = document.getElementById("tbody");


//variable declaration
let transaction=[];
let Id=0;
let counter=1;


//collect expense event

exBtn.addEventListener("click",(arg)=>{
 let ex_amount=document.getElementById("ex-amount").value;
 let ex_category=document.getElementById("category-ex").value;
 let ex_desc = document.getElementById("ex-description").value;
 if(ex_amount=="" || ex_category=="" || ex_desc==""){
    alert("enter appropriate values")
}else{
    let amount= parseInt(ex_amount);
    

    addEx(amount, ex_category,ex_desc);

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
       
   
       addIn(in_amount, in_category,in_desc);
   
   }
   })

//add expense function

function addEx(amount,category,description){
    //dom manipulation
    const item =`
   <tr>
                    <th scope="row">${counter}</th>
                    <td style="color:green;">${amount}</td>
                    <td>${category}</td>
                    <td>${description}</td>
                  </tr>
   `;
   tbody.insertAdjacentHTML("beforeend",item);
   counter++;
    // add to variable 
    transaction.push({
        amount:amount,
        category:category,
        description:description,
        id:Id,
        expense:true,
        income:false
    });
    Id++;

}

function addIn(amount,category,description){
     //dom manipulation
     const item =`
   <tr>
                    <th scope="row">${counter}</th>
                    <td style="color:red;">${amount}</td>
                    <td>${category}</td>
                    <td>${description}</td>
                  </tr>
   `;
   tbody.insertAdjacentHTML("beforeend",item);
   counter++;

    // add to variable
    transaction.push({
        amount:amount,
        category:category,
        description:description,
        id:Id,
        expense:false,
        income:true
    });
    Id++;

    
}