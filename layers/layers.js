var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            'type':'base',
            'opacity': 0.949000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Masadeagua_2 = new ol.format.GeoJSON();
var features_Masadeagua_2 = format_Masadeagua_2.readFeatures(json_Masadeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masadeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masadeagua_2.addFeatures(features_Masadeagua_2);
var lyr_Masadeagua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masadeagua_2,
maxResolution:56.00893230452392,
 
                style: style_Masadeagua_2,
                popuplayertitle: 'Masa de agua',
                interactive: true,
                title: '<img src="styles/legend/Masadeagua_2.png" /> Masa de agua'
            });
var format_LimiteComunal_3 = new ol.format.GeoJSON();
var features_LimiteComunal_3 = format_LimiteComunal_3.readFeatures(json_LimiteComunal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteComunal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteComunal_3.addFeatures(features_LimiteComunal_3);
var lyr_LimiteComunal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteComunal_3, 
                style: style_LimiteComunal_3,
                popuplayertitle: 'Limite Comunal',
                interactive: false,
                title: '<img src="styles/legend/LimiteComunal_3.png" /> Limite Comunal'
            });
var format_SenderosdeTreking_4 = new ol.format.GeoJSON();
var features_SenderosdeTreking_4 = format_SenderosdeTreking_4.readFeatures(json_SenderosdeTreking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SenderosdeTreking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SenderosdeTreking_4.addFeatures(features_SenderosdeTreking_4);
var lyr_SenderosdeTreking_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SenderosdeTreking_4,
maxResolution:56.00893230452392,
 
                style: style_SenderosdeTreking_4,
                popuplayertitle: 'Senderos de Treking',
                interactive: true,
                title: '<img src="styles/legend/SenderosdeTreking_4.png" /> Senderos de Treking'
            });
var format_RutaInternacional_5 = new ol.format.GeoJSON();
var features_RutaInternacional_5 = format_RutaInternacional_5.readFeatures(json_RutaInternacional_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutaInternacional_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutaInternacional_5.addFeatures(features_RutaInternacional_5);
var lyr_RutaInternacional_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutaInternacional_5, 
                style: style_RutaInternacional_5,
                popuplayertitle: 'Ruta Internacional',
                interactive: false,
                title: '<img src="styles/legend/RutaInternacional_5.png" /> Ruta Internacional'
            });
var format_Caminos_6 = new ol.format.GeoJSON();
var features_Caminos_6 = format_Caminos_6.readFeatures(json_Caminos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminos_6.addFeatures(features_Caminos_6);
var lyr_Caminos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caminos_6, 
                style: style_Caminos_6,
                popuplayertitle: 'Caminos',
                interactive: false,
                title: '<img src="styles/legend/Caminos_6.png" /> Caminos'
            });
var format_Riosyesteros_7 = new ol.format.GeoJSON();
var features_Riosyesteros_7 = format_Riosyesteros_7.readFeatures(json_Riosyesteros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riosyesteros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riosyesteros_7.addFeatures(features_Riosyesteros_7);
var lyr_Riosyesteros_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riosyesteros_7, 
                style: style_Riosyesteros_7,
                popuplayertitle: 'Rios y esteros',
                interactive: false,
                title: '<img src="styles/legend/Riosyesteros_7.png" /> Rios y esteros'
            });
var format_Alojamiento_8 = new ol.format.GeoJSON();
var features_Alojamiento_8 = format_Alojamiento_8.readFeatures(json_Alojamiento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alojamiento_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alojamiento_8.addFeatures(features_Alojamiento_8);
var lyr_Alojamiento_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alojamiento_8,
maxResolution:56.00893230452392,
 
                style: style_Alojamiento_8,
                popuplayertitle: 'Alojamiento',
                interactive: true,
                title: '<img src="styles/legend/Alojamiento_8.png" /> Alojamiento'
            });
var format_Camping_9 = new ol.format.GeoJSON();
var features_Camping_9 = format_Camping_9.readFeatures(json_Camping_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camping_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camping_9.addFeatures(features_Camping_9);
var lyr_Camping_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camping_9,
maxResolution:56.00893230452392,
 
                style: style_Camping_9,
                popuplayertitle: 'Camping',
                interactive: true,
                title: '<img src="styles/legend/Camping_9.png" /> Camping'
            });
