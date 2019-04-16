import React from 'react';

import { storiesOf } from '@storybook/react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class StatefulTabs extends React.Component {
  state = {
    value: 'A',
  };
  handleChange = (_, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <Tabs
        variant="scrollable"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(d => (
          <Tab key={d} label={`Tab ${d}`} value={d} />
        ))}
      </Tabs>
    );
  }
}

storiesOf('Components|Tabs', module).add('Overridden styles', () => (
  <StatefulTabs />
));
