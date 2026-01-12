import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import ProtectedRoute from '../src/pages/ProtectedRoute';

function ProtectedRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedRoute/>}>
                <Route path="/home" element={<Home/>}></Route>
            </Route> 
        </Routes>
    )   
} 

export default ProtectedRoutes;