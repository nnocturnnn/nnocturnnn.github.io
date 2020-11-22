//Variaveis globais
let modalCount = 1;
let modalKey = 0;
let cart = [];

const qs = (e) => document.querySelector(e);
const qsa = (e) => document.querySelectorAll(e);
const cl = (e) => console.log(e);

pizzaJson.map((pizza, index) => {
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img; //Consegue-se usar a class e a tag num mesmo querySelector
    pizzaItem.querySelector('.pizza-item--price').innerHTML = pizza.price.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) => {

        e.preventDefault();
        let key = e.target.closest(".pizza-item").getAttribute("data-key");
        const pizzaKey = pizzaJson[key];
        modalCount = 1;
        modalKey = key;

        qs(".pizzaBig img").src = pizzaKey.img;
        qs(".pizzaInfo h1").innerHTML = pizzaKey.name;
        qs(".pizzaInfo--desc").innerHTML = pizzaKey.description;
        qs(".pizzaInfo--actualPrice").innerHTML = pizzaKey.price.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
        qs(".pizzaInfo--size.selected").classList.remove("selected");
        qs(".pizzaInfo--qt").innerHTML = modalCount;
        qsa(".pizzaInfo--size").forEach((size, sizeIndex) => {

            if (sizeIndex == 2) size.classList.add("selected");

            const pizzaSizes = pizzaJson[key].sizes[sizeIndex];
            size.querySelector("span").innerHTML = pizzaSizes;
        })

        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {

            qs('.pizzaWindowArea').style.opacity = 1;

        }, 200)
    })

    qs('.pizza-area').append(pizzaItem);

});

const closeModal = () => {

    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        qs('.pizzaWindowArea').style.display = "none";
    }, 500);

}
qsa(".pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton").forEach((item) => {

    item.addEventListener('click', closeModal);
});

qs(".pizzaInfo--qtmenos").addEventListener('click', () => {

    if (modalCount > 1) {

        modalCount--;
        qs(".pizzaInfo--qt").innerHTML = modalCount;
    }
});
qs(".pizzaInfo--qtmais").addEventListener('click', () => {

    modalCount++;
    qs(".pizzaInfo--qt").innerHTML = modalCount;
});

qsa(".pizzaInfo--size").forEach((size, sizeIndex) => {

    size.addEventListener('click', () => {
        qs(".pizzaInfo--size.selected").classList.remove("selected");
        size.classList.add("selected");
    });
});

qs('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = Number(qs(".pizzaInfo--size.selected").getAttribute('data-key'));
    let Ident = pizzaJson[modalKey].id + "@" + size;
    let key = cart.findIndex((item) => item.Ident === Ident);
    let sum = modalCount * pizzaJson[modalKey].price;

    if (key > -1) {
        const carKey = cart[key];
        carKey.Quantidade += modalCount;

    } else {
        cart.push({
            Id: pizzaJson[modalKey].id,
            Ident,
            Nome: pizzaJson[modalKey].name,
            Tamanho: size,
            Quantidade: modalCount
        });

    }
    updateCart();
    closeModal();
});

qs('.menu-openner').addEventListener('click', () => {

    if (cart.length > 0) {

        qs('aside').style.left = '0';
    }

});
qs('.menu-closer').addEventListener('click', () => qs('aside').style.left = '100vw');

function updateCart(){

    qs('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {
        
        const carrinho = qs('.cart');
        carrinho.innerHTML = "";

        qs('aside').classList.add('show');
        
        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        
        for(let i in cart){

            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].Id);
            let cartItem = qs('.models .cart--item').cloneNode(true);
            let pizzaSizeName;
            subtotal += pizzaItem.price * cart[i].Quantidade;
            switch (cart[i].Tamanho) {
                case 0:
                    pizzaSizeName = "P"
                    break;

                case 1:
                    pizzaSizeName = "M"
                    break;

                case 2:
                    pizzaSizeName = "G"
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('.cart--item img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item .cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].Quantidade;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                cart[i].Quantidade > 1 ? cart[i].Quantidade-- : cart.splice(i, 1);
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].Quantidade++;
                updateCart();
            });

            carrinho.append(cartItem);
        }

        desconto = subtotal * 0.10;
        total = subtotal - desconto;

        qs('.subtotal span:last-child').innerHTML = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
        qs('.desconto span:last-child').innerHTML = desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
        qs('.total span:last-child').innerHTML = total.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });

    } else {

        qs('aside').classList.remove('show');
        qs('aside').style.left = '100vw';
    }
    
}