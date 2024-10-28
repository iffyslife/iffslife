let map;

async function initMap() {
  // 位置和標記配置
  const locations = [
    { position: { lat: 41.77527809733698, lng: 140.7908520256609 }, title: "函館住宿 湯の川温泉 海と灯", color: "red-dot", link: "2024Hakodate.html#hotel" },
    { position: { lat: 41.763879482454925, lng: 140.71218358790026 }, title: "八幡坂", color: "green-dot", link: "2024Hakodate.html#place1" },
    { position: { lat: 41.765412177741474, lng: 140.7089726115929 }, title: "舊函館公民會所", color: "green-dot", link: "2024Hakodate.html#place2" },
    { position: { lat: 41.76647244476095, lng: 140.7163450135142 }, title: "金森倉庫", color: "green-dot", link: "2024Hakodate.html#place2" },
    { position: { lat: 41.77251225581675, lng: 140.72565853624818 }, title: "函館朝市", color: "yellow-dot", link: "2024Hakodate.html#place3" },
    { position: { lat: 41.79714989629162, lng: 140.75683666227593 }, title: "五稜郭", color: "green-dot", link: "2024Hakodate.html#place3" },
    { position: { lat: 41.78213569912382, lng: 140.79110166817364 }, title: "湯倉神社", color: "green-dot", link: "2024Hakodate.html#place4" },
    { position: { lat: 41.839248061104506, lng: 140.78522719663684 }, title: "北海道東照宮", color: "green-dot", link: "2024Hakodate.html#place4" },
    { position: { lat: 41.98405462355994, lng: 140.67216565450406 }, title: "大沼國定公園", color: "green-dot", link: "2024Hakodate.html#place5" },
    { position: { lat: 41.7765372541786, lng:  140.8158286304481 }, title: "函館機場", color: "blue-dot", link: "2024Hakodate.html#place6" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Hakodatemap"), {
    zoom: 9,
    center: { lat: 41.89570139890953, lng: 140.70425134338151 },
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
