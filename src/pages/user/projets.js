import '../../assests/styles/projects.css';

function Projets() {
  // Filter functionality
  window.onload = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Show/Hide projects based on the filter
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  };

  return (
    <>
      <section className="hero">
        <h1>Projects Portfolio</h1>
      </section>
      <section className="filters">
        <button className="filter-btn active" data-filter="all">All</button>
        <button className="filter-btn" data-filter="residential">Residential</button>
        <button className="filter-btn" data-filter="commercial">Commercial</button>
        <button className="filter-btn" data-filter="ongoing">Ongoing</button>
        <button className="filter-btn" data-filter="completed">Completed</button>
      </section>
      <section className="projects">
        <div className="project-card" data-category="residential">
          <img src="residential1.jpg" alt="Residential Project" />
          <div className="details">
            <h3>Luxury Villas</h3>
            <p>Location: Nairobi</p>
          </div>
        </div>
        <div className="project-card" data-category="commercial">
          <img src="commercial1.jpg" alt="Commercial Project" />
          <div className="details">
            <h3>Corporate Office</h3>
            <p>Location: Mombasa</p>
          </div>
        </div>
        <div className="project-card" data-category="ongoing">
          <img src="ongoing1.jpg" alt="Ongoing Project" />
          <div className="details">
            <h3>Shopping Mall</h3>
            <p>Location: Kisumu</p>
          </div>
        </div>
        <div className="project-card" data-category="completed">
          <img src="completed1.jpg" alt="Completed Project" />
          <div className="details">
            <h3>Skyscraper</h3>
            <p>Location: Nairobi</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projets;
