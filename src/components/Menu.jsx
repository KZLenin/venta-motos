import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MakeupShop</h1>
      <ul style={styles.menu}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f4a2d6',
  },
  logo: { color: '#fff', fontSize: '24px' },
  menu: { listStyle: 'none', display: 'flex', gap: '15px' },
};
