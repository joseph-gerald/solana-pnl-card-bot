// klineGraph.js

const canvas = document.getElementById('klineCanvas');
const ctx = canvas.getContext('2d');

let scaleX, scaleY;

let klines = [];

function parseKlines(data) {
    return JSON.parse(data).klines.map(kline => ({
        timestamp: kline.timestamp,
        close: parseFloat(kline.close)
    }));
}
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    scaleX = canvas.width / (klines.length - 1);
    scaleY = canvas.height * 1.1 / Math.max(...klines.map(k => k.close));

    ctx.beginPath();
    ctx.moveTo(scaleX * 0, canvas.height - (scaleY * klines[0].close));
    for (let i = 1; i < klines.length - 2; i++) {
        const xc = (scaleX * (i + 1) + scaleX * i) / 2;
        const yc = (canvas.height - (scaleY * klines[i + 1].close) + canvas.height - (scaleY * klines[i].close)) / 2;
        ctx.quadraticCurveTo(scaleX * i, canvas.height - (scaleY * klines[i].close), xc, yc);
    }
    ctx.quadraticCurveTo(scaleX * (klines.length - 2), canvas.height - (scaleY * klines[klines.length - 2].close), scaleX * (klines.length - 1), canvas.height - (scaleY * klines[klines.length - 1].close));
    ctx.strokeStyle = '#dcdcdc';
    ctx.lineWidth = 4;
    ctx.stroke();
}

function addBuyPoint(timestamp) {
    const buyKline = klines.find(kline => kline.timestamp >= timestamp);
    if (buyKline) {
        // draw background rectangle

        ctx.font = 'bold 30px Arial';

        const text = `25$`;
        let textWidth = ctx.measureText(text).width;

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 6;
        ctx.strokeText(text, scaleX * (klines.indexOf(buyKline)) - textWidth / 2, canvas.height - (scaleY * buyKline.close) + 5);

        ctx.fillStyle = '#22c55e';
        ctx.fillText(text, scaleX * (klines.indexOf(buyKline)) - textWidth / 2, canvas.height - (scaleY * buyKline.close) + 5);
    }
}

function updateGraph() {
    drawGraph();
    
    addBuyPoint(1731419900);
    addBuyPoint(1731418800);
}

