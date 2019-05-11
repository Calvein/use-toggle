'use strict';
let { useState } = require('react');

function useInputValue(defaultIsOn) {
  let [isOn, setIsOn] = useState(defaultIsOn);

  function on() {
    setIsOn(true);
  }

  function off() {
    setIsOn(false);
  }

  function toggle() {
    setIsOn(!isOn);
  }

  return {
    isOn,
    isOff: !isOn,
    on,
    off,
    toggle,
  };
}

module.exports = useInputValue;