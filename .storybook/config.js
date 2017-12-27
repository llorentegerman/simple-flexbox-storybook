import { configure, setAddon } from '@storybook/react';

function loadStories() {
  require('../src/Story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
