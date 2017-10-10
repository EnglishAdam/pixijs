// Application
const app = new PIXI.Application(800, 800, {
    backgroundColor: 0x1099bb
})
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// Background
const background = PIXI.Sprite.fromImage('./background.png');
background.width = app.renderer.width;
background.height = app.renderer.height;
app.stage.addChild(background);

// Textures
// Button
const t_buttonBackground = PIXI.Texture.fromImage('./buttonBackground.png');
const t_button = PIXI.Texture.fromImage('./button.png');
const t_buttonPress = PIXI.Texture.fromImage('./buttonPress.png');
const t_buttonOver = PIXI.Texture.fromImage('./buttonOver.png');

// Mouse
const t_mouseBackground = PIXI.Texture.fromImage('./mouseBackground.png');
const t_mouse = PIXI.Texture.fromImage('./mouse.png');
const t_mousePressed = PIXI.Texture.fromImage('./mousePress.png');



// Setup
// Mouse Background

const mouse = new PIXI.Sprite(t_mouseBackground);
mouse.anchor.set(0.5);
mouse.position = app.renderer.plugins.interaction.mouse.global;
app.stage.addChild(mouse);

// Buttons
const buttons = [];
const backgrounds = [];

const buttonPositions = [{
        x: 175,
        y: 75
    },
    {
        x: 655,
        y: 75
    },
    {
        x: 410,
        y: 325
    },
    {
        x: 150,
        y: 465
    },
    {
        x: 685,
        y: 445
    }
];

buttonPositions.forEach((buttonPos) => {
    const background = new PIXI.Sprite(t_buttonBackground);
    background.anchor.set(0.5);
    background.position = buttonPos;
    app.stage.addChild(background);
    backgrounds.push(background);
})

buttonPositions.forEach((buttonPos) => {
    const button = new PIXI.Sprite(t_button);
    button.anchor.set(0.5);
    button.position = buttonPos;
    button.interactive = true;
    button.buttonMode = true;
    button.isDown = false;
    button.isOver = false;
    button
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut)

    // add it to the stage
    app.stage.addChild(button);

    // add button to array
    buttons.push(button);
})

// set some silly values...
backgrounds[0].scale.set(1.2);
backgrounds[2].rotation = Math.PI / 10;
backgrounds[3].scale.set(0.8);
backgrounds[4].scale.set(0.8, 1.2);
backgrounds[4].rotation = Math.PI;

buttons[0].scale.set(1.2);
buttons[2].rotation = Math.PI / 10;
buttons[3].scale.set(0.8);
buttons[4].scale.set(0.8, 1.2);
buttons[4].rotation = Math.PI;

// Mouse Top
const mouseTop = new PIXI.Sprite(t_mouse);
mouseTop.interactive = true;
mouseTop.buttonMode = true;
mouseTop.anchor.set(0.5);
mouseTop.position = mouse.position;
mouseTop
    .on('pointerdown', onMouseDown)
    .on('pointerup', onMouseUp)
app.stage.addChild(mouseTop);

app.ticker.add(function (delta) {
    mouse.position = app.renderer.plugins.interaction.mouse.global;
    mouseTop.position = mouse.position;
    buttons.forEach((button) => {
        if (button.containsPoint(mouse.position)) onButtonOver.call(button)
        else onButtonOut.call(button)
    })
});

function onMouseDown(e) {
    buttons.forEach((button) => {
        if (button.containsPoint(e.data.global)) onButtonDown.call(button)
        else onButtonOut.call(button)
    })
    this.texture = t_mousePressed;
}

function onMouseUp(e) {
    this.texture = t_mouse;
    buttons.forEach((button) => {
        if (button.containsPoint(e.data.global)) onButtonUp.call(button)
        else onButtonOut.call(button)
    })
}

function onButtonDown() {
    console.log('onButtonDown')
    this.isdown = true;
    this.texture = t_buttonPress;
    // this.alpha = 1;
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = t_buttonOver;
    } else {
        this.texture = t_button;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = t_buttonOver;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = t_button;
}