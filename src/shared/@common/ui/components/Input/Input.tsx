    import { useState } from "react";
    import styles from "./Input.module.css";

    interface InputProps {
    field: string;
    fieldTitle: string;
    valueMaxLength?: number;
    }

    const Input = ({ field, fieldTitle, valueMaxLength }: InputProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState("");
    const focusCond = isFocus || value ? styles.focused : "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
    };

    return (
        <div
        className={`${styles.container} ${focusCond}`}
        onClick={() => {}}
        tabIndex={0}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        >
        <div className={`${styles.upper} ${focusCond}`}>
            <span className={`${styles.title} ${focusCond}`}>{fieldTitle}</span>
            <span
            className={`${styles.count} ${valueMaxLength ? focusCond : ""}`}
            >{`${value.length} / ${valueMaxLength}`}</span>
        </div>
        <div className={`${styles.lower} ${focusCond}`}>
            <input
            type="text"
            className={`${styles.input} ${focusCond}`}
            onChange={(e) => handleChange(e)}
            />
        </div>
        </div>
    );
    };

    export default Input;
