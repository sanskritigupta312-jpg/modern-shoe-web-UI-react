import React from 'react'


const Menu = () => {
  const categories = [
    { name: 'Men', count: '120 Styles', path: '#men' },
    { name: 'Women', count: '95 Styles', path: '#women' },
    { name: 'Kids', count: '45 Styles', path: '#kids' },
    { name: 'Brands', count: 'Featured', path: '#brands' },
    { name: 'Sale', count: 'Up to 50% Off', path: '#sale' },
  ];

  return (
    <div className="page-content container">
        <h1 className="large-title">Explore Collection</h1>
        
        <div className="full-menu-grid">
            {categories.map((item, index) => (
                <a href={item.path} key={index} className="full-menu-card">
                    <h3>{item.name}</h3>
                    <span>{item.count}</span>
                    <div className="card-arrow">→</div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Menu