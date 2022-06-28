export default function outsideClick(ellement, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(e) {
    if (!ellement.contains(e.target)) {
      ellement.removeAttribute(outside);

      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callback();
    }
  }

  if (!ellement.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick), 0);
    });
    ellement.setAttribute(outside, '');
  }
}
