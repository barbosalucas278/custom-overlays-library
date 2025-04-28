import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ children, variant, disabled, onClick, ...props }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  onClick: () => {},
};

export default Button;