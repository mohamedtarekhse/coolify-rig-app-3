import './Page.css';

const Reports = () => {
  const reports = [
    { id: '#R001', name: 'Monthly Sales Report', type: 'Sales', status: 'Available', generated: '2024-01-15' },
    { id: '#R002', name: 'Customer Analytics Q4', type: 'Analytics', status: 'Generating', generated: '2024-01-14' },
    { id: '#R003', name: 'Inventory Summary', type: 'Inventory', status: 'Available', generated: '2024-01-13' },
    { id: '#R004', name: 'Financial Overview 2024', type: 'Finance', status: 'Scheduled', generated: '2024-01-12' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Reports</h1>
        <p className="page-subtitle">Generate and view business reports.</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Report Center</h2>
          <button className="btn-primary">+ Generate Report</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Report Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Generated Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="font-semibold">{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.type}</td>
                  <td>
                    <span className="status-badge" style={{ 
                      backgroundColor: report.status === 'Available' ? '#e8f5e9' : report.status === 'Generating' ? '#e3f2fd' : '#fff3e0', 
                      color: report.status === 'Available' ? '#107e3e' : report.status === 'Generating' ? '#0a6ed1' : '#d95f00' 
                    }}>
                      {report.status}
                    </span>
                  </td>
                  <td>{report.generated}</td>
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

export default Reports;
