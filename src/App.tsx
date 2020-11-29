import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PATH from './constants/path';

import Footer from './components/Footer';

import * as pages from './pages';

import './styles/main.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <pages.Loading />
            <div className="application-container">
                <BrowserRouter>
                    <Switch>
                        <Route path={PATH.join} component={pages.Join} />
                        <Route path={PATH.list} component={pages.List} />
                        <Route path={PATH.login} component={pages.Login} />
                        <Route path={PATH.main} component={pages.Main} />
                        <Route path={PATH.mypage} component={pages.MyPage} />
                        <Route path={PATH.report} component={pages.Report} />
                        <Route path={PATH.store} component={pages.Store} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
