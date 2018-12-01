// alert('File eksternal js loaded');
/*
ctrl shif /
komentar beberapa baris
*/
// variable dynamic
var angka1 = 5;
var angka2 = 5; //int
//angka2 = 'Seribu ' + "rupiah"; 	// string

// operator
	// operator aritmetika  + - * / %
	/*
	hasil = angka1 + angka2;
	alert(hasil);
	hasil = angka1 - angka2;
	alert(hasil);
	hasil = angka1 * angka2;
	alert(hasil);
	hasil = angka1 / angka2;
	alert(hasil);
	hasil = angka1 % angka2;
	alert(hasil);
	*/
	// operator perbandingan == < <= > >= != <>
		//alert(angka1 > angka2);
	// operator boolean && || !
	var x = true;
	var y = false;
	//alert((x || y));

// kontrol
	//if
	/*
	if (angka1 > 100) {
		alert('Nilai angka1 adalah lebih dari 100');
	} else if (angka1 == 100) {
		alert('Nilai angka1 adalah 100');
	} else {
		alert('Nilai angka1 adalah kurang dari 100');
	}
	*/
	/*
	switch (angka1){
		case 100:
			alert('Nilai angka1 adalah 100');
			break;
		case 120:
			alert('Nilai angka1 adalah 120');
			break;
		default:
			alert('Nilai angka1 adalah tidak diketahui');
	}
	*/
// looping
	//for
	for (var i = 0; i < 10; i++) {
		document.write('<br>Nilai i adalah ' + i);
	}

	//while
	var x = 10;
	while(x >= 1){
		document.write('<br>Nilai x adalah ' + x);
		x--; //decrement x = x - 1
	}

	// do while
	// foreach
// array
	/*
	var buah = ['Jeruk', 'Mangga', 'jambu', 'Salak'];
	document.write('<hr>' + buah[1]);
	buah[buah.length] = 'Semangka';
	document.write('<hr>' + buah[4]);
	document.write('<hr>Panjang array = ' + buah.length);
	document.write('<hr>');
	for (var i = 0; i < buah.length; i++) {
		document.write(buah[i] + '<br>');
	}
	*/
// function
function jumlah1(x, y) {
	return (x + y);
}

function jumlah2(x, y) {
	var hasil = x + y;
	//document.write('Penjumlahan x dan y = ' + hasil);
	console.log(hasil);
}

/*document.write('<br>Hasil penjumlahan 2 dan 3 = ' + jumlah1(2,3));

document.write('<hr>');

var hasilPenjumlahan = (jumlah1(100, 50) + 5);
document.write('<br>Hasil penjumlahan  = ' + hasilPenjumlahan);

jumlah2(120, 5);

var hasilPenjumlahan2 = (jumlah2(100, 50) + 5);
document.write('<br>Hasil penjumlahan 2  = ' + hasilPenjumlahan2);*/

function tampilkanPesan() {
	var nilai1 = document.getElementById('nilai1').value;
	alert(nilai1);
}