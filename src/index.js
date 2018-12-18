/* eslint-disable no-console */

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const DiscordRPC = require("discord-rpc");

/* Do not change the Client ID if you want this to work */
const ClientId = "387976014208434185";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 340,
    height: 380,
    resizable: false,
    titleBarStyle: "hidden"
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

const modes = {
  aab: "Air Arcade Battles",
  arb: "Air Realistic Battles",
  tab: "Tank Arcade Battles",
  trb: "Tank Realistic Battles",
  sim: "Simulator Battles",
  test: "Test flight",
  hangar: "In hangar",
  null: "Idle"
};
const flags = {
  usa: "flag_usa",
  uk: "flag_uk",
  ussr: "flag_ussr",
  germany: "flag_germany",
  japan: "flag_japan",
  italy: "flag_italy",
  france: "flag_france",
  null: "wt_logo"
};
const countries = {
  ussr: "USSR",
  usa: "USA",
  uk: "Great Britain",
  germany: "Germany",
  japan: "Japan",
  italy: "Italy",
  france: "France",
  null: "Idle"
};

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startTimestamp = new Date();

async function setActivity() {
  if (!rpc || !mainWindow) return;

  const mode = await mainWindow.webContents.executeJavaScript("window.mode");
  const country = await mainWindow.webContents.executeJavaScript("window.country");

  rpc.setActivity({
    details: `${modes[mode]}`,
    state: `Country: ${countries[country]}`,
    startTimestamp,
    largeImageKey: "warthunder_thumb",
    largeImageText: "Currently playing War Thunder",
    smallImageKey: flags[country],
    smallImageText: countries[country],
    instance: false
  });
}

rpc.on("ready", () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({clientId:ClientId}).catch(console.error);

process.on("unhandledRejection", console.error);
