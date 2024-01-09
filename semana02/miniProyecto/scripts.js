function agregarTarea() {
    // Obtener el valor del input
    var nuevaTarea = document.getElementById("nueva-tarea").value;

    // Crear un nuevo elemento de lista
    var nuevaLista = document.createElement("li");

    // Asignar el valor del input al elemento de lista
    nuevaLista.textContent = nuevaTarea;

    // Agregar el nuevo elemento a la lista
    document.getElementById("tareas-lista").appendChild(nuevaLista);

    // Limpiar el valor del input
    document.getElementById("nueva-tarea").value = "";
}
