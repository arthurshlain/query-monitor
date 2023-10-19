import {
	iPanelProps,
	NonTabular,
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import DB from '../db';
import PHP from '../php';
import Server from '../server';
import WordPress from '../wordpress';

class Environment extends React.Component<iPanelProps<DataTypes['Environment']>, Record<string, unknown>> {

	render() {
		const { data } = this.props;

		return (
			<NonTabular id={ this.props.id }>
				<PHP php={ data.php }/>
				<DB db={ data.db }/>
				<WordPress wordpress={ data.wp }/>
				<Server server={ data.server }/>
			</NonTabular>
		);
	}

}

export default Environment;
