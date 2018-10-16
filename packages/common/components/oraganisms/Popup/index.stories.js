import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

storiesOf('Input', module)
  .add('with text', () => (
    <Input>sample-text</Input>
  ));