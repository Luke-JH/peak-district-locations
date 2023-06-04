// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 53.349940416635626, lng: -1.809374709678355 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "Mam Tor",
  });

  // The marker, positioned at Uluru
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
    const position = { lat:   53.34353163706478, lng: -1.7777066004976665 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    // The map, centered at Uluru
    map = new Map(document.getElementById("map2"), {
      zoom: 14,
      center: position,
      mapId: "Castleton",
    });
  
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "somewhere",
    });
  }
  initMap2();

  //my third map
async function initMap3() {
  // The location of Castleton
  const position = { lat:   53.3989805001796, lng: -1.8764972519399676 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map3"), {
    zoom: 14,
    center: position,
    mapId: "Kinder Downfall",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Kinder Downfall",
  });
}
initMap3();
