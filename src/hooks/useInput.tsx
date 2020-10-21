import { useState } from "react";

export const useInput = <T extends object>(initialState: T) => {
    const [state, setState] = useState(initialState);

    const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
        setState({
        ...state,
        [target.name]: target.value,
        });
    };

    const reset = () => {
        setState(initialState);
    };

    return [state, handleInputChange, reset, setState] as const;
};
