let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 42.49419915413919, lng: 141.1421259833418 }, title: "登別住宿 格蘭飯店", color: "red-dot", link: "2024Noboribetsu.html#hotel" },
    { position: { lat: 42.54389337489756, lng: 140.83481430076267 }, title: "有珠山", color: "green-dot", link: "2024Noboribetsu.html#place1" },
    { position: { lat: 42.49830242885862, lng: 141.14863376870832 }, title: "登別地獄谷", color: "green-dot", link: "2024Noboribetsu.html#place2" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Noboribetsumap"), {
    zoom: 10,
    center: { lat: 42.540118652015394, lng: 141.03280846782783 },
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
