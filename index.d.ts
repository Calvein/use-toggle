interface Toggle {
  isOpen: boolean,
  open(): void,
  close(): void,
  toggle(): void,
}

export default function useToggle(defaultIsOpen?: boolean): Toggle;
