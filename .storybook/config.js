import { configure } from '@kadira/storybook';

function loadStories() {
    require('../stories');
    require('../stories/common/FormStory');
}

configure(loadStories, module);
