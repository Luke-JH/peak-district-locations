import "./maps-loader.js";

// Initialize and add the map
let map;

async function initMap() {
    // The location of Mam Tor
    const position = { lat: 53.349940416635626, lng: -1.809374709678355 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Mam Tor
    map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: position,
        mapId: "Mam Tor",
    });

    // The marker, positioned at Mam Tor
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Mam Tor",
    });
}

initMap();

//my second map
async function initMap2() {
    // The location of Castleton
    const position = { lat: 53.34353163706478, lng: -1.7777066004976665 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Castleton
    map = new Map(document.getElementById("map2"), {
        zoom: 14,
        center: position,
        mapId: "Castleton",
    });

    // The marker, positioned at Castleton
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Castleton",
    });
}
initMap2();

//my third map
async function initMap3() {
    // The location of Kinder Downfall
    const position = { lat: 53.3989805001796, lng: -1.8764972519399676 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Kinder Downfall
    map = new Map(document.getElementById("map3"), {
        zoom: 14,
        center: position,
        mapId: "Kinder Downfall",
    });

    // The marker, positioned at Kinder Downfall
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Kinder Downfall",
    });
}
initMap3();

//my fourth map
async function initMap4() {
    // The location of Buxton
    const position = { lat: 53.25741225319158, lng: -1.9162775987474543 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Buxton
    map = new Map(document.getElementById("map4"), {
        zoom: 14,
        center: position,
        mapId: "Buxton",
    });

    // The marker, positioned at Buxton
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Buxton",
    });
}
initMap4();

//my fifth map
async function initMap5() {
    // The location of Bamford Edge
    const position = { lat: 53.36133206805208, lng: -1.6895926419020213 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Bamford Edge
    map = new Map(document.getElementById("map5"), {
        zoom: 14,
        center: position,
        mapId: "Bamford Edge",
    });

    // The marker, positioned at Bamford Edge
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Bamford Edge",
    });
}
initMap5();
