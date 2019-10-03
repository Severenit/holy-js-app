import React, {ReactElement} from 'react';

import './label-short.css';
import {IconShort} from '../../icons';

type Props = {
}

export class LabelShort extends React.PureComponent<Props> {
    public render(): ReactElement {

        return (
            <div className='label-short'>
                <IconShort className="icon-label-short"/>
                {' '}
                short
            </div>
        )
    }
}