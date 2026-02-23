export function ReportsView({ isOpen, onClose }) {
  const reports = [
    {
      title: 'Weekly Summary',
      icon: '📊',
      stats: [
        { label: 'Total Steps', value: '58,342' },
        { label: 'Total Calories', value: '3,650 kcal' },
        { label: 'Workout Days', value: '5 days' },
      ],
    },
    {
      title: 'Monthly Progress',
      icon: '📈',
      stats: [
        { label: 'Weight Change', value: '-2.5 kg' },
        { label: 'Average HR', value: '72 bpm' },
        { label: 'Best Day', value: 'Saturday' },
      ],
    },
    {
      title: 'Health Score',
      icon: '❤️',
      stats: [
        { label: 'Overall', value: '82/100' },
        { label: 'Fitness', value: '85/100' },
        { label: 'Recovery', value: '78/100' },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>📊 Your Reports & Analytics</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="reports-grid">
            {reports.map((report, idx) => (
              <div key={idx} className="report-card">
                <div className="report-icon">{report.icon}</div>
                <h3>{report.title}</h3>
                <div className="report-stats">
                  {report.stats.map((stat, i) => (
                    <div key={i} className="report-stat">
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="achievements-section">
            <h3>🏆 Recent Achievements</h3>
            <div className="achievements-list">
              <div className="achievement">
                <span className="achievement-badge">🥇</span>
                <div>
                  <strong>Week Warrior</strong>
                  <p>Completed 5 workouts this week</p>
                </div>
              </div>
              <div className="achievement">
                <span className="achievement-badge">🔥</span>
                <div>
                  <strong>Calorie Burner</strong>
                  <p>Burned over 3500 calories this week</p>
                </div>
              </div>
              <div className="achievement">
                <span className="achievement-badge">🎯</span>
                <div>
                  <strong>Step Master</strong>
                  <p>Reached 10,000 steps 3 times</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-action" onClick={onClose}>
            Close
          </button>
          <button className="btn-action btn-primary">
            Download Report 📥
          </button>
        </div>
      </div>
    </div>
  );
}
