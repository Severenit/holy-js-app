import React from 'react';
import Type from 'prop-types';

import './icon.css'

/**
 * Базовый компонент иконки. Содержит в себе только неодходимые для компонентов иконки.
 */
class Icon extends React.Component {
	static propTypes = {
		/** Дополнительный класс */
		className: Type.string,
		/** Идентификатор компонента в DOM */
		id: Type.string,
		/** Название иконки */
		name: Type.string,
		/** Размер иконки */
		size: Type.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'])
	};

	static defaultProps = {
		size: 'm'
	};

	render(cn) {
		const {
			name,
			size
		} = this.props;

		return (
			<span
				className={ `icon ${name} icon_size_${size}` }
				id={ this.props.id }
			/>
		);
	}
}

export default Icon;
