const products = [
    'Dell hardcore core i29 200GB laptop',
    'Itel hardcore core i29 200GB Phone',
    'LG hardcore core i29 200GB laptop',
    'Samasung Glaxay X92 smart  phone',
    'Dell hardcore core i29 200GB Laptop',
    'Lenovo hardcore core i29 200GB laptop',
];
const searching = 'dell';
/* loop varyable */ const output = [];

// 1.string search by indexOf
/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output); */


// 2.string search by includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}

// console.log(output);

// 3.string search by startsWith
/* for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output); */

/* // 4.string search by startsWith
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output); */