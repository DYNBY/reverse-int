module.exports = function reverse (n) {
    
    if (n < 0) {
        let n1 = -n;
        let array = [...n1.toString()].map(Number).reverse();
        let array1 = +array.join('');

        return array1;  
    } else {
    let array = [];
    let array1 = [];
    array = [...n.toString()].map(Number).reverse();
    array1 = +array.join('');
    return array1;
    }
}
