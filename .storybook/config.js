import {configure, setAddon} from "@storybook/react";
import JSXAddon from 'storybook-addon-jsx';

import '../src/index.css';

setAddon(JSXAddon);
function loadStories() {
    require('../src/stories/index.js');
}

configure(loadStories, module);