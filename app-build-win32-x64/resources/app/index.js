const electron = require('electron')
const {app, BrowerWindow} = electron


app.on('ready', () => {
    let win = new BrowerWindow(
        {
            width: 800,
            height: 800
        }
    );
    win.loadURL(`file://${__dirname}/index.html`);
});