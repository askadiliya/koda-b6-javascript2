const hasilUjianJohn = [75,80,79,90]
const hasilUjianEd = [66,77,88,99]

const gabunganHasilUjian = [
    ...hasilUjianJohn,
    ...hasilUjianEd
]

let nilaiTerendah = gabunganHasilUjian[0];
let nilaiTertinggi = gabunganHasilUjian[0];
let total = 0;

for (let i = 0; i < gabunganHasilUjian.length; i++) {
  const nilai = gabunganHasilUjian[i];

  if(nilai<nilaiTerendah){
    nilaiTerendah = nilai
  }else if(nilai>nilaiTertinggi){
    nilaiTertinggi = nilai
  }
  total += nilai

}

let rataRata = total /gabunganHasilUjian.length;

console.log("Nilai Terendah:", nilaiTerendah);
console.log("Nilai Tertinggi:", nilaiTertinggi);
console.log("Rata-rata:", rataRata);

