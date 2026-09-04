const booths = [
  { id:"1年1組", name:"1年1組", title:"きょうは塾に行くふりをして", category:"演劇", place:"剣道場", building:"体育館棟", group:"クラス", wait:0, image:"" },
  { id:"1年2組", name:"1年2組", title:"縁日だヨ！1の2集合", category:"アトラクション", place:"1年2組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年3組", name:"1年3組", title:"ヒガシVS You ver 1.3", category:"アトラクション", place:"1年3組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年4組", name:"1年4組", title:"茶鬼", category:"アトラクション", place:"会議室", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年5組", name:"1年5組", title:"ホーンデット・ハチコウ", category:"アトラクション", place:"1年5組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年6組", name:"1年6組", title:"FAMILY STORYs ~1-6~", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年7組", name:"1年7組", title:"질질ゲーム", category:"アトラクション", place:"1年7組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"1年8組", name:"1年8組", title:"銀河列車091", category:"アトラクション", place:"1年8組", building:"校舎棟", group:"クラス", wait:0, image:"" },

  { id:"2年1組", name:"2年1組", title:"東神社の夏祭り", category:"アトラクション", place:"3年6組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年2組", name:"2年2組", title:"東第22研究所-東研-", category:"アトラクション", place:"2年2組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年3組", name:"2年3組", title:"運命の23番テーブル", category:"アトラクション", place:"2年3組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年4組", name:"2年4組", title:"ラビリンス・オブ・シュメール ~ジッグラトからの脱出~", category:"アトラクション", place:"2年4組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年5組", name:"2年5組", title:"幻日", category:"演劇", place:"剣道場", building:"体育館棟", group:"クラス", wait:0, image:"" },
  { id:"2年6組", name:"2年6組", title:"Go to スピンカーニバル", category:"アトラクション", place:"社書室", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年7組", name:"2年7組", title:"エビスガスカジノ", category:"アトラクション", place:"3年5組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"2年8組", name:"2年8組", title:"桃の転校生", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },

  { id:"3年1組", name:"3年1組", title:"Thirty One Café", category:"食品", place:"3年1組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年2組", name:"3年2組", title:"TSUKAR WARS", category:"アトラクション", place:"3年2組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年3組", name:"3年3組", title:"神原くんは宇宙人", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年4組", name:"3年4組", title:"【閲覧注意】天狗の棲家、のぞいてみた", category:"アトラクション", place:"3年4組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年5組", name:"3年5組", title:"和風喫茶めぐみ", category:"食品", place:"3年3組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年6組", name:"3年6組", title:"チュロスチュロQ", category:"食品", place:"2年7組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年7組", name:"3年7組", title:"AMIGO TOURAI", category:"食品", place:"2年6組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年8組", name:"3年8組", title:"人外探偵結社 ～本日開業の段～", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },

  { id:"室内楽部", name:"室内楽部", title:"室内楽部文化祭公演 - Trabel with HESTring -", category:"公演", place:"5ホール", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"美術部", name:"美術部", title:"昭和レトロ横町", category:"展示", place:"美術室", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"コーラス部", name:"コーラス部", title:"ウィキッド", category:"公演", place:"体育館", building:"体育館棟", group:"部活動", wait:0, image:"" },
  { id:"調理部", name:"調理部", title:"Higashi's Kitchen Club", category:"食品", place:"被服室", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"吹奏楽部", name:"吹奏楽部", title:"とびこめ！HEWOCEAN！", category:"公演", place:"体育館", building:"体育館棟", group:"部活動", wait:0, image:"" },
  { id:"華道部", name:"華道部", title:"青春謳華", category:"展示", place:"2年1組", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"自然科学部", name:"自然科学部", title:"この素晴らしいヒガシに実験を！", category:"展示", place:"化学室・生物室", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"文芸部", name:"文芸部", title:"朧なる迷月 ～謎解く～", category:"アトラクション", place:"3年8組", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"ダンス部", name:"ダンス部", title:"SHINE ON STAGE", category:"公演", place:"体育館", building:"体育館棟", group:"部活動", wait:0, image:"" },
  { id:"ブレイクダンス部", name:"ブレイクダンス部", title:"BREAK DANCE SHOW", category:"公演", place:"体育館", building:"体育館棟", group:"部活動", wait:0, image:"" },

  { id:"有志演劇", name:"有志演劇", title:"しらかし祭公演『ケチャップ・オブ・ザ・テッド』", category:"演劇", place:"剣道場", building:"体育館棟", group:"有志", wait:0, image:"" },
  { id:"有志情報研究", name:"有志情報研究", title:"しらかし祭待ち時間表示アプリ『Azuma』", category:"その他", place:"PC教室", building:"校舎棟", group:"有志", wait:0, image:"" },
  { id:"有志書道・競技かるた", name:"有志書道・競技かるた", title:"東書展", category:"展示", place:"3年8組", building:"校舎棟", group:"有志", wait:0, image:"" },
  { id:"ますらを中庭公演", name:"ますらを", title:"有志男声合唱団ますらを 中庭公演", category:"公演", place:"中庭", building:"校舎棟", group:"有志", wait:0, image:"" },
  { id:"ますらを黙事録", name:"ますらを", title:"合唱黙事録マスラヲ", category:"演劇", place:"剣道場", building:"体育館棟", group:"有志", wait:0, image:"" },
  { id:"有志熱気球", name:"有志熱気球", title:"熱気球Laboratory", category:"展示", place:"物理室", building:"校舎棟", group:"有志", wait:0, image:"" },

  { id:"わざをき", name:"わざをき", title:"有志混声合唱団わざをき", category:"公演", place:"5ホール", building:"校舎棟", group:"有志", wait:0, image:"" },
  { id:"たをやめ", name:"たをやめ", title:"虹色のハーモニー♬ たをやめ公演2026", category:"公演", place:"5ホール", building:"校舎棟", group:"有志", wait:0, image:"" },
  { id:"ますたを", name:"ますたを", title:"ますたを公演2026", category:"公演", place:"憩いの広場", building:"校舎棟", group:"有志", wait:0, image:"" },

  { id:"有志写真愛好会pH", name:"有志写真同好会pH", title:"空想写真キャンバス", category:"展示", place:"ラーコモ", building:"校舎棟", group:"同好会", wait:0, image:"" },
  { id:"ネイチャー同好会", name:"ネイチャー同好会", title:"ネイチャーがええんちゃー！？", category:"展示", place:"生物室", building:"校舎棟", group:"同好会", wait:0, image:"" },

  { id:"図書委員会", name:"図書委員会", title:"晴東雨読", category:"展示", place:"図書室", building:"校舎棟", group:"委員会", wait:0, image:"" },
  { id:"体育委員会", name:"体育委員会", title:"体育祭団旗展示", category:"展示", place:"体育館", building:"体育館棟", group:"委員会", wait:0, image:"" },

  { id:"ヒガシ連合", name:"ヒガシ連合", title:"ヒガシ連合", category:"展示", place:"3年7組", building:"校舎棟", group:"有志", wait:0, image:"" },
  
  { id:"進路指導部", name:"進路相談会", title:"進路相談会", category:"その他", place:"進路相談室", building:"校舎棟", group:"その他", wait:0, image:"" },
  { id:"PTA役員会", name:"PTA役員会", title:"51年目のハチヒガ休憩室", category:"その他", place:"2年8組", building:"校舎棟", group:"その他", wait:0, image:"" },
  { id:"PTA山歩きの会", name:"PTA山歩きの会", title:"PTA山歩きの会", category:"その他", place:"物理室", building:"校舎棟", group:"その他", wait:0, image:"" },

  { id:"Adel 1000％", name:"Adel 1000％", title:"Adel 1000％", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"505号室", name:"505号室", title:"505号室", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"FOUR-TUNE", name:"FOUR-TUNE", title:"FOUR-TUNE", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"Love Berry", name:"Love Berry", title:"Love Berry", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"∅くーしゅーごー", name:"∅くーしゅーごー", title:"∅くーしゅーごー", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"けしつか", name:"けしつか", title:"けしつか", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"百聞不如一聴", name:"百聞不如一聴", title:"百聞不如一聴", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
   
  { id:"L's kitchen", name:"L's kitchen", title:"L's kitchen", category:"食品", place:"正面玄関前", building:"校舎棟", group:"その他", wait:0, image:"" },
   { id:"irodori", name:"irodori", title:"irodori", category:"食品", place:"正面玄関前", building:"校舎棟", group:"その他", wait:0, image:"" },
   { id:"TAKAOCOFFEE", name:"TAKAOCOFFEE", title:"TAKAOCOFFEE", category:"食品", place:"正面玄関前", building:"校舎棟", group:"その他", wait:0, image:"" },
   { id:"ダルチアーノ", name:"ダルチアーノ", title:"ダルチアーノ", category:"食品", place:"正面玄関前", building:"校舎棟", group:"その他", wait:0, image:"" }
];


// ==========================================
// 経過時間
// ==========================================

let startTime = Date.now();

setInterval(() => {

    let elapsed = Math.floor(
        (Date.now() - startTime) / 1000
    );

    console.log(`経過秒数: ${elapsed}`);

}, 1000);


// ==========================================
// 現在の絞り込み条件
// ==========================================

let currentCategory = "すべて";
let currentBuilding = "すべて";
let currentGroup = "すべて";
let currentKeyword = "";


// ==========================================
// 混雑判定
// ==========================================

function getStatus(wait) {

    const num = parseInt(
        String(wait).replace("分", ""),
        10
    );


    // 待ち時間が数字の場合

    if (!isNaN(num)) {

        if (num >= 30) {

            return {
                text: "混雑",
                color: "red"
            };

        }

        if (num >= 10) {

            return {
                text: "やや混雑",
                color: "yellow"
            };

        }

        return {
            text: "空いています",
            color: "green"
        };

    }


    // 「混み」の場合

    if (String(wait).includes("混み")) {

        return {
            text: "混雑",
            color: "red"
        };

    }


    // 「空き」の場合

    if (String(wait).includes("空き")) {

        return {
            text: "空いています",
            color: "green"
        };

    }


    // その他

    return {
        text: "",
        color: "green"
    };

}


// ==========================================
// カード生成
// ==========================================

function createCard(booth) {

    const status = getStatus(booth.wait);

    // 食品販売かどうか
    const isFoodSales =
        booth.category === "食品販売";

    // 食券表示
    let foodTicketStatus = "";

    if (isFoodSales) {

        const now = new Date();

        const currentMinutes =
            now.getHours() * 60 +
            now.getMinutes();

        const ticketSwitchTime = 14 * 60;

        if (currentMinutes < ticketSwitchTime) {

            foodTicketStatus = `
                <div class="foodTicketStatus required">
                    🎫 要食券
                </div>
            `;

        } else {

            foodTicketStatus = `
                <div class="foodTicketStatus notRequired">
                    ✓ 食券不要
                </div>
            `;

        }

    }


    return `

<div class="boothCard">

    <div class="cardHeader">

        <div class="titleArea">

            <div class="boothName">
                ${booth.title}
            </div>

            ${
                booth.name
                ? `<div class="boothTitle">${booth.name}</div>`
                : ""
            }

        </div>


        <button
            class="favoriteBtn"
            data-id="${booth.id}">

            🤍

        </button>

    </div>


    ${
        booth.image
        ? `<img src="${booth.image}" class="boothImage">`
        : ""
    }


    <div class="infoRow">

        <div class="infoChip">
            🏷️ ${booth.category}
        </div>

        <div class="infoChip">
            🏫 ${booth.building}
        </div>

        <div class="infoChip">
            📍 ${booth.place}
        </div>

        <div class="infoChip">
            👥 ${booth.group}
        </div>

    </div>


    <div class="waitRow">

        <div class="status ${status.color}">
            ${status.text}
        </div>

        ${foodTicketStatus}

        <div class="waitTime">

            ${
                !isNaN(Number(booth.wait))
                    ? booth.wait + "分"
                    : booth.wait
            }

        </div>

    </div>

</div>

`;

}




// ==========================================
// 一覧表示
// ==========================================

function displayBooths(list) {

    const boothList =
        document.getElementById("boothList");

    boothList.innerHTML = "";


    if (list.length === 0) {

        boothList.innerHTML = `

<div class="boothCard">

    条件に一致する団体はありません。

</div>

`;

        return;

    }


    list.forEach(booth => {

        boothList.innerHTML +=
            createCard(booth);

    });

  updateFavoriteButtons();

}


// ==========================================
// 一覧更新
// ==========================================

function updateList() {

    let result = [...booths];

    if (favoriteOnly) {
        const favorites = getFavorites();

        result = result.filter(booth =>
            favorites.includes(booth.id)
        );
    }

    // キーワード検索

    if (currentKeyword !== "") {

        result = result.filter(booth => {

            return (
                booth.id
                    .toLowerCase()
                    .includes(
                        currentKeyword.toLowerCase()
                    )

                ||

                booth.name
                    .toLowerCase()
                    .includes(
                        currentKeyword.toLowerCase()
                    )

                ||

                (
                    booth.title &&
                    booth.title
                        .toLowerCase()
                        .includes(
                            currentKeyword.toLowerCase()
                        )
                )
            );

        });

    }


    // カテゴリ

    if (currentCategory !== "すべて") {

        result = result.filter(booth => {

            return booth.category === currentCategory;

        });

    }


    // 建物

    if (currentBuilding !== "すべて") {

        result = result.filter(booth => {

            return booth.building === currentBuilding;

        });

    }


    // 団体

    if (currentGroup !== "すべて") {

        result = result.filter(booth => {

            return booth.group === currentGroup;

        });

    }

// 待ち時間の降順で並べ替え
result.sort((a, b) => {
    return Number(b.wait) - Number(a.wait);
});
    displayBooths(result);

}


// ==========================================
// カテゴリ変更
// ==========================================

function filterCategory(category) {

    currentCategory = category;


    document
        .querySelectorAll(".filterBtn")
        .forEach(btn => {

            btn.classList.remove(
                "activeFilter"
            );


            if (
                btn.textContent.trim()
                === category
            ) {

                btn.classList.add(
                    "activeFilter"
                );

            }

        });


    updateList();

}


// ==========================================
// 建物変更
// ==========================================

function filterBuilding(building) {

    currentBuilding = building;


    document
        .querySelectorAll(".buildingBtn")
        .forEach(btn => {

            btn.classList.remove(
                "activeBuilding"
            );


            if (
                btn.textContent.trim()
                === building
            ) {

                btn.classList.add(
                    "activeBuilding"
                );

            }

        });


    updateList();

}


// ==========================================
// 団体変更
// ==========================================

function filterGroup(group) {

    currentGroup = group;


    document
        .querySelectorAll(".groupBtn")
        .forEach(btn => {

            btn.classList.remove(
                "activeGroup"
            );


            if (
                btn.textContent.trim()
                === group
            ) {

                btn.classList.add(
                    "activeGroup"
                );

            }

        });


    updateList();

}


// ==========================================
// 検索
// ==========================================

const searchBox =
    document.getElementById("searchBox");


searchBox.addEventListener(
    "input",
    () => {

        currentKeyword =
            searchBox.value;

        updateList();

    }
);


// ==========================================
// ページ切替
// ==========================================

function showPage(pageId, button) {

    // お知らせページを離れるとき
    const noticePage =
        document.getElementById("noticePage");

    if (
        noticePage &&
        noticePage.classList.contains("active") &&
        pageId !== "noticePage"
    ) {
        markNoticesAsRead();
    }

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document
        .getElementById(pageId)
        .classList.add("active");

    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {
            btn.classList.remove("activeNav");
        });

   if (button) {
        button.classList.add("activeNav");
    }

    // ★ 追加：現在のページを保存
    localStorage.setItem(
        "azumaCurrentPage",
        pageId
    );
}


// ==========================================
// 待ち時間更新
// ==========================================

function updateWait(id, newWait) {

    const booth =
        booths.find(
            booth => booth.id === id
        );


    if (!booth) {

        return;

    }


    booth.wait = newWait;

    updateList();

}


// ==========================================
// JSON読み込み
// Power Automate対応
// ==========================================

async function loadWaitData() {

    try {

        const response =
            await fetch(
                "wait.json?time="
                + new Date().getTime()
            );


        if (!response.ok) {

            return;

        }


        const waits =
            await response.json();


        waits.forEach(item => {

            const booth =
                booths.find(
                    b => b.id === item.id
                );


            if (booth) {

                booth.wait = item.wait;

            }

        });


        updateList();

    }

    catch (error) {

        console.log(
            "待ち時間データ取得失敗"
        );

    }

}



// ==========================================
// 自動更新
// ==========================================

setInterval(() => {

    loadWaitData();

    // 食券表示を14:00に切り替えるため
    updateList();

}, 10000);



// ==========================================
// 初期表示
// ==========================================


window.onload = () => {

    // 検索条件をリセット
    currentKeyword = "";

    const searchBox =
        document.getElementById("searchBox");

    if (searchBox) {
        searchBox.value = "";
    }

    updateList();
    loadWaitData();

    // 保存されていたページを復元
    const savedPage =
        localStorage.getItem("azumaCurrentPage");

    const pageId = savedPage || "mapPage";

    const page =
        document.getElementById(pageId);

    if (page) {

        document
            .querySelectorAll(".page")
            .forEach(p => {
                p.classList.remove("active");
            });

        page.classList.add("active");

        document
            .querySelectorAll(".navBtn")
            .forEach(btn => {
                btn.classList.remove("activeNav");
            });

        document
            .querySelectorAll(".navBtn")
            .forEach(btn => {

                const onclick =
                    btn.getAttribute("onclick") || "";

                if (
                    onclick.includes(
                        "'" + pageId + "'"
                    )
                ) {
                    btn.classList.add("activeNav");
                }

            });

    }

    if (pageId === "omakePage") {
        loadOmake();
    }

};


// ==========================================
// 校内図切り替え
// ==========================================

function showMap(type) {

    // 地図を全部隠す

    document
        .querySelectorAll(".mapArea")
        .forEach(map => {

            map.classList.remove(
                "activeMap"
            );

        });


    // ボタンを全部リセット

    document
        .querySelectorAll(".mapTab")
        .forEach(btn => {

            btn.classList.remove(
                "activeMapTab"
            );

        });


    if (type === "school") {

        document
            .getElementById("schoolMap")
            .classList.add("activeMap");


        document
            .querySelectorAll(".mapTab")[0]
            .classList.add(
                "activeMapTab"
            );

    }

    else {

        document
            .getElementById("gymMap")
            .classList.add("activeMap");


        document
            .querySelectorAll(".mapTab")[1]
            .classList.add(
                "activeMapTab"
            );

    }

}


// ==========================================
// お気に入りボタン
// ==========================================

const FAVORITE_KEY = "azumaFavorites";


// 保存されているお気に入りを取得
function getFavorites() {

    return JSON.parse(
        localStorage.getItem(FAVORITE_KEY) || "[]"
    );

}


// お気に入りを保存
function saveFavorites(favorites) {

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(favorites)
    );

}


// お気に入り状態を反映
function updateFavoriteButtons() {

    const favorites = getFavorites();

    document
        .querySelectorAll(".favoriteBtn")
        .forEach(button => {

            const id = button.dataset.id;

            if (favorites.includes(id)) {

                button.textContent = "❤️";

            } else {

                button.textContent = "🤍";

            }

        });

}


// ボタンを押したとき
document.addEventListener("click", function(e) {

    if (
        !e.target.classList.contains("favoriteBtn")
    ) {
        return;
    }


    const id = e.target.dataset.id;

    let favorites = getFavorites();


    if (favorites.includes(id)) {

        // お気に入り解除

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

    } else {

        // お気に入り登録

        favorites.push(id);

    }


   saveFavorites(favorites);
updateFavoriteButtons();
updateList();

});

// ==========================================
// 校内図・階数切り替え
// ==========================================

function showFloor(building, floor) {


    // --------------------------
    // 校舎棟
    // --------------------------

    if (building === "school") {

        const image =
            document.querySelector(
                "#schoolFloorMap img"
            );


        if (image) {

            image.src =
                "map/校舎棟"
                + floor
                + "階.png";

            image.alt =
                "校舎棟"
                + floor
                + "階";

        }


        // 校舎棟のボタンだけ取得

        const buttons =
            document.querySelectorAll(
                "#schoolMap .floorBtn"
            );


        buttons.forEach(button => {

            button.classList.remove(
                "activeFloor"
            );

        });


        // 押した階を選択状態にする

        buttons.forEach(button => {

            if (
                button.textContent.trim()
                === floor + "F"
            ) {

                button.classList.add(
                    "activeFloor"
                );

            }

        });

    }


    // --------------------------
    // 体育館棟
    // --------------------------

    if (building === "gym") {

        const image =
            document.querySelector(
                "#gymFloorMap img"
            );


        if (image) {

            image.src =
                "map/体育館"
                + floor
                + "階.png";

            image.alt =
                "体育館"
                + floor
                + "階";

        }


        // 体育館棟のボタンだけ取得

        const buttons =
            document.querySelectorAll(
                "#gymMap .floorBtn"
            );


        buttons.forEach(button => {

            button.classList.remove(
                "activeFloor"
            );

        });


        // 押した階を選択状態にする

        buttons.forEach(button => {

            if (
                button.textContent.trim()
                === floor + "F"
            ) {

                button.classList.add(
                    "activeFloor"
                );

            }

        });

         }
}
// ↓↓↓ ここから追加 ↓↓↓
// ==========================================
// 電車機能
// ==========================================

let currentTrainDirection = "up";


// ==========================================
// 時刻表
// ==========================================

const trainTimes = {

    // ==========================================
    // 上り（八王子行き）
    // ==========================================

    up: [
        { time: "05:55", destination: "八王子" },
        { time: "06:21", destination: "八王子" },
        { time: "06:48", destination: "八王子" },

        { time: "07:05", destination: "八王子" },
        { time: "07:24", destination: "八王子" },
        { time: "07:42", destination: "八王子" },

        { time: "08:04", destination: "八王子" },
        { time: "08:18", destination: "八王子" },
        { time: "08:38", destination: "八王子" },
        { time: "08:56", destination: "八王子" },

        { time: "09:26", destination: "八王子" },
        { time: "09:43", destination: "八王子" },

        { time: "10:17", destination: "八王子" },
        { time: "10:44", destination: "八王子" },

        { time: "11:14", destination: "八王子" },
        { time: "11:44", destination: "八王子" },

        { time: "12:14", destination: "八王子" },
        { time: "12:44", destination: "八王子" },

        { time: "13:14", destination: "八王子" },
        { time: "13:44", destination: "八王子" },

        { time: "14:14", destination: "八王子" },
        { time: "14:44", destination: "八王子" },

        { time: "15:14", destination: "八王子" },
        { time: "15:43", destination: "八王子" },

        { time: "16:11", destination: "八王子" },
        { time: "16:38", destination: "八王子" },

        { time: "17:09", destination: "八王子" },
        { time: "17:23", destination: "八王子" },
        { time: "17:40", destination: "八王子" },

        { time: "18:04", destination: "八王子" },
        { time: "18:20", destination: "八王子" },
        { time: "18:41", destination: "八王子" },

        { time: "19:06", destination: "八王子" },
        { time: "19:29", destination: "八王子" },
        { time: "19:49", destination: "八王子" },

        { time: "20:11", destination: "八王子" },
        { time: "20:29", destination: "八王子" },

        { time: "21:01", destination: "八王子" },
        { time: "21:21", destination: "八王子" },
        { time: "21:43", destination: "八王子" },

        { time: "22:11", destination: "八王子" },
        { time: "22:30", destination: "八王子" },

        { time: "23:01", destination: "八王子" },
        { time: "23:27", destination: "八王子" }
    ],


    // ==========================================
    // 下り
    // ==========================================

    down: [
        { time: "04:49", destination: "川越" },

        { time: "05:21", destination: "川越" },
        { time: "05:55", destination: "川越" },

        { time: "06:13", destination: "川越" },
        { time: "06:40", destination: "高麗川" },

        { time: "07:06", destination: "川越" },
        { time: "07:24", destination: "川越" },
        { time: "07:43", destination: "拝島" },
        { time: "07:57", destination: "川越" },

        { time: "08:17", destination: "川越" },
        { time: "08:38", destination: "川越" },
        { time: "08:57", destination: "川越" },

        { time: "09:25", destination: "川越" },
        { time: "09:57", destination: "川越" },

        { time: "10:17", destination: "川越" },
        { time: "10:43", destination: "高麗川" },

        { time: "11:13", destination: "川越" },
        { time: "11:43", destination: "川越" },

        { time: "12:13", destination: "川越" },
        { time: "12:43", destination: "川越" },

        { time: "13:13", destination: "川越" },
        { time: "13:43", destination: "川越" },

        { time: "14:13", destination: "川越" },
        { time: "14:43", destination: "川越" },

        { time: "15:13", destination: "川越" },
        { time: "15:42", destination: "川越" },

        { time: "16:11", destination: "川越" },
        { time: "16:29", destination: "箱根ヶ崎" },
        { time: "16:51", destination: "川越" },

        { time: "17:22", destination: "川越" },
        { time: "17:41", destination: "拝島" },
        { time: "17:55", destination: "川越" },

        { time: "18:19", destination: "川越" },
        { time: "18:41", destination: "高麗川" },

        { time: "19:07", destination: "川越" },
        { time: "19:29", destination: "川越" },
        { time: "19:49", destination: "川越" },

        { time: "20:11", destination: "川越" },
        { time: "20:43", destination: "川越" },

        { time: "21:14", destination: "高麗川" },
        { time: "21:43", destination: "川越" },

        { time: "22:11", destination: "川越" },
        { time: "22:43", destination: "川越" },

        { time: "23:20", destination: "高麗川" }
    ]

};







// ==========================================
// 電車機能 初期化・毎秒更新
// ==========================================
function updateTrainTime() {

    const now = new Date();

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // 現在時刻を「分」に変換
    const nowMinutes =
        currentHour * 60 + currentMinute;


    // ==========================================
    // 現在時刻表示
    // ==========================================

    const currentTimeElement =
        document.getElementById("trainCurrentTime");

    if (currentTimeElement) {

        currentTimeElement.textContent =
            "現在時刻は " +
            String(currentHour).padStart(2, "0") +
            ":" +
            String(currentMinute).padStart(2, "0") +
            " です";

    }


    // ==========================================
    // 現在の方向の時刻表
    // ==========================================

    const times =
        trainTimes[currentTrainDirection];


    // ==========================================
    // 発車していない電車だけ残す
    // ==========================================

    const remainingTrains =
        times.filter(train => {

            const [hour, minute] =
                train.time.split(":").map(Number);

            const trainMinutes =
                hour * 60 + minute;

            return trainMinutes > nowMinutes;

        });


    // ==========================================
    // 次の電車
    // ==========================================

    const nextTrainElement =
        document.getElementById("nextTrainTime");


    if (nextTrainElement) {

        if (remainingTrains.length > 0) {

            const nextTrain =
                remainingTrains[0];

            nextTrainElement.textContent =
                nextTrain.time +
                "　" +
                nextTrain.destination +
                "行";

        }

        else {

            nextTrainElement.textContent =
                "--:--";

        }

    }


    // ==========================================
    // 時刻表
    // ==========================================

    const scheduleElement =
        document.getElementById("trainSchedule");


    if (!scheduleElement) {

        return;

    }


    // 本日の電車が終了した場合
    if (remainingTrains.length === 0) {

        scheduleElement.innerHTML = `
            <div class="noTrain">
                本日の電車は終了しました
            </div>
        `;

        return;

    }


    // ==========================================
    // 残りの電車を全部表示
    // ==========================================

    scheduleElement.innerHTML =
        remainingTrains
            .map((train, index) => {

                return `

                    <div
                        class="
                            trainScheduleRow
                            ${index === 0
                                ? "nextTrainRow"
                                : ""}
                        ">

                        <div class="trainScheduleTime">
                            ${train.time}
                        </div>

                        <div class="trainScheduleDestination">
                            ${train.destination}行
                        </div>

                        ${
                            index === 0
                            ? `
                                <div class="nextTrainBadge">
                                    次の電車
                                </div>
                              `
                            : ""
                        }

                    </div>

                `;

            })
            .join("");

}

// ==========================================
// 電車ページを開いたとき
// ==========================================

function showTrainPage() {

   localStorage.setItem(
        "azumaCurrentPage",
        "trainPage"
    );
  
  if (
    document
        .getElementById("noticePage")
        ?.classList.contains("active")
) {

    markNoticesAsRead();

}

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const trainPage =
        document.getElementById("trainPage");

    if (trainPage) {

        trainPage.classList.add("active");

    }


    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {

            btn.classList.remove("activeNav");

        });


    // ★ 電車ページを開いた瞬間に更新
    updateTrainTime();

}


