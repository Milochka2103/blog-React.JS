
import { LogOut } from './LogOut/LogOut';
import { Navigation } from './Navigation/Navigation';
import './Sidebar.css';
import { User } from './User/User';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className='sidebarTop'>
        <User />
        <Navigation />
      </section>
      
      <LogOut />
    </aside>
  );
};
