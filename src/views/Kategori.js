import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

/* useParams adalah hooks untuk mengenali parameter kategoriId dari parent nya
*/

export default function Kategori() {
    let {kategoriId} = useParams();

    // LifeCycle method
    useEffect(() => {
        window.scrollTo(0, window.innerHeight);
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                Produk {kategoriId}
            </header>
        </div>
    )
}