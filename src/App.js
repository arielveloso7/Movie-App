import { Layout } from "antd";
import { BrowserRouter as Routter, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop/MenuTop";

//Page
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie/movie';
import Error404 from './pages/error404';

export default function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>

      <Routter>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>

            <Route path="/" exact={true}><Home /></Route>
            <Route path="/new-movies" exact={true}><NewMovies /></Route>
            <Route path="/popular" exact={true}><Popular /></Route>
            <Route path="/search" exact={true}><Search /></Route>
            <Route path="/movie/:id" exact={true}><Movie /></Route>
            <Route path="*" exact={true}><Error404 /></Route>

          </Switch>

        </Content>
      </Routter>

    </Layout>
  );
}

