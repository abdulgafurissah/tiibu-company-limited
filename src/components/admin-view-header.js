import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-gray-800 text-white w-64 p-4">
    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
    <nav>
      <ul className="space-y-4">
        <li><Link to="/admin" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/admin/services" className="hover:underline">Services</Link></li>
        <li><Link to="/admin/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/admin/blog-posts" className="hover:underline">Blog Posts</Link></li>
        <li><Link to="/admin/job-applications" className="hover:underline">Job Applications</Link></li>
        <li><Link to="/admin/messages" className="hover:underline">Messages</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;