import React, {ReactElement} from 'react';

import './card-user.css';

type Props = {
    name: string
}

export class CardUser extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            name
        } = this.props;

        return (
            <div className='card-user'>
                <div className='avatar'></div>
                <span>{name}</span>
            </div>
        )
    }
}