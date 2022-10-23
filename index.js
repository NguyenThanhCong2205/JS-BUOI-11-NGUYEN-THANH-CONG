// Bài 1: Tổng lương tháng nhân viên:

var workingDays = 30;
var salaryPerDay = 100000;

var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương là: " + totalSalary);

// Bài 2 : Tính giá trị trung bình;

var res1 = 2.5;
var res2 = 2.5;
var res3 = 2.5;
var res4 = 2.5;
var res5 = 2.5;

var tatol = (res1 + res2 + res3 + res4 + res5) / 5;
console.log("tổng giá trị tb số; " + tatol );


//Bài 3: Quy đổi tiền:

var USD = 2

;
var VND = 23500;

var total = USD * VND;
console.log("Người dùng nhập: " + total);

// Bài 4: Tính diện tích chu vi hình chữ nhât:
var ChieuDai = 4;
var ChieuRong = 3;

var DienTich = ChieuDai * ChieuRong;
var ChuVi = (ChieuDai + ChieuRong) * 2  ;
console.log("DienTich: " + DienTich, "ChuVi: " + ChuVi);

//Bài 5: Tính tổng 2 kí số:

var n = 12;
var num1 = n % 10; 
var num2 = Math.floor(n / 10); 
var total1 = (num1 + num2);

var n = 44; 
var num3 = n % 10; 
var num4 = Math.floor(n / 10);
var total2 = (num3 + num4);

var n = 83;
var num5 = n % 10; 
var num6 = Math.floor(n / 10); 
var total3 = ( num5 + num6)

console.log("12=> " +total1,"44=> " + total2,"83=> " + total3);
