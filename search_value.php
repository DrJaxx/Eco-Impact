<?php



$_SESSION['velib']= array();
$_SESSION['transport']= array();
$_SESSION['pied']= array();
$_SESSION['autolib']= array();
$_SESSION['diesel']= array();
$_SESSION['essence']= array();

    if( isset($_POST['depart']) && isset($_POST['arrive']) ){
        $depart = $_POST['depart'];
        $arrive = $_POST['arrive'];
    }
 
?>