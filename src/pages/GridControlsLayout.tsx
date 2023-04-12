import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { TabStrip, TabStripSelectEventArguments, TabStripTab } from '@progress/kendo-react-layout';
import DataGrid from "./DataGrid";
import ReusableDataGrid from "../components/ReusableDataGrid";
import starwars from '../resources/starwars.json';
import { GridSortChangeEvent } from '@progress/kendo-react-grid';
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";

 
const GridColumns = [
    //here you can define the initial columns configuration
    { field: 'S_No', width: 50 },
    { field: 'Character', width: 100 },
    { field: 'Description', width: 100 },
    { field: 'BFF', width: 100 },
    { field: 'Weapon', width: 100 },
  ];


const GridControlsLayout = () => {


    const [selected, setSelected] = React.useState<number>(1);
    const [columns, setColumns] = React.useState(GridColumns);

    const handleSelect = (e: TabStripSelectEventArguments) => {
      setSelected(e.selected);
    };


  
    return (
        <div id="Info" className="info-page main-content">
      <TabStrip selected={selected} onSelect={handleSelect}>
      <TabStripTab title="Kendo Data Grid"> 
        <DataGrid />
      </TabStripTab>
      <TabStripTab title="Kendo Reusable Data Grid">
      <ReusableDataGrid 
        starwars={starwars}
        GridColumns={GridColumns}
        onChange={(e:any) => setColumns(GridColumns)}
        />
      </TabStripTab> 
      
    </TabStrip>
         </div>
    );
}

export default GridControlsLayout;