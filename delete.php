<?php
    require_once('database.php');
    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        $sql= "DELETE FROM tareas WHERE id='$id' LIMIT 1";
        $result=mysqli_query($conn, $sql);
        if(!$result){
            die('Consulta fallida');
        }

        echo 'Tarea eliminada satisfactoriamente';
    }
    