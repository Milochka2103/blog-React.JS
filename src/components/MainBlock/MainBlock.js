import { Sidebar } from './Sidebar/Sidebar';
import './MainBlock.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { BlogPostPage } from '../../pages/BlogPostPage/BlogPostPage';

export const MainBlock = ({ setIsLoggedIn, postsData }) => {

  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className='mainBlock'>
        <Switch>
          <Route exact path='/blog'>
            <BlogPage title='Posts' {...postsData} />
          </Route>

          <Route exact path='/favourite'>
            <BlogPage title='Favourite posts' {...postsData} isLikedPosts />
          </Route>

          <Route path='/blog/:postId'>
            <BlogPostPage setBlogPosts={postsData.setBlogPosts} />
          </Route>

          <Route exact path='/'>
          <Redirect to='/blog' />
        </Route>

        </Switch>
      </main>
    </>
  );
};
