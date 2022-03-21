import { Routes, Route } from 'react-router-dom';
import Login from 'routes/Login';
import Register from 'routes/Register';

const App: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}

export default App;
