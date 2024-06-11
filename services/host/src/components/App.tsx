import React from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Input from "@/components/Input/Input";


const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <Link to="/about">about</Link>
            <br />
            <Link to="/shop">shop</Link>
            <button className={styles.button}  onClick={() => setCount((prev) => prev + 1)}>increment count</button>
            roots {count}
            <Input />
            <Outlet />
        </div>
    );
};

export default App;