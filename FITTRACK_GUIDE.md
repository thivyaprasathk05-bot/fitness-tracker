# 💪 FitTrack Pro - Advanced Fitness Tracker

A modern, interactive fitness tracking website featuring **3D animations**, **real-time charts**, and a **dark mode UI** built with React, Three.js, and Recharts.

## ✨ Features

### 🎯 Core Fitness Metrics Tracked
- **👟 Steps Counter** - Daily step tracking with progress bar
- **🔥 Calories Burned** - Calorie expenditure tracking
- **❤️ Heart Rate Monitor** - Real-time heart rate display
- **⚖️ Weight Tracking** - Current weight and progress
- **⏱️ Workout Duration** - Time spent exercising
- **😴 Sleep Tracking** - Sleep quality and duration

### 🎨 3D Visualization
- **Interactive 3D Avatar** - Built with Three.js
- **Dynamic Animation** - Body avatar responds to fitness data
- **Smooth Transitions** - Realistic physics-based movements
- **Color-Coded Body Parts** - Different metrics correspond to different body animations

### 📊 Analytics Dashboard
- **Weekly Charts** - Multiple chart types (Area, Bar, Line)
- **Trend Analysis** - Visual progress tracking
- **Custom Tooltips** - Hover for detailed information
- **Responsive Design** - Works on all devices

### 🌙 Dark Mode Design
- **Modern Glassmorphism** - Frosted glass effects
- **Gradient Accents** - Cyan, Blue, Green color scheme
- **Smooth Animations** - Transitions and hover effects
- **Mobile Responsive** - Touch-friendly interface

## 🚀 Project Structure

```
src/
├── components/
│   ├── ThreeDVisualization.jsx    # 3D body avatar using Three.js
│   ├── StatCard.jsx                # Individual metric cards
│   └── Charts.jsx                  # Multiple chart components
├── App.jsx                         # Main dashboard component
├── App.css                         # Complete dark mode styling
├── index.css                       # Global styling
└── main.jsx                        # React entry point
```

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React** | UI Framework |
| **Vite** | Build tool & dev server |
| **Three.js** | 3D graphics & animations |
| **Recharts** | Data visualization & charts |
| **CSS3** | Modern styling with gradients & animations |

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Preview production build
npm run preview
```

## 🎮 How It Works

### 3D Avatar System
The ThreeDVisualization component creates an animated 3D body that:
- **Rotates** based on calorie data
- **Moves arms** based on step count
- **Bobs** with a heartbeat animation
- **Changes rotation** based on heart rate

### Chart Components
Three interactive charts display weekly data:
1. **Steps Chart** - Area chart showing daily steps
2. **Calories Chart** - Bar chart of calories burned
3. **Heart Rate Chart** - Line chart tracking heart rate trends

### Stat Cards
Dynamic cards that display:
- Current value
- Progress bar
- Percentage of daily goal
- Color-coded by metric type

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in [App.css](src/App.css#L2-L13):

```css
:root {
  --accent-cyan: #06b6d4;
  --accent-blue: #3b82f6;
  --accent-green: #10b981;
  /* ... more colors ... */
}
```

### Updating Fitness Goals
Modify the stat calculation in [App.jsx](src/App.jsx#L19-L26):

```javascript
const [stats] = useState({
  steps: 8234,        // Change default values
  calories: 520,
  heartRate: 74,
  weight: 72.5,
  workout: 45,
});
```

### Modifying Chart Data
Update the `chartData` array in [Charts.jsx](src/components/Charts.jsx#L7-L16) with your own weekly metrics.

### 3D Avatar Design
Customize the body in [ThreeDVisualization.jsx](src/components/ThreeDVisualization.jsx#L30-L80):
- Change colors (line 35-43)
- Adjust sizes using geometry parameters
- Modify lighting (line 84-94)

## 📱 Features You Can Add

### Planned Enhancements
- [ ] User authentication
- [ ] Database integration (MongoDB/Firebase)
- [ ] Real API data connection
- [ ] Multiple user profiles
- [ ] Export reports as PDF
- [ ] Mobile app version
- [ ] Wearable device sync (Apple Watch, Fitbit)
- [ ] Social sharing features
- [ ] Workout history timeline
- [ ] Personalized recommendations

### Getting Started with Features
1. Replace mock data with real API calls
2. Add user login system
3. Connect to fitness tracker APIs
4. Implement data persistence

## 🎯 Key Component APIs

### ThreeDVisualization
```jsx
<ThreeDVisualization 
  stats={{
    steps: 8234,
    calories: 520,
    heartRate: 74
  }} 
/>
```

### StatCard
```jsx
<StatCard 
  icon="👟"
  label="Steps"
  value={8234}
  unit="/ 10,000"
  color="green"
  progress={82}
/>
```

### Charts
```jsx
<StepsChart />
<CaloriesChart />
<HeartRateChart />
```

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.js` with your repo name and run:
```bash
npm run build
git add dist && git commit -m "Deploy"
git push origin main
```

## 📊 Performance Optimizations

- **Lazy loading** for charts (only render when visible)
- **Canvas rendering** for 3D with GPU acceleration
- **CSS animations** instead of JavaScript where possible
- **Responsive images** and optimized assets
- **Code splitting** for faster initial load

## 🐛 Troubleshooting

### 3D Avatar Not Showing
- Check browser WebGL support
- Ensure Three.js is properly installed
- Open browser console for errors

### Charts Not Rendering
- Verify Recharts installation
- Check chart container has width/height
- Ensure ResponsiveContainer is used

### Dark Mode Issues
- Clear browser cache
- Check CSS variable definitions
- Verify `color-scheme: dark` in index.css

## 📚 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Recharts Guide](https://recharts.org/)
- [React Hooks](https://react.dev/reference/react)
- [CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Enhancement

1. **Real Data**: Connect to fitness APIs (Google Fit, Apple HealthKit)
2. **Animations**: Add more physics-based interactions
3. **Accessibility**: Improve ARIA labels and keyboard navigation
4. **Performance**: Implement worker threads for data processing
5. **Notifications**: Add push notifications for achievement milestones

---

**Built with ❤️ for fitness enthusiasts**

For questions or suggestions, feel free to reach out!
