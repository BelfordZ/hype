var geocoder;
var geoResponce;
function getGeoCode(address, canvId) {
   geocoder.geocode( { 'address': address}, function(results, status) {
	 if (status == google.maps.GeocoderStatus.OK) {
	    var mapOptions = {
	      zoom: 13,
	      center: results[0].geometry.location,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(document.getElementById(canvId), mapOptions);
	    var marker = new google.maps.Marker({
		 map: map,
		 position: results[0].geometry.location
	       });
	 } else {
	    alert(status);
	 }
      });
}
function initializeMaps() {
   geocoder = new google.maps.Geocoder();
   
   var loc0 = "Forestville Ave, Forestville 2087 NSW";
   var loc1 = "Forestway Shopping Centre, Sydney, Australia";
   var loc2 = "Blackbutts Road, Belrose 2085";
   
   getGeoCode(loc0, "map_canvas0");
   getGeoCode(loc1, "map_canvas1");
   getGeoCode(loc2, "map_canvas2");
   
   /*
   var mapOptions0 = {
     zoom: 8,
     center: loc0,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   var mapOptions1 = {
     zoom: 8,
     center: loc1,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   var mapOptions2 = {
     zoom: 8,
     center: loc2,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   
   var map0 = new google.maps.Map(document.getElementById("map_canvas0"), mapOptions0);
   var map1 = new google.maps.Map(document.getElementById("map_canvas1"), mapOptions1);
   var map2 = new google.maps.Map(document.getElementById("map_canvas2"), mapOptions2);
   */
}