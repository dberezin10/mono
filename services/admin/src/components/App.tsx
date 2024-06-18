import React from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Input from "@/components/Input/Input";


const App = () => {
    return (
        <div>
            <h1>Admin modules</h1>
            <Outlet />
        </div>
    );
};

export default App;