import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkFooterModule } from './sprk-footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkFooterComponent } from './sprk-footer.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Footer',
  component: SprkFooterComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('footer')}
- The Footer is a navigation landmark for
accessibility tools. The attribute \`role=”contentinfo”\`
must be present.
  `,
    docs: { iframeHeight: 800 },
  },
};

const modules = {
  imports: [
    SprkFooterModule,
    BrowserAnimationsModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-footer
      idString="footer-1"
      [localLinks]="[
        {
          heading: 'Site Links',
          links: [
            {
              text: 'About This',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'About This Other Thing',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'This Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Learn More',
          links: [
            {
              text: 'About This Other Thing',
              href: '#nogo'
            },
            {
              text: 'About This',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Support',
          links: [
            {
              text: 'Share Your Screen',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'Opt Out',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Disclosures and Other Things',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'We Want Your Feedback',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        }
      ]"

      globalHeading="Our Sister Companies"
      [globalLinks]="[
        {
          text: 'Buy a home, refinance, or manage your mortgage online with America&#8217;s largest mortgage lender',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/rocket-by-ql-white.svg',
          analyticsString: 'link-1',
          imgAlt: 'Rocket Mortgage by Quicken Loans Logo'
        },
        {
          text: 'Get a personal loan to consolidate debt, renovate your home and more',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/rocket-loans-white.svg',
          imgAlt: 'Rocket Loans Logo',
          analyticsString: 'link-2'
        },
        {
          text: 'Get a real estate agent handpicked for you and search the latest home listings',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/rocket-homes-white.svg',
          imgAlt: 'Rocket Homes Logo',
          analyticsString: 'link-3'
        },
        {
          text: 'Access tools and articles that can help you reach your financial goals',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/rocket-hq-white.svg',
          analyticsString: 'link-4',
          imgAlt: 'Rocket HQ Logo'
        }
      ]"

      [socialLinks]="[
        {
          href: '#nogo',
          icon: 'facebook',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'social-link-1',
          iconScreenReaderText: 'facebook'
        },
        {
          href: '#nogo',
          icon: 'instagram',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'social-link-2',
          iconScreenReaderText: 'instagram'
        },
        {
          href: '#nogo',
          icon: 'twitter',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'social-link-3',
          iconScreenReaderText: 'twitter'
        },
        {
          href: '#nogo',
          icon: 'youtube',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'social-link-4',
          iconScreenReaderText: 'youtube'
        }
      ]"

      [badgeLinks]="[
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'link-1',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'link-2',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--filled-current-color',
          analyticsString: 'link-3',
          iconScreenReaderText: 'townhouse'
        }
      ]"

      awardsHeading="Awards"
      [awards]="[
        {
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/spark-logo-mark.svg',
          imgAlt: 'placeholder',
          analyticsString: 'awards-link-1'
        },
        {
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.app/spark-logo-mark.svg',
          imgAlt: 'placeholder',
          analyticsString: 'awards-link-2'
        }
      ]"

      connectHeading="Connect With Us"
      [disclaimerText]="[
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          text:
            'Incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam.'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.'
        }
      ]"
      [disclaimerToggle]="[
        {
          title: 'My Award Disclaimer',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aliquam in laoreet ante.',
          analyticsString: 'disclaimer'
        }
      ]"
    >
    </sprk-footer>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-footer.component'],
  }
};
