export function clickOutside(node: HTMLElement | null) {
  const handleClick = (event: Event) => {
    if (
      node &&
      !node.contains(event.target as Node) &&
      !event.defaultPrevented
    ) {
      node.dispatchEvent(
        new CustomEvent('clickOutside', { bubbles: true, detail: node }),
      );
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}
