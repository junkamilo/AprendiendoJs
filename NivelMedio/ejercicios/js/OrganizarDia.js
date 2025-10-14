document.addEventListener("DOMContentLoaded", () => {
    // === ELEMENTOS DEL DOM ===
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const daySelect = document.getElementById("day-select");
    const tasksBoard = document.getElementById("tasks-board");

    // === DATOS ===
    const diasSemanas = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
    const frasesMotivacionales = [
        "¡Día conquistado! Excelente trabajo.",
        "Todas las tareas completas. ¡Eres imparable!",
        "¡Felicidades! Un paso más cerca de tus metas.",
        "Productividad al máximo. ¡Sigue así!",
    ];

    // Cargar tareas desde localStorage o inicializar un objeto vacío
    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};

    // === FUNCIONES ===

    /**
     * Guarda el objeto de tareas actual en localStorage.
     */
    const saveTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    /**
     * Renderiza (dibuja) todas las tareas en el tablero.
     */
    const renderTasks = () => {
        tasksBoard.innerHTML = ""; // Limpiar el tablero antes de dibujar

        diasSemanas.forEach(dia => {
            // Crear la columna para cada día
            const dayColumn = document.createElement("div");
            dayColumn.className = "day-column";
            dayColumn.innerHTML = `<h3>${dia}</h3><ul class="task-list" data-day="${dia}"></ul>`;
            tasksBoard.append(dayColumn);

            const taskList = dayColumn.querySelector(".task-list");
            
            // Obtener las tareas del día actual, si no existen, crear un array vacío
            const tasksDelDia = tasks[dia] || [];

            if (tasksDelDia.length === 0) {
                taskList.innerHTML = `<li class="task-item-placeholder">No hay tareas.</li>`;
            } else {
                tasksDelDia.forEach(task => {
                    const taskItem = document.createElement("li");
                    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
                    taskItem.setAttribute("data-id", task.id);

                    taskItem.innerHTML = `
                        <span>${task.text}</span>
                        <div class="task-actions">
                            <button class="btn-complete"><i class="fas fa-check-circle"></i></button>
                            <button class="btn-edit"><i class="fas fa-edit"></i></button>
                            <button class="btn-delete"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    `;
                    taskList.append(taskItem);
                });
            }
        });
    };
    
    /**
     * Inicializa las opciones del select y las columnas del tablero.
     */
    const initializeApp = () => {
        // Generar opciones del select
        diasSemanas.forEach(dia => {
            const option = document.createElement("option");
            option.value = dia;
            option.textContent = dia.charAt(0).toUpperCase() + dia.slice(1);
            daySelect.append(option);
        });
        
        // Renderizar las tareas existentes
        renderTasks();
    };

    /**
     * Muestra una alerta con una frase motivacional aleatoria.
     */
    const showMotivationalQuote = () => {
        const randomIndex = Math.floor(Math.random() * frasesMotivacionales.length);
        alert(frasesMotivacionales[randomIndex]);
    };

    // === MANEJO DE EVENTOS ===

    // Evento para agregar una nueva tarea
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const selectedDay = daySelect.value;

        if (!taskText) {
            alert("Por favor, escribe una tarea.");
            return;
        }

        // Si no existe el día en el objeto, lo inicializamos como un array
        if (!tasks[selectedDay]) {
            tasks[selectedDay] = [];
        }

        const newTask = {
            id: Date.now(), // ID único basado en el tiempo
            text: taskText,
            completed: false,
        };

        tasks[selectedDay].push(newTask);

        saveTasks();
        renderTasks();
        form.reset(); // Limpia el formulario
    });

    // Evento para acciones en las tareas (completar, editar, eliminar)
    // Usamos delegación de eventos para mayor eficiencia
    tasksBoard.addEventListener("click", (e) => {
        const target = e.target;
        const taskItem = target.closest(".task-item");
        if (!taskItem) return;

        const taskId = Number(taskItem.getAttribute("data-id"));
        const day = taskItem.closest(".task-list").getAttribute("data-day");
        
        // Encontrar la tarea específica
        const task = tasks[day].find(t => t.id === taskId);

        // Acción: Completar Tarea
        if (target.closest(".btn-complete")) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();

            // Comprobar si todas las tareas del día están completas
            const allCompleted = tasks[day].every(t => t.completed);
            if (allCompleted) {
                setTimeout(() => showMotivationalQuote(), 300); // Pequeño delay para la UI
            }
        }

        // Acción: Editar Tarea
        if (target.closest(".btn-edit")) {
            const newText = prompt("Edita tu tarea:", task.text);
            if (newText !== null && newText.trim() !== "") {
                task.text = newText.trim();
                saveTasks();
                renderTasks();
            }
        }

        // Acción: Eliminar Tarea
        if (target.closest(".btn-delete")) {
            if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
                tasks[day] = tasks[day].filter(t => t.id !== taskId);
                saveTasks();
                renderTasks();
            }
        }
    });

    // === INICIALIZACIÓN DE LA APP ===
    initializeApp();
});
