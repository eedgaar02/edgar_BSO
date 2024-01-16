document.addEventListener("DOMContentLoaded", function () {
    const countdownSeconds = 20;
    let secondsLeft = countdownSeconds;
    const progressBar = document.getElementById("barra_progreso");
    let timerInterval;

    function funcion_iniciar() {
        secondsLeft = countdownSeconds;
        progressBar.value = "Detener";
        
        timerInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 20) {
                progressBar.style.backgroundColor = "#3ABB47";
            }

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            }

            document.getElementById("seg").innerHTML = secondsLeft;
            secondsLeft--;
        }, 1000);
    }

    // Modificado: Función para detener la barra de carga llamada funcion_detener
    function funcion_detener() {
        clearInterval(timerInterval);
        // Puedes agregar aquí cualquier otra lógica que desees al detener la barra de carga
    }

    // Modificado: Agregar evento de escucha al botón "inicio"
    document.getElementById("inicio").addEventListener("click", function () {
        // Verificar si la función_iniciar ya está en progreso
        if (timerInterval) {
            // Si está en progreso, detener la barra de carga
            funcion_detener();
            location.reload();
        } else {
            // Si no está en progreso, iniciar la barra de carga
            funcion_iniciar();
        }
    });
});
