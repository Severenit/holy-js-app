import React, {ReactElement} from 'react';

import './card.css';
import {LabelLong} from '../label-long/label-long';
import {LabelShort} from '../label-short/label-short';
import {CardUser} from '../card-user/card-user';
import {ButtonLike} from '../button-like/button-like';
import {IconBookmark, IconShare} from '../../icons';
import {ButtonComment} from '../button-comment/button-comment';

import screen from './screen.png'

type Props = {
    title: string,
    type: string,
    currency: string,
    currencyPrice: number,
    description: string
}

export class Card extends React.PureComponent<Props> {

    public render(): ReactElement {
        const {
            title,
            type,
            currency,
            currencyPrice,
            description
        } = this.props;
        return (
            <div className="card">
                <div className="grids-card">
                    <h2 className="title">
                        {title}
                    </h2>
                    <div className="price-info">
                        {type === 'long' ? <LabelLong/> : <LabelShort/>}
                        <span className='currency'>
                            {currency}
                        </span>
                        <span className='currencyPrice'>
                            {currencyPrice}
                        </span>
                    </div>
                    <div className="picture">
                        <img src={screen} />
                    </div>
                    <div className="user-info">
                        <CardUser name="User"/>
                        <div className="viewrs-info">
                            5207 views · Sep 11
                        </div>
                    </div>
                    <div className="paragraph">
                        {description}
                    </div>
                    <div className="footer">
                        <ButtonLike count="999"/>
                        <span className="footer-second-column">
                            <ButtonComment count="129"/>
                            <IconShare/>
                            <IconBookmark/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}