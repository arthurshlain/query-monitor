import {
	iPanelProps,
	Tabular,
	TimeCell,
	TotalTime,
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import { __ } from '@wordpress/i18n';

export default class DBCallers extends React.Component<iPanelProps<DataTypes['DB_Callers']>, Record<string, unknown>> {

	render() {
		const { data } = this.props;

		if ( ! data.times || ! data.times.length ) {
			return null;
		}

		return (
			<Tabular id={ this.props.id }>
				<thead>
					<tr>
						<th scope="col">
							{ __( 'Caller', 'query-monitor' ) }
						</th>
						{ Object.keys( data.types ).map( key => (
							<th key={ key } className="qm-num" scope="col">
								{ key }
							</th>
						) ) }
						<th className="qm-num" scope="col">
							{ __( 'Time', 'query-monitor' ) }
						</th>
					</tr>
				</thead>
				<tbody>
					{ Object.values( data.times ).map( caller => (
						<tr key={ caller.caller }>
							<td>
								{ caller.caller }
							</td>
							{ Object.keys( data.types ).map( key => (
								<td key={ key } className="qm-num">
									{ caller.types[key] || '' }
								</td>
							) ) }
							<TimeCell value={ caller.ltime }/>
						</tr>
					) ) }
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						{ Object.keys( data.types ).map( key => (
							<td key={ key } className="qm-num">
								{ data.types[key] }
							</td>
						) ) }
						<TotalTime rows={ Object.values( data.times ) }/>
					</tr>
				</tfoot>
			</Tabular>
		);
	}

}
