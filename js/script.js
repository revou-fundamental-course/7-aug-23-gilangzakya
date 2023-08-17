const hitungButton = document.getElementById('hitung');
const resetButton = document.getElementById('reset');
const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const hasilP = document.getElementById('hasil');

hitungButton.addEventListener('click', () => {
    const alas = parseFloat(alasInput.value);
    const tinggi = parseFloat(tinggiInput.value);
    
    if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        hasilP.textContent = `Luas segitiga: ${luas}`;
    } else {
        hasilP.textContent = 'Masukkan nilai yang valid';
    }
});

resetButton.addEventListener('click', () => {
    alasInput.value = '';
    tinggiInput.value = '';
    hasilP.textContent = 'Luas segitiga: ';
});
