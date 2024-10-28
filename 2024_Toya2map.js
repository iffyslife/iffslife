let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 41.76215803335169, lng: 140.71780305462642 }, title: "函館住宿 元町全景公寓", color: "red-dot", link: "2024Toya2.html#hotel" },
    { position: { lat: 42.646843208167944, lng: 140.83277004972604 }, title: "洞爺湖水之駅休息站", color: "green-dot", link: "2024Toya2.html#place1" },
    { position: { lat: 42.64742781800528, lng: 140.83251803883317 }, title: "ラムヤート 烘焙屋", color: "red-dot", link: "2024Toya2.html#place1" },
    { position: { lat: 42.22752311978679, lng: 140.3138485965931 }, title: "噴火灣全景公園", color: "green-dot", link: "2024Toya2.html#place2" },
    { position: { lat: 41.75936102881221, lng: 140.70440302898822 }, title: "函館山 百萬夜景", color: "green-dot", link: "2024Toya2.html#place3" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Toya2map"), {
    zoom: 8,
    center: { lat: 42.21710339927189, lng: 140.583114754317 },
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
