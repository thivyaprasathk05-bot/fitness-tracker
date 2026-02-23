export function StatCard({ icon, label, value, unit, color, progress }) {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-header">
        <span className="stat-icon">{icon}</span>
        <span className="stat-label">{label}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-unit">{unit}</div>
      {progress !== undefined && (
        <div className="stat-progress">
          <div
            className={`progress-bar progress-${color}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      )}
      <div className="stat-percent">{progress}%</div>
    </div>
  );
}
