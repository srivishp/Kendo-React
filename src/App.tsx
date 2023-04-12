import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
import './App.scss';
import { HashRouter, Routes, Link, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard"
import MaterialControls from "./pages/MaterialControls"
import GridControlsLayout from "./pages/GridControlsLayout"
import KendoControls from './pages/KendoControls';
import DrawerContainer from './components/DrawerContainer';
import RouterOutlet from './components/RouterOutlet';
import MUIForm from './pages/MUIForm';


const App = () => {
  return ( 
        <div>
        <React.Fragment>
          <HashRouter>
            <DrawerContainer>
              <Routes>
                <Route path="/" element={<RouterOutlet />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="gridcontrolslayout" element={<GridControlsLayout />} />
                  <Route path="mui" element={<MaterialControls />} /> 
                  <Route path="kendoControls" element={<KendoControls />} />
                  <Route path="muiform" element={<MUIForm />} />
                </Route>
              </Routes>
            </DrawerContainer>
          </HashRouter>
        </React.Fragment>
        </div>  
  );
}

export default App;