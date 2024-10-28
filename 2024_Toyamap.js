let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 42.64917028740156, lng: 140.8179258405799 }, title: "洞爺湖住宿 Lake View Private Log House", color: "red-dot", link: "2024Toya.html#hotel" },
    { position: { lat: 42.565497204398504, lng: 140.8350237391878 }, title: "太陽皇宮飯店", color: "red-dot", link: "2024Toya.html#place2" },
    { position: { lat: 42.56543850453231, lng:  140.82431226802248 }, title: "午餐 Hydune 漢堡", color: "yellow-dot", link: "2024Toya.html#place3" },
    { position: { lat: 42.56621033571521, lng:  140.8261251358892 }, title: "洞爺湖花火觀賞處", color: "green-dot", link: "2024Toya.html#place1" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Toyamap"), {
    zoom: 11,
    center: { lat: 42.622522115866786,  lng:  140.8363763068239 },
    mapId: "DEMO_MAP_ID",
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

    // 添加點擊事件處理器，點擊標記時跳轉到指定網頁
    if (link) {
      marker.addListener('click', () => {
        window.location.href = link;
      });
    }
  });
}

initMap();
