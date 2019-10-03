import React, {ReactElement} from 'react';

import './button-comment.css';
import {IconComment} from '../../icons';

type Props = {
    count: string
}

export class ButtonComment extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            count
        } = this.props;

        return (
            <div className='button-comment'>
                <IconComment/>
                <span className="count">{count}</span>
            </div>
        )
    }
}