fetch('cart.json')
.then()(respone =>response.json)
.then()(data => console.log(data))

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var { image, category, name, price} = item;
    return(
        `<div>
            <div class='img-box'>
                <img class='images' src=${image.desktop}></img>
            </div>`+`<div class="add-btn">
        <button onclick='addtocart(`+(i++)+`)'>Add to cart</button></div>`
        +`<div class='bottom'>
        <p>${category}</p>
        <h3>${name}</h3>
        <h2>$ ${price.toFixed(2)}</h2>
        </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function startnew(){
    location.reload();
}
function confirmOrder(){
    document.querySelector('.sidebar').className = 'confirm';
    document.querySelector('#root').className = 'confirmed';
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+total.toFixed(2);
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var { name, price, image} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total.toFixed(2);
            return(
                `<div class='cart-item'>
                <img src="${image.desktop}"/>
                <p style='font-size:12px;'>${name}</p>
                <h2 style='font-size: 15px;'>$ ${price.toFixed(2)}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i>"+`</div>`
            );
        }).join('');
    }
}