// Initial data
const initialData = `{"klines": [
            {
                "timestamp": 1731414300,
                "close": "0.00008622350899494300"
            },
            {
                "timestamp": 1731414600,
                "close": "0.00008622350899494300"
            },
            {
                "timestamp": 1731414900,
                "close": "0.00071984994725657783"
            },
            {
                "timestamp": 1731415200,
                "close": "0.00110958510537222351"
            },
            {
                "timestamp": 1731415500,
                "close": "0.00165070517172094820"
            },
            {
                "timestamp": 1731415800,
                "close": "0.00206576080208999264"
            },
            {
                "timestamp": 1731416100,
                "close": "0.00296934091613982000"
            },
            {
                "timestamp": 1731416400,
                "close": "0.00428590788221639784"
            },
            {
                "timestamp": 1731416700,
                "close": "0.00411374412967809976"
            },
            {
                "timestamp": 1731417000,
                "close": "0.00586873421024942295"
            },
            {
                "timestamp": 1731417300,
                "close": "0.00266018874663472000"
            },
            {
                "timestamp": 1731417600,
                "close": "0.00305637532172461405"
            },
            {
                "timestamp": 1731417900,
                "close": "0.00197424796506128605"
            },
            {
                "timestamp": 1731418200,
                "close": "0.00163449489875230596"
            },
            {
                "timestamp": 1731418500,
                "close": "0.00180775442614026876"
            },
            {
                "timestamp": 1731418800,
                "close": "0.00217841831383418965"
            },
            {
                "timestamp": 1731419100,
                "close": "0.00211485165226770000"
            },
            {
                "timestamp": 1731419400,
                "close": "0.00312144854863945680"
            },
            {
                "timestamp": 1731419700,
                "close": "0.00333243481865060112"
            },
            {
                "timestamp": 1731420000,
                "close": "0.00382476793807409217"
            },
            {
                "timestamp": 1731420300,
                "close": "0.00331524035571083871"
            },
            {
                "timestamp": 1731420600,
                "close": "0.00270761743544996764"
            },
            {
                "timestamp": 1731420900,
                "close": "0.00265099487350886604"
            },
            {
                "timestamp": 1731421200,
                "close": "0.00260690339612432000"
            },
            {
                "timestamp": 1731421500,
                "close": "0.00264775486396919220"
            },
            {
                "timestamp": 1731421800,
                "close": "0.00209876804325012500"
            },
            {
                "timestamp": 1731422100,
                "close": "0.00175744313096465454"
            },
            {
                "timestamp": 1731422400,
                "close": "0.00189435496194165536"
            },
            {
                "timestamp": 1731422700,
                "close": "0.00183609697116202140"
            },
            {
                "timestamp": 1731423000,
                "close": "0.00188209758065316208"
            },
            {
                "timestamp": 1731423300,
                "close": "0.00132029639415040000"
            },
            {
                "timestamp": 1731423600,
                "close": "0.00109714182289941031"
            },
            {
                "timestamp": 1731423900,
                "close": "0.00124545150533489180"
            },
            {
                "timestamp": 1731424200,
                "close": "0.00127158857541810411"
            },
            {
                "timestamp": 1731424500,
                "close": "0.00131160046369348788"
            },
            {
                "timestamp": 1731424800,
                "close": "0.00131044127242509390"
            },
            {
                "timestamp": 1731425100,
                "close": "0.00123518887242330240"
            },
            {
                "timestamp": 1731425400,
                "close": "0.00094580496891755433"
            },
            {
                "timestamp": 1731425700,
                "close": "0.00079425099230397444"
            },
            {
                "timestamp": 1731426000,
                "close": "0.00078100295125671488"
            },
            {
                "timestamp": 1731426300,
                "close": "0.00088668228116592697"
            },
            {
                "timestamp": 1731426600,
                "close": "0.00104919552554567738"
            },
            {
                "timestamp": 1731426900,
                "close": "0.00114856266221805336"
            },
            {
                "timestamp": 1731427200,
                "close": "0.00110622697105773600"
            },
            {
                "timestamp": 1731427500,
                "close": "0.00104373130217825700"
            },
            {
                "timestamp": 1731427800,
                "close": "0.00098973923153949514"
            },
            {
                "timestamp": 1731428100,
                "close": "0.00080808104776876254"
            },
            {
                "timestamp": 1731428400,
                "close": "0.00116456592352170576"
            },
            {
                "timestamp": 1731428700,
                "close": "0.00107704339832473560"
            },
            {
                "timestamp": 1731429000,
                "close": "0.00095970047276970888"
            },
            {
                "timestamp": 1731429300,
                "close": "0.00108652908206494186"
            },
            {
                "timestamp": 1731429600,
                "close": "0.00103130088826776648"
            },
            {
                "timestamp": 1731429900,
                "close": "0.00098089945281117216"
            },
            {
                "timestamp": 1731430200,
                "close": "0.00084217764828433062"
            },
            {
                "timestamp": 1731430500,
                "close": "0.00081087228161736045"
            },
            {
                "timestamp": 1731430800,
                "close": "0.00079032319476312888"
            },
            {
                "timestamp": 1731431100,
                "close": "0.00070354613889280230"
            },
            {
                "timestamp": 1731431400,
                "close": "0.00087958258917046560"
            },
            {
                "timestamp": 1731431700,
                "close": "0.00083527603106753280"
            },
            {
                "timestamp": 1731432000,
                "close": "0.00073476871312029680"
            },
            {
                "timestamp": 1731432300,
                "close": "0.00070184408088493044"
            },
            {
                "timestamp": 1731432600,
                "close": "0.00066739287052245269"
            },
            {
                "timestamp": 1731432900,
                "close": "0.00056651942925195200"
            },
            {
                "timestamp": 1731433200,
                "close": "0.00069164706998672086"
            },
            {
                "timestamp": 1731433500,
                "close": "0.00065667701292207042"
            },
            {
                "timestamp": 1731433800,
                "close": "0.00065900758600296009"
            },
            {
                "timestamp": 1731434100,
                "close": "0.00062386139608178757"
            },
            {
                "timestamp": 1731434400,
                "close": "0.00071569708633834618"
            },
            {
                "timestamp": 1731434700,
                "close": "0.00112940421846111000"
            },
            {
                "timestamp": 1731435000,
                "close": "0.00093740426782126020"
            },
            {
                "timestamp": 1731435300,
                "close": "0.00116393829636301352"
            },
            {
                "timestamp": 1731435600,
                "close": "0.00094289008890659732"
            },
            {
                "timestamp": 1731435900,
                "close": "0.00075266514258949002"
            },
            {
                "timestamp": 1731436200,
                "close": "0.00080044041087179155"
            },
            {
                "timestamp": 1731436500,
                "close": "0.00091229747023550768"
            },
            {
                "timestamp": 1731436800,
                "close": "0.00094900472454334247"
            },
            {
                "timestamp": 1731437100,
                "close": "0.00096193043225513351"
            },
            {
                "timestamp": 1731437400,
                "close": "0.00101551133931944385"
            },
            {
                "timestamp": 1731437700,
                "close": "0.00108321758837502410"
            },
            {
                "timestamp": 1731438000,
                "close": "0.00099758024818268300"
            },
            {
                "timestamp": 1731438300,
                "close": "0.00086141395720078929"
            },
            {
                "timestamp": 1731438600,
                "close": "0.00090694879928078487"
            },
            {
                "timestamp": 1731438900,
                "close": "0.00084018595639939450"
            },
            {
                "timestamp": 1731439200,
                "close": "0.00078763146461916306"
            },
            {
                "timestamp": 1731439500,
                "close": "0.00085399988467192152"
            },
            {
                "timestamp": 1731439800,
                "close": "0.00089913194538922160"
            },
            {
                "timestamp": 1731440100,
                "close": "0.00100186632336042800"
            },
            {
                "timestamp": 1731440400,
                "close": "0.00080798669625352056"
            },
            {
                "timestamp": 1731440700,
                "close": "0.00080865460373397275"
            },
            {
                "timestamp": 1731441000,
                "close": "0.00080381809481170824"
            },
            {
                "timestamp": 1731441300,
                "close": "0.00077665772598540000"
            },
            {
                "timestamp": 1731441600,
                "close": "0.00077751111535893900"
            },
            {
                "timestamp": 1731441900,
                "close": "0.00070880395642884150"
            },
            {
                "timestamp": 1731442200,
                "close": "0.00070444557829665600"
            },
            {
                "timestamp": 1731442500,
                "close": "0.00076102282094167000"
            },
            {
                "timestamp": 1731442800,
                "close": "0.00074270064721335571"
            },
            {
                "timestamp": 1731443100,
                "close": "0.00068537060465404967"
            },
            {
                "timestamp": 1731443400,
                "close": "0.00067759417645343402"
            },
            {
                "timestamp": 1731443700,
                "close": "0.00059824531436225556"
            },
            {
                "timestamp": 1731444000,
                "close": "0.00058845252534971104"
            },
            {
                "timestamp": 1731444300,
                "close": "0.00073379506148807376"
            },
            {
                "timestamp": 1731444600,
                "close": "0.00065550079142947426"
            },
            {
                "timestamp": 1731444900,
                "close": "0.00063288099654614100"
            },
            {
                "timestamp": 1731445200,
                "close": "0.00064481433775262010"
            },
            {
                "timestamp": 1731445500,
                "close": "0.00062837969602479262"
            },
            {
                "timestamp": 1731445800,
                "close": "0.00056207905573022874"
            },
            {
                "timestamp": 1731446100,
                "close": "0.00058324480116547230"
            },
            {
                "timestamp": 1731446400,
                "close": "0.00058767842144425686"
            },
            {
                "timestamp": 1731446700,
                "close": "0.00058704912452959542"
            },
            {
                "timestamp": 1731447000,
                "close": "0.00057366502531670360"
            },
            {
                "timestamp": 1731447300,
                "close": "0.00060218041177346340"
            },
            {
                "timestamp": 1731447600,
                "close": "0.00066751979232369235"
            },
            {
                "timestamp": 1731447900,
                "close": "0.00065057604314526040"
            },
            {
                "timestamp": 1731448200,
                "close": "0.00065274537403496448"
            },
            {
                "timestamp": 1731448500,
                "close": "0.00069635482846869420"
            },
            {
                "timestamp": 1731448800,
                "close": "0.00073652726072855040"
            },
            {
                "timestamp": 1731449100,
                "close": "0.00081102341785146136"
            },
            {
                "timestamp": 1731449400,
                "close": "0.00083403369744662550"
            },
            {
                "timestamp": 1731449700,
                "close": "0.00090260062535760000"
            },
            {
                "timestamp": 1731450000,
                "close": "0.00082584165001716672"
            },
            {
                "timestamp": 1731450300,
                "close": "0.00078189140505763554"
            }
        ]}`;
klines = parseKlines(initialData);

// Event listener for adding buy points
document.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const scaleX = canvas.width / (klines.length - 1);
    const scaleY = canvas.height * 0.9 / Math.max(...klines.map(k => k.close));
    const timestamp = Math.floor(x / scaleX * 1000); // Convert to milliseconds
    addBuyPoint(timestamp);
    updateGraph();
});

window.onload = () => {
    const canvasWidth = canvas.getBoundingClientRect().width;
    const canvasHeight = canvas.getBoundingClientRect().height;

    const scale = 2;

    canvas.width = canvasWidth * scale;
    canvas.height = canvasHeight * scale;

    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    updateGraph();

}