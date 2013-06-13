<?php 
	session_start();
?>
<!doctype html>
<html lang="fr-FR">
<head>
	<meta charset="UTF-8">
	<title>Éco'Impact</title>
<link href='http://fonts.googleapis.com/css?family=Alef:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src="js/custom.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=fr"></script>
    <script type="text/javascript" src="js/functions.js"></script>
</head>
<body>
	<div id="animation"></div>
	<div id="formulaire">
		<form name="form" id="form" method="post">
			<div class="inputs_text">
		           <input type="text" id="first_input" class="input_text" name="depart" id="depart" placeholder='Indiquez votre adresse ou gare de départ...'/>
		           <input type="text" class="input_text" name="arrive" id="arrive" placeholder="Indiquez votre adresse ou gare d'arrivée"/>
			</div>
			<div id="form_button">
					<input type="submit" id="address_submit" class="but_rechercher" value="Rechercher"></input>
			</div>
		</form>

	</div>
	<div id="logo"><img src="img/logo.png" alt="logo EcoImpact"></div>
	<div id="conteneur">
		<div  id="cercle">
			<div id="phrase"> Indice de pollution <br> <span class="gramme" >50/100</span></div>
		</div>
		<div class="trait" id="velib">
			<img src="img/velo.ico.png" alt="image velib" id="imgvelib" class="imgtrait">
		</div>
		<div class="trait" id="transport">
			<img src="img/transport.ico.png" alt="image transport" id="imgtransport" class="imgtrait">
		</div>
		<div class="trait" id="pied">
			<img src="img/pied.ico.png" alt="image pied" id="imgpied" class="imgtrait">
		</div>
		<div class="trait" id="autolib">
			<img src="img/autolib.ico.png" alt="image autolib" id="imgautolib" class="imgtrait">
		</div>
		<div class="trait" id="diesel">
			<img src="img/diesel.ico.png" alt="image diesel" id="imgdiesel" class="imgtrait">
		</div>
		<div class="trait" id="essence">
			<img src="img/essence.ico.png" alt="image essence" id="imgessence" class="imgtrait">
		</div>
	</div>
	
	<div id="information">
		<div class="data" id="infoTitle"></div>
		<div class="info" id="temps">Durée : <span class="data" id="tempsData"></span></div>
		<div class="info" id="distance">Distance : <span class="data" id="distancesData"></span></div>
		<div class="info" id="cout">Coût : <span class="data" id="coutData"></span></div>
		<div class="info" id="emission">Émission : <span class="data" id="emissionData"></span></div>
	</div>


	<div id="route"></div>


</body>
</html>