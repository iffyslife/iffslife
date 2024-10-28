let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 43.76966828081544, lng: 142.35153554371595 }, title: "旭川住宿  Stay Asahikawa 琴", color: "red-dot", link: "2024Asahikawa.html#hotel" },
    { position: { lat: 43.12420775745804, lng: 141.42659561378926 }, title: "札幌 莫埃來沼公園", color: "green-dot", link: "2024Asahikawa.html#place1" },
    { position: { lat: 43.74402320618587, lng: 141.87095566230443 }, title: "北竜町 ひまわりの里 向日葵花田", color: "green-dot" , link: "2024Asahikawa.html#place2"},
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Asahikawamap"), {
    zoom: 7,
    center: { lat: 43.46642708026437, lng: 142.01585738556997 },    
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
