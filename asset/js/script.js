document.addEventListener("DOMContentLoaded", function () {
    fetch('layout/sidebar.html')  // Pastikan path benar
        .then(response => response.text())
        .then(data => {
            const sidebarContainer = document.getElementById('sidebar-container');
            if (sidebarContainer) {
                sidebarContainer.innerHTML = data;
                // Mendapatkan URL halaman saat ini
                const currentURL = window.location.href;

                // Mendapatkan elemen link sidebar

                // Sub Menu
                const makan = document.getElementById('doaMakan');
                const kamarMandi = document.getElementById('doaKamarMandi');
                const masjid = document.getElementById('doaMasjid');

                // Cek apakah URL saat ini mengandung 'index.html' untuk menambahkan class 'active'
                if (currentURL.includes('makan')) {
                    makan.classList.add('active');
                } else if (currentURL.includes('kamar-mandi')) {
                    kamarMandi.classList.add('active');
                } else if (currentURL.includes('masjid')) {
                    masjid.classList.add('active');
                } else {
                    makan.classList.add('active');
                }
            } else {
                console.error("Sidebar container not found");
            }

            // Sidebar

            const searchSidebar = document.getElementById('searchSidebar')
            const Items = document.querySelectorAll('#navbarItem li');

            searchSidebar.addEventListener('input', function () {
                const query = searchSidebar.value.toLowerCase();

                Items.forEach(item => {
                    // Ambil semua teks dari elemen dalam card
                    const textContent = item.textContent.toLowerCase();

                    // Tampilkan atau sembunyikan item berdasarkan pencarian
                    if (textContent.includes(query)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
