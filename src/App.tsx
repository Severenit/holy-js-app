import React from 'react';
import './App.css';

import {Card} from './components/card/card';
import {Headers} from './components/headers/headers';

const CARD_DATA = [
    {
        id: 1,
        title: 'To the Moon',
        type: 'short',
        currency: 'ETHUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 2,
        title: 'End of Ethereum',
        type: 'long',
        currency: 'BTCUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 3,
        title: 'To the Moon',
        type: 'long',
        currency: 'BTCUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 4,
        title: 'End of Ethereum',
        type: 'short',
        currency: 'ETHUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 5,
        title: 'To the Moon',
        type: 'short',
        currency: 'ETHUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 6,
        title: 'End of Ethereum',
        type: 'long',
        currency: 'BTCUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 7,
        title: 'To the Moon',
        type: 'short',
        currency: 'ETHUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 8,
        title: 'End of Ethereum',
        type: 'long',
        currency: 'BTCUSD,',
        currencyPrice: 60,
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    }
]

const App: React.FC = () => {
    return (
        <div>
            <div className="grids" onClick={() => changeGrids()}>
                CHANGE GRIDS
            </div>
            <div className="theme" onClick={() => changeTheme()}>
                CHANGE THEME
            </div>
            <Headers/>
            <section className="body">
                <div className="layout">
                    <h1 className="heading">
                        Trading ideas
                    </h1>
                    <div className="grids-3-colums">
                        {
                            CARD_DATA.map(item => <Card key={item.id} type={item.type} currency={item.currency}
                                                        currencyPrice={item.currencyPrice} title={item.title}
                                                        description={item.description}/>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

function changeGrids() {
    const theme = window.localStorage.getItem('grids');
    if (theme && theme === 'true') {
        window.localStorage.setItem('grids', 'false');
        document.body.className = document.body.className.replace("theme-grids-desktop","");
    } else {
        window.localStorage.setItem('grids', 'true');
        document.body.classList.add("theme-grids-desktop");
    }
}

function changeTheme() {
    const theme = window.localStorage.getItem('theme');
    if (theme && theme === 'light') {
        window.localStorage.setItem('theme', 'dark');
        document.body.className = document.body.className.replace("theme-colors-light","");
        document.body.classList.add("theme-colors-dark");
    } else {
        window.localStorage.setItem('theme', 'light');
        document.body.className = document.body.className.replace("theme-colors-dark","");
        document.body.classList.add("theme-colors-light");
    }
}

export default App;