// ==========================================
// 上り・下り切り替え
// ==========================================

function selectTrainDirection(direction) {

    currentTrainDirection = direction;


    const upButton =
        document.getElementById("upButton");

    const downButton =
        document.getElementById("downButton");


    if (upButton) {

        upButton.classList.remove(
            "activeTrainDirection"
        );

    }


    if (downButton) {

        downButton.classList.remove(
            "activeTrainDirection"
        );

    }


    if (direction === "up") {

        if (upButton) {

            upButton.classList.add(
                "activeTrainDirection"
            );

        }

    } else {

        if (downButton) {

            downButton.classList.add(
                "activeTrainDirection"
            );

        }

    }


    updateTrainTime();

}


// ==========================================
// 起動時
// ==========================================

// ページ読み込み完了時に一度実行
document.addEventListener("DOMContentLoaded", () => {

    updateTrainTime();

    loadNotices();


});


// ==========================================
// 毎秒更新
// ==========================================

setInterval(() => {

    updateTrainTime();

}, 1000);

setInterval(() => {

    loadNotices();

}, 10000);


    // ==========================================
// お知らせページ
// ==========================================

function showNoticePage() {

  localStorage.setItem(
    "azumaCurrentPage",
    "noticePage"
);

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const noticePage =
        document.getElementById("noticePage");


    if (noticePage) {

        noticePage.classList.add("active");

    }


    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {

            btn.classList.remove("activeNav");

        });

    // ★ここでは確認済みにしない
    // お知らせページを開いている間は赤丸を残す

}

