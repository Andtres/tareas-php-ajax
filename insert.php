<?php
    require_once('database.php');

    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];
        $desc = $_POST['description'];
        $sql="INSERT INTO tareas (nombre, descripcion) VALUES ('$nombre', '$desc')";
        $result=mysqli_query($conn, $sql);
        if(!$result){
            die ('la consulta ha fallado');
        }

        echo 'Tarea agregada satisfactoriamente';
    }