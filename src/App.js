import { Switch } from "react-router-dom";
import "./App.css";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Registration } from "./pages/Registration/Registration";
import { POSTS_URL, USERS_URL } from "./Utils/constants";
import { useFetchPosts, useFetchUsers} from "./Utils/hooks";

function App() {
  const postsData = useFetchPosts(POSTS_URL);
  const usersData = useFetchUsers(USERS_URL);

  const blogPostRoutes = postsData.blogPosts.map((post) => {
    return `/blog/${post.id}`;
  });


  return (
    <div className="App">
      <Switch>
        <PublicRoute
          exact
          path="/login"
          blogPostRoutes={blogPostRoutes}
        >
          <LoginPage usersData={usersData} />;
        </PublicRoute>

        <PublicRoute
          exact
          path="/registration"
          blogPostRoutes={blogPostRoutes}
        >
          <Registration />;
        </PublicRoute>


        <PrivateRoute
          path="/"
          blogPostRoutes={blogPostRoutes}
        >
          <MainBlock postsData={postsData} usersData={usersData} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
