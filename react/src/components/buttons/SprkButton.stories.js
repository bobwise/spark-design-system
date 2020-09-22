import React from 'react';
import SprkButton from './SprkButton';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkButton,
  parameters: {
    jest: ['SprkButton'],
    info: `
${markdownDocumentationLinkBuilder('button')}
##### When to Use \`<button>\` vs. \`<a>\`
The Button component can use either a button (\`<button>\`)
or anchor (\`<a>\`) HTML element. It is very important
for accessibility to choose the correct element.

- Button should use an \`<a>\` element if it navigates to a new page.
- Button should use a \`<button>\` element if it is performing
an action, such as: “Submit”, “Add”, “Join”,” etc.
- A Button that does not go to a new page will almost
always use a \`<button>\` element.

##### Accessibility
- If a Button is using an \`<a>\` element, you
must include a \`title=””\` attribute.
- If a Button only includes an Icon with no text,
alternative text must be provided.

##### Guidelines
- If a Button is in a form, but is not intended to
submit the form, the attribute \`type=”button”\` must be used.
- If a Button submits a form, do not use \`<input type="submit">\`.
Instead use \`<button type=”submit”>\`
- If a Button is Disabled, you must add the \`disabled\` attribute
in addition to the \`sprk-is-Disabled\` class so that it doesn’t
receive interaction.
`,
  },
};

export const primary = () => (
  <SprkButton idString="button-1" analyticsString="button-1-analytics">
    Button
  </SprkButton>
);

export const secondary = () => (
  <SprkButton
    variant="secondary"
    idString="button-2"
    analyticsString="button-2-analytics"
  >
    Button
  </SprkButton>
);

export const tertiary = () => (
  <SprkButton
    variant="tertiary"
    idString="button-3"
    analyticsString="button-3-analytics"
  >
    Button
  </SprkButton>
);

export const quaternary = () => (
  <SprkButton
    variant="quaternary"
    idString="button-4"
    analyticsString="button-4-analytics"
  >
    Button
  </SprkButton>
);

export const disabled = () => (
  <SprkButton disabled idString="button-5" analyticsString="button-5-analytics">
    Button
  </SprkButton>
);

export const disabledSecondary = () => (
  <SprkButton
    disabled
    variant="secondary"
    idString="button-6"
    analyticsString="button-6-analytics"
  >
    Button
  </SprkButton>
);

export const disabledTertiary = () => (
  <SprkButton
    disabled
    variant="tertiary"
    idString="button-7"
    analyticsString="button-7-analytics"
  >
    Button
  </SprkButton>
);

export const disabledQuaternary = () => (
  <SprkButton
    disabled
    variant="quaternary"
    idString="button-8"
    analyticsString="button-8-analytics"
  >
    Button
  </SprkButton>
);

export const spinning = () => (
  <SprkButton loading idString="button-9" analyticsString="button-9-analytics">
    Button
  </SprkButton>
);

export const spinningSecondary = () => (
  <SprkButton
    loading
    variant="secondary"
    idString="button-10"
    analyticsString="button-10-analytics"
  >
    Button
  </SprkButton>
);

export const spinningTertiary = () => (
  <SprkButton
    loading
    variant="tertiary"
    idString="button-11"
    analyticsString="button-11-analytics"
  >
    Button
  </SprkButton>
);

export const spinningQuaternary = () => (
  <SprkButton
    loading
    variant="quaternary"
    idString="button-12"
    analyticsString="button-12-analytics"
  >
    Button
  </SprkButton>
);

export const fullWidthAtSmallViewport = () => (
  <SprkButton
    idString="button-13"
    analyticsString="button-13-analytics"
    additionalClasses="sprk-c-Button--full@s"
  >
    Button
  </SprkButton>
);

export const fullWidthAtExtraSmallViewport = () => (
  <SprkButton
    idString="button-14"
    analyticsString="button-14-analytics"
    additionalClasses="sprk-c-Button--full@xs"
  >
    Button
  </SprkButton>
);

export const asALinkElement = () => (
  <SprkButton
    element="a"
    href="#nogo"
    idString="button-15"
    analyticsString="button-15-analytics"
  >
    Button
  </SprkButton>
);
