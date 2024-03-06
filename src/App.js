import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css';
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
    path: "/notes/:noteId",
    element: <NotePage/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
