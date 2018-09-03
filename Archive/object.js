/* function pizza() {
    this.diameter = 30;
}
function pizKeju(){ 
    pizza.call(this)
    this.topping = 'Keju'; 
    this.harga = '50K';}

function pizJamur(){ 
    pizza.call(this)
    this.topping = 'Jamur'; 
    this.harga = '65K';}

var satu = new pizKeju(); 
var dua = new pizJamur(); 
console.log(satu)
console.log(dua)
*/

// define constructor persegi //
/*
var arrayku = [
    {nama : 'andi', usia: 27}, 
    {nama: 'budi', usia: 25}, 
    {nama: 'caca', usia: 23},
    ]

    arrayku.sort(function(x,y){
        if (x.nama < y.nama){return -1}
        if (x.nama > y.nama){return 1}
        return 0
    })
    console.log(arrayku)
*/
/*
let matematika = (nomor1, nomor2, op) => {
    if(op=='tambah') {
        return nomor1+nomor2 };
    if(op=='kurang'){
        return nomor1-nomor2};
};
console.log(matematika(6,4, 'tambah'));

let x = 1;
let y = 2;
    if(op=='tambah') {
        return x+y };
    if(op=='kurang'){
        return x-y };
*/
/*
const kali = (x, y) => x * y;
const hitung = (x, y, op) => {
    return op(x, y);
    };
console.log(hitung (1, 2, (x, y) => x * y))
*/
// val bisa diganti sesuka hati 
w = [0,1,2,3,4,5]
var x = w.filter((boo) => boo !== 2); 
var y = w.filter((boo) => boo % 2 == 0); 
var z = w.filter((boo) => boo % 2 !== 0);
console.log(x); 
console.log(y); 
console.log(abc);