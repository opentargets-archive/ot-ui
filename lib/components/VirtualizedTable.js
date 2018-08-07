import React from 'react';
import { Table } from 'react-virtualized';

import 'react-virtualized/styles.css';

const VirtualizedTable = ({ data, children, ...props }) => (<Table
        {...props}
        headerHeight={40}
        rowHeight={30}
        rowCount={data.length}
    >
        {children}
</Table>);

export default VirtualizedTable;
