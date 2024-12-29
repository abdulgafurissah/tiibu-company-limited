
function AddBlog() {
  return (
    <>
      <div className="blog-management">
        <section id="blogs">
          <h1>Manage Blog Posts</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Published Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 Tips for Sustainable Construction</td>
                <td>2024-12-01</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Add New Blog Post</h2>
          <form className="form">
            <input type="text" placeholder="Blog Title" required />
            <textarea rows="5" placeholder="Content" required></textarea>
            <button type="submit">Add Blog Post</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default AddBlog;

