'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useToggle = require('./');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let { isOpen, open, close, toggle } = useToggle(true);
    return h('button', { open, close, toggle, chilren: isOpen });
  }

  let button = render(h(Component));
  const a = button.toJSON()

  t.is(button.toJSON().props.chilren, true);
  button.toJSON().props.toggle();
  t.is(button.toJSON().props.chilren, false);
  button.toJSON().props.open();
  t.is(button.toJSON().props.chilren, true);
  button.toJSON().props.close();
  t.is(button.toJSON().props.chilren, false);
});
