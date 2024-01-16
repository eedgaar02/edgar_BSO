document.addEventListener("DOMContentLoaded", function () {
    const countdownSeconds = 5;
    let secondsLeft = countdownSeconds;
    const progressBar = document.getElementById("barra_progreso");
    let timerInterval;
    let counter = 0;


    function pre_inicio() {
        // Mostrar la barra de carga durante 5 segundos antes de ejecutar la función_iniciar
        const preInicioInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 5) {
                progressBar.style.backgroundColor = "#3ABB47";
                document.getElementById("seg").innerHTML = secondsLeft;
                document.getElementById("instrucciones").innerHTML = "Segundos para iniciar";
                secondsLeft--;
            }

            if (secondsLeft === 0) {
                clearInterval(preInicioInterval);
                // Al finalizar el pre-inicio, ejecutar la función_iniciar
                funcion_iniciar();
            }

        }, 1000);
    }

    function funcion_iniciar() {
        secondsLeft = countdownSeconds;

        timerInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 5) {
                progressBar.style.backgroundColor = "#3ABB47";
                document.getElementById("seg").innerHTML = secondsLeft;
                document.getElementById("instrucciones").innerHTML = "Inhala";
                secondsLeft--;
            }

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // Al finalizar la función_iniciar, ejecutar la función_mantener
                funcion_mantener();
            }

        }, 1000);
    }

    function funcion_mantener() {
        secondsLeft = countdownSeconds;

        timerInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 5) {
                progressBar.style.backgroundColor = "#3ABB47";
                document.getElementById("seg").innerHTML = secondsLeft;
                document.getElementById("instrucciones").innerHTML = "Mantén";
                secondsLeft--;
            }

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // Al finalizar la función_mantener, ejecutar la función_exhalar
                funcion_exhalar();
            }

        }, 1000);
    }

    function funcion_exhalar() {
        secondsLeft = countdownSeconds;

        timerInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 5) {
                progressBar.style.backgroundColor = "#3ABB47";
                document.getElementById("seg").innerHTML = secondsLeft;
                document.getElementById("instrucciones").innerHTML = "Exhala";
                secondsLeft--;
            }

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // Al finalizar la función_exhalar, ejecutar la función_mantener2
                funcion_mantener2();
            }

        }, 1000);
    }

    function funcion_mantener2() {
        secondsLeft = countdownSeconds;

        timerInterval = setInterval(function () {
            const progressPercentage = ((countdownSeconds - secondsLeft) / countdownSeconds) * 100;
            progressBar.style.width = progressPercentage + "%";

            if (secondsLeft <= 5) {
                progressBar.style.backgroundColor = "#3ABB47";
                document.getElementById("seg").innerHTML = secondsLeft;
                document.getElementById("instrucciones").innerHTML = "Mantén";
                secondsLeft--;
            }

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                counter++;
                if(counter < 5){
                    funcion_iniciar();
                }
            }

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
            pre_inicio();
        }
    });
});
