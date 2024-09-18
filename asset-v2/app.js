/*no*/
var app=new function(){this.name="Gestalt",
this.version="2",
this.date="2024",
this.folder="asset-v2/",
this.looptime=9125,
this.bpm=105,
this.totalframe=438,
this.nbpolo=7,
this.nbloopbonus=6,
this.bonusloopA=!0,
this.bonusendloopA=!0,
this.recmaxloop=394,
this.recminloop=2,
this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,
this.spritepolo="polo-sprite.png",
this.spritepicto="game-picto.png",
this.colBck="#000000",this.col0="#ffffff",
this.col1="#000000",this.col2="#808080",
this.col3="#808080",this.col4="#808080",
this.animearray=
[{name:"1_punk",color:"584949",uniqsnd:!0},
{name:"2_the-wanderer",color:"2C3632",uniqsnd:!0},
{name:"3_mechanic",color:"FFBF00",uniqsnd:!0},
{name:"4_abomination",color:"5A5A5A",uniqsnd:!0},
{name:"5_drummer",color:"FFFFFF",uniqsnd:!0},
{name:"6_jugger",color:"324038",uniqsnd:!0},
{name:"7_test",color:"F9C91C",uniqsnd:!0},
{name:"8_the_shocker",color:"AA000B",uniqsnd:!0},
{name:"9_dealer",color:"1E3628",uniqsnd:!0},
{name:"10_sniper",color:"CDBE8D",uniqsnd:!0},
{name:"11_locknar-z",color:"526353",uniqsnd:!0},
{name:"12_gizmo",color:"3E4F6B",uniqsnd:!0},
{name:"13_jeff",color:"7E543A",uniqsnd:!0},
{name:"14_module_monochrome_384",color:"FFFFFF",uniqsnd:!0},
{name:"15_impuls",color:"2A3E46",uniqsnd:!0},
{name:"16_an_abandoned_station",color:"52627C",uniqsnd:!0},
{name:"17_bishop",color:"282828",uniqsnd:!0},
{name:"18_door",color:"6C6C6C",uniqsnd:!0},
{name:"19_the_hound_ghoul",color:"544848",uniqsnd:!0},
{name:"20_lex",color:"FF0000",uniqsnd:!0},
{name:"21_sam_larkin-machinist",color:"720000",uniqsnd:!0},
{name:"22_ruptor",color:"A57E58",uniqsnd:!0}],
this.bonusarray=[/* GGOGOGOGO */],
this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};