var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.initializeMap, false);
    },

    initializeMap: function() {
        var map = new ol.Map({
                target: 'map',
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.MapQuest({layer: 'sat'})
                  })
                ],
                view: new ol.View({
                  center: ol.proj.transform([51.39, 39.10], 'EPSG:4326', 'EPSG:3857'),
                  zoom: 4
                })
              });
    }
};

app.initialize();