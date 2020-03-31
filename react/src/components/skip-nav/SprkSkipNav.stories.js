import React from 'react';
import SprkSkipNav from './SprkSkipNav';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Skip Nav',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkSkipNav,
  parameters: {
    jest: ['SprkSkipNav'],
    info: `${markdownDocumentationLinkBuilder('skip-nav')}`,
  },
};

export const defaultStory = () => (
  <SprkSkipNav
  >
  </SprkSkipNav>
);

defaultStory.story = {
  name: 'Default',
};
