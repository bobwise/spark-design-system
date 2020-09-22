import React from 'react';
import SprkLink from './SprkLink';
import SprkIcon from '../../components/icons/SprkIcon';
import SprkBox from '../../objects/box/SprkBox';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkLink,
  parameters: {
    jest: ['SprkLink'],
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links.
Images that are links should not use Spark classes.
`,
  },
};

export const defaultStory = () => (
  <SprkLink href="#nogo" idString="link-1" analyticsString="link-default">
    Default Link
  </SprkLink>
);

defaultStory.story = {
  name: 'Default',
};

export const simple = () => (
  <SprkLink
    variant="simple"
    analyticsString="link-simple"
    idString="link-2"
    href="#nogo"
  >
    Simple Link
  </SprkLink>
);

export const light = () => (
  <SprkLink
    variant="light"
    analyticsString="link-light"
    idString="link-3"
    href="#nogo"
  >
    Light Link
  </SprkLink>
);

light.story = {
  decorators: [
    (storyFn) => (
      <SprkBox
        spacing="small"
        additionalClasses="sprk-u-BackgroundColor--black"
      >
        {storyFn()}
      </SprkBox>
    ),
  ],
};

export const iconWithTextLink = () => (
  <SprkLink
    analyticsString="link-icon"
    href="#nogo"
    variant="has-icon"
    idString="link-3"
  >
    <SprkIcon
      additionalClasses="
            sprk-c-Icon--xl
            sprk-u-mrs
            sprk-c-Icon--filled-current-color"
      iconName="arrow-left"
    />
    Back
  </SprkLink>
);

iconWithTextLink.story = {
  name: 'Icon With Text Link',
};

export const disabled = () => (
  <SprkLink
    analyticsString="link-disabled"
    variant="disabled"
    idString="link-5"
    href="#nogo"
  >
    Disabled Link
  </SprkLink>
);

export const disabledSimple = () => (
  <SprkLink
    analyticsString="link-disabled"
    variant="disabled"
    idString="link-6"
    href="#nogo"
    additionalClasses="sprk-b-Link--simple"
  >
    Disabled Link
  </SprkLink>
);

disabledSimple.story = {
  name: 'Disabled - Simple',
};

export const disabledLight = () => (
  <SprkLink
    variant="disabled"
    analyticsString="link-light"
    idString="link-3"
    href="#nogo"
    additionalClasses="sprk-b-Link--light"
  >
    Disabled Link
  </SprkLink>
);

disabledLight.story = {
  name: 'Disabled - Light',
  decorators: [
    (storyFn) => (
      <SprkBox
        spacing="small"
        additionalClasses="sprk-u-BackgroundColor--black"
      >
        {storyFn()}
      </SprkBox>
    ),
  ],
};

export const disabledIconWithTextLink = () => (
  <SprkLink
    analyticsString="link-icon"
    href="#nogo"
    variant="disabled"
    idString="link-7"
    additionalClasses="sprk-b-Link--has-icon"
  >
    <SprkIcon
      additionalClasses="
              sprk-c-Icon--xl
              sprk-u-mrs
              sprk-c-Icon--filled-current-color"
      iconName="arrow-left"
    />
    Back
  </SprkLink>
);

disabledIconWithTextLink.story = {
  name: 'Disabled - Icon With Text Link',
};
