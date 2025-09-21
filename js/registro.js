document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const contraseña = document.getElementById("contraseña").value;
  const mensaje = document.getElementById("mensaje");

  // Simulación de registro exitoso
  if (nombre && correo && telefono && contraseña) {
    mensaje.textContent = "¡Registro exitoso!";
    // Aquí podrías enviar los datos al servidor
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Por favor, completa todos los campos.";
  }
});