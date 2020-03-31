import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkSkipNav = (props) => {
  const {
    additionalClasses,
    idString,
    children,
    ...other
  } = props;

  return (
    <div
      className={classnames(
        'sprk-c-SkipNav',
        additionalClasses,
      )}
      data-id={idString}
      {...other}
    >
        <a className='sprk-c-Button'>Skip to Main Content 2</a>
    </div>
  );
};

SprkSkipNav.propTypes = {
  /**
   * 
  */
  children: PropTypes.node,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
};

SprkSkipNav.defaultProps = {
};

export default SprkSkipNav;
