const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});



// var cartitems = [];

// function cart1(e){


//     var parent1 = e.target.parentElement.parentElement.parentElement.nextElementSibling;
//     var pdname = parent1.children[0].children[0].innerText;
//     console.log(pdname);

//     var price = parent1.children[2].children[0].innerText;
//     console.log(price);


//     var obj1 = {title:pdname, pricedetails:price,quantity:1}


//     var obj2 = JSON.parse(localStorage.getItem("cart"));

//   var value1 ;
//   var value2 = false;
//     if(obj2== null){
//       cartitems.push(obj1);
//       value1 = JSON.stringify(obj1);
//     }
//     else{
//       for(let i = 0; i<obj2.length; i++){
//         if(obj2[i].title == obj2.title){
//           obj2[i].quantity+=1;
//           value1 = JSON.stringify(obj2);
//           value2 = true;
//           break;
//         }
//       }
//       if(value2 == false){
//         obj2.push(obj1);
//         valu1 = JSON.stringify(obj2);
//       }
//     }

//     localStorage.clear();
//     localStorage.setItem('cartvalue',value1);



}






































// var products = [{id:1,productname:"fgbwnhetdntb",productprice:"500"},{id:2,productname:"fgbwnhetdntb",productprice:"500"},{id:3,productname:"fgbwnhetdntb",productprice:"500"},{id:4,productname:"fgbwnhetdntb",productprice:"500"},{id:5,productname:"fgbwnhetdntb",productprice:"500"},{id:6,productname:"fgbwnhetdntb",productprice:"500"},{id:7,productname:"fgbwnhetdntb",productprice:"500"},{id:8,productname:"fgbwnhetdntb",productprice:"500"}];


// var cartitems2 = document.querySelectorAll(".bx-shopping-bag");
// let i = 1;
// cartitems2.forEach(item=>{
//   item.id =i;
//   i++;
//   console.log(item);
// })


// var cartobj  = [{}];


// function cart1(e){


//     var new1 = e.target.id;

//     if(cartobj.length == 0){
//       var ob = products.forEach(item=>{
//         if(id == item.id){
//           return item;
//         }
//       })
//       ob.quantity = 1;
//       cartobj.push(ob);
//       localStorage.setItem("cart",JSON.stringify(cartobj));

//     }
//     // else{
//     //   if(){
//     //     console.log("sdfasdf")
//     //   }

//     // }



// }

// // function search(id){
// //     cartobj.forEach(item=>{
// //       if(item.id == new1){
// //         return true;
// //       }
// //   });
// //   return false; 
// // };