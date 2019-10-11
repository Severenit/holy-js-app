import React, {ReactElement} from 'react';

import './button-like.css';
import {IconLike} from '../../icons';

type Props = {
    count: number
    onClick: () => void
}

export class ButtonLike extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            count,
            onClick
        } = this.props;

        return (
            <div className='button-like' onClick={onClick}>
                <IconLike/>
                <span className="count">{count}</span>
            </div>
        )
    }
}