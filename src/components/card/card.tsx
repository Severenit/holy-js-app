import React, {ReactElement} from 'react';

import './card.css';

type Props = {
    title: string,
    description: string
}

export class Card extends React.PureComponent<Props> {

    public render(): ReactElement {
        const {
            title,
            description
        } = this.props;
        return (
            <div className="card">
                <div className="grids-card">
                    <h2 className="title">
                        {title}
                    </h2>

                    <div className="picture">

                    </div>
                    <div className="paragraph">
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}