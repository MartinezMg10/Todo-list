const tareas = document.getElementById('container_list_tareas')
const add = document.getElementById('add')

document.getElementById('agregar').addEventListener('click', ()=>{
    
    var container = document.createElement('div')
    const checkbox = document.createElement('div')
    const input_checkbox= document.createElement('input')
    const parrafo = document.createElement('div')
    const parrafo_p = document.createElement('p')
    const boton = document.createElement('div')
    const boton_agregar = document.createElement('button')
    const img_boton = document.createElement('img')

    container.className='container_tareas'
    checkbox.className='checkbox'
    input_checkbox.className='checkbox'
    parrafo.className='parrafo'
    boton.className='boton'

    parrafo_p.textContent=(`${add.value}`)
    img_boton.src = "imagenes/eliminar.png"

    input_checkbox.type = 'checkbox'
    boton_agregar.id="eliminar"
    img_boton.id="eliminar"
    boton_agregar.appendChild(img_boton)

    checkbox.appendChild(input_checkbox)
    parrafo.appendChild(parrafo_p)
    boton.appendChild(boton_agregar)

    container.appendChild(checkbox)
    container.appendChild(parrafo)
    container.appendChild(boton)

    tareas.appendChild(container)

    add.value = ''
})


document.addEventListener('click',(e)=>{


    if(e.target.id == 'eliminar'){
        console.log("eliminar")}


