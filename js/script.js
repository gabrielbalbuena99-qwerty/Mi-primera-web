// ================== MENÚ HAMBURGUESA ==================
// Obtenemos los elementos del DOM
const hamburguesa = document.getElementById("hamburguesa");
const navbar = document.getElementById("navbar");

// Al hacer clic en la hamburguesa, mostramos u ocultamos el menú
hamburguesa.addEventListener("click", () => {
    navbar.classList.toggle("activo");
});


// ================== VALIDACIÓN FORMULARIO DE RESERVAS ==================
const formReservas = document.getElementById("formReservas");

formReservas.addEventListener("submit", (e) => {
    e.preventDefault();

    const dni = document.getElementById("dni").value.trim();
    const personas = document.getElementById("personas").value;
    const sena = document.getElementById("sena").value;

    // Validamos campos simples
    if (dni.length < 7 || isNaN(dni)) {
        alert("Por favor, ingrese un DNI válido.");
        return;
    }

    if (personas <= 0) {
        alert("Debe ingresar una cantidad de personas válida.");
        return;
    }

    if (sena < 0) {
        alert("La seña no puede ser negativa.");
        return;
    }

    alert("¡Reserva enviada con éxito!");
    formReservas.reset();
});


// ================== EFECTO FADE-IN EN SCROLL (repetible) ==================
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.2, // se activa cuando el 20% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");  // activa el fade-in
            } else {
                entry.target.classList.remove("visible"); // lo quita al salir del viewport
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});



