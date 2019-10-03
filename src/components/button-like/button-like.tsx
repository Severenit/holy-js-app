import React, {ReactElement} from 'react';

import './button-like.css';
import {IconLike} from '../../icons';

type Props = {
    count: string
}

export class ButtonLike extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            count
        } = this.props;

        return (
            <div className='button-like'>
                <IconLike/>
                <span className="count">{count}</span>
            </div>
        )
    }
}