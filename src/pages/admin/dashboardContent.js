const DashboardContent = () => {
  return (
    <div className="dashboard-home">
      <h1>Welcome to the Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>New Messages</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Active Services</h3>
          <p>8</p>
        </div>
      </div>
    </div>
  );
};


export default DashboardContent;