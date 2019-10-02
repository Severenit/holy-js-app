import React, {ReactElement} from 'react';

import './menu.css';

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
            <ul className="menu">
                {
                    items.map(item => (
                        <li key={item.id}>
                            <a href="#">
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