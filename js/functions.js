var calculate;
var duration_car = 0;
var duration_autolib = 0;
var duration_velo = 0;
var duration_pieds = 0;
var duration_transports = 0;
var CO2_essence = 0;
var CO2_diesel = 0;
var CO2_autolib = 0;
var CO2_velo = 0;
var CO2_pieds = 0;
var prix_diesel = 0;
var prix_essence = 0;
var prix_autolib = 0;
var prix_velo = 0;
var prix_transports = 0;
//distance
var distance_transports = 0;
var distance_essence = 0;
var distance_diesel = 0;
var distance_autolib = 0;
var distance_velo = 0;
var distance_pieds = 0;

calculate = function(){
    

    document.getElementById('first_input').value = document.getElementById('first_input').value+", Paris"
    document.getElementById('arrive').value = document.getElementById('arrive').value+", Paris"
    origin      = document.getElementById('first_input').value; // Le point départ
    destination = document.getElementById('arrive').value; // Le point d'arrivé
    if(origin && destination){
        var request = {
            origin      : origin,
            destination : destination,
            travelMode  : google.maps.DirectionsTravelMode.DRIVING // Mode de conduite
        }
        var request2 = {
            origin      : origin,
            destination : destination,
            travelMode  : google.maps.DirectionsTravelMode.BICYCLING // Mode de conduite
        }
        var request3 = {
            origin      : origin,
            destination : destination,
            travelMode  : google.maps.DirectionsTravelMode.WALKING // Mode de conduite
        }
        var request4 = {
            origin      : origin,
            destination : destination,
            travelMode  : google.maps.DirectionsTravelMode.TRANSIT // Mode de conduite
        }
        var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire

        //CAR
        directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_car = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              console.log("duration top "+duration_car);

              duration_autolib=Math.round(duration_car*1.17);
             // console.log("autolib"+duration_autolib);
             distance_diesel=Math.round((response.routes[0].legs[0].distance.value)*0.001);
             distance_essence = distance_diesel;
             distance_autolib=Math.round((response.routes[0].legs[0].distance.value)*0.00105);

              //CO2
              CO2_essence = Math.round((response.routes[0].legs[0].distance.value)*0.001*120);
              CO2_diesel = Math.round((response.routes[0].legs[0].distance.value)*0.001*137) ;
              CO2_autolib = Math.round((response.routes[0].legs[0].distance.value)*0.001*50)

              prix_diesel = Math.round(((response.routes[0].legs[0].distance.value)*0.00001*1.289*5)*100)/100;
              prix_essence = Math.round(((response.routes[0].legs[0].distance.value)*0.00001*1.487*5)*100)/100;
              prix_autolib = Math.round(((response.routes[0].legs[0].duration.value)*0.000276*14)*100)/100;

            }


        });

        //BICYCLING
        directionsService.route(request2, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_velo = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              distance_velo=Math.round((response.routes[0].legs[0].distance.value)*0.001

              CO2_velo = Math.round((response.routes[0].legs[0].duration.value)*2*0.0166);

              if(duration_velo<=30){
                prix_velo=0;
              }
              else if(duration_velo<=60)
              {
                prix_velo=1;
              }  
              else if(duration_velo<=90)
              {
                prix_velo=3;
              }  
              else{
                prix_velo=3+Math.ceil((duration_velo-90)/30)*4
              }


            }


        });

        //WALKING
        directionsService.route(request3, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){

                distance_pieds=Math.round((response.routes[0].legs[0].distance.value)*0.001
              duration_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.0166);


              CO2_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.4*0.0166);

            }


        });

        //TRANSIT
        directionsService.route(request4, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_transports = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              prix_transports = 1.70;

            }


        });
        // console.log("duration bot "+duration_car);

        // console.log(duration_car);
        // console.log(duration_autolib);
        // console.log(duration_velo);
        // console.log(duration_pieds);
        // console.log(duration_transports);
        // console.log(CO2_essence);
        // console.log(CO2_diesel);
        // console.log(CO2_autolib);
        // console.log(CO2_velo);
        // console.log(CO2_pieds);
        // console.log(prix_diesel);
        // console.log(prix_essence);
        // console.log(prix_autolib);
        return false;

  
    }
};


