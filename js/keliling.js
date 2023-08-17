const hitungButton = document.getElementById('hitung');
const resetButton = document.getElementById('reset');
const sisi1Input = document.getElementById('sisi1');
const sisi2Input = document.getElementById('sisi2');
const sisi3Input = document.getElementById('sisi3');
const hasilP = document.getElementById('hasil');

hitungButton.addEventListener('click', () => {
    const sisi1 = parseFloat(sisi1Input.value);
    const sisi2 = parseFloat(sisi2Input.value);
    const sisi3 = parseFloat(sisi3Input.value);
    
    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        const keliling = sisi1 + sisi2 + sisi3;
        hasilP.textContent = `Keliling segitiga: ${keliling}`;
    } else {
        hasilP.textContent = 'Masukkan nilai yang valid';
    }
});

resetButton.addEventListener('click', () => {
    sisi1Input.value = '';
    sisi2Input.value = '';
    sisi3Input.value = '';
    hasilP.textContent = 'Keliling segitiga: ';
});
