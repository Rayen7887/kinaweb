let eteltomb = [
    {
        "etelNeve":"Beef Lo Mein",
        "kep":"1.jpg"
    },
    {
        "etelNeve":"Grillezés és nyársak",
        "kep":"2.jpg"
    },
    {
        "etelNeve":"Édes-savanyú sertéshús",
        "kep":"3.jpg"
    },
    {
        "etelNeve":"Ma Po Tofu",
        "kep":"4.jpg"
    },
    {
        "etelNeve":"Hot Pot",
        "kep":"5.jpg"
    },
    {
        "etelNeve":"Pekingi sült kacsa",
        "kep":"6.jpg"
    }
    
]
let sz=""

for (const elem of eteltomb) {
    sz+=`
    <div class="col-sm-4">
    <div class="dobozdiv">
    <div>${elem.etelNeve}</div>
    <div><img class="img-fluid" src="etelek/${elem.kep}" ></div>
    </div>
    </div>
    `
}
document.getElementById("EtelAdatok").innerHTML=sz