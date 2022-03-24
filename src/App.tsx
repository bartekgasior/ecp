import { Routes, Route } from 'react-router-dom';
import UserLoggedInRoute from 'routes/UserLoggedInRoute';
import UserNotLoggedInRoute from 'routes/UserNotLoggedInRoute';

import pages from 'pages';

const App: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='*' element={<pages.NotFound />} />

            <Route element={<UserNotLoggedInRoute />} >
                <Route path='/login' element={<pages.Login />} />
                <Route path='/register' element={<pages.Register />} />
            </Route>
            <Route element={<UserLoggedInRoute />} >
                <Route path='dashboard' element={<></>} />
            </Route>
        </Routes>
    );
}

export default App;
