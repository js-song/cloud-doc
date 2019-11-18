const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

// 保持对 window 对象的全局引用
// 否则 JavaScript 对象被垃圾回收的时候 window 对象会自动关闭
let mainWindow = null
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl'
  mainWindow.loadURL(urlLocation)
})
