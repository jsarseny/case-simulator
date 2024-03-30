import React, {
    useMemo,
    useState,
    useCallback
} from "react";

import { debounce } from "../../utils/schedulers.js";

import "./Ripple.css";

const Ripple= () => {
    const [ ripples, setRipples ] = useState([]);

    const cleanUpDebounced = useMemo(() => {
        return debounce(() => {
            return setRipples([]);
        }, 1e3, false);
    }, []);
  
    const handleMouseDown = useCallback((e) => {
        const container = e.currentTarget;
        const position = container.getBoundingClientRect();
        const rippleSize = container.offsetWidth / 2;
  
        setRipples([
            ...ripples, {
                x: e.clientX - position.x - (rippleSize / 2),
                y: e.clientY - position.y - (rippleSize / 2),
                size: rippleSize,
            },
        ]);

        return requestAnimationFrame(cleanUpDebounced);
    }, [ ripples, cleanUpDebounced ]);
  
    return (
        <div className="Ripple" onMouseDown={handleMouseDown}>
            {ripples.map(({ x, y, size }, index) => {
                const styles = {
                    left: x,
                    top: y,
                    width: size,
                    height: size
                }
                return (<span style={styles} key={index} />);
            })}
        </div>
    );
}

export default Ripple;