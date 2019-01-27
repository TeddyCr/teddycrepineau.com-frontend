import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import './index.css';
import BlogFeed from './BlogFeed';
import BlogPost from './BlogPost';
import configureStore from './store'
import 'semantic-ui-css/semantic.min.css'

import { Route, Switch } from 'react-router'
import HomePage from './HomePage';

// import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render((
    <Provider store={store} >
        <ConnectedRouter history={history} >
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path="/blog" exact component={BlogFeed} />
                <Route path="/blog/:id/:slug" exact component={BlogPost} />
            </Switch>
        </ConnectedRouter>
    </Provider>),
    document.getElementById('root'));