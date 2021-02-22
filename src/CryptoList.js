import React from 'react';
import './CryptoList.css';

function CryptoList(props) {

    let cryptoList = props.cryptoList;
    console.log(cryptoList);

    let liElements = cryptoList.map((cryptoObj) => {

        return (
            <li key={cryptoObj.currency}>
                <span className="CryptoLabel">Last rate: </span>
                <span className={`CryptoRate ${cryptoObj.cssClass}`}>{cryptoObj.lastRate}{cryptoObj.htmlArray}</span>
                <span className="CurrencyTicker">{cryptoObj.currency}</span>
                <span className="CurrencySymbol">[{cryptoObj.symbol}]</span>
            </li>

        );
    })

    return (
        <div className="CryptoList">
            <ul className="TheList">
                {liElements}
                {/* <li>
                    <span className="CryptoLabel">Last rate: </span>
                    <span className="CryptoRate red">9999.99 &darr;</span>
                    <span className="CurrencyTicker">GBP
                    </span>
                    <span className="CurrencySymbol">[&pound;]</span>
                </li> */}

            </ul>
        </div>
    );
}

export default CryptoList;