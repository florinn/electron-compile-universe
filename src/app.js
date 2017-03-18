// Modules to control application life and to create native browser window.
import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', () => {
  // Install React DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))   // eslint-disable-line no-console
    .catch((err) => console.log('An error occurred: ', err));   // eslint-disable-line no-console

  // Enable React HMR
  enableLiveReload({ strategy: 'react-hmr' });

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 760 });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
