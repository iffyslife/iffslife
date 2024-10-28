let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 42.50252173727723, lng: 141.1472128228617 }, title: "大湯沼", color: "green-dot", link: "2024Noboribetsu2.html#place1" },
    { position: { lat: 42.42219500027165, lng: 141.07960620285564 }, title: "川上公園", color: "green-dot", link: "2024Noboribetsu2.html#place2" },
    { position: { lat: 42.36346376474635, lng: 141.0392360151913 }, title: "江戸蕎麦 一輪草", color: "yellow-dot", link: "2024Noboribetsu2.html#place3" },
    { position: { lat: 42.350056517891986, lng: 141.01931177659858 }, title: "えんとつ町のドーナツ屋さん", color: "yellow-dot", link: "2024Noboribetsu2.html#place4" },
    { position: { lat: 42.30321539248224, lng:  141.00067108133808 }, title: "地球岬展望台", color: "green-dot", link: "2024Noboribetsu2.html#place5" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Noboribetsu2map"), {
    zoom: 10,
    center: { lat: 42.42219500027165, lng: 141.07960620285564 },
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
