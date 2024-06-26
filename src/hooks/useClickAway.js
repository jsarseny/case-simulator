import {
    useRef, 
    useEffect
} from "react";
import { off, on } from "./util.js";

const defaultEvents = [ "mousedown", "touchstart" ];

const useClickAway = (
    ref,
    onClickAway,
    events = defaultEvents
) => {
    const savedCallback = useRef(onClickAway);

    useEffect(() => {
        savedCallback.current = onClickAway;
    }, [ onClickAway ]);

    useEffect(() => {
        const handler = (event) => {
            const { current: el } = ref;
            el && !el.contains(event.target) && savedCallback.current(event);
        };

        for (const eventName of events) on(document, eventName, handler);

        return () => {
            for (const eventName of events) off(document, eventName, handler);
        };
    }, [ events, ref ]);
};

export default useClickAway;