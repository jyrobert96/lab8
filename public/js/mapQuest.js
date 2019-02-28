function initMap() {
	L.mapquest.key = '4UxsFDeHHIJxy9Zlm0fwJFZH1aTSUXAE';

	var map = L.mapquest.map('map', {
		center: [32.878875, -117.237015],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878875, -117.237015]).addTo(map);
}
