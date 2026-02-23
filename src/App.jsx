import { useState } from 'react';
import { ThreeDVisualization } from './components/ThreeDVisualization';
import { StatCard } from './components/StatCard';
import { StepsChart, CaloriesChart, HeartRateChart } from './components/Charts';
import { WorkoutModal } from './components/WorkoutModal';
import { ReportsView } from './components/ReportsView';
import { SettingsModal } from './components/SettingsModal';
import { GoalsModal } from './components/GoalsModal';
import './App.css';

function App() {
  const [stats, setStats] = useState({
    steps: 8234,
    calories: 520,
    heartRate: 74,
    weight: 72.5,
    workout: 45,
  });

  const [modals, setModals] = useState({
    workout: false,
    reports: false,
    settings: false,
    goals: false,
  });

  const [activeWorkout, setActiveWorkout] = useState(null);

  const openModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: false }));
  };

  const handleStartWorkout = (workoutData) => {
    setActiveWorkout(workoutData);
    console.log('Workout started:', workoutData);
    // Here you can add toast notification or update UI
  };

  return (
    <div className="fitness-app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">💪 FitTrack Pro</h1>
          <p className="app-subtitle">Your Personal 3D Fitness Companion</p>
        </div>
        <div className="header-date">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </header>

      <main className="app-main">
        {/* 3D Visualization Section */}
        <section className="visualization-section">
          <div className="section-title">
            <h2>Your Activity Avatar</h2>
            <p>Watch your fitness data come to life in 3D</p>
          </div>
          <div className="visualization-container">
            <ThreeDVisualization stats={stats} />
          </div>
        </section>

        {/* Stats Cards Grid */}
        <section className="stats-section">
          <div className="section-title">
            <h2>Today's Stats</h2>
          </div>
          <div className="stats-grid">
            <StatCard
              icon="👟"
              label="Steps"
              value={stats.steps.toLocaleString()}
              unit="/ 10,000"
              color="green"
              progress={(stats.steps / 10000) * 100}
            />
            <StatCard
              icon="🔥"
              label="Calories"
              value={stats.calories}
              unit="kcal"
              color="orange"
              progress={(stats.calories / 750) * 100}
            />
            <StatCard
              icon="❤️"
              label="Heart Rate"
              value={stats.heartRate}
              unit="bpm"
              color="pink"
              progress={(stats.heartRate / 100) * 100}
            />
            <StatCard
              icon="⚖️"
              label="Weight"
              value={stats.weight}
              unit="kg"
              color="blue"
              progress={75}
            />
            <StatCard
              icon="⏱️"
              label="Workout"
              value={stats.workout}
              unit="min"
              color="cyan"
              progress={(stats.workout / 60) * 100}
            />
            <StatCard
              icon="😴"
              label="Sleep"
              value="7h 30m"
              unit="/ 8h"
              color="indigo"
              progress={93}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <div className="section-title">
            <h2>Weekly Analytics</h2>
          </div>
          <div className="charts-grid">
            <StepsChart />
            <CaloriesChart />
            <HeartRateChart />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="actions-section">
          <div className="section-title">
            <h2>Quick Actions</h2>
          </div>
          <div className="actions-grid">
            <button
              className="action-btn btn-primary"
              onClick={() => openModal('workout')}
            >
              <span className="btn-icon">🏃</span>
              <span>Start Workout</span>
            </button>
            <button
              className="action-btn btn-secondary"
              onClick={() => openModal('reports')}
            >
              <span className="btn-icon">📊</span>
              <span>View Reports</span>
            </button>
            <button
              className="action-btn btn-secondary"
              onClick={() => openModal('settings')}
            >
              <span className="btn-icon">⚙️</span>
              <span>Settings</span>
            </button>
            <button
              className="action-btn btn-secondary"
              onClick={() => openModal('goals')}
            >
              <span className="btn-icon">🎯</span>
              <span>Set Goals</span>
            </button>
          </div>
        </section>
      </main>

      {/* Active Workout Notification */}
      {activeWorkout && (
        <div className="workout-notification">
          <span>{activeWorkout.name} • {activeWorkout.duration} min</span>
          <span className="time">Started at {activeWorkout.startTime}</span>
        </div>
      )}

      {/* Modals */}
      <WorkoutModal
        isOpen={modals.workout}
        onClose={() => closeModal('workout')}
        onStart={handleStartWorkout}
      />
      <ReportsView
        isOpen={modals.reports}
        onClose={() => closeModal('reports')}
      />
      <SettingsModal
        isOpen={modals.settings}
        onClose={() => closeModal('settings')}
      />
      <GoalsModal
        isOpen={modals.goals}
        onClose={() => closeModal('goals')}
      />

      <footer className="app-footer">
        <p>© 2026 FitTrack Pro • Keep Moving, Keep Living</p>
      </footer>
    </div>
  );
}

export default App;
