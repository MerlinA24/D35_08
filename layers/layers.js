var wms_layers = [];

var format_polD35SHUsekyAV_0 = new ol.format.GeoJSON();
var features_polD35SHUsekyAV_0 = format_polD35SHUsekyAV_0.readFeatures(json_polD35SHUsekyAV_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polD35SHUsekyAV_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polD35SHUsekyAV_0.addFeatures(features_polD35SHUsekyAV_0);
var lyr_polD35SHUsekyAV_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polD35SHUsekyAV_0, 
                style: style_polD35SHUsekyAV_0,
                popuplayertitle: "polD35SH-UsekyAV",
                interactive: true,
                title: '<img src="styles/legend/polD35SHUsekyAV_0.png" /> polD35SH-UsekyAV'
            });
var format_ho_08zmry_1 = new ol.format.GeoJSON();
var features_ho_08zmry_1 = format_ho_08zmry_1.readFeatures(json_ho_08zmry_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ho_08zmry_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ho_08zmry_1.addFeatures(features_ho_08zmry_1);
var lyr_ho_08zmry_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ho_08zmry_1, 
                style: style_ho_08zmry_1,
                popuplayertitle: "ho_08 záměry",
                interactive: true,
                title: '<img src="styles/legend/ho_08zmry_1.png" /> ho_08 záměry'
            });
var group_ho_10 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ho_10"});
var group_ORTOFOTO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ORTOFOTO"});

lyr_polD35SHUsekyAV_0.setVisible(true);lyr_ho_08zmry_1.setVisible(true);
var layersList = [lyr_polD35SHUsekyAV_0,lyr_ho_08zmry_1];
lyr_polD35SHUsekyAV_0.set('fieldAliases', {'Usek': 'Usek', 'Organizace': 'Organizace', 'ZkratUseku': 'ZkratUseku', });
lyr_ho_08zmry_1.set('fieldAliases', {'KBG': 'KBG', 'X_EPSG5514': 'X_EPSG5514', 'Y_EPSG5514': 'Y_EPSG5514', 'Z_Bpv': 'Z_Bpv', 'POZNAMKA': 'POZNAMKA', });
lyr_polD35SHUsekyAV_0.set('fieldImages', {'Usek': 'TextEdit', 'Organizace': 'TextEdit', 'ZkratUseku': 'TextEdit', });
lyr_ho_08zmry_1.set('fieldImages', {'KBG': 'TextEdit', 'X_EPSG5514': 'TextEdit', 'Y_EPSG5514': 'TextEdit', 'Z_Bpv': 'TextEdit', 'POZNAMKA': 'TextEdit', });
lyr_polD35SHUsekyAV_0.set('fieldLabels', {'Usek': 'no label', 'Organizace': 'no label', 'ZkratUseku': 'no label', });
lyr_ho_08zmry_1.set('fieldLabels', {'KBG': 'inline label - always visible', 'X_EPSG5514': 'hidden field', 'Y_EPSG5514': 'hidden field', 'Z_Bpv': 'inline label - visible with data', 'POZNAMKA': 'hidden field', });
lyr_ho_08zmry_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});