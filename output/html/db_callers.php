<?php
/*

© 2013 John Blackbourn

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

*/

class QM_Output_Html_DB_Callers extends QM_Output_Html {

	public function __construct( QM_Component $component ) {
		parent::__construct( $component );
		add_filter( 'query_monitor_menus', array( $this, 'admin_menu' ), 30 );
	}

	public function output() {

		$data = $this->component->get_data();

		if ( empty( $data ) )
			return;

		$total_time  = 0;
		$total_calls = 0;

		echo '<div class="qm qm-half" id="' . $this->component->id() . '">';
		echo '<table cellspacing="0">';
		echo '<thead>';
		echo '<tr>';
		echo '<th>' . _x( 'Caller', 'Query caller', 'query-monitor' ) . '</th>';

		if ( !empty( $data['types'] ) ) {
			foreach ( $data['types'] as $type_name => $type_count )
				echo '<th>' . $type_name . '</th>';
		}

		echo '<th>' . __( 'Time', 'query-monitor' ) . '</th>';
		echo '</tr>';
		echo '</thead>';

		if ( !empty( $data['times'] ) ) {

			echo '<tbody>';

			usort( $data['times'], 'QM_Util::sort' );

			foreach ( $data['times'] as $caller => $row ) {
				$total_time  += $row['ltime'];
				$total_calls += $row['calls'];
				$stime = number_format_i18n( $row['ltime'], 4 );
				$ltime = number_format_i18n( $row['ltime'], 10 );

				echo '<tr>';
				echo "<td valign='top' class='qm-ltr'>{$row['caller']}</td>";

				foreach ( $data['types'] as $type_name => $type_count ) {
					if ( isset( $row['types'][$type_name] ) )
						echo "<td valign='top'>{$row['types'][$type_name]}</td>";
					else
						echo "<td valign='top'>&nbsp;</td>";
				}

				echo "<td valign='top' title='{$ltime}'>{$stime}</td>";
				echo '</tr>';

			}

			echo '</tbody>';
			echo '<tfoot>';

			$total_stime = number_format_i18n( $total_time, 4 );
			$total_ltime = number_format_i18n( $total_time, 10 );

			echo '<tr>';
			echo '<td>&nbsp;</td>';

			foreach ( $data['types'] as $type_name => $type_count )
				echo '<td>' . number_format_i18n( $type_count ) . '</td>';

			echo "<td title='{$total_ltime}'>{$total_stime}</td>";
			echo '</tr>';

			echo '</tfoot>';

		} else {

			echo '<tbody>';
			echo '<tr>';
			echo '<td colspan="3" style="text-align:center !important"><em>' . __( 'none', 'query-monitor' ) . '</em></td>';
			echo '</tr>';
			echo '</tbody>';

		}

		echo '</table>';
		echo '</div>';

	}

	public function admin_menu( array $menu ) {

		if ( $dbq = QueryMonitor::get_component( 'db_queries' ) ) {
			$dbq_data = $dbq->get_data();
			if ( isset( $dbq_data['times'] ) ) {
				$menu[] = $this->menu( array(
					'title' => __( 'Queries by Caller', 'query-monitor' )
				) );
			}
		}
		return $menu;

	}

}

function register_qm_db_callers_output_html( QM_Output $output = null, QM_Component $component ) {
	return new QM_Output_Html_DB_Callers( $component );
}

add_filter( 'query_monitor_output_html_db_callers', 'register_qm_db_callers_output_html', 10, 2 );
