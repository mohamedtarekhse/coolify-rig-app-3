import './Page.css';

const Dashboard = () => {
  const tiles = [
    { title: 'Total Orders', value: '1,234', change: '+12%', icon: '🛒', color: '#0a6ed1' },
    { title: 'Revenue', value: '$45,678', change: '+8%', icon: '💰', color: '#107e3e' },
    { title: 'Customers', value: '892', change: '+5%', icon: '👥', color: '#d95f00' },
    { title: 'Products', value: '156', change: '+3%', icon: '📦', color: '#8b3c9e' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Acme Corp', amount: '$1,234', status: 'Completed', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'TechStart Inc', amount: '$5,678', status: 'Pending', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Global Ltd', amount: '$2,345', status: 'Processing', date: '2024-01-14' },
    { id: 'ORD-004', customer: 'Innovate Co', amount: '$3,456', status: 'Completed', date: '2024-01-13' },
    { id: 'ORD-005', customer: 'Digital Solutions', amount: '$4,567', status: 'Shipped', date: '2024-01-12' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#107e3e';
      case 'Pending': return '#d95f00';
      case 'Processing': return '#0a6ed1';
      case 'Shipped': return '#8b3c9e';
      default: return '#666';
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="tiles-grid">
        {tiles.map((tile, index) => (
          <div key={index} className="tile" style={{ borderLeft: `4px solid ${tile.color}` }}>
            <div className="tile-icon" style={{ backgroundColor: `${tile.color}20` }}>
              {tile.icon}
            </div>
            <div className="tile-content">
              <h3 className="tile-title">{tile.title}</h3>
              <p className="tile-value">{tile.value}</p>
              <span className="tile-change positive">{tile.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Orders</h2>
          <button className="btn-primary">View All</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="font-semibold">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td>
                    <button className="btn-icon">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
