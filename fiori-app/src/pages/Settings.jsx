import './Page.css';

const Settings = () => {
  const settingsSections = [
    { title: 'General Settings', items: ['Company Name', 'Timezone', 'Language', 'Currency'] },
    { title: 'User Management', items: ['User Roles', 'Permissions', 'Authentication', 'SSO Settings'] },
    { title: 'Notifications', items: ['Email Alerts', 'Push Notifications', 'SMS Settings', 'Notification Schedule'] },
    { title: 'System', items: ['Backup Settings', 'API Keys', 'Webhooks', 'Audit Logs'] },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your application preferences.</p>
      </div>
      
      <div className="tiles-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {settingsSections.map((section, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h2 className="card-title">{section.title}</h2>
            </div>
            <div style={{ padding: '0 24px 24px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ 
                    padding: '12px 0', 
                    borderBottom: itemIndex < section.items.length - 1 ? '1px solid #f0f0f0' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{item}</span>
                    <button className="btn-icon" style={{ fontSize: '14px', color: '#0a6ed1' }}>→</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
