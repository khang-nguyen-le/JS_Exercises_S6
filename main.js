// Bài 1: Tìm số nguyên dương n nhỏ nhất sao cho: 1 + 2 + 3 + ... + n > 10000
function timSoNhoNhat() {
    var tong = 0;
    for (var n = 0; tong < 10000; n++) {
        tong += n
    }
    document.getElementById('ketQua').innerHTML = 'Số n nhỏ nhất là: ' + n;
}
// ==================================================================

// Bài 2: Viết chương trình nhập vào 2 số x,n. Tính tổng: S(n) = x + x^2 + x^3 + ... + x^n.
function tinhTong() {
    var soX = document.getElementById('soX').value * 1,
        soN = document.getElementById('soN').value * 1,
        soHang = 1,
        tong = 0;

    for (var i = 1; i <= soN; i++) {
        soHang *= soX;
        tong += soHang;
    }

    document.getElementById('ketQua-2').innerHTML = 'Tổng là: ' + tong
}
// ==================================================================

// Bài 3: Cho phép người dùng nhập vào 1 số. Tính giai thừa số đó.
function tinhGiaiThua() {
    var soA = document.getElementById('soA').value * 1,
        soHoanVi = 1;

    for (var i = 1; i <= soA; i++) {
        soHoanVi *= i;
    }
    document.getElementById('ketQua-3').innerHTML = 'Giai thừa là: ' + soHoanVi
}
// ==================================================================

// Bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
function inThe() {
    var the = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            the += '<div class="alert alert-danger"></div>'
        }else{
            the += '<div class="alert alert-info"></div>'
        }
    }
    document.getElementById('ketQua-4').innerHTML = the
}
// ==================================================================

// Bài 5: Cho phép người dùng nhập vào 1 số. In ra các số nguyên tố từ 1 -> số đó
function check(number) {
    var isSNT = true
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isSNT = false;
            break;
        }
    }
    return isSNT
}


function inSNT() {
    var soB = document.getElementById('soB').value * 1,
        ketQua = '';

    for (iSo = 2; iSo <= soB; iSo++) {
        var checkSNT = check(iSo);
        if (checkSNT) {
            ketQua += iSo + ' '
        }
    }
    document.getElementById('ketQua-5').innerHTML = ketQua
}