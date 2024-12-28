import '../styles/admin.css';
function AdminHeader() {

    // JavaScript to toggle active section
    const links = document.querySelectorAll('.sidebar button');
    const sections = document.querySelectorAll('.main-content section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            sections.forEach(section => section.style.display = 'none');
            document.querySelector(link.getAttribute('href')).style.display = 'block';
        });
    });

    // Default display
    sections.forEach((section, index) => section.style.display = index === 0 ? 'block' : 'none');

    return (
        <>
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <button className="active" data-link="#services">Manage Services</button>
                <button data-link="#projects">Manage Projects</button>
                <button data-link="#blog">Manage Blog Posts</button>
                <button data-link="#messages">View Messages</button>
                <button data-link="#jobs">Job Applications</button>
                <button data-link="#logout">Logout</button>
            </div>

           
        </>
    )
}

export default AdminHeader;

