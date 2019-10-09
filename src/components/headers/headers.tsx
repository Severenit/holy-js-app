import React, {ReactElement} from 'react';

import './headers.css';
import {ReactComponent as Logo} from '../../assets/Logo.svg';
import {Button} from '../button/button';
import {Menu} from '../menu/menu';
import {IconChart} from '../../icons';

const MENU_DATA = [
    {
        id: 1,
        name: 'Ideas'
    },
    {
        id: 2,
        name: 'Markets'
    },
    {
        id: 3,
        name: 'Scripts'
    },
    {
        id: 4,
        name: 'Screener'
    },
    {
        id: 5,
        name: 'Shows'
    },
    {
        id: 6,
        name: 'Chart',
        icons: <IconChart/>
    },
    {
        id: 7,
        name: 'More'
    }
]

type Props = {}

export class Headers extends React.PureComponent<Props> {
    public render(): ReactElement {
        return (
            <header>
                <div className='header-top'>
                    <div className="layout">
                        <div className="header-grids">
                            <div className="logo">
                                <Logo/>
                            </div>
                            <div className="search-input-block">
                                <input type="text" placeholder="Search"/>
                            </div>
                            <div className="button">
                                <a href="/" className="link">
                                    Sign in
                                </a>
                                <Button>Join for free</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className="layout">
                        <Menu items={MENU_DATA} />
                    </div>
                </div>
            </header>
        )
    }
}