
let animetomb = [
    {
        "aNeve":"douluo dalu",
        "kkep":"15.jpg"
    },
    {
        "aNeve":"swallowed star",
        "kkep":"16.jpg"
    },
    {
        "aNeve":"Wanmei Shijie",
        "kkep":"17.jpg"
    },
    {
        "aNeve":"Battle Through the Heavens",
        "kkep":"18.jpg"
    },
    {
        "aNeve":"douluo dalu 2 peerless tang sect",
        "kkep":"19.jpg"
    },
    {
        "aNeve":"To Be Hero X",
        "kkep":"20.jpg"
    }
    
]
let sz=""

for (const elem of animetomb) {
    sz+=`
    <div class="col-sm-4">
    <div class="animediv">
    <div>${elem.aNeve}</div>
    <div><img class="img-fluid" src="etelek/${elem.kkep}"></div>
    </div>
    </div>
    `
}
document.getElementById("dounghuAdatok").innerHTML=sz