// ==========================================
// お知らせを確認済みにする
// お知らせページを離れたときに実行
// ==========================================

async function markNoticesAsRead() {

    try {

        const response = await fetch(
            "notice.json?time=" + Date.now()
        );

        if (!response.ok) {
            return;
        }

        const notices = await response.json();

        if (
            notices &&
            notices.length > 0
        ) {

            // 最新のお知らせIDを保存
            localStorage.setItem(
                NOTICE_READ_KEY,
                notices[0].id
            );

            // 赤丸を消す
            updateNoticeBadges(notices);

        }

    }

    catch (error) {

        console.log(
            "お知らせ確認状態の更新失敗",
            error
        );

    }

}
// ==========================================
// お知らせ読み込み
// ==========================================

async function loadNotices() {

    try {

        const response = await fetch(
            "notice.json?time=" + Date.now()
        );

        if (!response.ok) {
            return;
        }

        const notices = await response.json();

        const noticeList =
            document.getElementById("noticeList");

        if (!noticeList) {
            return;
        }

        noticeList.innerHTML = "";

        notices.forEach(notice => {

            noticeList.innerHTML += `

                <div class="noticeCard">

                    <div class="noticeCardHeader">

                        <div class="noticeDate">
                            ${notice.date}
                        </div>

                        <span
                            class="newNoticeDot"
                            data-notice-id="${notice.id}">
                        </span>

                    </div>

                    <div class="noticeTitle">
                        ${notice.title}
                    </div>

                    <div class="noticeText">
                        ${notice.text}
                    </div>

                </div>

            `;

        });

        // 新規お知らせの赤丸を更新
        updateNoticeBadges(notices);

    }

    catch (error) {

        console.log(
            "お知らせデータ取得失敗",
            error
        );

    }

}
// ==========================================
// 新規お知らせ判定
// ==========================================

