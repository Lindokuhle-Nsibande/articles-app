import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import Layout from './components/Layout';
import ArticleListPage from './pages/ArticleListPage';
import NotFoundPage from './pages/NotFoundPage';

// define the array of javascript objects telling the router what page to show
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/articles",
        element: <ArticleListPage />,
      },
      {
        path: "/articles/:name",
        element: <ArticlePage />,
      },
    ],
  },
];



// create a browser router
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
