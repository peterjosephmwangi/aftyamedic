import React from "react";

const AdminHome = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Admin Dashboard</h1>
          <p className="lead">
            Manage lab tests, nurses, and patients efficiently in one place.
          </p>
          <a href="#features" className="btn btn-light btn-lg mt-3">
            Explore Features
          </a>
        </div>
      </header>
      

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Dashboard Features</h2>
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4 d-flex">
              <div className="card text-center shadow-sm w-100">
                <div className="card-body d-flex flex-column">
                  <div className="display-4 text-info mb-3">📋</div>
                  <h5 className="card-title">Lab Test Management</h5>
                  <p className="card-text flex-grow-1">
                    View, approve, and track all lab tests with real-time updates.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4 d-flex">
              <div className="card text-center shadow-sm w-100">
                <div className="card-body d-flex flex-column">
                  <div className="display-4 text-success mb-3">👨‍⚕️</div>
                  <h5 className="card-title">Manage Staff</h5>
                  <p className="card-text flex-grow-1">
                    Add, edit, or remove nurses and other hospital staff from the system.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4 d-flex">
              <div className="card text-center shadow-sm w-100">
                <div className="card-body d-flex flex-column">
                  <div className="display-4 text-warning mb-3">📊</div>
                  <h5 className="card-title">Analytics & Reports</h5>
                  <p className="card-text flex-grow-1">
                    Generate detailed reports and insights on lab test performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h3 className="mb-3">Streamline Your Hospital Management</h3>
          <p className="mb-4">
            Empower your hospital administration with advanced tools and insights.
          </p>
          <a href="#!" className="btn btn-primary btn-lg">Get Started Today</a>
        </div>
      </section>

    </div>
  );
};

export default AdminHome;