const NOTICE_READ_KEY = "azumaReadNoticeId";


function updateNoticeBadges(notices) {

    if (!notices || notices.length === 0) {
        return;
    }


    // 最後に確認したお知らせID
    const readNoticeId =
        localStorage.getItem(NOTICE_READ_KEY);


    // 最新のお知らせ
    const latestNotice =
        notices[0];


    // 未確認のお知らせがあるか
    const hasNewNotice =
        readNoticeId !== latestNotice.id;


    // ==========================================
    // お知らせカードの赤丸
    // ==========================================

    document
        .querySelectorAll(".newNoticeDot")
        .forEach(dot => {

            const noticeId =
                dot.dataset.noticeId;


            if (
                hasNewNotice &&
                noticeId === latestNotice.id
            ) {

                dot.classList.add(
                    "showNewNoticeDot"
                );

            }

            else {

                dot.classList.remove(
                    "showNewNoticeDot"
                );

            }

        });


    // ==========================================
    // その他・お知らせの赤丸
    // ==========================================

    const otherBadge =
        document.getElementById(
            "otherNoticeBadge"
        );


    const noticeBadge =
        document.getElementById(
            "noticeBadge"
        );


    if (hasNewNotice) {

        if (otherBadge) {

            otherBadge.classList.add(
                "showNewNoticeDot"
            );

        }


        if (noticeBadge) {

            noticeBadge.classList.add(
                "showNewNoticeDot"
            );

        }

    }

    else {

        if (otherBadge) {

            otherBadge.classList.remove(
                "showNewNoticeDot"
            );

        }


        if (noticeBadge) {

            noticeBadge.classList.remove(
                "showNewNoticeDot"
            );

        }

    }

}
// ==========================================
// おまけページ
// ==========================================

