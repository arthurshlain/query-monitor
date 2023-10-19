export { Caller } from './src/caller';
export { Frame } from './src/frame';
export { Icon } from './src/icon';
export { NonTabular } from './src/non-tabular';
export { NotEnabled } from './src/not-enabled';
export { Notice } from './src/notice';
export { PanelFooter } from './src/panel-footer';
export { QMComponent } from './src/component';
export { Tabular } from './src/tabular';
export { Time } from './src/time';
export { TotalTime } from './src/totaltime';
export { Toggler } from './src/toggler';
export { Warning } from './src/warning';
export * as Utils from './src/utils';
export * as Data from './data-types';

export interface iPanelProps<T> {
	data: T;
	id: string;
	enabled: boolean;
}

export interface iQM_i18n {
	number_format: (
		number: number,
		decimals?: number,
	) => string;
}
