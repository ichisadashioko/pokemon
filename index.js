const GAME_WIDTH = 160;
const GAME_HEIGHT = 144;
const electron = require('electron');
const {app, BrowserWindow} = require('electron');

function createWindow(){
    // Create the browser window.
    win = new BrowserWindow({width: GAME_WIDTH * 4, height: GAME_HEIGHT * 4, frame: false})

    win.loadFile('index.html');
    win.on('closed', () => {
        win = null;
    })
    win.setResizable(false);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
})