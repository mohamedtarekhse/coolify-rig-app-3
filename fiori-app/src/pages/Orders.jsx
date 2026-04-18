import './Page.css';

const Orders = () => {
  const orders = [
    { id: '#ORD-2024-001', customer: 'Acme Corporation', amount: '$12,450.00', status: 'Completed', date: '2024-01-15' },
    { id: '#ORD-2024-002', customer: 'TechStart Inc', amount: '$8,750.00', status: 'Processing', date: '2024-01-14' },
    { id: '#ORD-2024-003', customer: 'Global Solutions', amount: '$15,200.00', status: 'Shipped', date: '2024-01-13' },
    { id: '#ORD-2024-004', customer: 'Innovation Labs', amount: '$6,890.00', status: 'Pending', date: '2024-01-12' },
  ];

  const getStatusColors = (status) => {
    switch(status) {
      case 'Completed': return { bg: '#e8f5e9', color: '#107e3e' };
      case 'Processing': return { bg: '#e3f2fd', color: '#0a6ed1' };
      case 'Shipped': return { bg: '#f3e5f5', color: '#8b3c9e' };
      case 'Pending': return { bg: '#fff3e0', color: '#d95f00' };
      default: return { bg: '#f5f5f5', color: '#666' };
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Orders</h1>
        <p className="page-subtitle">Track and manage customer orders.</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Order List</h2>
          <button className="btn-primary">+ Create Order</button>
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
              {orders.map((order) => {
                const colors = getStatusColors(order.status);
                return (
                  <tr key={order.id}>
                    <td className="font-semibold">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className="status-badge" style={{ backgroundColor: colors.bg, color: colors.color }}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                    <td><button className="btn-icon">⋮</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
