document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  const mensaje = document.getElementById("mensaje");

  // Simulación de credenciales válidas
  if (usuario === "admin" && contraseña === "veterinaria123") {
    mensaje.style.color = "green";
    mensaje.textContent = "¡Ingreso exitoso!";
    // Redirigir o mostrar panel
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Usuario o contraseña incorrectos.";
  }
});