import { NavLink} from 'react-router-dom';
import '../styles/admin.css';

function AdminHeader() {

    return (
        <>
            <div className="sidebar">
                <NavLink to="/admin/services" activeClassName="active">Manage Services</NavLink>
                <NavLink to="/admin/projects">Manage Projects</NavLink>
                <NavLink to="/admin/blog">Manage Blog Posts</NavLink>
                <NavLink to="/admin/messages">View Messages</NavLink>
                <NavLink to="/admin/jobs">Job Applications</NavLink>
            </div>

        </>
    );
}

export default AdminHeader;