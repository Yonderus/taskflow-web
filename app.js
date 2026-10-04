
// Lógica principal de la aplicación

const tasks = [];

function addTask(title) {
  tasks.push({ id: Date.now(), title, done: false });
}

// === Panel principal (feature-dashboard) ===
function renderDashboard() {
  document.body.insertAdjacentHTML("beforeend", "<h2>Panel de tareas</h2>");
}
renderDashboard();
console.log("Dashboard cargado");

console.log("TaskFlow cargado");