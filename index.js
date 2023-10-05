const counters=document.querySelectorAll('.icon span');
const speed=100;
    counters.forEach(counter => {
        // console.log(counter.textContent);
     
         const update=()=>{
             let target=+counter.getAttribute("data-counter");
             let count=+counter.textContent;
             let increment=Math.ceil(target/speed);
             //console.log(target);
             
             if(count<target){
                counter.textContent=count+increment;
                setTimeout(update) ;
             }
             else{
                 counter.textContent=target;
             }
         };//end update
     
         update();
     
     });//end foreach