function showOmakePage() {

    localStorage.setItem(
        "azumaCurrentPage",
        "omakePage"
    );

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    const omakePage =
        document.getElementById("omakePage");

    if (omakePage) {
        omakePage.classList.add("active");
    }

    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {
            btn.classList.remove("activeNav");
        });

    loadOmake();

}
// ==========================================
// おまけ読み込み
// ==========================================

async function loadOmake() {

    try {

        const response = await fetch(
            "omake.json?time=" + Date.now()
        );

        if (!response.ok) {
            return;
        }

        const omakes = await response.json();

        const omakeList =
            document.getElementById("omakeList");

        if (!omakeList) {
            return;
        }

        omakeList.innerHTML = "";

        omakes.forEach(item => {

            omakeList.innerHTML += `

                <div class="noticeCard">

                    <div class="noticeCardHeader">

                        <div class="noticeDate">
                            ${item.date}
                        </div>

                    </div>

                    <div class="noticeTitle">
                        ${item.title}
                    </div>

                    <div class="noticeText">
                        ${item.text}
                    </div>

                </div>

            `;

        });

    }

    catch (error) {

        console.log(
            "おまけデータ取得失敗",
            error
        );

    }

}

// ==========================================
// お気に入り絞り込み
// ==========================================

let favoriteOnly = false;


