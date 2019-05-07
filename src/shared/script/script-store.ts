interface Script {
    name: string;
    src: string;
} 

export const ScriptStore: Script[] =  [
    { name: "createjs", src: "assets/animateCC/components/createjs.js" } ,
    { name: "jquery", src: "assets/animateCC/components/lib/jquery-2.2.4.min.js" },
    { name: "anwidget", src: "assets/animateCC/components/sdk/anwidget.js" } ,  
    { name: "textinput", src: "assets/animateCC/components/ui/src/textinput.js" } ,  
    { name: "tm-temperature", src: "assets/animateCC/tele-mesure/tm-temperature.js" },
    { name: "tr-pression", src: "assets/animateCC/tele-reglage/tr-pression.js" },
    { name: "pop-up-temperature", src: "assets/animateCC/pop-up/pop-up-temperature/pop-up-temperature.js" },
    { name: "sonde-t-rf", src: "assets/animateCC/sondes/sonde-t-rf.js" },
    { name: "sonde-t-rf-pop-up", src: "assets/animateCC/sondes/sonde-t-rf-pop-up.js"},
    { name: "sonde-t-rf-pop-up-alarmes", src: "assets/animateCC/sondes/sonde-t-rf-pop-up-alarmes.js"},
    { name: "tm-small", src: "assets/animateCC/tele-mesure/tm-small.js"}
];

