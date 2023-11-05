// Función para validar el formulario de inicio de sesión
function validarInicioSesion() {
    // Obtener los valores ingresados en los campos de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Verificar si alguno de los campos está vacío
    if (usuario === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Evita que se envíe el formulario
    }

    // Si ambos campos están completos, permite el envío del formulario
    return true;
}

// Evento de envío del formulario
document.querySelector("form").addEventListener("submit", function (e) {
    // Llama a la función de validación al enviar el formulario
    if (!validarInicioSesion()) {
        e.preventDefault(); // Evita que se envíe el formulario si la validación falla
    }
});
