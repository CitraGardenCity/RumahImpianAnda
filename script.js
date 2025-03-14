        document.querySelector(".whatsapp-btn").addEventListener("click", function() {
        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;
        let noWhatsapp = "628123456789"; // Ganti dengan nomor WhatsApp yang dituju

        let message = `Halo, saya ${nama}. Saya ingin bertanya lebih lanjut mengenai layanan Anda.`;
        let whatsappURL = `https://wa.me/${noHp}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });