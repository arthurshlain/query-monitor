/* eslint-disable */

/**
 * This file is generated by the build-schemas script.
 * Do not edit it manually.
 */

import {
	WP_Screen,
	WP_Error,
} from 'wp-types';

export interface DataTypes {
	Admin?: Admin;
	Assets?: Assets;
	Block_Editor?: Block_Editor;
	Cache?: Cache;
	Caps?: Caps;
	Conditionals?: Conditionals;
	DB_Callers?: DB_Callers;
	DB_Components?: DB_Components;
	DB_Dupes?: DB_Dupes;
	Environment?: Environment;
	Hooks?: Hooks;
	HTTP?: HTTP;
	Languages?: Languages;
	Logger?: Logger;
	Multisite?: Multisite;
}
/**
 * Admin screen data transfer object.
 */
export interface Admin {
	current_screen?: WP_Screen;
	hook_suffix: string;
	list_table?: {
		columns_filter: string;
		sortables_filter: string;
		column_action: string;
		class_name?: string;
	};
	pagenow: string;
	taxnow: string;
	typenow: string;
}
/**
 * Asset data transfer object.
 */
export interface Assets {
	assets?: {
		missing: {
			[k: string]: unknown;
		};
		broken: {
			[k: string]: unknown;
		};
		header: {
			[k: string]: unknown;
		};
		footer: {
			[k: string]: unknown;
		};
	};
	counts: {
		missing: number;
		broken: number;
		header: number;
		footer: number;
		total: number;
	};
	default_version: string;
	dependencies: string[];
	dependents: string[];
	footer: string[];
	header: string[];
	host: string;
	is_ssl: boolean;
	missing_dependencies: string[];
	port: string;
}
/**
 * Block editor data transfer object.
 */
export interface Block_Editor {
	all_dynamic_blocks: string[];
	block_editor_enabled: boolean;
	has_block_context: boolean;
	has_block_timing: boolean;
	post_blocks: unknown[];
	post_has_blocks: boolean;
	total_blocks: number;
}
/**
 * Cache data transfer object.
 */
export interface Cache {
	has_object_cache: boolean;
	display_hit_rate_warning: boolean;
	has_opcode_cache: boolean;
	cache_hit_percentage: number;
	stats: {
		[k: string]: unknown;
	};
	object_cache_extensions: {
		[k: string]: boolean;
	};
	opcode_cache_extensions: {
		[k: string]: boolean;
	};
}
/**
 * User capability checks data transfer object.
 */
export interface Caps {
	caps: {
		args: unknown[];
		filtered_trace: {
			[k: string]: unknown;
		}[];
		component: {
			[k: string]: unknown;
		};
		result: boolean;
		parts: string[];
		name: string;
		user: string;
	}[];
	parts: string[];
	users: number[];
	components: {
		[k: string]: string;
	};
}
/**
 * Conditionals data transfer object.
 */
export interface Conditionals {
	conds: {
		true: string[];
		false: string[];
		na: string[];
	};
}
/**
 * Database query callers data transfer object.
 */
export interface DB_Callers {
	times: {
		[k: string]: {
			caller: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
}
/**
 * Database query components data transfer object.
 */
export interface DB_Components {
	times: {
		[k: string]: {
			ltime: number;
			types: {
				[k: string]: number;
			};
			component: string;
		};
	};
}
/**
 * Duplicate database queries data transfer object.
 */
export interface DB_Dupes {
	total_qs: number;
	dupe_sources: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupe_callers: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupe_components: {
		[k: string]: {
			[k: string]: number;
		};
	};
	dupes: {
		[k: string]: number[];
	};
	dupe_times: {
		[k: string]: number;
	};
}
/**
 * Environment data transfer object.
 */
export interface Environment {
	php: {
		variables: {
			[k: string]: string | null;
		};
		version: string | false;
		sapi: string | false;
		user: string;
		old: boolean;
		extensions: {
			[k: string]: string;
		};
		error_reporting: number;
		error_levels: {
			[k: string]: boolean;
		};
	};
	db: {
		info: {
			"server-version": string;
			extension: string | null;
			"client-version": string | null;
			user: string;
			host: string;
			database: string;
		};
		variables: {
			Variable_name: string;
			Value: string;
		}[];
	};
	wp: {
		version: string;
		environment_type?: string;
		constants: {
			[k: string]: string;
		};
	};
	server: {
		name: string;
		version: string | null;
		address: string | null;
		host: string | null;
		OS: string | null;
		arch: string | null;
	};
}
/**
 * Hooks data transfer object.
 */
export interface Hooks {
	hooks: {
		name: string;
		actions: {
			priority: number;
			callback: {
				accepted_args: number;
				name?: string;
				file?: string | false;
				line?: number | false;
				error?: WP_Error;
				component?: {
					context: string;
					name: string;
					type: string;
				};
			};
		}[];
		parts: string[];
		components: {
			[k: string]: string;
		};
	}[];
	parts: string[];
	components: {
		[k: string]: string;
	};
	all_hooks: boolean;
}
/**
 * HTTP data transfer object.
 */
export interface HTTP {
	http: {
		[k: string]: {
			args: {
				[k: string]: unknown;
			};
			component: {
				[k: string]: unknown;
			};
			filtered_trace: {
				[k: string]: unknown;
			}[];
			info: {
				[k: string]: unknown;
			} | null;
			local: boolean;
			ltime: number;
			redirected_to: string | null;
			response:
				| {
						[k: string]: unknown;
				  }
				| WP_Error;
			transport: string | null;
			type: string;
			url: string;
		};
	};
	ltime: number;
	errors: {
		alert?: string[];
		warning?: string[];
	};
}
/**
 * Languages data transfer object.
 */
export interface Languages {
	languages: {
		[k: string]: {
			[k: string]: {
				caller: {
					[k: string]: unknown;
				};
				domain: string;
				file: string | false;
				found: number | false;
				handle: string | null;
				type: "gettext" | "jed";
			};
		};
	};
	locale: string;
	user_locale: string;
	determined_locale: string;
	language_attributes: string;
	mlp_language: string;
	pll_language: string;
	total_size: number;
}
/**
 * Logger data transfer object.
 */
export interface Logger {
	counts: {
		[k: string]: {
			[k: string]: number;
		};
	};
	logs: {
		message: string;
		filtered_trace: unknown[];
		component: {
			[k: string]: unknown;
		};
		level: string;
		[k: string]: unknown;
	}[];
	components: {
		[k: string]: string;
	};
	levels: string[];
	warning_levels: string[];
}
/**
 * Multisite data transfer object.
 */
export interface Multisite {
	switches: {
		new: number;
		prev: number;
		to: boolean;
		trace: {
			[k: string]: unknown;
		};
	}[];
}
