
import i18n from 'i18next';

export const testState = {
    "filesUploaded": {},
    "status": "final",
    "everPublished": false,
    "undoGroup": {
        "present": {
            "lastActionDispatched": "SELECT_BOX",
            "globalConfig": {
                "title": "Ediphy",
                "canvasRatio": 1.7777777777777777,
                "visorNav": {
                    "player": true,
                    "sidebar": true,
                    "keyBindings": true,
                },
                "trackProgress": true,
                "age": {
                    "min": 0,
                    "max": 100,
                },
                "context": "elementary_school",
                "rights": "public",
                "keywords": [],
                "typicalLearningTime": {
                    "h": 0,
                    "m": 0,
                    "s": 0,
                },
                "version": "1.0.0",
                "thumbnail": "",
                "status": "draft",
                "structure": "linear",
                "difficulty": "easy",
                "allowClone": true,
                "allowDownload": true,
                "allowComments": true,
            },
            "boxesById": {
                "bs-1497983247797": {
                    "id": "bs-1497983247797",
                    "parent": "pa-1497983247795",
                    "container": 0,
                    "level": -1,
                    "col": 0,
                    "row": 0,
                    "position": {
                        "x": 0,
                        "y": 0,
                        "type": "relative",
                    },
                    "draggable": false,
                    "resizable": false,
                    "showTextEditor": false,
                    "fragment": {},
                    "children": [
                        "sc-1524225237703",
                    ],
                    "sortableContainers": {
                        "sc-1524225237703": {
                            "children": [
                                "bo-1524225237703",
                            ],
                            "style": {
                                "padding": "0px",
                                "borderColor": "#ffffff",
                                "borderWidth": "0px",
                                "borderStyle": "solid",
                                "opacity": "1",
                                "textAlign": "center",
                                "className": "",
                            },
                            "height": "auto",
                            "key": "sc-1524225237703",
                            "colDistribution": [
                                100,
                            ],
                            "cols": [
                                [
                                    100,
                                ],
                            ],
                        },
                    },
                    "containedViews": [],
                },
                "bo-1524225237703": {
                    "id": "bo-1524225237703",
                    "parent": "bs-1497983247797",
                    "container": "sc-1524225237703",
                    "level": 0,
                    "col": 0,
                    "row": 0,
                    "position": {
                        "x": 0,
                        "y": 0,
                        "type": "relative",
                    },
                    "content": {
                        "type": "div",
                        "key": null,
                        "ref": null,
                        "props": {
                            "className": "dropableRichZone",
                            "style": {
                                "height": "100%",
                            },
                            "children": [
                                {
                                    "type": "img",
                                    "key": null,
                                    "ref": null,
                                    "props": {
                                        "className": "basicImageClass",
                                        "style": {
                                            "height": "100%",
                                            "width": "100%",
                                        },
                                        "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU5OS4zIDQ1MC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OTkuMyA0NTAuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDOEM4Qzg7fQoJLnN0MXtmaWxsOiM0OTQ5NDk7fQo8L3N0eWxlPgo8cmVjdCB4PSItMC40IiB5PSIwLjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2MDAiIGhlaWdodD0iNDUwIi8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5OS42LDI4OC40Yy0yNCwwLTQ4LTAuMS03MiwwLjFjLTMuOSwwLTUuMS0xLTUuMS01YzAuMS0zOC43LDAuMS03Ny4zLDAtMTE2YzAtNCwxLjItNS4xLDUuMS01LjEKCQljNDgsMC4xLDk2LDAuMSwxNDMuOSwwYzMuOSwwLDUuMSwxLDUuMSw1Yy0wLjEsMzguNy0wLjEsNzcuMywwLDExNmMwLDQtMS4yLDUuMS01LjEsNUMzNDcuNiwyODguMywzMjMuNiwyODguNCwyOTkuNiwyODguNHoKCQkgTTI5OS42LDE3Mi41Yy0yMC41LDAtNDEsMC4xLTYxLjQtMC4xYy00LjQsMC01LjYsMS4xLTUuNiw1LjZjMC4yLDMxLjYsMC4yLDYzLjMsMCw5NC45YzAsNC4zLDEsNS43LDUuNSw1LjcKCQljNDEuMS0wLjIsODIuMy0wLjIsMTIzLjQsMGM0LjEsMCw1LjQtMS4xLDUuNC01LjNjLTAuMi0zMS44LTAuMi02My42LDAtOTUuNGMwLTQuNy0xLjYtNS41LTUuOC01LjQKCQlDMzQwLjUsMTcyLjYsMzIwLDE3Mi41LDI5OS42LDE3Mi41eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTMxOC40LDIxMi44Yy0yLjYsNy43LTUuMywxNS4zLTcuNywyM2MtMC45LDMtMi4yLDUuMS01LjUsNS41Yy0wLjIsMC0wLjMsMC4xLTAuNSwwLjEKCQljLTE2LjUsMy42LTMwLjMsMTEuNC00MC43LDI0LjljLTIuNywzLjYtNi40LDIuOS0xMCwyLjljLTEyLjQsMC0xMi40LDAtMTIuNC0xMi40YzAtMjIuOCwwLjEtNDUuNi0wLjEtNjguNWMwLTQuNywxLTYuMyw2LTYuMgoJCWMzNC44LDAuMiw2OS42LDAuMiwxMDQuNCwwYzQuOCwwLDUuOCwxLjYsNS43LDZjLTAuMiwyNS0wLjEsNTAtMC4xLDc1YzAsMiwxLDQuOS0xLjcsNS43Yy0yLjksMC44LTYuNCwxLjYtOS0wLjkKCQljLTQuNy00LjQtOS4zLTguNy0xMS4yLTE1LjRjLTMuNS0xMi4zLTcuNC0yNC42LTEzLjktMzUuN0MzMjEsMjE1LjUsMzIwLjksMjEzLjYsMzE4LjQsMjEyLjh6IE0yNzUuNiwyMjAuNQoJCWM4LjYsMCwxNC01LjQsMTQuMS0xMy45YzAtOC42LTUuMy0xNC4xLTEzLjgtMTQuMmMtOC44LTAuMS0xNC4zLDUuNC0xNC4zLDE0LjFDMjYxLjYsMjE1LDI2Ny4xLDIyMC40LDI3NS42LDIyMC41eiIvPgo8L2c+Cjwvc3ZnPgo=",
                                    },
                                    "_owner": null,
                                    "_store": {},
                                },
                                [],
                            ],
                        },
                        "_owner": null,
                        "_store": {},
                    },
                    "draggable": true,
                    "resizable": false,
                    "showTextEditor": false,
                    "fragment": {},
                    "children": [],
                    "sortableContainers": {},
                    "containedViews": [
                        "cv-1524225239825",
                    ],
                },
                "bs-1524225239825": {
                    "parent": "cv-1524225239825",
                    "id": "bs-1524225239825",
                    "container": 0,
                    "level": -1,
                    "col": 0,
                    "row": 0,
                    "position": {
                        "type": "relative",
                        "x": 0,
                        "y": 0,
                    },
                    "draggable": false,
                    "resizable": false,
                    "showTextEditor": false,
                    "fragment": {},
                    "children": [],
                    "sortableContainers": {},
                    "containedViews": [],
                },
            },
            "boxSelected": -1,
            "boxLevelSelected": 0,
            "indexSelected": "pa-1497983247795",
            "marksById": {
                "rm-1524225239825": {
                    "id": "rm-1524225239825",
                    "origin": "bo-1524225237703",
                    "title": "Nueva marca 1",
                    "connection": "cv-1524225239825",
                    "color": "#222222",
                    "connectMode": "existing",
                    "displayMode": "navigate",
                    "value": "52.94,58.86",
                },
            },
            "navItemsIds": [
                "se-1467887497411",
                "pa-1497983247795",
            ],
            "navItemSelected": "pa-1497983247795",
            "navItemsById": {
                "0": {
                    "id": 0,
                    "children": [
                        "se-1467887497411",
                    ],
                    "boxes": [],
                    "level": 0,
                    "type": "",
                    "hidden": false,
                },
                "se-1467887497411": {
                    "id": "se-1467887497411",
                    "isExpanded": true,
                    "parent": 0,
                    "linkedBoxes": {},
                    "children": [
                        "pa-1497983247795",
                    ],
                    "hidden": false,
                    "boxes": [],
                    "level": 1,
                    "type": "section",
                    "extraFiles": {},
                    "customSize": 0,
                },
                "pa-1497983247795": {
                    "id": "pa-1497983247795",
                    "isExpanded": true,
                    "parent": "se-1467887497411",
                    "linkedBoxes": {},
                    "children": [],
                    "boxes": [
                        "bs-1497983247797",
                    ],
                    "level": 2,
                    "type": "document",
                    "hidden": false,
                    "extraFiles": {},
                    "customSize": 0,
                },
            },
            "containedViewsById": {
                "cv-1524225239825": {
                    "info": "new",
                    "type": "document",
                    "id": "cv-1524225239825",
                    "parent": {
                        "rm-1524225239825": "bo-1524225237703",
                    },
                    "boxes": [
                        "bs-1524225239825",
                    ],
                    "extraFiles": {},
                },
            },
            "containedViewSelected": 0,
            "displayMode": "list",
            "pluginToolbarsById": {
                "bs-1497983247797": {
                    "id": "bs-1497983247797",
                    "showTextEditor": false,
                    "pluginId": "sortable_container",
                    "state": {},
                    "structure": {
                        "height": "",
                        "width": "",
                        "aspectRatio": true,
                        "rotation": "",
                        "position": "absolute",
                    },
                    "style": {
                        "backgroundColor": "#ffffff",
                        "borderColor": "#000000",
                        "borderRadius": 0,
                        "borderStyle": "solid",
                        "boderWidth": 0,
                        "opacity": 1,
                        "padding": 0,
                    },
                },
                "bo-1524225237703": {
                    "id": "bo-1524225237703",
                    "pluginId": "HotspotImages",
                    "state": {
                        "url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU5OS4zIDQ1MC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OTkuMyA0NTAuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDOEM4Qzg7fQoJLnN0MXtmaWxsOiM0OTQ5NDk7fQo8L3N0eWxlPgo8cmVjdCB4PSItMC40IiB5PSIwLjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI2MDAiIGhlaWdodD0iNDUwIi8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5OS42LDI4OC40Yy0yNCwwLTQ4LTAuMS03MiwwLjFjLTMuOSwwLTUuMS0xLTUuMS01YzAuMS0zOC43LDAuMS03Ny4zLDAtMTE2YzAtNCwxLjItNS4xLDUuMS01LjEKCQljNDgsMC4xLDk2LDAuMSwxNDMuOSwwYzMuOSwwLDUuMSwxLDUuMSw1Yy0wLjEsMzguNy0wLjEsNzcuMywwLDExNmMwLDQtMS4yLDUuMS01LjEsNUMzNDcuNiwyODguMywzMjMuNiwyODguNCwyOTkuNiwyODguNHoKCQkgTTI5OS42LDE3Mi41Yy0yMC41LDAtNDEsMC4xLTYxLjQtMC4xYy00LjQsMC01LjYsMS4xLTUuNiw1LjZjMC4yLDMxLjYsMC4yLDYzLjMsMCw5NC45YzAsNC4zLDEsNS43LDUuNSw1LjcKCQljNDEuMS0wLjIsODIuMy0wLjIsMTIzLjQsMGM0LjEsMCw1LjQtMS4xLDUuNC01LjNjLTAuMi0zMS44LTAuMi02My42LDAtOTUuNGMwLTQuNy0xLjYtNS41LTUuOC01LjQKCQlDMzQwLjUsMTcyLjYsMzIwLDE3Mi41LDI5OS42LDE3Mi41eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTMxOC40LDIxMi44Yy0yLjYsNy43LTUuMywxNS4zLTcuNywyM2MtMC45LDMtMi4yLDUuMS01LjUsNS41Yy0wLjIsMC0wLjMsMC4xLTAuNSwwLjEKCQljLTE2LjUsMy42LTMwLjMsMTEuNC00MC43LDI0LjljLTIuNywzLjYtNi40LDIuOS0xMCwyLjljLTEyLjQsMC0xMi40LDAtMTIuNC0xMi40YzAtMjIuOCwwLjEtNDUuNi0wLjEtNjguNWMwLTQuNywxLTYuMyw2LTYuMgoJCWMzNC44LDAuMiw2OS42LDAuMiwxMDQuNCwwYzQuOCwwLDUuOCwxLjYsNS43LDZjLTAuMiwyNS0wLjEsNTAtMC4xLDc1YzAsMiwxLDQuOS0xLjcsNS43Yy0yLjksMC44LTYuNCwxLjYtOS0wLjkKCQljLTQuNy00LjQtOS4zLTguNy0xMS4yLTE1LjRjLTMuNS0xMi4zLTcuNC0yNC42LTEzLjktMzUuN0MzMjEsMjE1LjUsMzIwLjksMjEzLjYsMzE4LjQsMjEyLjh6IE0yNzUuNiwyMjAuNQoJCWM4LjYsMCwxNC01LjQsMTQuMS0xMy45YzAtOC42LTUuMy0xNC4xLTEzLjgtMTQuMmMtOC44LTAuMS0xNC4zLDUuNC0xNC4zLDE0LjFDMjYxLjYsMjE1LDI2Ny4xLDIyMC40LDI3NS42LDIyMC41eiIvPgo8L2c+Cjwvc3ZnPgo=",
                    },
                    "structure": {
                        "height": "auto",
                        "width": 25,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "rotation": 0,
                        "aspectRatio": true,
                        "position": "absolute",
                    },
                    "style": {
                        "padding": 0,
                        "backgroundColor": "#ffffff",
                        "borderWidth": 0,
                        "borderStyle": "solid",
                        "borderColor": "#000000",
                        "borderRadius": 0,
                        "opacity": 1,
                    },
                    "showTextEditor": false,
                },
                "bs-1524225239825": {
                    "id": "bs-1524225239825",
                    "pluginId": "sortable_container",
                    "showTextEditor": false,
                    "state": {},
                    "structure": {
                        "aspectRatio": true,
                        "height": "",
                        "position": "absolute",
                        "rotation": "",
                        "width": "",
                    },
                    "style": {
                        "backgroundColor": "#ffffff",
                        "boderWidth": 0,
                        "borderColor": "#000000",
                        "borderRadius": 0,
                        "borderStyle": "solid",
                        "opacity": 1,
                        "padding": 0,
                    },
                },
            },
            "viewToolbarsById": {
                "se-1467887497411": {
                    "id": "se-1467887497411",
                    "viewName": "Section",
                    "breadcrumb": "reduced",
                    "courseTitle": "hidden",
                    "documentSubtitle": "hidden",
                    "documentSubtitleContent": "Subt??tulo",
                    "documentTitle": "expanded",
                    "documentTitleContent": "Section",
                    "numPage": "hidden",
                    "numPageContent": "1",
                    "background": "#ffffff",
                    "backgroundAttr": "",
                    "aspectRatio": "",
                },
                "pa-1497983247795": {
                    "id": "pa-1497983247795",
                    "viewName": "P??gina",
                    "breadcrumb": "reduced",
                    "courseTitle": "hidden",
                    "documentSubtitle": "hidden",
                    "documentSubtitleContent": "Subt??tulo",
                    "documentTitle": "expanded",
                    "documentTitleContent": "T??tulo Documento",
                    "numPage": "hidden",
                    "numPageContent": "",
                    "background": "#ffffff",
                    "backgroundAttr": "",
                    "aspectRatio": "",
                },
                "cv-1524225239825": {
                    "id": "cv-1524225239825",
                    "breadcrumb": "reduced",
                    "doc_type": "document",
                    "viewName": "Vista Contenida 1",
                    "courseTitle": "hidden",
                    "documentSubtitle": "hidden",
                    "documentSubtitleContent": "Subt??tulo",
                    "documentTitle": "expanded",
                    "documentTitleContent": "T??tulo Documento",
                    "numPage": "hidden",
                    "customSize": 0,
                    "aspectRatio": true,
                    "background": "#ffffff",
                    "backgroundAttr": "",
                },
            },
            "exercises": {
                "pa-1497983247795": {
                    "id": "pa-1497983247795",
                    "submitButton": true,
                    "trackProgress": false,
                    "attempted": false,
                    "weight": 10,
                    "minForPass": 50,
                    "exercises": {},
                    "score": 0,
                },
                "cv-1524225239825": {
                    "id": "cv-1524225239825",
                    "submitButton": true,
                    "trackProgress": false,
                    "attempted": false,
                    "minForPass": 50,
                    "score": 0,
                    "weight": 10,
                    "exercises": {},
                },
            },
            "isBusy": "",
        },
    },
};
