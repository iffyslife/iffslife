let map;

async function initMap() {

  // 位置和標記配置
  const locations = [
    { position: { lat: 42.78184246099554, lng: 141.6869397371341 }, title: "新千歲機場", color: "blue-dot" },
    { position: { lat: 43.07104419576767, lng: 141.34910954412334 }, title: "札幌住宿 Hotel Mystays Sapporo Station", color: "red-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.299879760368576, lng:142.5237199544716 }, title: "富良野住宿 GuestHouse ChupuBase", color: "red-dot", description: "富良野住宿", link: "2023Furano.html" },
    { position: { lat: 42.70644335228398, lng: 143.0207568439042 }, title: "帶廣住宿 Snow Peak十勝幌尻露營場", color: "red-dot", link: "2023Obihiro.html" },
    { position: { lat: 43.43341076745814, lng: 144.09680550260364 }, title: "阿寒湖住宿 新阿寒酒店", color: "red-dot" , link: "2023Akanko.html"},
    { position: { lat: 43.68860782036469, lng: 142.49933826311167 }, title: "旭川住宿 東神樂大學", color: "red-dot", link: "2023Asahikawa.html" },

    { position: { lat: 43.05853071737412, lng: 141.3513988335955 }, title: "BARISTART COFFEE", color: "yellow-dot" , link: "2023Sapporo.html#place2"},

    { position: { lat: 43.20000692590568, lng: 141.00174586706595 }, title: "小樽運河", color: "green-dot", link: "2023Otaru.html" },
    { position: { lat: 43.19513783800707, lng: 141.00520638737186 }, title: "柳月 オタルト店", color: "yellow-dot", link: "2023Otaru.html" },


    { position: { lat: 43.48521890748463, lng: 142.19056916194256  }, title: "大橋櫻桃果園", color: "green-dot", link: "2023Furano.html" },
    { position: { lat: 43.427324220585845, lng: 142.63829676459792 }, title: "吹上露天溫泉", color: "green-dot", link: "2023Furano.html" },
    { position: { lat: 43.456615162400944, lng: 142.6500840053835 }, title: "十勝望岳台", color: "green-dot", link: "2023Furano.html" },
    { position: { lat: 43.49366835239387, lng: 142.61420366806024 }, title: "美瑛 青池", color: "green-dot" , link: "2023Furano.html"},
    { position: { lat: 43.5139612104126, lng: 142.47797225390528 }, title: "美瑛放牧酪農場", color: "green-dot", link: "2023Furano.html" },
    { position: { lat: 43.32080499197355, lng:  142.37710792572295 }, title: "富良野起司工房", color: "yellow-dot" , link: "2023Furano.html"},
    { position: { lat: 43.441370654790376, lng:  142.42924600274984 }, title: "富田農場", color: "green-dot", link: "2023Furano.html" },

    { position: { lat: 41.75941813067163, lng: 140.70499013581278 }, title: "十勝豚丼", color: "yellow-dot", link: "2023Obihiro.html" },
    { position: { lat: 42.92426080346895, lng: 143.16340299765488 }, title: "天然温泉 やよい乃湯", color: "purple-dot", link: "2023Obihiro.html" },
    { position: { lat: 42.9619239537543, lng: 143.2047295509513 }, title: "蕎麥麵二天", color: "yellow-dot", link: "2023Obihiro.html" },
    { position: { lat: 42.97938661473217, lng: 143.17875555634544 }, title: "柳月觀光工廠", color: "yellow-dot", link: "2023Obihiro.html" },
    { position: { lat: 43.236135473446296, lng: 143.54266857584858 }, title: "足寄動物化石博物館", color: "pink-dot", link: "2023Obihiro.html" },

    { position: { lat: 43.47028815195323, lng: 144.10798971285678 }, title: "阿寒湖 綠球藻生態中心", color: "green-dot", link: "2023Akanko.html" },
    { position: { lat: 43.624206028224215, lng: 144.3597304190019 }, title: "屈斜路湖 砂湯", color: "green-dot", link: "2023Akanko.html" },
    { position: { lat: 43.6435385105637, lng: 144.54974340926805 }, title: "神之子池", color: "green-dot", link: "2023Akanko.html" },
    { position: { lat: 43.564976025447486, lng: 144.50764139241076 }, title: "摩周湖展望台", color: "green-dot", link: "2023Akanko.html" },

    { position: { lat: 43.362039654507186, lng: 143.18631482839044 }, title: "東大雪自然館", color: "green-dot", link: "2023Asahikawa.html" },
    { position: { lat: 43.60704310205875, lng: 143.12833009188913 }, title: "三國峠觀景台", color: "green-dot", link: "2023Asahikawa.html" },
    { position: { lat: 43.770691061090254, lng: 142.44338984400923 }, title: "鳥料理 小野木", color: "yellow-dot", link: "2023Asahikawa.html" },
    { position: { lat: 43.771488780675725, lng: 142.479431310169 }, title: "旭山動物園", color: "green-dot", link: "2023Asahikawa.html" },
   
    { position: { lat: 43.19445236435937, lng: 141.43148905456772 }, title: "ROYCE' TOWN 工場直賣店", color: "yellow-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.05435695955319, lng: 141.3280602455207 }, title: "Steak Victoria", color: "yellow-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.02386626734225, lng: 141.32207594466325 }, title: "藻岩山", color: "green-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.07095988117481, lng: 141.32040174810365 }, title: "根室杉山水產", color: "yellow-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.05318925353047, lng: 141.31843305518723 }, title: "森彥咖啡", color: "yellow-dot", link: "2023Sapporo2.html" },
    { position: { lat: 42.91932523164415, lng: 141.37891854895088 }, title: "國營瀧野鈴蘭丘陵公園", color: "green-dot", link: "2023Sapporo2.html" },
    { position: { lat: 43.07217911528812, lng: 141.34558591217453 }, title: "北海道大學 Marche Café & Labo", color: "yellow-dot", link: "2023Sapporo2.html"},
    
    
  ];

  // 請求所需的庫
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // 初始化地圖，將地圖中心設定為指定位置
  map = new Map(document.getElementById("2023_Hokkaidomap"), {
    zoom: 8, // map 縮放大小
    center: { lat:43.54401956166271, lng:  142.84433448639524 },
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
