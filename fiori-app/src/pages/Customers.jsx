import './Page.css';

const Customers = () => {
  const customers = [
    { id: '#C001', name: 'Acme Corporation', email: 'contact@acme.com', status: 'Active', joined: '2023-06-15' },
    { id: '#C002', name: 'TechStart Inc', email: 'hello@techstart.io', status: 'Active', joined: '2023-08-22' },
    { id: '#C003', name: 'Global Solutions', email: 'info@globalsol.com', status: 'Inactive', joined: '2023-09-10' },
    { id: '#C004', name: 'Innovation Labs', email: 'support@innovatelabs.net', status: 'Active', joined: '2023-11-05' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Customers</h1>
        <p className="page-subtitle">Manage your customer relationships.</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Customer Directory</h2>
          <button className="btn-primary">+ Add Customer</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="font-semibold">{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>
                    <span className="status-badge" style={{ backgroundColor: customer.status === 'Active' ? '#e8f5e9' : '#ffebee', color: customer.status === 'Active' ? '#107e3e' : '#d32f2f' }}>
                      {customer.status}
                    </span>
                  </td>
                  <td>{customer.joined}</td>
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

export default Customers;
