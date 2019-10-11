import React, {ReactElement} from 'react';

import s from './headers.module.css';
import {ReactComponent as LogoBig} from './assets/logo-big.svg';
import {ReactComponent as LogoSmall} from './assets/logo-small.svg';
import {Button} from '../button/button';
import {Menu} from '../menu/menu';
import {IconChart, IconSize, IconTheme} from '../../icons';

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
    public componentDidMount(): void {
        const theme = window.localStorage.getItem('theme');
        if (theme && theme === 'dark') {
            document.body.className = document.body.className.replace('theme-colors-light', '');
            document.body.classList.add('theme-colors-dark');
        } else {
            window.localStorage.setItem('theme', 'light');
            document.body.className = document.body.className.replace('theme-colors-dark', '');
            document.body.classList.add('theme-colors-light');
        }

        const grids = window.localStorage.getItem('grids');
        if (grids && grids === 'false') {
            document.body.className = document.body.className.replace('theme-grids-desktop', '');
        } else {
            window.localStorage.setItem('grids', 'false');
        }
    }

    public render(): ReactElement {
        return (
            <header className={s.header}>
                <div className={s.headerTop}>
                    <div className="layout">
                        <div className={s.headerGrids}>
                            <div className={s.logo}>
                                <span className={s.logoBig}>
                                    <LogoBig/>
                                </span>
                                <span className={s.logoSmall}>
                                    <LogoSmall/>
                                </span>
                            </div>
                            <div className={s.searchInputBlock}>
                                <input type="text" placeholder="Search"/>
                            </div>
                            <div className={s.button}>
                                <a href="/" className={s.link}>
                                    Sign in
                                </a>
                                <Button>Join for free</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.headerBottom}>
                    <div className="layout">
                        <span className={s.menuLayout}>
                            <Menu items={MENU_DATA} />
                            <span>
                                <span className={s.changeTheme} onClick={() => this.handleChangeTheme()}>
                                    <IconTheme/>
                                </span>
                                <span className={s.changeGrids}  onClick={() => this.handleChangeGrids()}>
                                    <IconSize/>
                                </span>
                            </span>

                        </span>
                    </div>
                </div>
            </header>
        )
    }

    private handleChangeTheme(): void {
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

    private handleChangeGrids(): void {
        const grids = window.localStorage.getItem('grids');
        if (grids && grids === 'true') {
            window.localStorage.setItem('grids', 'false');
            document.body.className = document.body.className.replace('theme-grids-desktop', '');
        } else {
            window.localStorage.setItem('grids', 'true');
            document.body.classList.add('theme-grids-desktop');
        }
    }
}