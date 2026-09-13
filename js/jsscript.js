function bukaWhatsApp() {
    const nomor = "6281282382800";
    const pesan = "Halo Admin BAP, saya ingin bertanya mengenai CV BAP.";

    const url =
        "https://wa.me/" +
        nomor +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");
}

function bukaMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

function bukaDropdown(event) {

    if (window.innerWidth <= 1024) {

        event.preventDefault();

        const dropdown =
            document.getElementById("dropdownTentang");

        dropdown.classList.toggle("show");
    }
}