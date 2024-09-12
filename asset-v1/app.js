var app = new function() {
    this.name = "Cold Fog", 
    this.version = "1", 
    this.date = "2024", 
    this.folder = "asset-v1/", 
    this.looptime = 15000, 
    this.bpm = 64, 
    this.totalframe = 256, 
    this.nbpolo = 7, 
    this.nbloopbonus = 3, 
    this.bonusloopA = !0, 
    this.bonusendloopA = !0, 
    this.recmaxloop = 68, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#000000", 
    this.col0 = "#F5FAFF", 
    this.col1 = "#F5FAFF",  
    this.col2 = "#F5FAFF", 
    this.col3 = "#F5FAFF", 
    this.col4 = "#F5FAFF", 
    this.animearray = [{
        name: "1_asp",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "2_corpose",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "3_locked",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "4_ticking",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "5_eyes",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "6_suffering",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "7_static",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "8_bishop",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "9_dong",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "10_udo",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "11_cyclop",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "12_ether",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "13_tooth",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "14_horn",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "15_blind",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "16_top",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "17_cross",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "18_statue",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "19_gigastra",
        color: "ffffff",
        uniqsnd: !0
    },{
        name: "20_smile",
        color: "ffffff",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};