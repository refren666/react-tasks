import {Routes, Route, Navigate} from "react-router-dom";


import Layout from "./components/Layout/Layout";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";
import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage/>}/> {/*index - this route is default*/}
          <Route path={'/users'} element={
            <RequireAuth>
              <UsersPage/>
            </RequireAuth>
          }/>
          <Route path={'/posts'} element={<PostsPage/>}>
            <Route path={'/posts/:id'}
                   element={<SinglePostPage/>}/> {/*:text - text можем перехопити хуком useParams!*/}
          </Route>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/about-us'}
                 element={<Navigate to={'/about'}/>}/> {/*Якщо в урлі ввести /about-us то перенаправиль на /about*/}
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
