$(document).ready(function(){
    console.log('Esta funcionando');
    $('#search').keyup(function(e){
        search = $('#search').val();
        $.ajax({
            url: 'tareasServidor.php',
            type: 'POST',
            date: {search},
            success: function(response){
                console.log(response);
            }
        });
    });
});