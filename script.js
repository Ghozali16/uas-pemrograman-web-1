// JavaScript for transaction form submission
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Collect form data
    const formData = {
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        jumlah: document.getElementById('jumlah').value,
        tanggal: document.getElementById('tanggal').value,
        tujuan: document.getElementById('tujuan').value,
        hotel: document.getElementById('hotel').value
    };
    // Example: Send formData to server using fetch API or process as needed
    console.log(formData);
    // Reset form after submission (optional)
    this.reset();
});
