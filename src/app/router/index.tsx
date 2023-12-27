import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from '../../pages/home';

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: '',
            element: <HomePage/>
        }
    ])
    return <RouterProvider router={router}/>
}