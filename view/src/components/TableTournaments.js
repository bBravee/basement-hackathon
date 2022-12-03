import React from 'react';
import ApiRecive from './ApiRecive';

import TableElement from './TableElement';





const TableTournaments = () => {
    return ( 
        <div className="tableTournamentDiv">
                <table className="tableTournament">
                    <tr>
                        <th>Name</th>
                        <th>Start date</th>
                        <th>curr_numb/max_num</th>
                        <th>Dołącz do trunieju</th>
                    </tr>

                    <TableElement/>
                    {/* <TableElement/> */}
                    
                </table>
            </div>
     );
}
 
export default TableTournaments;