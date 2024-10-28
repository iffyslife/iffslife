let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 42.62504106102152, lng: 141.0298847739195  }, title: "伊達住宿  森のソラニワ", color: "red-dot", link: "2024Shikotsuko.html#hotel" },
    { position: { lat: 42.77285399963531, lng: 141.40442929107166 }, title: "支芴湖遊客中心", color: "green-dot", link: "2024Shikotsuko.html#place2" },
    { position: { lat: 43.055038562785555, lng:  141.30779279790372 }, title: "北海道神宮", color: "green-dot", link: "2024Shikotsuko.html#place1" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Shikotsukomap"), {
    zoom: 9,
    center: { lat: 42.84536563744117, lng:  141.14565863010057 },    
    mapId: "b67f9c560e24b8ad",
  });

  // 建立標記的函數
  locations.forEach(({ position, title, color, link }) => {
    // 創建一個包含自定義圖標的元素
    const markerContent = document.createElement('div');
    const iconImg = document.createElement('img');
    iconImg.src = `http://maps.google.com/mapfiles/ms/icons/${color}.png`;
    iconImg.alt = title;
    markerContent.appendChild(iconImg);

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: title,
      content: markerContent, // 使用自定義的 HTML 元素
    });

    // 修改標記點擊事件，使用 google.maps.event.addListener
    if (link) {
      google.maps.event.addListener(marker, 'click', () => {
        const [url, anchor] = link.split('#');
        // 只跳轉到指定的頁面
        window.location.href = url + '#' + (anchor || '');
      });
    }
  });
}

initMap();
