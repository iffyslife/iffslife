let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 43.18493285382405, lng: 141.02357295181386 }, title: "小樽住宿 小樽君樂酒店", color: "red-dot", link: "2024Otaru.html#hotel" },
    { position: { lat: 43.15457718060718, lng: 140.79084406739332 }, title: "余市 山田園 採藍莓", color: "green-dot", link: "2024Otaru.html#place1" },
    { position: { lat: 43.21895203720245, lng: 140.9215470956265 }, title: "塩谷 青洞窟觀光", color: "green-dot" , link: "2024Otaru.html#place2"},
    { position: { lat: 43.29678614878507, lng: 140.59827314552348 }, title: "積丹 食事処 純の店", color: "yellow-dot", link: "2024Otaru.html#place3" },
    { position: { lat: 43.17217025311245, lng: 140.9721585283725 }, title: "小樽 天狗山夜景", color: "green-dot" , link: "2024Otaru.html#place4"},
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Otarumap"), {
    zoom: 9,
    center: { lat: 43.190208350474116, lng:  140.8246493153811 },    
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
