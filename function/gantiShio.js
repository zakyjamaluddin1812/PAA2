const gantiShio = (tahun) => {
        //Cek Shio
        if(((1901 - tahun)%12) == 1 ||((1901 - tahun)%12) == -11) {
            gantiGambar('mouse.png')
        } else if (((1901 - tahun)%12) == 0) {
            gantiGambar('buffalo.png')
        } else if (((1901 - tahun)%12) == 11 ||((1901 - tahun)%12) == -1) {
            gantiGambar('tiger.png')
        } else if (((1901 - tahun)%12) == 10 ||((1901 - tahun)%12) == -2) {
            gantiGambar('hare.png')
        } else if (((1901 - tahun)%12) == 9 ||((1901 - tahun)%12) == -3) {
            gantiGambar('dragon.png')
        } else if (((1901 - tahun)%12) == 8 ||((1901 - tahun)%12) == -4) {
            gantiGambar('snake.png')
        } else if (((1901 - tahun)%12) == 7 ||((1901 - tahun)%12) == -5) {
            gantiGambar('horse.png')
        } else if (((1901 - tahun)%12) == 6 ||((1901 - tahun)%12) == -6) {
            gantiGambar('goat.png')
        } else if (((1901 - tahun)%12) == 5 ||((1901 - tahun)%12) == -7) {
            gantiGambar('monkey.png')
        } else if (((1901 - tahun)%12) == 4 ||((1901 - tahun)%12) == -8) {
            gantiGambar('gallic-rooster.png')
        } else if (((1901 - tahun)%12) == 3 ||((1901 - tahun)%12) == -9) {
            gantiGambar('dog.png')
        } else if (((1901 - tahun)%12) == 2 ||((1901 - tahun)%12) == -10) {
            gantiGambar('pig.png')
        } else {
            //Error
        }


        
}
const gantiGambar = (src) =>  {
    const img = document.getElementById('gambar')
    img.src = 'assets/img/' + src
    console.log(img);
}