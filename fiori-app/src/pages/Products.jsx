import './Page.css';

const Products = () => {
  const products = [
    { id: '#P001', name: 'Enterprise Software License', status: 'Active', created: '2024-01-15' },
    { id: '#P002', name: 'Cloud Storage Plan', status: 'Active', created: '2024-01-14' },
    { id: '#P003', name: 'Analytics Dashboard', status: 'Pending', created: '2024-01-13' },
    { id: '#P004', name: 'Mobile App Suite', status: 'Active', created: '2024-01-12' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Products</h1>
        <p className="page-subtitle">Manage your product catalog here.</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Product List</h2>
          <button className="btn-primary">+ Add Product</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="font-semibold">{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <span className="status-badge" style={{ backgroundColor: product.status === 'Active' ? '#e8f5e9' : '#fff3e0', color: product.status === 'Active' ? '#107e3e' : '#d95f00' }}>
                      {product.status}
                    </span>
                  </td>
                  <td>{product.created}</td>
                  <td><button className="btn-icon">⋮</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
