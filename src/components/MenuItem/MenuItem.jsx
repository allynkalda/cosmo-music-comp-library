import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './menuItem.css';

export const MenuItem = ({ id, href, label, listClass, linkClass, onClick, onMouseEnter }) => {
  return (
    <li
        id={id}
        className={classNames(styles.menuItem, listClass)}
        key={id}
  >
    <a
      className={linkClass}
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {label}
    </a>
  </li>
  );
};

MenuItem.propTypes = {
  id: PropTypes.string | PropTypes.number,
  href: PropTypes.string,
  listClass: PropTypes.object,
  linkClass: PropTypes.object,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

MenuItem.defaultProps = {
  onClick: undefined,
  onMouseEnter: undefined
};