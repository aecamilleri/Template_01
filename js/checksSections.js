    // Obtener la lista de checkboxes
    const checkboxList = document.getElementById('checkbox-list');

    // Agregar un event listener a la lista de checkboxes
    checkboxList.addEventListener('click', function (event) {
        // Verificar si el elemento clicado es un checkbox
        if (event.target.type === 'checkbox') {
            // Obtener el ID del contenedor asociado al checkbox
            const targetId = event.target.dataset.target;
            // Obtener el contenedor
            const targetContainer = document.getElementById(targetId);

            // Ocultar o mostrar el contenedor según el estado del checkbox
            targetContainer.style.display = event.target.checked ? 'none' : 'block';
        }
    });