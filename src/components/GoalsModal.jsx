import { useState } from 'react';

export function GoalsModal({ isOpen, onClose }) {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Daily Steps', target: '10,000', current: '8,234', icon: '👟', color: 'green' },
    { id: 2, name: 'Calories', target: '750 kcal', current: '520 kcal', icon: '🔥', color: 'orange' },
    { id: 3, name: 'Workout Time', target: '60 min', current: '45 min', icon: '⏱️', color: 'cyan' },
  ]);

  const [showNewGoal, setShowNewGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({ name: '', target: '', icon: '🎯' });

  const handleAddGoal = () => {
    if (newGoal.name && newGoal.target) {
      setGoals([
        ...goals,
        {
          id: Date.now(),
          ...newGoal,
          current: '0',
          color: 'blue',
        },
      ]);
      setNewGoal({ name: '', target: '', icon: '🎯' });
      setShowNewGoal(false);
    }
  };

  const handleRemoveGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🎯 Set Your Goals</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="goals-list">
            <h3>Your Goals</h3>
            {goals.map((goal) => (
              <div key={goal.id} className={`goal-item goal-${goal.color}`}>
                <div className="goal-header">
                  <span className="goal-icon">{goal.icon}</span>
                  <div className="goal-info">
                    <h4>{goal.name}</h4>
                    <p>Target: {goal.target}</p>
                  </div>
                  <button
                    className="goal-remove-btn"
                    onClick={() => handleRemoveGoal(goal.id)}
                  >
                    ✕
                  </button>
                </div>
                <div className="goal-progress">
                  <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
                <div className="goal-footer">
                  <span>{goal.current} / {goal.target}</span>
                  <span>70% Complete</span>
                </div>
              </div>
            ))}
          </div>

          {showNewGoal ? (
            <div className="new-goal-form">
              <h3>Add New Goal</h3>
              <div className="form-group">
                <label>Goal Name</label>
                <input
                  type="text"
                  placeholder="e.g., Weight Loss"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Target Value</label>
                <input
                  type="text"
                  placeholder="e.g., 70 kg"
                  value={newGoal.target}
                  onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Choose Icon</label>
                <div className="icon-picker">
                  {['🎯', '⚖️', '🏃', '🧠', '💪', '😴'].map((icon) => (
                    <button
                      key={icon}
                      className={`icon-btn ${newGoal.icon === icon ? 'active' : ''}`}
                      onClick={() => setNewGoal({ ...newGoal, icon })}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setShowNewGoal(false)}
                >
                  Cancel
                </button>
                <button className="btn-action btn-primary" onClick={handleAddGoal}>
                  Add Goal
                </button>
              </div>
            </div>
          ) : (
            <button
              className="btn-add-goal"
              onClick={() => setShowNewGoal(true)}
            >
              + Add New Goal
            </button>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Close
          </button>
          <button className="btn-save">
            ✓ Save Goals
          </button>
        </div>
      </div>
    </div>
  );
}
