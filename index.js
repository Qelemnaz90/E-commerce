const add_btn = document.querySelectorAll('.add')
const del_btn = document.querySelectorAll('.del')
const sum_price = document.querySelector('.price')

let obj = {}
let sum = 0




add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card_body = b.closest('.card-body');
        const name = card_body.querySelector('.card-text').textContent;

        if(!obj[name]){
            obj[name] = {
                quantity: 1,
                price: parseFloat(b.value)
            }
        }else{
            obj[name].quantity++
        }
        sum_price.innerText = sum

        totalPrice(obj[name].quantity, obj[name].price)
        console.log(obj);
        
        
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-text').textContent
        removeItem(name)
        sum_price.innerText = sum
        totalPrice()
    })
})

function totalPrice(a,b){
    console.log(a*b);
}


function removeItem(name){
    if(obj[name]){
        if(obj[name].quantity === 1){
            delete obj[name]
        }else{
            obj[name].quantity--
        }
    }

}



let basket = document.querySelector('.basket')
let h2 = document.querySelector('.m-5')


basket.addEventListener('click', function(){
    h2.style.display = "block"
    let cards = document.querySelector('.cards')
    cards.classList.add("d-none")
    addToBasket();
})



function addToBasket() {
    h2.innerHTML = ""
    let total = 0
        for (let itemName in obj) {
        const item = obj[itemName];
        const itemInfo = document.createElement('div')
        itemInfo.innerText=
        `${itemName}  
        Quantity: ${item.quantity}  
        Price: $${item.price}`;


        itemInfo.style.color= 'violet'
        itemInfo.style.marginBottom = '10px'
        h2.appendChild(itemInfo)
        
        total += item.quantity * item.price
    

    } const totalElement = document.createElement('div');
    totalElement.innerText = `Total Price: $${total.toFixed(2)}`;
    totalElement.style.fontWeight = 'bold'; 
    h2.appendChild(totalElement);
    console.log("Total Price:", total.toFixed(2))
}

