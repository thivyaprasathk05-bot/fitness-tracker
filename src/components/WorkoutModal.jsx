import { useState } from 'react';

export function WorkoutModal({ isOpen, onClose, onStart }) {
  const [workoutType, setWorkoutType] = useState('running');
  const [duration, setDuration] = useState(30);

  const workouts = [
    { id: 'running', name: '🏃 Running', emoji: '🏃', intensity: 'High' },
    { id: 'cycling', name: '🚴 Cycling', emoji: '🚴', intensity: 'Medium' },
    { id: 'swimming', name: '🏊 Swimming', emoji: '🏊', intensity: 'High' },
    { id: 'yoga', name: '🧘 Yoga', emoji: '🧘', intensity: 'Low' },
    { id: 'gym', name: '🏋️ Gym', emoji: '🏋️', intensity: 'High' },
    { id: 'walking', name: '🚶 Walking', emoji: '🚶', intensity: 'Low' },
  ];

  const handleStart = () => {
    const selectedWorkout = workouts.find((w) => w.id === workoutType);
    onStart({
      type: workoutType,
      name: selectedWorkout.name,
      duration,
      startTime: new Date().toLocaleTimeString(),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Start Your Workout</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="workout-type-section">
            <label>Choose Workout Type:</label>
            <div className="workout-grid">
              {workouts.map((workout) => (
                <button
                  key={workout.id}
                  className={`workout-card ${
                    workoutType === workout.id ? 'active' : ''
                  }`}
                  onClick={() => setWorkoutType(workout.id)}
                >
                  <span className="workout-emoji">{workout.emoji}</span>
                  <span className="workout-name">{workout.name.split(' ')[1]}</span>
                  <span className="intensity">{workout.intensity}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="duration-section">
            <label>Duration (minutes):</label>
            <div className="duration-input">
              <button
                onClick={() => setDuration(Math.max(5, duration - 5))}
                className="duration-btn"
              >
                −
              </button>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                min="5"
                max="180"
              />
              <button
                onClick={() => setDuration(Math.min(180, duration + 5))}
                className="duration-btn"
              >
                +
              </button>
            </div>
            <p className="duration-note">Estimated calories: ~{Math.round(duration * 8)}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-start" onClick={handleStart}>
            🎯 Start Workout
          </button>
        </div>
      </div>
    </div>
  );
}
