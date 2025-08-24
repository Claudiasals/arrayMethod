// ESERCIZIO 19: Calcola il prezzo totale per ciascun ordine.
// Applica sconti in base alla quantità: 5-9 articoli = 5%, 10+ articoli = 10%
// Restituisci un array di oggetti con orderId e finalPrice

const orders = [
    {
        orderId: "A001",
        items: [
            { product: "Widget", price: 10, quantity: 3 },
            { product: "Gadget", price: 20, quantity: 2 },
        ],
    },
    {
        orderId: "A002",
        items: [
            { product: "Widget", price: 10, quantity: 5 },
            { product: "Tool", price: 15, quantity: 6 },
        ],
    },
    {
        orderId: "A003",
        items: [
            { product: "Gadget", price: 20, quantity: 8 },
            { product: "Tool", price: 15, quantity: 4 },
        ],
    },
]

const finalPrice = orders.map(order => {
    // 1. Calcola il prezzo totale dell'ordine
    const totalPrice = order.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
    // 2. Calcola la quantità totale di articoli in questo ordine
    const totalQuantity = order.items.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);

    // 3. Calcola lo sconto in base alla quantità totale
    let discountRate = 0;
    if (totalQuantity >= 10) {
        discountRate = 0.10;
    } else if (totalQuantity >= 5 && totalQuantity <= 9) {
        discountRate = 0.05;
    };
    console.log("sconti da applicare", discountRate)
    // 4. Calcola il prezzo finale
    const withDiscount = totalPrice - (totalPrice * discountRate);

    return {
        orderId: order.orderId,
        finalPrice: withDiscount,
    };

});

console.log("prezzo finale", finalPrice);

