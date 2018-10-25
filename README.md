# `@rehooks/toggle`

> React hook for toggling things

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/toggle
```

## Usage

```js
import useToggle from '@rehooks/toggle';

function MyComponent() {
  let { isOpen, open, close, toggle } = useToggle();
  return (
    <button onClick={toggle}>
      is {isOpen ? 'opened' : 'closed'}
    </button>
  );
}
```
