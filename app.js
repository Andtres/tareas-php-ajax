$(document).ready(function() {
    console.log('Esta funcionando');
    $('#search').keyup(function(){
        let search = $('#search').val();
        //console.log(search);
        $.ajax({
            url: 'servidor.php',        
            data: { search  },
            type: 'POST',
            success: function(response){
                
                let tarea= JSON.parse(response);
                let plantilla = '';
                tarea.forEach(tarea => {
                    plantilla += `
                    <li>
                        s{tarea.nombre}
                    </li>
                    
                    `
                });
            }
        });
    });
});

