import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import HitungDiskon from './HitungDiskon';

/* useRouteMatch adalah hooks untuk mengenali pathname yang sekarang ada / digunakan
*/

export default function Tools() {
    let match = useRouteMatch();
    return (
        <div className="App">
            <header className="App-header">
                Tools
            </header>

            <div className="App">
                <header className="App-header">
                    <h4>Tools</h4>
                    <ul>
                        <li><Link to={`${match.url}/hitungdiskon`}>Hitung Diskon</Link></li>
                    </ul>
                    
                    <Switch>
                        {/* hitung diskon menerapkan metode Lifting State Up */}
                        <Route path={`${match.url}/hitungdiskon`}>
                            <HitungDiskon />
                        </Route>
                    </Switch>
                </header>
            </div>
        </div>
    )
}