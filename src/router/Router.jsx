import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import ProjectDetailsPage from './../pages/ProjectDetailsPage';

const router = createBrowserRouter([
    {path:"/", element:<HomePage />},
    {path:"/project/:id",element: <ProjectDetailsPage/>}
]);

export default router;