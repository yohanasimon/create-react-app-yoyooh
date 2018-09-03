// var nama = 'Yohana';
// console.log(nama);

// var usia = 22;
// var usia = 33;
// console.log(usia);

// var a = 5;
// var b = 10;
// var c = a;

// a = b;
// b = c;

// console.log(a);
// console.log(b);

// let a = 10;
// a = 5;
// console.log(a);

// const a = 10;
// a = 5;

// var kabar = 'baik';
// console.log('Kabar Vincent' + kabar);

/* var x = 'Yohana';
console.log(x.length);
console.log(x.indexOf('Dunia'));
console.log(x.substr(5, 3));
console.log(x.slice(5, 8));
console.log(x.split);
*/

/* var angka = 10;
console.log(typeof(angka));
angka = angka.toString();
console.log(typeof(angka));
angka = parseInt(angka);
console.log(typeof(angka));
*/

/* let a = parseInt('123');
let b = parseFloat('123');
let c = parseInt('1234.5678'); 
let d = parseFloat('1234.5678'); 
let e = parseInt('Halo Dunia'); 
let f = parseFloat('Halo Dunia');
console.log(a) 
console.log(b) 
console.log(c) 
console.log(d) 
console.log(e) 
console.log(f)
*/

/* let a = parseInt('123');
let b = parseFloat('123');
let c = parseInt('1234.5678'); 
let d = parseFloat('1234.5678'); 
let e = parseInt('Halo Dunia'); 
let f = parseFloat('Halo Dunia');
console.log(typeof(a)) 
console.log(typeof(b)) 
console.log(typeof(c)) 
console.log(typeof(d)) 
console.log(typeof(e)) 
console.log(typeof(f))

*/

/* var a = 'yohana';
var b = '22'

console.log('usia '+ a + ' adalah ' + b + ' yo' );
*/
/*
var a = 123e-5;
console.log(a);
*/

// console.log(0.3+0.2);

// console.log((0.2 * 10 + 0.1 * 10) / 10);

/* 
var a = 5;
console.log(a);
a++;
console.log(a);
a--;
a--;
console.log(a);
*/
/*
a++ = a+1
a-- = a-1
*/

/* var a = 2;
a+=2;
console.log(a);
*/

// console.log(Math.PI);

// abs itu buat apa?
// console.log(Math.abs(.9));

// console.log(Math.pow(16, 1/4));
// akar pangkat 2 = sqrt
// console.log(Math.sqrt(144));
// akar pangkat 3 = cbrt 
// console.log(Math.cbrt(8));

// round = pembulatan ke atas / ke bawah
// console.log(Math.round(4.6));

// floor = pembulatan ke bawah
// console.log(Math.floor(4.7));
// ceil = pembulatan ke atas
// console.log(Math.ceil(4.4));

/*
console.log(Math.random(10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 30) + 20);
*/

// max cari nilai paling besar
// console.log(Math.max(1,3,5));
// min cari nilai paling kecil
// console.log(Math.min(1,3,5));

/* var a =  new Date();
//console.log(a.getFullYear());
console.log(a.getMonth());
//console.log(a.getDate());
//console.log(a.getDay());
//console.log(a.getHours());
//console.log(a.getMinutes());
//console.log(a.getSeconds());
//console.log(a.getMilliseconds());
// get time itu ngitung milisecond sejak Jan 1,1970
//console.log(a.getTime());
*/


/*
var x = 4;
var y = 3;
var z = 2;
var w = x+(y * z) / (x * y);
console.log(Math.pow(w,z));
*/

// console.log(Math.cbrt(8));

/* let a = 485;
let tahun = 360;
let bulan = 30;

var hasiltahun = Math.floor(a / tahun);
var hasilbulan = Math.floor((a - tahun) / bulan);
var hasilhari = Math.floor((a - tahun) % bulan);
console.log(a + ' hari adalah ' + hasiltahun + ' Tahun ' + hasilbulan + ' Bulan ' + hasilhari + ' Hari');
*/

/*
var jumlahusia = 49;
var andi = 49 * 4/14;
var budi = 49 * 10/14;

console.log(andi + 2);
console.log(budi + 2);
*/

/*
let a =  new Date();
console.log('Hari ini tanggal ' + (a.getDate()) + '-' + (a.getMonth() + 1) + '-' + (a.getFullYear()));
console.log('Besok tanggal ' + (a.getDate()+1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear());
console.log('Kemarin tanggal ' + (a.getDate()-1) + '-' + (a.getMonth() + 1) + '-' + a.getFullYear());
*/

/*
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('Halo Dunia', 'a'));
*/
/*
var jarak = 120;
var speeda = 60;
var speedb = 40;
var totalspeed = speeda + speedb;
var waktutempuh = jarak / totalspeed * 60;
console.log(waktutempuh);

var starthour = 9;
var startminute = 0;
var jamnyampe = starthour + Math.floor(waktutempuh/60);
var menitnyampe = startminute + (waktutempuh % 60);
console.log(menitnyampe);
console.log('Mobil A dan Mobil B akan bertabrakan pada jam' + jamnyampe + ' menit ' + menitnyampe);

*/

for(var x=1; x<=10; x++);
{
      console.log(x);
}