var calculate;




calculate = function(){
    origin      = document.getElementById('origin').value; // Le point départ
    destination = document.getElementById('destination').value; // Le point d'arrivé
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
              // Display the duration:
              document.getElementById('duration-essence').innerHTML += 
              duration_car + " minutes";

              // Display the duration:
              document.getElementById('duration-diesel').innerHTML += 
              duration_car + " minutes";

              //CO2
              CO2_essence = Math.round((response.routes[0].legs[0].distance.value)*0.001*120);
              CO2_diesel = Math.round((response.routes[0].legs[0].distance.value)*0.001*137) ;

              


              document.getElementById('eco-essence').innerHTML += CO2_essence + "g"; 
              document.getElementById('eco-diesel').innerHTML += CO2_diesel + "g";


              
            }


        });

        //BICYCLING
        directionsService.route(request2, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_velo = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              // Display the duration:
              document.getElementById('duration-velo').innerHTML += 
              duration_velo + " minutes";



              
            }


        });

        //WALKING
        directionsService.route(request3, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              // Display the duration:
              document.getElementById('duration-pieds').innerHTML += 
              duration_pieds + " minutes";

              
            }


        });

        //TRANSIT
        directionsService.route(request4, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_transports = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              // Display the duration:
              document.getElementById('duration-transports').innerHTML += 
              duration_transports + " minutes";


              
            }


        });

  






    }
};


