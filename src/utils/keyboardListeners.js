const keyToHandlerName = {
    Enter: "onEnter",
    Control: "onCtrl",
    Backspace: "onBackspace",
    Delete: "onDelete",
    Esc: "onEsc",
    Escape: "onEsc",
    ArrowUp: "onUp",
    ArrowDown: "onDown",
    ArrowLeft: "onLeft",
    ArrowRight: "onRight",
    Tab: "onTab"
};
const handlers = {
    onEnter: [],
    onCtrl: [],
    onDelete: [],
    onBackspace: [],
    onEsc: [],
    onUp: [],
    onDown: [],
    onLeft: [],
    onRight: [],
    onTab: [],
};

export default function keyboardListeners(options) {
    if (!hasActiveHandlers()) document.addEventListener("keydown", handleKeyDown, true);
  
    Object.keys(options).forEach((handlerName) => {
        const handler = options[handlerName];
        if (!handler) return;
  
        const currentEventHandlers = handlers[handlerName];
        if (currentEventHandlers) currentEventHandlers.push(handler);
    });
  
    return () => releaseKeyboardListener(options);
}

const hasActiveHandlers = () => Object.values(handlers).some((keyHandlers) => Boolean(keyHandlers.length));
  
const handleKeyDown = e => {
    const handlerName = keyToHandlerName[e.key];
    if (!handlerName) return;
  
    const { length } = handlers[handlerName];
    if (!length) return;
    e.stopPropagation();
  
    const handler = handlers[handlerName][length - 1];
    handler(e);
}
  
const releaseKeyboardListener = options => {
    options.forEach((handlerName) => {
        const handler = options[handlerName];
        const currentEventHandlers = handlers[handlerName];
        if (currentEventHandlers) {
            const index = currentEventHandlers.findIndex((cb) => cb === handler);
            if (index !== -1) currentEventHandlers.splice(index, 1);
        }
    });
  
    if (!hasActiveHandlers()) document.removeEventListener("keydown", handleKeyDown, false);
}
  