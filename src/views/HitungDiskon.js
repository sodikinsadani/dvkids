import React from 'react';

/* hitung diskon menerapkan metode Lifting State Up
*/

class InputDiskon extends React.Component {
    _handleChange = (e) => {
        this.props.onChangeHarga(e.target.value)
    }

    render() {
        const {hargaLabel, harga} = this.props;

        return (
            <>
                <label>
                    {hargaLabel === 'dasar' ? 'Harga Dasar : ' : 'Harga Setelah Diskon 40 % : '}
                    <input type="number" value={harga} onChange={this._handleChange} />
                </label>
                <br />
            </>
        )
    }
}

class HitungDiskon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hargadasar: 0,
            hargadiskon: 0
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert(`harga dasar ${this.state.hargadasar}, setelah diskon 40 % menjadi ${this.state.hargadiskon}`)
    }
    
    onChangeHargaDasar = (hargadasar) => {
        let hargadiskon = (parseFloat(hargadasar) * 0.6).toString();

        this.setState({hargadasar, hargadiskon})
    }

    onChangeHargaDiskon = (hargadiskon) => {
        let hargadasar = (parseFloat(hargadiskon) / 0.6).toString();

        this.setState({hargadasar, hargadiskon})
    }

    render() {
        const {hargadasar, hargadiskon} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <InputDiskon hargaLabel="dasar" harga={hargadasar} onChangeHarga={this.onChangeHargaDasar}/>
                <InputDiskon hargaLabel="diskon" harga={hargadiskon} onChangeHarga={this.onChangeHargaDiskon}/>
                <button type="submit">Convert</button>
            </form>
        )
    }
}

export default  HitungDiskon;