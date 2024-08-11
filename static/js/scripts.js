function updateDownloadLink() {
    const tipoCarta = document.getElementById('tipo_carta').value;
    const downloadLink = document.getElementById('downloadLink');

    if (tipoCarta === 'emocional') {
        downloadLink.href = 'static/files/carta_pai_emocional.pdf';
    } else if (tipoCarta === 'divertida') {
        downloadLink.href = 'static/files/carta_pai_divertida.pdf';
    } else if (tipoCarta === 'inspiradora') {
        downloadLink.href = 'static/files/carta_pai_inspiradora.pdf';
    }
}
