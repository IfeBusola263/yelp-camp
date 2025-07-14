function consoleStyler(color, background, fontSize,txt){
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
}

// consoleStyler('blue', 'grey', 30, 'Testing');


function celebrateStyler(reason){
    var fontStyle = "color: tomato; font-size: 50px";

    switch (reason) {
        case "birthday":
            console.log(`%cHappy birthday`, fontStyle);
            break;
        case "champions":
            console.log(`%cCongrats on the title!`, fontStyle);
            break;
        default:
            console.log(reason, fontStyle);
            break;
    }

}

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize,txt, reason){
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');