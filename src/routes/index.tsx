import { BrowserRouter, Routes, Route } from 'react-router';
import { ROUTES } from '../config/routes';
import EventsPage from '../pages/EventsPage/EventsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CreateEventPage from '../pages/CreateEventsPage/CreateEventsPage';
import DashBoardPage from '../pages/DashboardPage/DashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path={ROUTES.home} element={<EventsPage />} />
            <Route path={ROUTES.login} element={<LoginPage />} />
            <Route path={ROUTES.register} element={<RegisterPage />} />
            <Route path={ROUTES.create_events} element={<CreateEventPage />} />
            <Route path={ROUTES.dashboard} element={<DashBoardPage />} />
            {/* Add more routes as needed */}
        </Routes>
    </BrowserRouter>
);

export default AppRouter;