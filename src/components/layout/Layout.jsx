import Navbar from '../../navigation/navbar/Navbar';
import Footer from '../../navigation/footer/Footer';
import PropTypes from 'prop-types';
import './layout.css';

export default function Layout({ children, sectionRefs }) {
  return (
    <div className="layout">
      <Navbar sectionRefs={sectionRefs} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sectionRefs: PropTypes.object
};