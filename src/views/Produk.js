import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import Kategori from './Kategori';

/* useRouteMatch adalah hooks untuk mengenali pathname yang sekarang ada / digunakan
*/

export default function Produk() {
    let match = useRouteMatch();
    return (
        <div className="App">
            <header className="App-header">
                Produk
            </header>

            <div className="App">
                <header className="App-header">
                    <h4>Kategori</h4>
                    <ul>
                        <li><Link to={`${match.url}/terbaru`}>Terbaru</Link></li>
                        <li><Link to={`${match.url}/terlaris`}>Terlaris</Link></li>
                        <li><Link to={`${match.url}/promo`}>Promo</Link></li>
                    </ul>
                </header>

                <Switch>
                    <Route path={`${match.url}/:kategoriId`}>
                        <Kategori />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}