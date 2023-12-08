function cambiarImagen() {
    // Simula un clic en el input de archivo
    document.getElementById('inputImagen').click();
}

function cargarImagenDesdeInput() {
    var inputImagen = document.getElementById('inputImagen');
    var imagenDestacada = document.getElementById('imagenDestacada');

    // Verifica si se seleccionó un archivo
    if (inputImagen.files && inputImagen.files[0]) {
        var lector = new FileReader();

        // Cuando la carga esté completa, establece la imagen como src
        lector.onload = function (e) {
            imagenDestacada.src = e.target.result;
        };

        // Lee el contenido del archivo como una URL de datos
        lector.readAsDataURL(inputImagen.files[0]);
    }
}