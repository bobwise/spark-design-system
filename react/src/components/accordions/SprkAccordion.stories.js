import React from 'react';
import SprkAccordion from './SprkAccordion';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Accordion',
  component: SprkAccordion,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    subcomponents: { SprkAccordionItem },
    info: `
${markdownDocumentationLinkBuilder('accordion')}
- If your instance only has one item,
consider using
the [Toggle Component](/docs/components-toggle--default-story) instead.
`,
  },
};

export const defaultStory = () => (
  <SprkAccordion>
    <SprkAccordionItem
      heading="This is an accordion heading"
      contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
      idString="accordion-item-1"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>

    <SprkAccordionItem
      heading="This is an accordion heading"
      idString="accordion-item-2"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>

    <SprkAccordionItem
      heading="This is an accordion heading"
      idString="accordion-item-3"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>
  </SprkAccordion>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkAccordion', 'SprkAccordionItem'],
  },
};
