import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Class_com from "./pages/class_com";
import State from "./pages/state";
import Event from "./pages/event";
import UseEffect from "./pages/useEffect";
import New from "./pages/new";
import Usestate from "./pages/useState";
import Con_ren from "./pages/con_ren";
import Add_item from "./pages/add_item";
import UseRef from "./pages/useref";
import NavBar from "./components/NavBar";
import { A, B, C } from "./pages/about";
import Userdetails from "./pages/userdetails";
import User from "./pages/user_params"; 
import Api_calling from "./pages/api_calling";
import Post from "./pages/post"; 
import Standard_api_small from "./pages/standard_api_small";
import Api_axios from "./pages/api_axios";
import Userrrs from "./pages/user";


const todos = [
  { id: 1, name: "Sachin", age: 20 },
  { id: 2, name: "Parth", age: 25 },
  { id: 3, name: "Raghav", age: 30 },
  { id: 4, name: "Piyush", age: 35 },
];

// const User = () => {
//   const userId = useParams();
//   return (
//     <div>
//       <h1>This is user page and the name is {userId.username}</h1>
//     </div>
//   );
// };

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  const [a, setA] = useState(true);
  return (
    <>
      {/* <button onClick={() => setA(!a)}>Toggle New</button>
      {a && <New />} */}

      
        <NavBar />

        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home todos={todos} />} />

          <Route path="/about" element={<About />} >
            <Route path="A" element={<A />} />
            <Route path="B" element={<B />} />
            <Route path="C" element={<C />} />
          </Route>

          <Route path="/con_ren" element={<Con_ren />} />

          <Route path="/usestate" element={<Usestate />} />

          <Route path="/state" element={<State />} />

          <Route path="/useEffect" element={<UseEffect />} />

          <Route path="/event" element={<Event />} />

          <Route path="/add_item" element={<Add_item />} />

          <Route path="/useref" element={<UseRef />} />

          {/* <Route path="/user/:username" element={<User />} /> */}

          <Route
            path="/class_com"
            element={
              <Class_com
                title="My Class Component"
                description="This is a description for the class component"
              />
            }
          />


          <Route path="/users/:name?" element={<Userdetails />} />
          <Route path="/user/:id/" element={<User />} />

          <Route path="/post" element={<Api_calling />} />
          <Route path="/post/:postId" element={<Post />} /> 

          <Route path="/api_sta_call" element={<Standard_api_small/>} />

          <Route path="/api_axios" element={<Api_axios/>}/>
          <Route path="/api_axios/:id" element={<Userrrs/>}/>
        </Routes>
      
    </>
  );
}

export default App;
