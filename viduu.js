let chuoi = "Diện"+"Công " +" 04UDPM"
document.writeln (chuoi);
console.log(chuoi);
document.writeln (2024-2005)
document.write("<br>");
document.write (2*5);
document.write(3>=5);
let tong_so_hoc_sinh =50
console.log(tong_so_hoc_sinh)
let _nam =30
console.log(_nam)
let _massage = "hôm nay được nghỉ cả ngày"
console.log(_massage.length)
const so_ngay_trong_tuan= 7
console.log(so_ngay_trong_tuan)
massage= "thứ 6 học buổi chiều"
console.log(massage)
let _tong_so_hoc_sinh
console.log(typeof _tong_so_hoc_sinh)
_tong_so_hoc_sinh = AuthenticatorAttestationResponse
const dien="đặng,công,diện"
console.log(dien.toUpperCase());
console.log(dien.length);
console.log(dien.trim());

let a =555
if (a == 5) {
    console.log('nam')
}
if (a == 6) {
    console.log('sau')
}
if (a == 7) {
    console.log('bay')
}
if (a == 8) {
    console.log('tam')
}

// bai2
function chaoBan(ten,thoi_gian) {
    if (0 < thoi_gian && thoi_gian < 11) {
        console.log("Chào buổi sáng");
    }
    if (12 < thoi_gian && thoi_gian < 17) {
        console.log("Chào buổi chiều")
    }
    if (18 < thoi_gian && thoi_gian < 23) {
        console.log("Chào buổi tối")
    }
}
chaoBan("messi",46) 
chaoBan("anhliem",22)


function soSanhDoDaiTen(ten1, ten2) {
    if (ten1.length > ten2.length) {
        console.log(`Tên ${ten1} dài hơn tên ${ten2}`);
     } else {
        console.log(`Tên ${ten2} dài hơn tên ${ten1}`);
     }
}
soSanhDoDaiTen("messi là goat", "Siuu")

//bai4
function randomTu1Den10() {
    console.log(Math.round(Math.random() *10))
}
randomTu1Den10

console.log(`-------run--------`)
setTimeout(function () {
    console.log(`Mã nguồn đã được chạyc sau 10s `)
}, 1000)

setInterval(function () {
   console.log('1s')
},1000)