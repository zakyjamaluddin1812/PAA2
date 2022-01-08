const validForm = () => {
    const form = document.form
    const tanggal = document.form.tanggal.value
    const bulan = document.form.bulan.value
    const tahun = document.form.tahun.value
    const tahunSekarang = new Date().getFullYear()
    if (tanggal == "" || bulan =="" || tahun == "") {
        return error('Maaf, form anda belum lengkap')
    }
    if (tanggal >31 || tanggal < 1) {
        return error('Tanggal lu salah')
    }
    if (tahun < 1901) {
        return error('Anda sudah terlalu tua. Maaf yaa')
    }
    if (tahun > tahunSekarang) {
        return error(`Sekarang kan belum tahun ${tahun}, wkwk`)
    }
    cekZodiak(tanggal, bulan)
    gantiShio(tahun)
    console.log(tanggal, bulan, tahun);
}