'use strict';

var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var RNKeyboardEventsManager = require('NativeModules').RNKeyboardEventsManager;
var EventEmitter = require('eventemitter3').EventEmitter;

var KeyboardEventEmitter = new EventEmitter();

RCTDeviceEventEmitter.addListener(
  RNKeyboardEventsManager.KeyboardWillShow,
  (frames) => {
    KeyboardEventEmitter.emit(RNKeyboardEventsManager.KeyboardWillShow, frames);
  }
);

RCTDeviceEventEmitter.addListener(
  RNKeyboardEventsManager.KeyboardDidShow,
  (frames) => {
    KeyboardEventEmitter.emit(RNKeyboardEventsManager.KeyboardDidShow, frames);
  }
);

RCTDeviceEventEmitter.addListener(
  RNKeyboardEventsManager.KeyboardWillHide,
  (frames) => {
    KeyboardEventEmitter.emit(RNKeyboardEventsManager.KeyboardWillHide, frames);
  }
);

RCTDeviceEventEmitter.addListener(
  RNKeyboardEventsManager.KeyboardDidHide,
  (frames) => {
    KeyboardEventEmitter.emit(RNKeyboardEventsManager.KeyboardDidHide, frames);
  }
);

module.exports = {
  Emitter: KeyboardEventEmitter,
  KeyboardWillShowEvent: RNKeyboardEventsManager.KeyboardWillShow,
  KeyboardDidShowEvent: RNKeyboardEventsManager.KeyboardDidShow,
  KeyboardWillHideEvent: RNKeyboardEventsManager.KeyboardWillHide,
  KeyboardDidHideEvent: RNKeyboardEventsManager.KeyboardDidHide
};