var format_Puntosturisticos_10 = new ol.format.GeoJSON();
var features_Puntosturisticos_10 = format_Puntosturisticos_10.readFeatures(json_Puntosturisticos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosturisticos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosturisticos_10.addFeatures(features_Puntosturisticos_10);
cluster_Puntosturisticos_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Puntosturisticos_10
});
var lyr_Puntosturisticos_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Puntosturisticos_10,
maxResolution:56.00893230452392,
 
                style: style_Puntosturisticos_10,
                popuplayertitle: 'Puntos turisticos',
                interactive: true,
                title: '<img src="styles/legend/Puntosturisticos_10.png" /> Puntos turisticos'
            });
var format_Antenasdecelular_11 = new ol.format.GeoJSON();
var features_Antenasdecelular_11 = format_Antenasdecelular_11.readFeatures(json_Antenasdecelular_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antenasdecelular_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antenasdecelular_11.addFeatures(features_Antenasdecelular_11);
var lyr_Antenasdecelular_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antenasdecelular_11,
maxResolution:56.00893230452392,
 
                style: style_Antenasdecelular_11,
                popuplayertitle: 'Antenas de celular',
                interactive: false,
                title: '<img src="styles/legend/Antenasdecelular_11.png" /> Antenas de celular'
            });
var format_Establsalud_12 = new ol.format.GeoJSON();
var features_Establsalud_12 = format_Establsalud_12.readFeatures(json_Establsalud_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Establsalud_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Establsalud_12.addFeatures(features_Establsalud_12);
var lyr_Establsalud_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Establsalud_12,
maxResolution:56.00893230452392,
 
                style: style_Establsalud_12,
                popuplayertitle: 'Establ. salud',
                interactive: false,
                title: '<img src="styles/legend/Establsalud_12.png" /> Establ. salud'
            });
var format_Carabineros_13 = new ol.format.GeoJSON();
var features_Carabineros_13 = format_Carabineros_13.readFeatures(json_Carabineros_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carabineros_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carabineros_13.addFeatures(features_Carabineros_13);
var lyr_Carabineros_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carabineros_13,
maxResolution:56.00893230452392,
 
                style: style_Carabineros_13,
                popuplayertitle: 'Carabineros',
                interactive: false,
                title: '<img src="styles/legend/Carabineros_13.png" /> Carabineros'
            });
var format_Pueblosyciudades_14 = new ol.format.GeoJSON();
var features_Pueblosyciudades_14 = format_Pueblosyciudades_14.readFeatures(json_Pueblosyciudades_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pueblosyciudades_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pueblosyciudades_14.addFeatures(features_Pueblosyciudades_14);
var lyr_Pueblosyciudades_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pueblosyciudades_14, 
                style: style_Pueblosyciudades_14,
                popuplayertitle: 'Pueblos y ciudades',
                interactive: false,
                title: '<img src="styles/legend/Pueblosyciudades_14.png" /> Pueblos y ciudades'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Masadeagua_2.setVisible(true);lyr_LimiteComunal_3.setVisible(true);lyr_SenderosdeTreking_4.setVisible(true);lyr_RutaInternacional_5.setVisible(true);lyr_Caminos_6.setVisible(true);lyr_Riosyesteros_7.setVisible(true);lyr_Alojamiento_8.setVisible(true);lyr_Camping_9.setVisible(true);lyr_Puntosturisticos_10.setVisible(true);lyr_Antenasdecelular_11.setVisible(true);lyr_Establsalud_12.setVisible(true);lyr_Carabineros_13.setVisible(true);lyr_Pueblosyciudades_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Masadeagua_2,lyr_LimiteComunal_3,lyr_SenderosdeTreking_4,lyr_RutaInternacional_5,lyr_Caminos_6,lyr_Riosyesteros_7,lyr_Alojamiento_8,lyr_Camping_9,lyr_Puntosturisticos_10,lyr_Antenasdecelular_11,lyr_Establsalud_12,lyr_Carabineros_13,lyr_Pueblosyciudades_14];
