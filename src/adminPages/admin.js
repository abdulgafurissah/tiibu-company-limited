function Dashboard() {
    return (
        <>
    <div>
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold">Services</h2>
        <p>Manage all the services offered.</p>
      </div>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold">Projects</h2>
        <p>Keep track of projects.</p>
      </div>
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold">Blog Posts</h2>
        <p>Publish and manage blog posts.</p>
      </div>
    </div>
  </div>
        </>
    );
}

export default Dashboard;

