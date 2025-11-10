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

// Establecer fecha mínima (hoy)
const hoy = new Date().toISOString().split('T')[0];
document.getElementById("fecha").setAttribute('min', hoy);

formReservas.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const sena = document.getElementById("sena").value;

    // Validar tipo de reserva
    if (!tipo) {
        alert("Por favor, seleccione un tipo de reserva.");
        return;
    }

    // Validar DNI
    if (dni.length < 7 || dni.length > 8 || isNaN(dni)) {
        alert("Por favor, ingrese un DNI válido (7 u 8 dígitos).");
        return;
    }

    // Validar teléfono
    if (telefono.length < 10) {
        alert("Por favor, ingrese un número de teléfono válido (mínimo 10 dígitos).");
        return;
    }

    // Validar fecha (no puede ser en el pasado)
    const fechaSeleccionada = new Date(fecha);
    const fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < fechaHoy) {
        alert("La fecha de reserva no puede ser anterior a hoy.");
        return;
    }

    // Validar hora según horarios del restaurante
    const horaNum = parseInt(hora.split(':')[0]);
    const diaNum = fechaSeleccionada.getDay();

    // Lunes (1) y Jueves (4) cerrado
    if (diaNum === 1 || diaNum === 4) {
        alert("El restaurante está cerrado los lunes y jueves. Por favor, seleccione otro día.");
        return;
    }

    // Horarios: Almuerzo 12-15h, Cena 20-23h
    if ((horaNum < 12 || horaNum > 23) || (horaNum > 15 && horaNum < 20)) {
        alert("Por favor, seleccione un horario válido:\nAlmuerzo: 12:00 - 15:00\nCena: 20:00 - 23:00");
        return;
    }

    if (personas <= 0 || personas > 20) {
        alert("La cantidad de personas debe estar entre 1 y 20.");
        return;
    }

    // Validar confirmación de seña
    if (!sena) {
        alert("Por favor, confirme el envío de la seña.");
        return;
    }

    if (sena === "pendiente") {
        alert("Recordá enviar la seña de $10.000 al CVU indicado para confirmar tu reserva.");
    }

    // Si todo está bien
    const estadoSena = sena === "si" ? "Seña enviada ✓" : "Seña pendiente";
    alert(`¡Reserva enviada con éxito!\n\nDetalles:\nTipo: ${tipo}\nFecha: ${fecha}\nHora: ${hora}\nPersonas: ${personas}\nNombre: ${nombre}\nTeléfono: ${telefono}\n${estadoSena}`);
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
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Si querés que se repita al salir del viewport:
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px", // activa antes de que desaparezca
      threshold: 0.1, // detecta con un 10% visible
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
});