lyr_Masadeagua_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO_MAGUA': 'TIPO_MAGUA', 'COMUNA': 'COMUNA', 'AREA_KM2': 'AREA_KM2', 'RULEID': 'RULEID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LimiteComunal_3.set('fieldAliases', {'NOM_REG': 'NOM_REG', 'NOM_PROV': 'NOM_PROV', 'NOM_COM': 'NOM_COM', 'SHAPE_LENG': 'SHAPE_LENG', 'DIS_ELEC': 'DIS_ELEC', 'CIR_SENA': 'CIR_SENA', 'COD_COMUNA': 'COD_COMUNA', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SenderosdeTreking_4.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'layer': 'layer', 'path': 'path', 'Kilometros': 'Kilometros', });
lyr_RutaInternacional_5.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'REGION': 'REGION', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'NOMBRE_VIA': 'NOMBRE_VIA', 'CLASE_COMU': 'CLASE_COMU', 'CLASE_URBA': 'CLASE_URBA', 'Shape_Leng': 'Shape_Leng', });
lyr_Caminos_6.set('fieldAliases', {'REGION': 'REGION', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'NOMBRE_VIA': 'NOMBRE_VIA', 'CLASE_COMU': 'CLASE_COMU', 'CLASE_URBA': 'CLASE_URBA', 'Shape_Leng': 'Shape_Leng', });
lyr_Riosyesteros_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO_DREN': 'TIPO_DREN', 'NOMBRE': 'NOMBRE', 'NOM_REG': 'NOM_REG', 'NOM_PROV': 'NOM_PROV', 'NOM_COM': 'NOM_COM', 'DIS_ELEC_1': 'DIS_ELEC_1', 'CIR_SENA_1': 'CIR_SENA_1', 'COD_COMUNA': 'COD_COMUNA', 'SHAPE_Leng': 'SHAPE_Leng', 'f': 'f', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Alojamiento_8.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Servicio': 'Servicio', });
lyr_Camping_9.set('fieldAliases', {'Name': 'Name', 'DIRECCION': 'DIRECCION', 'EMAIL': 'EMAIL', 'TELEFONO': 'TELEFONO', 'SERVICIO': 'SERVICIO', });
lyr_Puntosturisticos_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'deportes': 'deportes', 'cultura': 'cultura', 'naturaleza': 'naturaleza', 'Tipo': 'Tipo', 'Destacado': 'Destacado', });
lyr_Antenasdecelular_11.set('fieldAliases', {'Id': 'Id', 'empresa': 'empresa', 'Cobertura': 'Cobertura', });
lyr_Establsalud_12.set('fieldAliases', {'COD_EST': 'COD_EST', 'COD_EST_NU': 'COD_EST_NU', 'NOM_EST': 'NOM_EST', 'NOM_EST_ET': 'NOM_EST_ET', 'COD_REG': 'COD_REG', 'NOM_REG': 'NOM_REG', 'COD_SS': 'COD_SS', 'NOM_SS': 'NOM_SS', 'COD_COM': 'COD_COM', 'NOM_COM': 'NOM_COM', 'PERTENENCI': 'PERTENENCI', 'TIPO_ESTAB': 'TIPO_ESTAB', 'ICONO_MAPA': 'ICONO_MAPA', 'CERTIFICAC': 'CERTIFICAC', 'DEPENDENCI': 'DEPENDENCI', 'NIVEL': 'NIVEL', 'VIA_ACCESO': 'VIA_ACCESO', 'DIRECCION': 'DIRECCION', 'FONO': 'FONO', 'COORD_X_19': 'COORD_X_19', 'COORD_Y_19': 'COORD_Y_19', 'ALTURA_GDE': 'ALTURA_GDE', 'ALTURA_GEA': 'ALTURA_GEA', 'B_COTA_SII': 'B_COTA_SII', 'DIST_COSTA': 'DIST_COSTA', 'O_CARDINAL': 'O_CARDINAL', });
lyr_Carabineros_13.set('fieldAliases', {'NOMBRE_REG': 'NOMBRE_REG', 'NOMBRE_PRO': 'NOMBRE_PRO', 'NOMBRE_COM': 'NOMBRE_COM', 'NOMBRE_UNI': 'NOMBRE_UNI', 'TIPO_DE_UN': 'TIPO_DE_UN', 'TIPO_DE_VI': 'TIPO_DE_VI', 'NOMBRE_DE': 'NOMBRE_DE', 'NUMERO': 'NUMERO', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'HECHO': 'HECHO', 'RG': 'RG', 'PREFECTURA': 'PREFECTURA', 'TIPO': 'TIPO', 'ZONA': 'ZONA', 'UNI_COD': 'UNI_COD', 'UNID_ENCRI': 'UNID_ENCRI', });
lyr_Pueblosyciudades_14.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Masadeagua_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'TIPO_MAGUA': 'TextEdit', 'COMUNA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'RULEID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LimiteComunal_3.set('fieldImages', {'NOM_REG': 'TextEdit', 'NOM_PROV': 'TextEdit', 'NOM_COM': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DIS_ELEC': 'Range', 'CIR_SENA': 'Range', 'COD_COMUNA': 'Range', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SenderosdeTreking_4.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Kilometros': 'TextEdit', });
lyr_RutaInternacional_5.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'REGION': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'NOMBRE_VIA': 'TextEdit', 'CLASE_COMU': 'TextEdit', 'CLASE_URBA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Caminos_6.set('fieldImages', {'REGION': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'NOMBRE_VIA': 'TextEdit', 'CLASE_COMU': 'TextEdit', 'CLASE_URBA': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Riosyesteros_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO_DREN': 'TextEdit', 'NOMBRE': 'TextEdit', 'NOM_REG': 'TextEdit', 'NOM_PROV': 'TextEdit', 'NOM_COM': 'TextEdit', 'DIS_ELEC_1': 'Range', 'CIR_SENA_1': 'Range', 'COD_COMUNA': 'Range', 'SHAPE_Leng': 'TextEdit', 'f': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Alojamiento_8.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'Servicio': 'TextEdit', });
lyr_Camping_9.set('fieldImages', {'Name': 'TextEdit', 'DIRECCION': 'TextEdit', 'EMAIL': 'TextEdit', 'TELEFONO': 'TextEdit', 'SERVICIO': 'TextEdit', });
lyr_Puntosturisticos_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'deportes': 'TextEdit', 'cultura': 'TextEdit', 'naturaleza': 'TextEdit', 'Tipo': 'TextEdit', 'Destacado': 'TextEdit', });
lyr_Antenasdecelular_11.set('fieldImages', {'Id': 'Range', 'empresa': 'TextEdit', 'Cobertura': 'Range', });
lyr_Establsalud_12.set('fieldImages', {'COD_EST': 'TextEdit', 'COD_EST_NU': 'TextEdit', 'NOM_EST': 'TextEdit', 'NOM_EST_ET': 'TextEdit', 'COD_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'COD_SS': 'TextEdit', 'NOM_SS': 'TextEdit', 'COD_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'PERTENENCI': 'TextEdit', 'TIPO_ESTAB': 'TextEdit', 'ICONO_MAPA': 'TextEdit', 'CERTIFICAC': 'TextEdit', 'DEPENDENCI': 'TextEdit', 'NIVEL': 'TextEdit', 'VIA_ACCESO': 'TextEdit', 'DIRECCION': 'TextEdit', 'FONO': 'TextEdit', 'COORD_X_19': 'TextEdit', 'COORD_Y_19': 'TextEdit', 'ALTURA_GDE': 'TextEdit', 'ALTURA_GEA': 'TextEdit', 'B_COTA_SII': 'TextEdit', 'DIST_COSTA': 'TextEdit', 'O_CARDINAL': 'TextEdit', });
lyr_Carabineros_13.set('fieldImages', {'NOMBRE_REG': 'TextEdit', 'NOMBRE_PRO': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'NOMBRE_UNI': 'TextEdit', 'TIPO_DE_UN': 'TextEdit', 'TIPO_DE_VI': 'TextEdit', 'NOMBRE_DE': 'TextEdit', 'NUMERO': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'HECHO': 'TextEdit', 'RG': 'TextEdit', 'PREFECTURA': 'TextEdit', 'TIPO': 'TextEdit', 'ZONA': 'TextEdit', 'UNI_COD': 'TextEdit', 'UNID_ENCRI': 'TextEdit', });
lyr_Pueblosyciudades_14.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Masadeagua_2.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'TIPO_MAGUA': 'inline label - always visible', 'COMUNA': 'no label', 'AREA_KM2': 'inline label - always visible', 'RULEID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_LimiteComunal_3.set('fieldLabels', {'NOM_REG': 'inline label - always visible', 'NOM_PROV': 'no label', 'NOM_COM': 'no label', 'SHAPE_LENG': 'no label', 'DIS_ELEC': 'no label', 'CIR_SENA': 'no label', 'COD_COMUNA': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', });
lyr_SenderosdeTreking_4.set('fieldLabels', {'name': 'inline label - always visible', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'layer': 'no label', 'path': 'no label', 'Kilometros': 'inline label - always visible', });
lyr_RutaInternacional_5.set('fieldLabels', {'name': 'hidden field', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'REGION': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'NOMBRE_VIA': 'no label', 'CLASE_COMU': 'no label', 'CLASE_URBA': 'no label', 'Shape_Leng': 'no label', });
lyr_Caminos_6.set('fieldLabels', {'REGION': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'NOMBRE_VIA': 'no label', 'CLASE_COMU': 'no label', 'CLASE_URBA': 'no label', 'Shape_Leng': 'no label', });
lyr_Riosyesteros_7.set('fieldLabels', {'OBJECTID': 'no label', 'TIPO_DREN': 'no label', 'NOMBRE': 'no label', 'NOM_REG': 'no label', 'NOM_PROV': 'no label', 'NOM_COM': 'no label', 'DIS_ELEC_1': 'no label', 'CIR_SENA_1': 'no label', 'COD_COMUNA': 'no label', 'SHAPE_Leng': 'no label', 'f': 'no label', 'Shape_Le_1': 'no label', });
lyr_Alojamiento_8.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Servicio': 'inline label - always visible', });
lyr_Camping_9.set('fieldLabels', {'Name': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'EMAIL': 'inline label - always visible', 'TELEFONO': 'inline label - always visible', 'SERVICIO': 'inline label - always visible', });
lyr_Puntosturisticos_10.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'deportes': 'no label', 'cultura': 'no label', 'naturaleza': 'no label', 'Tipo': 'inline label - always visible', 'Destacado': 'inline label - always visible', });
lyr_Antenasdecelular_11.set('fieldLabels', {'Id': 'no label', 'empresa': 'inline label - visible with data', 'Cobertura': 'inline label - always visible', });
lyr_Establsalud_12.set('fieldLabels', {'COD_EST': 'no label', 'COD_EST_NU': 'no label', 'NOM_EST': 'no label', 'NOM_EST_ET': 'no label', 'COD_REG': 'no label', 'NOM_REG': 'no label', 'COD_SS': 'no label', 'NOM_SS': 'no label', 'COD_COM': 'no label', 'NOM_COM': 'no label', 'PERTENENCI': 'no label', 'TIPO_ESTAB': 'no label', 'ICONO_MAPA': 'no label', 'CERTIFICAC': 'no label', 'DEPENDENCI': 'no label', 'NIVEL': 'no label', 'VIA_ACCESO': 'no label', 'DIRECCION': 'no label', 'FONO': 'no label', 'COORD_X_19': 'no label', 'COORD_Y_19': 'no label', 'ALTURA_GDE': 'no label', 'ALTURA_GEA': 'no label', 'B_COTA_SII': 'no label', 'DIST_COSTA': 'no label', 'O_CARDINAL': 'no label', });
lyr_Carabineros_13.set('fieldLabels', {'NOMBRE_REG': 'no label', 'NOMBRE_PRO': 'no label', 'NOMBRE_COM': 'no label', 'NOMBRE_UNI': 'no label', 'TIPO_DE_UN': 'no label', 'TIPO_DE_VI': 'no label', 'NOMBRE_DE': 'no label', 'NUMERO': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'HECHO': 'no label', 'RG': 'no label', 'PREFECTURA': 'no label', 'TIPO': 'no label', 'ZONA': 'no label', 'UNI_COD': 'no label', 'UNID_ENCRI': 'no label', });
lyr_Pueblosyciudades_14.set('fieldLabels', {'id': 'no label', 'Nombre': 'inline label - always visible', });
lyr_Pueblosyciudades_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});