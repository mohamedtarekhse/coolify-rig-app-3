import './Page.css';

const Overview = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Overview</h1>
        <p className="page-subtitle">Manage your overview here.</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Overview List</h2>
          <button className="btn-primary">+ Add New</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">#001</td>
                <td>Sample Item 1</td>
                <td><span className="status-badge" style={{ backgroundColor: '#e8f5e9', color: '#107e3e' }}>Active</span></td>
                <td>2024-01-15</td>
                <td><button className="btn-icon">⋮</button></td>
              </tr>
              <tr>
                <td className="font-semibold">#002</td>
                <td>Sample Item 2</td>
                <td><span className="status-badge" style={{ backgroundColor: '#fff3e0', color: '#d95f00' }}>Pending</span></td>
                <td>2024-01-14</td>
                <td><button className="btn-icon">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
