/*
window.onload = function () {
    // Create canvas and define attributes shared by all paths.
    var R = Raphael("container", 620, 690),
      attr = {
      "fill": "#b9b9b9",
      "stroke": "#fff",
      "stroke-miterlimit": "4",
      "stroke-width": "1",
      "transform": "s0.06,0.06,60,0" // Scales the path to a useful size.
    }; 
    // Define map object. 
    var africaMap = {};
    for (var nation in africaPaths) {
      // Draw a path, then apply attributes to it.
      africaMap[nation] = R.path(africaPaths[nation]).attr(attr);
      // Name the internal Raphael id after the africaPaths property name.
      africaMap[nation].id = nation;

      // Name the element id after the africaPaths property name.
      africaMap[nation].node.id = nation;
    }
    // For an example of interaction via Raphael, uncomment the line below.
   var demo1 = R.getById('tanzania').attr({"fill": "green"});
   $('path').click(function() {
             console.log(this.id);
             // here you do what you want ^^
        });  

  };
*/
$(function () {
    $(".mapcontainer").mapael({
        map: {
            name: "european_union"
            // Enable zoom on the map
            , zoom: {
                enabled: true,
                maxLevel: 20
            }
            // Set default plots and areas style
            , defaultPlot: {
                attrs: {
                    fill: "#004a9b"
                    , opacity: 0.6
                }
                , attrsHover: {
                    opacity: 1
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            // Set default area style
            , defaultArea: {
                attrs: {
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#a4e100"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            },
            // Customize some areas of the map
            areas: {
                /*"department-1": {
                    text: {content: "Morbihan", attrs: {"font-size": 10}},
                    tooltip: {content: "Morbihan (56)"}
                },
                "department-2": {
                    attrs: {
                        fill: "#488402"
                    }
                    , attrsHover: {
                        fill: "#a4e100"
                    }
                }
                */
            }
        },

        // Add some plots on the map
        plots: {


            'LV': {
                tooltip: {content: "<span style=\"font-weight:bold;\">Nimi :</span> Eesti"},
                path: "m 472.29,212.66 c 0.12,0.4 0.25,0.8 0.38,1.21 0,-2.1 -0.32,-4.32 1.25,-6.1 0.67,-0.77 1.81,-1.31 2.14,-2.34 0.42,-1.31 0.15,-2.43 0.91,-3.71 1.49,-2.48 3.16,-3.62 5.81,-4.29 1.29,-0.31 4.84,-2.38 5.72,-1.14 1.39,1.94 3.03,2.8 4.65,4.48 1.85,1.89 2.45,4.41 5.18,5.35 2.14,0.72 4.39,-0.23 6.34,-1.56 2.81,-1.92 2.65,-4.22 1.8,-6.96 -0.33,-1.08 -0.68,-2.29 -0.32,-3.5 0.98,0.3 2.08,-0.45 2.92,-0.93 1.67,-0.94 4.9,-2.31 6.47,-1.22 1.03,0.72 3.2,0.51 4.57,1.35 2.04,1.22 3.83,1.56 5.55,3.34 1.41,1.45 2.77,2.33 4.89,1.28 2.34,-1.15 4.66,0.45 6.97,0.66 1.39,0.14 3.62,2.13 4.66,3.06 0.58,0.51 -1.34,5.56 -1.85,6.16 3.55,-0.44 1.66,1.59 3.12,2.19 1.73,0.72 2.44,3.87 2.55,5.61 0.11,1.84 -1.46,1.85 -2.79,2.5 -1,0.51 -1.92,1.56 -2.63,2.43 -0.39,0.49 -0.19,1.61 -0.8,1.94 -1.98,1.07 -3.82,-1.43 -6.01,-0.35 -2.55,1.26 -4.02,2.73 -6.63,1.12 -2.16,-1.33 -4.06,-3.04 -6.05,-4.58 -1.92,-1.49 -4.63,-0.73 -6.55,-2.08 -1.69,-1.17 -1.8,-3.69 -4.39,-2.2 -2.25,1.29 -2.97,1.26 -5.34,1.49 -2.1,0.21 -4.47,-1.21 -6.76,-1.17 -2.38,0.03 -3.99,0.45 -6.1,-0.38 -1.34,-0.52 -4.03,-0.21 -5.55,-0.21 -2.36,0 -4.47,0.4 -6.81,0.98 -1.49,0.35 -4.19,0.8 -4.94,2.5 -0.5,1.1 -1.21,1.38 -1.86,0.45 -1.17,-1.63 -0.75,-3.45 -0.47,-5.37",
                width: 30,
                height: 30,
                attrs: {
                    opacity: 1
                }
            },
            // SVG plot
            /*'Latvia': {
                type: "svg",
                path: "m 472.29,212.66 c 0.12,0.4 0.25,0.8 0.38,1.21 0,-2.1 -0.32,-4.32 1.25,-6.1 0.67,-0.77 1.81,-1.31 2.14,-2.34 0.42,-1.31 0.15,-2.43 0.91,-3.71 1.49,-2.48 3.16,-3.62 5.81,-4.29 1.29,-0.31 4.84,-2.38 5.72,-1.14 1.39,1.94 3.03,2.8 4.65,4.48 1.85,1.89 2.45,4.41 5.18,5.35 2.14,0.72 4.39,-0.23 6.34,-1.56 2.81,-1.92 2.65,-4.22 1.8,-6.96 -0.33,-1.08 -0.68,-2.29 -0.32,-3.5 0.98,0.3 2.08,-0.45 2.92,-0.93 1.67,-0.94 4.9,-2.31 6.47,-1.22 1.03,0.72 3.2,0.51 4.57,1.35 2.04,1.22 3.83,1.56 5.55,3.34 1.41,1.45 2.77,2.33 4.89,1.28 2.34,-1.15 4.66,0.45 6.97,0.66 1.39,0.14 3.62,2.13 4.66,3.06 0.58,0.51 -1.34,5.56 -1.85,6.16 3.55,-0.44 1.66,1.59 3.12,2.19 1.73,0.72 2.44,3.87 2.55,5.61 0.11,1.84 -1.46,1.85 -2.79,2.5 -1,0.51 -1.92,1.56 -2.63,2.43 -0.39,0.49 -0.19,1.61 -0.8,1.94 -1.98,1.07 -3.82,-1.43 -6.01,-0.35 -2.55,1.26 -4.02,2.73 -6.63,1.12 -2.16,-1.33 -4.06,-3.04 -6.05,-4.58 -1.92,-1.49 -4.63,-0.73 -6.55,-2.08 -1.69,-1.17 -1.8,-3.69 -4.39,-2.2 -2.25,1.29 -2.97,1.26 -5.34,1.49 -2.1,0.21 -4.47,-1.21 -6.76,-1.17 -2.38,0.03 -3.99,0.45 -6.1,-0.38 -1.34,-0.52 -4.03,-0.21 -5.55,-0.21 -2.36,0 -4.47,0.4 -6.81,0.98 -1.49,0.35 -4.19,0.8 -4.94,2.5 -0.5,1.1 -1.21,1.38 -1.86,0.45 -1.17,-1.63 -0.75,-3.45 -0.47,-5.37",
                width: 30,
                height: 30,
                latitude: 45.8188276,
                longitude: 1.1060351,
                attrs: {
                    opacity: 1
                }
            },*/
            // Image plot - Marker
            'Tallinn': {
                type: "image",
                url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                width: 12,
                height: 40,
                latitude: 59.436962,
                longitude: 24.753574,
                attrs: {
                    opacity: 1
                },
                attrsHover: {
                    transform: "s1.5"
                },
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tallinn</span><br />"
                }
            },
        }
    });
});

$(function () {
    $(".mapcontainer1").mapael({
        map: {
            name: "world_countries"
            // Enable zoom on the map
            , zoom: {
                enabled: true,
                maxLevel: 20
            }
            // Set default plots and areas style
            , defaultPlot: {
                attrs: {
                    fill: "#004a9b"
                    , opacity: 0.6
                }
                , attrsHover: {
                    opacity: 1
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
            // Set default area style
            , defaultArea: {
                attrs: {
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
                , attrsHover: {
                    fill: "#a4e100"
                }
                , text: {
                    attrs: {
                        fill: "#505444"
                    }
                    , attrsHover: {
                        fill: "#000"
                    }
                }
            }
        },

        // Add some plots on the map
        plots: {}
    });
});
