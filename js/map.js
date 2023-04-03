/* 지도 생성 부분 */
var map = new ol.Map({
    target : 'map',
    layers: [
         new ol.layer.Tile({
             source : new ol.source.OSM()
         })
    ],
    view : new ol.View({
        center : ol.proj.fromLonLat([127.00169, 37.56421]),
        zoom : 6,
        enableRotation: false
    })
});