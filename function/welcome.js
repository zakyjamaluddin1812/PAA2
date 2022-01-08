const sapa = document.getElementById('sapa')
const jam = new Date().getHours()
if (jam < 9) {
    sapa.innerHTML = 'Selamat Pagi'
} else if (jam < 15) {
    sapa.innerHTML = 'Selamat Siang'
} else if (jam < 18) {
    sapa.innerHTML = 'Selamat Sore'
} else {
    sapa.innerHTML = 'Selamat Malam'
}

konten1 = document.querySelector('.konten1')
konten2 = document.querySelector('.konten2')
konten1.classList.remove('d-none')
konten2.classList.add('d-none')