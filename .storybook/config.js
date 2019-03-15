import {configure} from "@storybook/react";
import '../src/index.css';

function loadStories() {
    require('../src/stories/index.tsx');
}

configure(loadStories, module);