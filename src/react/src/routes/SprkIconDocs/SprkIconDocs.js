/* global window document */
import React from 'react';
import { SprkIcon } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkIconDocs extends React.Component {
  constructor() {
    super();
    this.state = {
      symbols: [],
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      const symbols = document.querySelectorAll('symbol');
      const ids = [];
      symbols.forEach((item) => {
        ids.push(item.getAttribute('id'));
      });
      this.setState({
        symbols: ids,
      });
    });
  }

  render() {
    const { symbols } = this.state;
    return (
      <CentralColumnLayout>
        { symbols.map(symbol => (
          <ExampleContainer heading={symbol} key={symbol}>
            <SprkIcon iconType={symbol} />
            <SprkIcon iconType={symbol} additionalClasses="sprk-c-Icon--l" />
          </ExampleContainer>
        ))}
      </CentralColumnLayout>
    );
  }
}

export default SprkIconDocs;
