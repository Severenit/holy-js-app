import React, {ReactElement} from 'react';

import './menu.css';
import {IconBurgerMenu} from "../../icons";

type Props = {
    items: Array<Item>
}

type Item = {
    id: number,
    name: string,
    icons?: ReactElement | null
}

export class Menu extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            items
        } = this.props;

        return (
            <ul className="style-scope menu">
                <li className="burger-menu">
                    <IconBurgerMenu/>
                </li>
                {
                    items.map(item => (
                        <li key={item.id} className="style-scope">
                            <a href="/" className="style-scope">
                                {item.icons}
                                {item.icons ? ' ' : null}
                                {item.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
