/* eslint-disable no-console, quotes, no-undef */
const { webFrame } = require('electron');
const countryinfo = document.getElementById('tree');
const battleinfo = document.getElementById('mode');

const usa = document.getElementById('usa');
const ussr = document.getElementById('ussr');
const uk = document.getElementById('uk');
const germany = document.getElementById('germany');
const japan = document.getElementById('japan');
const italy = document.getElementById('italy');
const france = document.getElementById('france');

const aab = document.getElementById('inBattleAAB');
const arb = document.getElementById('inBattleARB');
const tab = document.getElementById('inBattleTAB');
const trb = document.getElementById('inBattleTRB');
const sim = document.getElementById('inBattleSIM');
const test = document.getElementById('inBattleTEST');
const hangar = document.getElementById('inHangar');

webFrame.setZoomLevelLimits(1, 1);

window.country = null;
window.mode = null;

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

function setCountry(country) {
  window.country = country;
  console.log(window.country);
  countryinfo.innerHTML = countries[country];
}

function setMode(mode) {
  window.mode = mode;
  console.log(window.mode);
  battleinfo.innerHTML = modes[mode];
}

usa.onmousedown = () => {
  setCountry('usa');
};
ussr.onmousedown = () => {
  setCountry('ussr');
};
uk.onmousedown = () => {
  setCountry('uk');
};
germany.onmousedown = () => {
  setCountry('germany');
};
italy.onmousedown = () => {
  setCountry('italy');
};
japan.onmousedown = () => {
  setCountry('japan');
};
france.onmousedown = () => {
  setCountry('france');
};

aab.onmousedown = () => {
  setMode('aab');
};
arb.onmousedown = () => {
  setMode('arb');
};
tab.onmousedown = () => {
  setMode('tab');
};
trb.onmousedown = () => {
  setMode('trb');
};
sim.onmousedown = () => {
  setMode('sim');
};
test.onmousedown = () => {
  setMode('test');
};
hangar.onmousedown = () => {
  setMode('hangar');
};