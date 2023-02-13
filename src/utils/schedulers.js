export function debounce(
    fn,
    ms,
    shouldRunFirst,
    shouldRunLast,
) {
    let waitingTimeout;
  
    return (...args) => {
        if (waitingTimeout) {
            clearTimeout(waitingTimeout);
            waitingTimeout = undefined;
        } else if (shouldRunFirst) {
            fn(...args);
        }
  
        waitingTimeout = window.setTimeout(() => {
            if (shouldRunLast) {
                fn(...args);
            }
  
            waitingTimeout = undefined;
        }, ms);
    };
}

let fastRafCallbacks;
let fastRafPrimaryCallbacks;

export function fastRaf(callback, isPrimary = false) {
    if (!fastRafCallbacks) {
        fastRafCallbacks = isPrimary ? [] : [callback];
        fastRafPrimaryCallbacks = isPrimary ? [callback] : [];
  
        requestAnimationFrame(() => {
            const currentCallbacks = fastRafCallbacks;
            const currentPrimaryCallbacks = fastRafPrimaryCallbacks;

            fastRafCallbacks = undefined;
            fastRafPrimaryCallbacks = undefined;
            currentPrimaryCallbacks.forEach((cb) => cb());
            currentCallbacks.forEach((cb) => cb());
        });
    } else if (isPrimary) {
        fastRafPrimaryCallbacks.push(callback);
    } else {
        fastRafCallbacks.push(callback);
    }
  }