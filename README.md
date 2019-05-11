# `@calvein/use-toggle`

> React hook for toggling

## Install

```sh
npm install @calvein/use-toggle
```

## Usage

```js
import useToggle from '@calvein/use-toggle';

const MyComponent = () => {
  const { isOn, isOff, on, off, toggle } = useToggle();

  return (
    <button onClick={toggle}>
      is {isOn ? 'on' : 'off'}
    </button>
  );
}
```
