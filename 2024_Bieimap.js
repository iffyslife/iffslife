let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 43.61522527771739, lng: 142.50267154264355 }, title: "赤羽の丘", color: "green-dot", link: "2024Biei.html#place1" },
    { position: { lat: 43.60769246636058, lng: 142.4700725083091  }, title: "亞斗夢之丘", color: "green-dot", link: "2024Biei.html#place1" },
    { position: { lat: 43.59101369143979, lng: 142.4544747195923  }, title: "美瑛選果 本店", color: "yellow-dot", link: "2024Biei.html#place2" },
    { position: { lat: 43.50559226767044, lng: 142.5977658605493  }, title: "BETWEEN THE BREAD", color: "yellow-dot", link: "2024Biei.html#place3" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Bieimap"), {
    zoom: 10,
    center: { lat:43.615310317592574, lng: 142.5261005660946 },    
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
