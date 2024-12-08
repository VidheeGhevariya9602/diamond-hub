import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import diamond from './ezgif-1-302dd17e2e.mp4';

function Nav() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const hideLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(hideLoading);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const loadingSection = document.querySelector('.loading');
      const loadingImage = document.querySelector('.loading video');

      if (loadingImage) {
        loadingImage.addEventListener('transitionend', () => {
          loadingSection.style.display = 'none';
          document.querySelector('body').style.overflow = 'auto';
        });
        loadingImage.style.opacity = '0';
      }
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading && (
        <div className="loading">
          <video autoPlay loop muted className="myVideo">
            <source src={diamond} type="video/mp4" />
          </video>
        </div>
      )}
      {!isLoading && (
        <>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/product">Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contect">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Cart">Cart</Link>
                  </li>
                </ul>
              </div>

              <Link to="/login">
                <i className="fa-regular fa-circle-user user"></i>
              </Link>

              <Link to="/startselling">
                <button className="nav-btn">Start Selling</button>
              </Link>
            </div>
          </nav>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Nav;
