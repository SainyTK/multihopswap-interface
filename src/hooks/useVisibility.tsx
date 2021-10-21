import { useState } from "react";

const useVisibility = (initialState = false) => {

    const [visible, setVisible] = useState(initialState);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const toggle = () => setVisible(!visible);

    return {
        visible,
        show,
        hide,
        toggle
    }
}

export default useVisibility;