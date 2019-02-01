import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsPanel extends Component {
  constructor(props) {
    super(props);
    this.tabPanelRef = createRef();
  }

  componentDidUpdate () {
    /*
    * If the user hits the tab key inside the parent Tabs component
    * isFocusedPanel state will be updated with the btn id of the
    * panel that should be focused. If no panel should be focused
    * isFocusedPanel will return undefined.
    */
     if (this.props.isFocusedPanel === this.props.tabBtnId) {
      this.tabPanelRef.current.focus();
    } else {
      console.log(this.props.isFocusedPanel, 'focused panel');
    }
  }

  render() {
    const {
      children,
      activeTabBtnId,
      tabBtnId,
      tabAriaId,
      additionalClasses
    } = this.props;
    const classNames = classnames(
      'sprk-c-Tabs_content',
      {
        'sprk-u-Display--none': activeTabBtnId !== tabBtnId,
      },
      additionalClasses
    );
    return (
      <div
        className={classNames}
        role="tabpanel"
        tabIndex="0"
        ref={this.tabPanelRef}
        id={`target-${tabAriaId + 1}`}
        aria-labelledby={tabBtnId}>
        {children}
      </div>
    );
  }
}

SprkTabsPanel.propTypes = {
  // The tab panel content
  children: PropTypes.node,
  /*
  * The currently active tab that is
  * passed in from SprkTabs (parent component)
  */
  activeTabBtnId: PropTypes.string,
  // A unique ID for each tab button
  tabBtnId: PropTypes.string.isRequired,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocusedPanel: PropTypes.string,
  // The ID to use for each tab panel so it corresponds to the button
  tabAriaId: PropTypes.number,
  // A string of additional classes to be applied to the tab panel
  additionalClasses: PropTypes.string
}

export default SprkTabsPanel;
