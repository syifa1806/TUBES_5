// Ambil elemen tombol login
const loginBtn = document.getElementById("loginBtn");

// Tambahkan event listener
loginBtn.addEventListener("click", function () {
  // Ambil input email dan password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi input (opsional)
  if (email === "" || password === "") {
    alert("Email dan password harus diisi!");
    return;
  }

  // Arahkan ke halaman Home.html
  window.location.href = "Home.html";
});
