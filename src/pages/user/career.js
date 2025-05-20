import '../../assests/styles/career.css';
function Career() {
    // Optional JavaScript for form submission feedback
    const applicationForm = document.querySelector('.application-form form');

    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for applying! We will review your application and get back to you soon.');
            applicationForm.reset();
        });
    }

  return (
    <>
        <section className="hero">
            <h1>Careers</h1>
        </section>
        <section className="careers">
            <h2>Join Our Team</h2>
            <p>At Tiibu Company Limited, we are always looking for passionate and talented individuals to join our growing team. Check out the available positions below and apply today!</p>

            <div className="job-listings">
                <div className="job-card">
                    <h3>Site Engineer</h3>
                    <p>Responsible for overseeing construction projects and ensuring safety standards are met.</p>
                    <p className="deadline">Deadline: December 31, 2024</p>
                </div>
                <div className="job-card">
                    <h3>Project Manager</h3>
                    <p>Manage project timelines, budgets, and communication with stakeholders.</p>
                    <p className="deadline">Deadline: January 15, 2025</p>
                </div>
                <div className="job-card">
                    <h3>Interior Designer</h3>
                    <p>Design functional and aesthetically pleasing interior spaces for our clients.</p>
                    <p className="deadline">Deadline: February 1, 2025</p>
                </div>
            </div>
            <div className="application-form">
                <h3>Apply Now</h3>
                <form>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email Address" required />
                    <input type="tel" name="phone" placeholder="Your Phone Number" required />
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                    <textarea name="message" rows="5" placeholder="Why are you a great fit for this position?" required></textarea>
                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </section>

    </>
  )
}

export default Career;
