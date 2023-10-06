import { ButtonType } from "../../../types/types";

interface ButtonInterface {
    label: string;
    onClick: () => void;
    type: ButtonType;
}
const Button: React.FC<ButtonInterface> = ({ label, onClick, type }) => {
    return (
        <button
            className={type === "primary" ? "primaryButton" : "secondaryButton"}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
