import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/main';
import HelloPage from './components/hello-page';
import EmojiWallPage from './components/emoji-wall-page';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={HelloPage} />
        <Route path="emoji" component={EmojiWallPage} />
    </Route>
);
