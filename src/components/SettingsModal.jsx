import { useState } from 'react';

export function SettingsModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    dailyReminder: true,
    units: 'metric',
    theme: 'dark',
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⚙️ Settings</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="settings-section">
            <h3>Notifications</h3>
            <div className="settings-item">
              <div className="setting-label">
                <span>Push Notifications</span>
                <p>Get alerts for fitness milestones</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="setting-label">
                <span>Daily Reminder</span>
                <p>Remind me to start workouts at 7 AM</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.dailyReminder}
                  onChange={() => handleToggle('dailyReminder')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h3>Preferences</h3>
            <div className="settings-item">
              <div className="setting-label">
                <span>Units</span>
                <p>Choose between Metric or Imperial</p>
              </div>
              <select
                value={settings.units}
                onChange={(e) => handleChange('units', e.target.value)}
                className="settings-select"
              >
                <option value="metric">Metric (kg, km)</option>
                <option value="imperial">Imperial (lbs, mi)</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="setting-label">
                <span>Theme</span>
                <p>Choose your preferred theme</p>
              </div>
              <select
                value={settings.theme}
                onChange={(e) => handleChange('theme', e.target.value)}
                className="settings-select"
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
          </div>

          <div className="settings-section">
            <h3>Account</h3>
            <div className="settings-item">
              <div className="setting-label">
                <span>Privacy Policy</span>
                <p>View our privacy policy</p>
              </div>
              <span className="arrow">→</span>
            </div>
            <div className="settings-item">
              <div className="setting-label">
                <span>Terms of Service</span>
                <p>View terms and conditions</p>
              </div>
              <span className="arrow">→</span>
            </div>
            <div className="settings-item settings-danger">
              <div className="setting-label">
                <span>Delete Account</span>
                <p>Permanently delete your account</p>
              </div>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Close
          </button>
          <button className="btn-save">
            💾 Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
