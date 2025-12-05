import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'

function AppRouter () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
        </Routes>
    )
}

export default AppRouter;