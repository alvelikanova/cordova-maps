var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.initializeMap, false);
    },

    initializeMap: function() {
        var long = 39.1843;
        var lat = 51.67204;
        var map = new ol.Map({target: 'map'});
        var osmSource = new ol.source.OSM();
        var osmLayer = new ol.layer.Tile({source: osmSource});
        map.addLayer(osmLayer);
        var view = new ol.View();
        view.setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
        view.setZoom(15);
        map.setView(view);
    }
};

app.initialize();