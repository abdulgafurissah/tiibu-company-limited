import React from 'react';

const ViewApplications = () => {
  return (
    <>
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
              <td>
                <a href="resume.pdf" download>
                  Download Resume
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ViewApplications;
