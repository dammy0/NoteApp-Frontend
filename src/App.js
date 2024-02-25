import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import NoteListPage from "./containers/NoteListPage";
import NotePage from "./containers/NotePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/notes",
    element: <NoteListPage/>
  },
  {
    path: "/note/:noteId",
    element: <NotePage/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    //<RouterProvider router={router}/>
  );
}

export default App;
