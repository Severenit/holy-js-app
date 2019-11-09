import React, {ReactElement} from 'react';

import './button-like.css';
import {IconLike, IconLikeActive} from '../../icons';

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
                <IconLike className='like'/>
                <IconLikeActive className='like-active'/>
                <span className="count">{count}</span>
            </div>
        )
    }
}
