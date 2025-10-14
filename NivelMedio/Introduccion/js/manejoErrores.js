//manejando error con try--catch
try {
  const input = prompt("Ingresa un número entero");
  if (input === null) throw new Error("Usuario canceló");

  const num = parseInt(input, 10);
  if (Number.isNaN(num)) {
    // No es una "excepción" técnica, pero podemos tratarlo aquí:
    throw new Error("Valor no es un número entero válido");
  }

  alert(`Ingresaste el número ${num}`);
} catch (err) {
  // Aquí sí tiene sentido usar catch: para errores reales.
  console.error("Error:", err.message);
  alert(`Ocurrió un error: ${err.message}`);
}
