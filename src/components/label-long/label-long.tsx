import React, {ReactElement} from 'react';

import './label-long.css';
import {IconLong} from '../../icons';

type Props = {
}

export class LabelLong extends React.PureComponent<Props> {
    public render(): ReactElement {
        return (
            <div className='label-long'>
                <IconLong className="icon-label-long"/>
                {' '}
                long
            </div>
        )
    }
}