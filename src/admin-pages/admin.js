import React from 'react';
import '../styles/admin.css';
import AdminHeader from '../components/admin-view-header';

function Admin() {
    return (
        <>
            <AdminHeader />
            <div className="main-content">
                <section id="messages">
                    <h1>View Messages</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>Interested in your services.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="applications">
                    <h1>Job Applications</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Applicant Name</th>
                                <th>Email</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jane Smith</td>
                                <td>jane@example.com</td>
                                <td><a href="resume.pdf" download>Download Resume</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
}

export default Admin;

