// const cart1 = document.querySelector('.bx-shopping-bag')
// let

// cart1.addEventListener("click",() =>){
//    for()
// }

// var obj1 = {product-id:"",product-names:"",product-price:""}

function cart1(){
    var product1 = document.querySelector(".product-center");
    var childs=product1.children[0].children[1].children;
    var name = childs[0].children[0].textContent;
    var price = childs[2].textContent;
    console.log(name + price);

}


