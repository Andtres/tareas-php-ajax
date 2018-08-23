<?php
    require ('database.php');
    
    //
    //echo 1;
    if(!empty($_POST['search'])){//si no esta vacio
        $search = $_POST['search'];
        $sql="SELECT * FROM tareas WHERE nombre LIKE '%$search%'";
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
       // $json=mysqli_fetch_all($result);
        echo $jsonString = json_encode($json);
        
    }else{
        echo '';
    }

    