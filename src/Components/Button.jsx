/* eslint-disable react/prop-types */
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline','btn--outline2', 'btn--third', 'btn--test'];

const SIZES = ['btn--medium','btn--medium2', 'btn--large', 'btn--large2', 'btn--large3'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};

export default Button;