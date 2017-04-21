import { configure } from '@kadira/storybook';

function loadStories() {
    require('../stories');
    require('../stories/StylishSelector');
}

configure(loadStories, module);