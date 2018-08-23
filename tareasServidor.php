<?php
    require ('database.php');
    $search = $_POST['search'];
    if(!empty($search)){//si no esta vacio
        $sql="SELECT * FROM tareas WHERE nombre LIKE '$search%'";
        $result= mysqli_query($conn, $sql);
        if(!$result){//si no se recibe nada
            die('Error de consulta' . mysqli_error($conn));
        }
        $json = array();
        while($row=mysqli_fetch_array($result)){
            $json[]= array(
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion']
            );
        }
        echo $jsonString = json_encode($json);
        //echo $jsonString;
    }