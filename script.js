const { z } = window.zod;

// Definimos el esquema de validación
const schema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El correo debe ser válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

document.getElementById("registro-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Limpiar errores previos
  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-password").textContent = "";

  // Obtener los valores del formulario
  const formData = {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value
  };

  // Validación con safeParse
  const result = schema.safeParse(formData);

  if (result.success) {
    alert("Registro exitoso");
    console.log("Datos enviados:", result.data);
    // Aquí podrías enviar los datos al servidor
  } else {
    // Mostrar errores
    result.error.issues.forEach(issue => {
      const field = issue.path[0];
      document.getElementById(`error-${field}`).textContent = issue.message;
    });
  }
});
