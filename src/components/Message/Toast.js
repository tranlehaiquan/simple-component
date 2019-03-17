import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon';

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
          <p className="p-toast__description">
            {type &&
              <Icon name={typeIcons[type]} className={`p-toast__icon p-toast__icon--${type}`}/>
            }
            { message }
          </p>
          <span className="p-toast__close">
            <Icon name="CLOSE" />
          </span>
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
  close: propTypes.func
};

Toast.defaultProps = {
  message: '',
  show: false,
  customClass: '',
  close: () => undefined
};

export default Toast;
