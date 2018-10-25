'use strict';
let { useState } = require('react');

function useInputValue(defaultIsOpen) {
  let [isOpen, setIsOpen] = useState(defaultIsOpen);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}

module.exports = useInputValue;