function filterFavorite(onlyFavorite) {
    favoriteOnly = onlyFavorite;

    document
        .getElementById("allBoothsBtn")
        .classList.toggle(
            "activeFavoriteFilter",
            !onlyFavorite
        );

    document
        .getElementById("favoriteOnlyBtn")
        .classList.toggle(
            "activeFavoriteFilter",
            onlyFavorite
        );

    updateList();
}

// ==========================================
// パンフレット
// ==========================================

let currentPamphletPage = 1;

const pamphletTotalPages = 30;


// ==========================================
// パンフレットページ表示
// ==========================================

function updatePamphletPage() {

    const image =
        document.getElementById("pamphletImage");

    const pageNumber =
        document.getElementById("pamphletPageNumber");

    const prevButton =
        document.getElementById("pamphletPrev");

    const nextButton =
        document.getElementById("pamphletNext");


    if (!image) return;


    // 画像変更
    image.src =
        "pamphlet/" +
        currentPamphletPage +
        ".jpg";


    image.alt =
        "パンフレット " +
        currentPamphletPage +
        "ページ目";


    // ページ番号
    if (pageNumber) {

        pageNumber.textContent =
            currentPamphletPage +
            " / " +
            pamphletTotalPages;

    }


    // 前へボタン
    if (prevButton) {

        prevButton.disabled =
            currentPamphletPage === 1;

    }


    // 次へボタン
    if (nextButton) {

        nextButton.disabled =
            currentPamphletPage === pamphletTotalPages;

    }

}


