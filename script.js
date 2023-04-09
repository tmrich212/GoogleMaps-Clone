//brought in by mapbox scripts - token from account
mapboxgl.accessToken = 'pk.eyJ1IjoidG1yb3kxMiIsImEiOiJjbGc4bmh6eG0wZ2g3M3JxbDMzeXQ0am54In0.LZSdEDV791p2jtFD1kFzCw';

//navigator for current position
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, 
    { enableHighAccuracy: true });

//success function
function successLocation(position){
    console.log(position);
    // tell mapbox to zoom into location - create setup map function to be hoisted
    setUpMap([position.coords.longitude, position.coords.latitude]);
    //longitude comes first then latitude
}


function errorLocation(){
    //will create a default position if location fails
    setUpMap([-2.24, 53.48]);
}

function setUpMap(center){ //latitude and longitude
    const map = new mapboxgl.Map({
        container: 'map', //passing the id of the div we copied
        style: 'mapbox://styles/mapbox/streets-v11',  //type of map will be street view
        center: center, //array of latitude longitude
        //need to specify zoom level
        zoom: 15
      });

      //add navigation controls from documentation
      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'top-right');

      //add direction controls
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');

    //   map.addControl(
    //     new MapBoxDirections({
    //         accessToken: mapboxgl.accessToken
    //     }),
    //     'top-left'
    //   )
      //need to include MapBoxDirections with CDN in documentation live example in html file
}


