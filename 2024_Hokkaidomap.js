let map;

async function initMap() {

  // 位置和標記配置
  const locations = [
    { position: { lat: 42.78184246099554, lng: 141.6869397371341 }, title: "新千歲機場", color: "blue-dot" },
    { position: { lat: 43.07104419576767, lng: 141.34910954412334 }, title: "札幌住宿 Hotel Mystays Sapporo Station", color: "red-dot", link: "2024Sapporo.html" },
    { position: { lat: 43.1838793178222, lng: 141.0238228099904 }, title: "小樽 君樂酒店", color: "red-dot", description: "小樽住宿", link: "2024Otaru.html" },
    { position: { lat: 43.22717439065379, lng: 140.92753964395177 }, title: "小樽 青洞窟", color: "green-dot", link: "2024Otaru.html" },
    { position: { lat: 43.12420775745804, lng: 141.42659561378926 }, title: "札幌 莫埃來沼公園", color: "green-dot", link: "2024Asahikawa.html"},
    { position: { lat: 43.76966828081544, lng: 142.35153554371595 }, title: "旭川住宿 Stay Asahikawa 琴", color: "red-dot", link: "2024Asahikawa.html" },
    { position: { lat: 43.662439619880196, lng: 142.83339274687728 }, title: "旭岳 姿見之池", color: "green-dot" , link: "2024Asahidake.html"},
    { position: { lat: 43.50602176090619, lng: 142.5982261098212 }, title: "美瑛 BETWEEN THE BREAD", color: "yellow-dot" , link: "2024Biei.html"},
    { position: { lat: 42.629419142845485, lng: 141.02718414845253 }, title: "親子飯店伊達之森", color: "red-dot" , link: "2024Shikotsuko.html"},
    { position: { lat: 42.49419915413919, lng: 141.1421259833418 }, title: "登別住宿 格蘭飯店", color: "red-dot", link: "2024Noboribetsu.html" },
    { position: { lat: 42.54389337489756, lng: 140.83481430076267 }, title: "有珠山", color: "green-dot", link: "2024Noboribetsu.html" },
    { position: { lat: 42.649747230963115, lng: 140.81278386609833 }, title: "洞爺湖住宿 Lake View Private Log House", color: "red-dot", link: "2024Toya.html" },
    { position: { lat: 42.2565833159479, lng: 140.31348282241808 }, title: "噴火灣全景公園", color: "green-dot", link: "2024Toya2.html" },
    { position: { lat: 41.75941813067163, lng: 140.70499013581278 }, title: "函館山", color: "green-dot", link: "2024Hakodate.html" },
    { position: { lat: 41.77567824008949, lng: 140.7909868976322 }, title: "函館 海之燈飯店", color: "red-dot", link: "2024Hakodate.html" },
    { position: { lat: 41.77656408495976, lng: 140.81593178231103 }, title: "函館機場", color: "blue-dot", link: "2024Hakodate.html" },
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2024_Hokkaidomap"), {
    zoom: 8, // map 縮放大小
    center: { lat: 42.92352076085165, lng: 141.967666379091 },
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

// 確保頁面載入後執行地圖初始化
window.onload = function() {
    initMap();
};
