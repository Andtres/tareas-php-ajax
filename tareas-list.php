<?php
    require ('database.php');
    $query= 'SELECT * FROM tareas';
    $result = mysqli_query($conn,$query);
    if(!$result){
        die('Consulta fallida' . mysqli_error($conn));
    }
    $json= array();
   /*while($row=mysqli_fetch_array($result)){
        $json[]= array(
            'id' => $row['id'],
            'nombre' => $row['nombre'],
            'descripcion' => $row['descripcion']
        );
   }*/
    $json= mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo $jsonString= json_encode($json);
