let map;

async function initMap() {
  // 位置和標記配置
  const locations = [   
    { position: { lat: 43.07104419576767, lng: 141.34910954412334 }, title: "札幌住宿 Hotel Mystays Sapporo Station", color: "red-dot", link: "2024Sapporo.html#hotel" },
    { position: { lat: 43.06488263700005, lng: 141.35162629515742 }, title: "根室花丸 大同生命札幌大樓miredo店", color: "yellow-dot", link: "2024Sapporo.html#place1" },
    { position: { lat: 43.05853071737412, lng: 141.3513988335955 }, title: "BARISTART COFFEE", color: "yellow-dot" , link: "2024Sapporo.html#place2"},
    { position: { lat: 43.06704951900088, lng: 141.3540411881863 }, title: "札湯咖喱 奥芝商店 站前創成寺", color: "yellow-dot", link: "2024Sapporo.html#place3" },
    { position: { lat: 43.06134490283316, lng: 141.3563932184654 }, title: "札幌電視塔", color: "green-dot" , link: "2024Sapporo.html#place2"},     
    { position: { lat: 43.06827644768482, lng: 141.35244893567713 }, title: "JR塔展望室T38", color: "green-dot" , link: "2024Sapporo.html#place4"},
    { position: { lat: 43.06683894788181, lng: 141.35322498196047 }, title: "串鳥 札幌駅前店", color: "yellow-dot", link: "2024Sapporo.html#place5" },
    { position: { lat: 43.07078234072782, lng: 141.3216658261024 }, title: "根室杉山水產 UME堂", color: "yellow-dot", link: "2024Sapporo.html#place6" },
    { position: { lat:  43.05466496153535, lng: 141.30959813369785 }, title: "北海道神宮", color: "green-dot", link: "2024Sapporo.html#place6" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Sapporomap"), {
    zoom: 12,
    center: { lat: 43.06683894788181, lng: 141.35322498196047 },    
    mapId: "b67f9c560e24b8ad",
  });

  // 建立標記的函數
  locations.forEach(({ position, title, color, link }) => {
    const marker = new Marker({
      map: map,
      position: position,
      title: title,
      icon: {
        url: `http://maps.google.com/mapfiles/ms/icons/${color}.png`,
      }
    });

    // 修改標記點擊事件
    if (link) {
      marker.addListener('click', () => {
        const [url, anchor] = link.split('#');
        // 只跳轉到指定的頁面
        window.location.href = url + '#' + (anchor || '');
        });
      }

  });
}

initMap();
