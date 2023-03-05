import { useState } from "react";

const useFlag = initial => {
    const [ state, setState ] = useState(initial);

    const open = () => setState(prev => true);
    const close = () => setState(prev => false);

    return [ state, open, close ];
}

export default useFlag;