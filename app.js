$(document).ready(function () {
    let edit=false;//para poder reutilzar el formulario del insert
    console.log('Esta funcionando');
    obtenerTareas();
    $('#tareResultados').hide();//lo olcutamos mietras no tenga informacion
    $('#search').keyup(function () {
        if ($('#search').val()) {//si tiene un valor que haga la
            let search = $('#search').val();
            //console.log(search);
            $.ajax({
                url: 'servidor.php',
                data: { search },
                type: 'POST',
                success: function (response) {
                    let tarea = JSON.parse(response);
                    let plantilla = '';
                    tarea.forEach(tarea => {
                        plantilla += `
                    <li>
                        ${tarea.nombre}
                    </li>
                    
                    `
                    });
                    $('#container').html(plantilla);
                    $('#tareResultados').show();//lo mostramos si tiene informacion

                }
            });
        }
    });
    $('#tarea-formu').submit(function (e) {
        const postData = { //capturamo la informacion del id y la enviamos a traves de este objeto
            nombre: $('#nombre').val(),//es lo que se envia por POST
            description: $('#description').val(),
            id: $('#tareaid').val()
        }
        let url= edit === false ? 'insert.php' : 'edit.php';//varible que define a donde enviaremos la informacion del objeto
        
        $.post(url, postData, function (response) {//otra forma de enviar info por el metodo post
            console.log(response);
            obtenerTareas();
            $('#tarea-formu').trigger('reset');//reseteamos el formulario

        });
        e.preventDefault();//evitamos el comportamiento normal de un formulario
    });

    function obtenerTareas() {
        $.ajax({
            url: 'tareas-list.php',
            type: 'POST',
            success: function (response) {
                let tareas = JSON.parse(response);
                let plantilla = '';
                tareas.forEach(tareas => {
                    plantilla += `
                    <tr tareaId="${tareas.id}">
                        <td>${tareas.id}</td>
                        <td><a href="#" class="nombre-tarea">${tareas.nombre}</a></td>
                        <td>${tareas.descripcion}</td>
                        <td>
                            <button class="tareas-borrar btn btn-danger btn-sm">
                                Borrar
                            </button>
                        </td>
                    </tr>
                    `
                });
                $('#tasks').html(plantilla);
            }
        });
    }

    $(document).on('click', '.tareas-borrar', function () {//solo escuhe los que tengan la clase tareas borrar
        if (confirm('Estas seguro que deseas elimanar el registro')) {
            let elemento = $(this)[0].parentElement.parentElement;//capturo el elemtno que ha sido clickqueado, propiedad que accede al elemento padre
            let id = $(elemento).attr('tareaId');//escojemos el atributo que tenga este valor
            $.post('delete.php', { id }, function (response) {
                obtenerTareas();
            });
        }
    });

    $(document).on('click', '.nombre-tarea', function(){
       let elemento = $(this)[0].parentElement.parentElement;
       let id = $(elemento).attr('tareaId');
        $.post('unica-tarea.php', {id}, function(response){
            const tarea = JSON.parse(response);
            $('#nombre').val(tarea.nombre);
            $('#description').val(tarea.descripcion);
            $('#tareaid').val(tarea.id);
            edit= true;

        }); 
    });

});

