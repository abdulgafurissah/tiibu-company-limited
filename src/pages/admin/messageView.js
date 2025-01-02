function  Messages() {
  return (
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
    </div>
  )
}

export default  Messages;
