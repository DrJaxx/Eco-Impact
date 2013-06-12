var calculate;




calculate = function(){

    document.getElementById('origin').value = document.getElementById('origin').value+", Paris"
    document.getElementById('destination').value = document.getElementById('destination').value+", Paris"
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

              document.getElementById('duration-autolib').innerHTML += 
              Math.round(duration_car*1.17) + " minutes";

              //CO2
              CO2_essence = Math.round((response.routes[0].legs[0].distance.value)*0.001*120);
              CO2_diesel = Math.round((response.routes[0].legs[0].distance.value)*0.001*137) ;
              CO2_autolib = Math.round((response.routes[0].legs[0].distance.value)*0.001*50)

              prix_diesel = Math.round(((response.routes[0].legs[0].distance.value)*0.00001*1.289*5)*100)/100;
              prix_essence = Math.round(((response.routes[0].legs[0].distance.value)*0.00001*1.487*5)*100)/100;
              prix_autolib = Math.round(((response.routes[0].legs[0].duration.value)*0.000276*14)*100)/100;

              document.getElementById('eco-essence').innerHTML += CO2_essence + "g"; 
              document.getElementById('eco-autolib').innerHTML += CO2_autolib + "g";
              document.getElementById('eco-diesel').innerHTML += CO2_diesel + "g";
              document.getElementById('prix-essence').innerHTML += prix_essence + "€"; 
              document.getElementById('prix-diesel').innerHTML += prix_diesel + "€";
              document.getElementById('prix-autolib').innerHTML += prix_autolib + "€";


              
            }


        });

        //BICYCLING
        directionsService.route(request2, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_velo = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              // Display the duration:
              document.getElementById('duration-velo').innerHTML += 
              duration_velo + " minutes";

              CO2_velo = Math.round((response.routes[0].legs[0].duration.value)*2*0.0166);
              document.getElementById('eco-velo').innerHTML += 
              CO2_velo + " g";



              
            }


        });

        //WALKING
        directionsService.route(request3, function(response, status){ // Envoie de la requête pour calculer le parcours
            if(status == google.maps.DirectionsStatus.OK){


              duration_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.0166);
              // Display the duration:
              document.getElementById('duration-pieds').innerHTML += 
              duration_pieds + " minutes";

              CO2_pieds = Math.round((response.routes[0].legs[0].duration.value)*0.4*0.0166);
              document.getElementById('eco-pieds').innerHTML += 
              CO2_pieds + " g";
             

              
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


