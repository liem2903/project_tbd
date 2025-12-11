import { Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Setting from '../src/pages/Setting';

function AppRouter () {
    return (
        <Routes>
            <Route path="/" element={<Login/>}> </Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/settings" element={<Setting/>}></Route>
        </Routes>
    )
}

export default AppRouter;