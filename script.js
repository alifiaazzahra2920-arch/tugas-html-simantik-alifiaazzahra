const form = document.getElementById("myForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const kategori = document.getElementById("kategori");
const message = document.getElementById("message");
const hasil = document.getElementById("hasilData");
console.log("commit tambahan");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    message.textContent = "";

    if (nama.value.trim().length < 3) {
        message.textContent = "Nama minimal 3 karakter";
        valid = false;
    }
    else if (!email.value.includes("@")) {
        message.textContent = "Email tidak valid";
        valid = false;
    }
    else if (!/^[0-9]{10,}$/.test(hp.value)) {
        message.textContent = "Nomor HP tidak valid";
        valid = false;
    }
    else if (kategori.value === "") {
        message.textContent = "Pilih kategori dulu";
        valid = false;
    }

    if (valid) {
        message.textContent = "Data berhasil dikirim!";
        message.style.color = "green";

        const li = document.createElement("li");
        li.textContent = `${nama.value} | ${email.value} | ${hp.value} | ${kategori.value}`;
        hasil.appendChild(li);

        form.reset();
    } else {
        message.style.color = "red";
    }
});