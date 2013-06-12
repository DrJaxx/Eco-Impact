var calculate;




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


              duration_autolib=Math.round(duration_car*1.17);
              

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


              CO2_velo = Math.round((response.routes[0].legs[0].duration.value)*2*0.0166);




              
            }


        });

        //WALKING
        directionsService.route(request3, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.0166);


              CO2_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.4*0.0166);

             

              
            }


        });

        //TRANSIT
        directionsService.route(request4, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_transports = Math.round((response.routes[0].legs[0].duration.value)*0.0166);



              
            }


        });

        console.log("duration_car");
        console.log("duration_autolib");
        console.log("duration_velo");
        console.log("duration_pieds");
        console.log("duration_transports");
        console.log("CO2_essence");
        console.log("CO2_diesel");
        console.log("CO2_autolib");
        console.log("CO2_velo");
        console.log("CO2_pieds");
        console.log("prix_diesel");
        console.log("prix_essence");
        console.log("prix_autolib");

  






    }
};


