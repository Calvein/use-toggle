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
    let { isOn, on, off, toggle } = useToggle(true);
    return h('button', { on, off, toggle, chilren: isOn });
  }

  let button = render(h(Component));
  const a = button.toJSON()

  t.is(button.toJSON().props.chilren, true);
  button.toJSON().props.toggle();
  t.is(button.toJSON().props.chilren, false);
  button.toJSON().props.on();
  t.is(button.toJSON().props.chilren, true);
  button.toJSON().props.off();
  t.is(button.toJSON().props.chilren, false);
});
