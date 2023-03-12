// import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom/dist';

import './index.css';

import { routes } from './routes';

function App() {
    const element = useRoutes(routes);

    // console.log(element);
    return <div className="App">{element}</div>;
}

export default App;
