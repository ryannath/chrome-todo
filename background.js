// background.js
let model = {"tasks": []};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(model);
});