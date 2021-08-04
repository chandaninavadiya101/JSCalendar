//or windows.onload = fucntion(){}
window.onload = () => {

    let date=new Date();    
    let todaymonth = new Date().toISOString().substring(5,7);
    let todayyear = new Date().toISOString().substring(0,4);
  
let reRender = () => {

    var PrevMonthEndDate =new Date(date.getFullYear(),
        date.getMonth(), 0).getDay();
    var CurMonthStartDay = new Date(date.getFullYear(),date.getMonth(),0).getDay(); 
    var CurMonthEndDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    var CurMonthEndDate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

    let Month_name=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    document.querySelector('.date h1').innerHTML = Month_name[date.getMonth()];
    document.querySelector('.date p').innerHTML = date.toDateString();

   let days="";
    for(let i=CurMonthStartDay;i>0;i--)
    {
         days+=`<div class="prev">${PrevMonthEndDate-i+1}</div>`;
    }
    for(let i=1;i<=CurMonthEndDate;i++)
    {
        //OR
        //if(i===date.getDate() && new Date().getMonth() === date.getMonth())
        if(parseInt(todayyear)==date.getFullYear() && parseInt(todaymonth-1) == date.getMonth())
        {
            days+=i!=date.getDate()?`<div>${i}</div>`:`<div class="today">${i}</div>`;
        }
        else
            days+=`<div>${i}</div>`;
    }
    for(let i=CurMonthEndDay+1,j=1;i<=7;i++,j++)
    {
         days+=`<div class="next">${j}</div>`;
    }
    document.querySelector(".days").innerHTML=days;
    document.querySelector(".prevmonth").addEventListener("click", ()=> {
        date.setMonth(date.getMonth()-1);
        reRender();
    });
    document.querySelector(".nextmonth").addEventListener("click", ()=> {
        date.setMonth(date.getMonth()+1);
        reRender();
    });
    }
    reRender();  

}

