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
            <ul className="style-scope menu">
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