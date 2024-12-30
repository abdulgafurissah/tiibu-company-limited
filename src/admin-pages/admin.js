import React from 'react';
import '../styles/admin.css';
import AdminHeader from '../components/admin-view-header';

function Admin() {
    return (
        <>
            <AdminHeader />
            <div className="main-content">
                <h1>Admin Dashboard</h1>
                <section>
                    {/* Add content here */}
                </section>
            </div>
        </>
    );
}

export default Admin;

