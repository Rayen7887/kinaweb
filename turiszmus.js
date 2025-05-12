let turiztomb = [
    {
        "latvanyNeve":"Az Agyaghadsereg",
        "tkep":"9.jpg"
    },
    {
        "latvanyNeve":"A Kínai Nagy Fal",
        "tkep":"8.jpg"
    },
    {
        "latvanyNeve":"Sanghaj",
        "tkep":"11.jpg"
    },
    {
        "latvanyNeve":"Kuljin - rizsföldek és kúpkarsztok",
        "tkep":"12.jpg"
    },
    {
        "latvanyNeve":"Zhangjiajie Nemzeti Park - Az Avatar világa a Földön",
        "tkep":"13.jpg"
    },
    {
        "latvanyNeve":"A Tiltott Város, Peking",
        "tkep":"14.jpg"
    }
    
]
let sz=""

for (const elem of turiztomb) {
    sz+=`
    <div class="col-sm-4">
    <div class="turizdoboz">
    <div>${elem.latvanyNeve}</div>
    <div><img class="img-fluid" src="turizmuskepek/${elem.tkep}"></div>
    </div>
    </div>
    `

}
document.getElementById("TurizAdatok").innerHTML=sz