let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 43.6485814357049, lng: 142.78971486332702 }, title: "旭岳溫泉 湯元 湧駒莊", color: "red-dot", link: "2024Asahidake.html#hotel" },
    { position: { lat: 43.758898426672445, lng: 142.45462394172154 }, title: "旭川 農珈屋本店", color: "yellow-dot", link: "2024Asahidake.html#place2" },
    { position: { lat: 43.66292619867882, lng: 142.82524876473983 }, title: "旭岳ロープウェイ 姿見駅", color: "green-dot", link: "2024Asahidake.html#place1" },
    { position: { lat: 43.78210827902478, lng: 142.41495687483336 }, title: "旭川 uniqlo 永山パワーズ店", color: "pink-dot" , link: "2024Asahidake.html#place2"},
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Asahidakemap"), {
    zoom: 9.5,
    center: { lat:43.735798472512336, lng: 142.64744440008155 },    
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
