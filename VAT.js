function calculateVat (inclusivePrice){
    const exlusivePrice=(inclusivePrice*0.16)+ inclusivePrice
    return exlusivePrice
}
console.log(`The exclusive price of the item is ${calculateVat(20)} shillings`)