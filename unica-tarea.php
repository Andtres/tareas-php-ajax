<?php
    include_once('database.php');
    $id= $_POST['id'];
    $sql="SELECT * FROM tareas WHERE  id=$id LIMIT 1";
    $result = mysqli_query($conn, $sql);
    if(!$result){
        die('Consulta fallida');
    }
        $json=array();
     $json=mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo $jsonString= json_encode($json[0]);

    