import React, {ReactElement} from 'react';

import './button.css';

type Props = {
    children: string
}

export class Button extends React.PureComponent<Props> {
    public render(): ReactElement {
        const {
            children
        } = this.props;

        return (
            <button className='btn'>
                <span>{children}</span>
            </button>
        )
    }
}