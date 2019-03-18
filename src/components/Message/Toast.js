import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';

import Icon from '../Icon/Icon';

function Toast(props) {
  const { message, type, show, customClass, close, duration, onClose } = props;
  const toastClassName = classnames('p-toast', type && `p-toast--${type}`, customClass);
  let timer;

  const clearTimer = () => {
    clearTimeout(timer);
  };

  const setTimer = () => {
    if(duration && close) {
      timer = setTimeout(close, duration);
    }
  };

  const handleClose = () => {
    close();
  };

  useEffect(() => {
    setTimer();
    return clearTimer;
  }, []);

  return (
    <CSSTransition 
      timeout={300}
      in={show} 
      unmountOnExit
      classNames="toast"
      onEntered={setTimer}
      onExit={clearTimer}
      onExited={onClose}
    >
      {() => (
        <div className={toastClassName} onMouseEnter={clearTimer} onMouseLeave={setTimer} >
          <p className="p-toast__description">
            {type &&
              <Icon name={typeIcons[type]} className={`p-toast__icon p-toast__icon--${type}`}/>
            }
            { message }
          </p>
          {close &&
            <span className="p-toast__close" onClick={handleClose}>
              <Icon name="CLOSE" />
            </span>
          }
        </div>
      )}
    </CSSTransition>
  );
}

const typeIcons = {
  'success': 'CHECKED',
  'warning': 'INFO',
  'info': 'INFO',
  'danger': 'CANCEL'
};

Toast.propTypes = {
  type: propTypes.oneOf(['success', 'info', 'warning', 'danger']),
  message: propTypes.string,
  show: propTypes.bool,
  customClass: propTypes.string,
  close: propTypes.func,
  duration: function(props, propName, componentName) {
    if(!props[propName]) return;
    const typeOfProp = typeof props[propName];
    if(typeOfProp !== 'number') {
      return new Error(
        `Failed prop type: Invalid prop duration of type ${typeOfProp} supplied to ${componentName}, expected number.`);
    }

    if(!props.close) {
      // eslint-disable-next-line
      console.warn(`Please supplie close method with duration prop to ${componentName}`);
    }
  },
  onClose: propTypes.func
};

Toast.defaultProps = {
  type: 'info',
  message: '',
  show: false,
  customClass: '',
  onClose: noop
};

export default Toast;
