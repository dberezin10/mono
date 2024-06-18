import React from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Input from "@/components/Input/Input";


const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Shop module</h1>
            <Outlet />
        </div>
    );
};

export default App;