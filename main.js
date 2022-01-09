let latitude=22.7868542, longitude=80.36463296

mapboxgl.accessToken='pk.eyJ1IjoiYXBla3NoYWphaW4wNSIsImEiOiJja3h0MDVkcGkwaGxqMm9vNTdlMXphNm81In0.K9oILE0Fz4UiVaYyif5HeA'
 var map= new mapboxgl.Map({
     container:'map',
     style:'mapbox://styles/mapbox/streets-v11',
     center:[longitude,latitude],
     zoom:3.5
 })
 map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
)

 var img1=document.querySelector("#gatewayindia")
 var marker1=new mapboxgl.Marker({
     element:img1
 })
 .setLngLat([72.8347,18.9220])
 .addTo(map)
 
 var img2=document.querySelector("#goldentemple")
 var marker1=new mapboxgl.Marker({
     element:img2
 })
 .setLngLat([74.8765,31.6200])
 .addTo(map)

 var img3=document.querySelector("#konark")
 var marker1=new mapboxgl.Marker({
     element:img3
 })
 .setLngLat([86.0945,19.8876])
 .addTo(map)

 var img4=document.querySelector("#mecca")
 var marker1=new mapboxgl.Marker({
     element:img4
 })
 .setLngLat([78.4736,17.3604])
 .addTo(map)

 var img5=document.querySelector("#tajmahal")
 var marker1=new mapboxgl.Marker({
     element:img5
 })
 .setLngLat([78.0421,27.1751])
 .addTo(map) 