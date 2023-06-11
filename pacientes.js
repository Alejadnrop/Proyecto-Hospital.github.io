function mostrarPacientes() {
    let mascotas = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localMascotas) {
        mascotas = JSON.parse(localPacientes)
    }
    const tablapaciente = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]

    mascotas.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent= paciente.paciente
        const celdaApellido = fila.insertCell();
        celdaNombreDueno.textContent=paciente.apellido
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=paciente.cedula
        const celdadeADoctor = fila.insertCell();
        celdadeADoctor.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
    });
}

mostrarPacientes()