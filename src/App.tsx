import React, {ReactElement} from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

import './App.css';

import {Card} from './components/card/card';
import {Headers} from './components/headers/headers';
console.log('####: pr', process.env);
const firebaseConfig = {
    apiKey: 'AIzaSyB10XXAw6CcviUHlQlDGC_0LE4TtHYhgSY',
    authDomain: 'holy-js-app.firebaseapp.com',
    databaseURL: 'https://holy-js-app.firebaseio.com',
    storageBucket: 'holy-js-app.appspot.com',
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

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
];

type Props = {}

type State = {
    cards: any,
    data: any
}

class App extends React.PureComponent<Props> {
    state: State = {
        cards: [],
        data: {}
    };

    componentDidMount(): void {
        if (this.state.cards.length === 0) {
            database.ref('/cards/').once('value').then((item) => {
                console.log('####: item', item.val());
                const data = item.val();
                const cards = Object.keys(data).reduce((arr: any, item: string): any => {
                    arr.push({
                        id: item,
                        ...data[item]
                    });
                    return arr;
                }, []);
                console.log('####: re', cards);

                this.setState({
                    cards,
                    data
                });
            });
        }
    }

    public render(): ReactElement {
        const {
            cards
        } = this.state;
        return (
            <div>
                <div className="grids" onClick={() => changeGrids()}>
                    CHANGE GRIDS
                </div>
                <Headers/>
                <section className="body">
                    <div className="layout">
                        <h1 className="heading">
                            Trading ideas
                        </h1>
                        {cards.length > 0 && this.renderCards(cards)}
                    </div>
                </section>
            </div>
        );
    }

    private renderCards(cards: any): ReactElement {

        return (
            <div className="grids-3-colums">
                {
                    cards.map((item: any) => <Card
                        key={item.id}
                        type={item.type}
                        currency={item.currency}
                        currencyPrice={item.currencyPrice}
                        title={item.title}
                        description={item.description}
                        likes={item.likes}
                        onClick={() => this.handleAddLikes(item)}/>)
                }
            </div>
        );
    }

    private handleAddLikes(item: any): void {
        const {data} = this.state;
        const {
            id,
        } = item;

        if (data) {
            const updates = {
                cards: {
                    ...data
                }
            };
            // @ts-ignore
            updates.cards[id] = {
                ...data[id],
                likes: ++data[id].likes
            };

            database.ref().set(updates, (err) => {
                if (!err) {
                    database.ref('/cards/').once('value').then((item) => {
                        const data = item.val();
                        const cards = Object.keys(data).reduce((arr: any, item: string): any => {
                            arr.push({
                                id: item,
                                ...data[item]
                            });
                            return arr;
                        }, []);

                        this.setState({
                            cards,
                            data
                        });
                    });
                }
            });
        }
        // database.ref('/cards/').once('value').then((item) => {
        //     console.log('####: item', item.val());
        //     const data = item.val();
        //     // console.log('####: data', data);
        //     data['1'].likes = ++data['1'].likes;
        //     console.log('####: da', data);
        //     let updates = {
        //         cards: {}
        //     };
        //     // @ts-ignore
        //     updates['cards']['1'] = data['1'];
        //
        // });
    }
}

function changeGrids() {
    const theme = window.localStorage.getItem('grids');
    if (theme && theme === 'true') {
        window.localStorage.setItem('grids', 'false');
        document.body.className = document.body.className.replace('theme-grids-desktop', '');
    } else {
        window.localStorage.setItem('grids', 'true');
        document.body.classList.add('theme-grids-desktop');
    }
}

function changeTheme() {
    const theme = window.localStorage.getItem('theme');
    if (theme && theme === 'light') {
        window.localStorage.setItem('theme', 'dark');
        document.body.className = document.body.className.replace('theme-colors-light', '');
        document.body.classList.add('theme-colors-dark');
    } else {
        window.localStorage.setItem('theme', 'light');
        document.body.className = document.body.className.replace('theme-colors-dark', '');
        document.body.classList.add('theme-colors-light');
    }
}

export default App;
