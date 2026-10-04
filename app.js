
// Lógica principal de la aplicación

const tasks = [];

function addTask(title) {
  tasks.push({ id: Date.now(), title, done: false });
}

// === Autenticación (feature-auth) ===
function login(user, pass) {
  return user === "admin" && pass === "1234";
}
const sesionIniciada = login("admin", "1234");
console.log(sesionIniciada ? "Sesión iniciada" : "Acceso denegado");

console.log("TaskFlow cargado");