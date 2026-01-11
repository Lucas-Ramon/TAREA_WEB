//  VARIABLES GLOBALES 
const urlInput = document.getElementById('urlImagen');
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminar = document.getElementById('btnEliminar');
const galeria = document.getElementById('galeria');

let imagenSeleccionada = null;

// FUNCIÓN AGREGAR IMAGEN 
function agregarImagen() {
    const url = urlInput.value.trim();
    
    if (url === '') {
        alert('Por favor ingresa una URL válida');
        return;
    }

    const mensajeVacio = galeria.querySelector('.galeria-vacia');
    if (mensajeVacio) {
        mensajeVacio.remove();
    }

    const imagenItem = document.createElement('div');
    imagenItem.className = 'imagen-item';

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen de la galería';
    
    img.onerror = function() {
        alert('No se pudo cargar la imagen. Verifica la URL.');
        imagenItem.remove();
        if (galeria.children.length === 0) {
            mostrarMensajeVacio();
        }
    };

    imagenItem.appendChild(img);
    imagenItem.addEventListener('click', seleccionarImagen);
    galeria.appendChild(imagenItem);
    
    urlInput.value = '';
    urlInput.focus();
}

//  FUNCIÓN SELECCIONAR IMAGEN 
function seleccionarImagen(evento) {
    const itemClickeado = evento.currentTarget;
    
    if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove('seleccionada');
    }
    
    if (imagenSeleccionada === itemClickeado) {
        imagenSeleccionada = null;
        btnEliminar.disabled = true;
    } else {
        imagenSeleccionada = itemClickeado;
        imagenSeleccionada.classList.add('seleccionada');
        btnEliminar.disabled = false;
    }
}

// FUNCIÓN ELIMINAR IMAGEN 
function eliminarImagenSeleccionada() {
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
        btnEliminar.disabled = true;
        
        if (galeria.children.length === 0) {
            mostrarMensajeVacio();
        }
        }
}

//  FUNCIÓN MENSAJE VACÍO 
function mostrarMensajeVacio() {
    const mensajeVacio = document.createElement('div');
    mensajeVacio.className = 'galeria-vacia';
    mensajeVacio.innerHTML = 'No hay imágenes en la galería<br><small>Agrega una URL de imagen para comenzar</small>';
    galeria.appendChild(mensajeVacio);
}

// EVENTOS DE BOTONES 
btnAgregar.addEventListener('click', agregarImagen);
btnEliminar.addEventListener('click', eliminarImagenSeleccionada);