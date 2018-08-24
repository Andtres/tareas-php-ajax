<?php
    if($_POST){
        include_once('database.php');
        $id= $_POST['id'];
        $nombre= $_POST['nombre'];
        $des= $_POST['description'];

        $sql="UPDATE tareas SET nombre='$nombre', descripcion='$des' WHERE id='$id';";

        $result= mysqli_query($conn, $sql);
        if (!$result) {
            die('La tarea no se pudo actualizar');
        }

        echo 'Tarea actualiza satisfactoriamente';
    }