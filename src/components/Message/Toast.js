import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import classnames from 'classnames';

function Toast(props) {
  const { message, type, show, customClass } = props;
  const toastClassName = classnames('p-toast', type && `p-toast--${type}`, customClass);

  return (
    <CSSTransition 
      timeout={3000}
      in={show} 
      unmountOnExit
      classNames="toast"
    >
      {() => (
        <div className={toastClassName}>
          <p className="p-toast__description">{ message }</p>
          <span className="p-toast__close">x</span>
        </div>
      )}
    </CSSTransition>
  );
}

Toast.propTypes = {
  type: propTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
  message: propTypes.string,
  show: propTypes.bool,
  customClass: propTypes.string,
  close: propTypes.func
};

Toast.defaultProps = {
  message: '',
  show: false,
  customClass: '',
  close: () => undefined
};

export default Toast;
