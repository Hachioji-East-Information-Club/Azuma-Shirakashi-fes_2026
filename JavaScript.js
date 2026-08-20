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

  { id:"3年1組", name:"3年1組", title:"Thirty One Café", category:"喫茶", place:"3年1組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年2組", name:"3年2組", title:"TSUKAR WARS", category:"アトラクション", place:"3年2組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年3組", name:"3年3組", title:"神原くんは宇宙人", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年4組", name:"3年4組", title:"【閲覧注意】天狗の棲家、のぞいてみた", category:"アトラクション", place:"3年4組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年5組", name:"3年5組", title:"和風喫茶めぐみ", category:"喫茶", place:"3年3組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年6組", name:"3年6組", title:"チュロスチュロQ", category:"食品販売", place:"2年7組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年7組", name:"3年7組", title:"AMIGO TOURAI", category:"食品販売", place:"2年6組", building:"校舎棟", group:"クラス", wait:0, image:"" },
  { id:"3年8組", name:"3年8組", title:"人外探偵結社 ～本日開業の段～", category:"演劇", place:"5ホール", building:"校舎棟", group:"クラス", wait:0, image:"" },

  { id:"室内楽部", name:"室内楽部", title:"室内楽部文化祭公演 - Trabel with HESTring -", category:"公演", place:"5ホール", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"美術部", name:"美術部", title:"昭和レトロ横町", category:"展示", place:"美術室", building:"校舎棟", group:"部活動", wait:0, image:"" },
  { id:"コーラス部", name:"コーラス部", title:"ウィキッド", category:"公演", place:"体育館", building:"体育館棟", group:"部活動", wait:0, image:"" },
  { id:"調理部", name:"調理部", title:"Higashi's Kitchen Club", category:"食品販売", place:"被服室", building:"校舎棟", group:"部活動", wait:0, image:"" },
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

  { id:"有志写真同好会pH", name:"有志写真同好会pH", title:"空想写真キャンバス", category:"展示", place:"ラーコモ", building:"校舎棟", group:"同好会", wait:0, image:"" },
  { id:"ネイチャー同好会", name:"ネイチャー同好会", title:"ネイチャーがええんちゃー！？", category:"展示", place:"生物室", building:"校舎棟", group:"同好会", wait:0, image:"" },

  { id:"図書委員会", name:"図書委員会", title:"晴東雨読", category:"展示", place:"図書室", building:"校舎棟", group:"委員会", wait:0, image:"" },
  { id:"体育委員会", name:"体育委員会", title:"体育祭団旗展示", category:"展示", place:"体育館", building:"体育館棟", group:"委員会", wait:0, image:"" },

  { id:"ヒガシ連合", name:"ヒガシ連合", title:"ヒガシ連合", category:"展示", place:"3年7組", building:"校舎棟", group:"生徒会", wait:0, image:"" },

  { id:"PTA役員会", name:"PTA役員会", title:"51年目のハチヒガ休憩室", category:"その他", place:"2年8組", building:"校舎棟", group:"PTA", wait:0, image:"" },
  { id:"PTA山歩きの会", name:"PTA山歩きの会", title:"PTA山歩きの会", category:"その他", place:"物理室", building:"校舎棟", group:"PTA", wait:0, image:"" },

  { id:"Adel 1000％", name:"Adel 1000％", title:"Adel 1000％", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"ちょりっすー", name:"ちょりっすー", title:"ちょりっすー", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"505号室", name:"505号室", title:"505号室", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"FOUR-TUNE", name:"FOUR-TUNE", title:"FOUR-TUNE", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"Love Berry", name:"Love Berry", title:"Love Berry", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"∅くーしゅーごー", name:"∅くーしゅーごー", title:"∅くーしゅーごー", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"けしつか", name:"けしつか", title:"けしつか", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" },
  { id:"百聞不如一聴", name:"百聞不如一聴", title:"百聞不如一聴", category:"バンド", place:"視聴覚室", building:"校舎棟", group:"バンド", wait:0, image:"" }
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

}


// ==========================================
// 一覧更新
// ==========================================

function updateList() {

    let result = booths;


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

            btn.classList.remove(
                "activeNav"
            );

        });


    button.classList.add("activeNav");

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

}, 10000);


// ==========================================
// 初期表示
// ==========================================

window.onload = () => {

    updateList();

    loadWaitData();

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

document.addEventListener(
    "click",
    function(e) {

        if (
            !e.target.classList
                .contains("favoriteBtn")
        ) {

            return;

        }


        if (
            e.target.textContent.trim()
            === "🤍"
        ) {

            e.target.textContent =
                "❤️";

        }

        else {

            e.target.textContent =
                "🤍";

        }

    }
);


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

      function showFloor(building, floor) {

    // ここは今のまま
    // ...
}


// ↓↓↓ ここから追加 ↓↓↓

// ==========================================
// 電車機能
// ==========================================

let currentTrainDirection = "up";

function showTrainPage(){

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const trainPage = document.getElementById("trainPage");

    if(trainPage){
        trainPage.classList.add("active");
    }

    document.querySelectorAll(".navBtn").forEach(btn => {
        btn.classList.remove("activeNav");
    });

    updateTrainTime();
}

function selectTrainDirection(direction){

    currentTrainDirection = direction;

    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");

    if(upButton){
        upButton.classList.remove("activeTrainDirection");
    }

    if(downButton){
        downButton.classList.remove("activeTrainDirection");
    }

    if(direction === "up"){

        if(upButton){
            upButton.classList.add("activeTrainDirection");
        }

    }else{

        if(downButton){
            downButton.classList.add("activeTrainDirection");
        }

    }

    updateTrainTime();
}

function updateTrainTime(){

    const now = new Date();

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const currentTimeElement =
        document.getElementById("trainCurrentTime");

    const nextTrainElement =
        document.getElementById("nextTrainTime");

    if(currentTimeElement){

        currentTimeElement.textContent =
            "現在時刻は" +
            String(currentHour).padStart(2,"0") +
            ":" +
            String(currentMinute).padStart(2,"0") +
            "です";

    }

    // 電車の時刻表
    const trainTimes = {

        up: [
        ],

        down: [
        ]

    };

    const times = trainTimes[currentTrainDirection];

    let nextTrain = null;

    for(let i = 0; i < times.length; i++){

        const timeParts = times[i].split(":");

        const hour = Number(timeParts[0]);
        const minute = Number(timeParts[1]);

        if(
            hour > currentHour ||
            (
                hour === currentHour &&
                minute > currentMinute
            )
        ){

            nextTrain = times[i];

            break;

        }

    }

    if(nextTrainElement){

        if(nextTrain){

            nextTrainElement.textContent = nextTrain;

        }else{

            nextTrainElement.textContent = "--:--";

        }

    }

}

setInterval(() => {

    updateTrainTime();

}, 1000);

    }

}