// ==========================================
// 次のページ
// ==========================================

function nextPamphletPage() {

    if (
        currentPamphletPage <
        pamphletTotalPages
    ) {

        currentPamphletPage++;

        updatePamphletPage();

    }

}


// ==========================================
// 前のページ
// ==========================================

function previousPamphletPage() {

    if (
        currentPamphletPage > 1
    ) {

        currentPamphletPage--;

        updatePamphletPage();

    }

}


// ==========================================
// パンフレットページを開く
// ==========================================

function showPamphletPage() {

    localStorage.setItem(
        "azumaCurrentPage",
        "pamphletPage"
    );


    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const pamphletPage =
        document.getElementById("pamphletPage");


    if (pamphletPage) {

        pamphletPage.classList.add("active");

    }


    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {

            btn.classList.remove("activeNav");

        });


    // ページを開いたら現在のページを表示
    updatePamphletPage();

}


// ==========================================
// パンフレット スワイプ
// ==========================================

let pamphletTouchStartX = 0;
let pamphletTouchStartY = 0;
let pamphletTouchStartTime = 0;
let pamphletTouchMoved = false;


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const viewer =
            document.querySelector(".pamphletViewer");

        if (!viewer) return;


        // ------------------------------------------
        // 指を置いた
        // ------------------------------------------

        viewer.addEventListener(
            "touchstart",
            (e) => {

                // 2本以上の指は無視
                if (e.touches.length !== 1) {

                    pamphletTouchMoved = false;

                    return;

                }


                const touch =
                    e.touches[0];

                pamphletTouchStartX =
                    touch.clientX;

                pamphletTouchStartY =
                    touch.clientY;

                pamphletTouchStartTime =
                    Date.now();

                pamphletTouchMoved = false;

            },
            { passive: true }
        );


        // ------------------------------------------
        // 指を動かしている
        // ------------------------------------------

        viewer.addEventListener(
            "touchmove",
            (e) => {

                // 2本指になったら無効
                if (e.touches.length !== 1) {

                    pamphletTouchMoved = false;

                    return;

                }


                const touch =
                    e.touches[0];

                const dx =
                    touch.clientX -
                    pamphletTouchStartX;

                const dy =
                    touch.clientY -
                    pamphletTouchStartY;


                /*
                 * 縦方向に動いた場合は
                 * ページめくり対象外
                 */

                if (Math.abs(dy) > Math.abs(dx)) {

                    pamphletTouchMoved = false;

                    return;

                }


                /*
                 * 横方向に50px以上動いたら
                 * スワイプとして扱う
                 */

                if (Math.abs(dx) >= 50) {

                    pamphletTouchMoved = true;

                }

            },
            { passive: true }
        );


        // ------------------------------------------
        // 指を離した
        // ------------------------------------------

        viewer.addEventListener(
            "touchend",
            (e) => {

                // スワイプ判定されていなければ何もしない
                if (!pamphletTouchMoved) {

                    return;

                }


                // 2本指操作は無視
                if (
                    e.changedTouches.length !== 1
                ) {

                    return;

                }


                const touch =
                    e.changedTouches[0];

                const distance =
                    touch.clientX -
                    pamphletTouchStartX;


                // 念のため横方向だけ判定

                const verticalDistance =
                    touch.clientY -
                    pamphletTouchStartY;


                if (
                    Math.abs(verticalDistance) >
                    Math.abs(distance)
                ) {

                    return;

                }


                // ----------------------------------
                // 左スワイプ → 次へ
                // ----------------------------------

                if (distance < -50) {

                    nextPamphletPage();

                }


                // ----------------------------------
                // 右スワイプ → 前へ
                // ----------------------------------

                else if (distance > 50) {

                    previousPamphletPage();

                }


                pamphletTouchMoved = false;

            },
            { passive: true }
        );

    }
);

// ==========================================
// タイムテーブルページ
// ==========================================

function showSchedulePage(button) {

    // 現在のページを保存
    localStorage.setItem(
        "azumaCurrentPage",
        "timetablePage"
    );

    // すべてのページを非表示
    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    // タイムテーブルを表示
    const timetablePage =
        document.getElementById("timetablePage");

    if (timetablePage) {
        timetablePage.classList.add("active");
    }

    // ナビボタンのactiveをリセット
    document
        .querySelectorAll(".navBtn")
        .forEach(btn => {
            btn.classList.remove("activeNav");
        });

    // タイムテーブルを更新
    if (typeof updateTimetable === "function") {
        updateTimetable();
    }
}
