import React from 'react';

import { storiesOf } from '@storybook/react';

import Icon from '../src/components/Icon/Icon';
import listIcon from '../src/components/Icon/selection.json';
import { withInfo } from '@storybook/addon-info';

const iconKeys = Object.keys(listIcon);

storiesOf('Icons', module)
  .addDecorator(withInfo)
  .add('List Icons', () => (
    <div style={styles.wrapper}>
      {
        iconKeys.map((iconKey) => (
          <div style={styles.iconItem} key={iconKey}>
            <Icon name={iconKey} width="30px" height="30px" />
            <p style={styles.name} >{ iconKey }</p>
          </div>
        ))
      }
    </div>
  ), 
  { 
    info: {inline: true, header: false, propTables: [Icon]} 
  });

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  iconItem: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    height: 100,
    width: 100,
    display: 'inline-flex',
    flexDirection: 'column',
    justityContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 12,
    margin: 0
  }
};
