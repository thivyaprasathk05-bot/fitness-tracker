import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { day: 'Mon', steps: 8500, calories: 450, heartRate: 72 },
  { day: 'Tue', steps: 9200, calories: 520, heartRate: 75 },
  { day: 'Wed', steps: 7800, calories: 380, heartRate: 70 },
  { day: 'Thu', steps: 10200, calories: 650, heartRate: 78 },
  { day: 'Fri', steps: 9500, calories: 580, heartRate: 76 },
  { day: 'Sat', steps: 11000, calories: 720, heartRate: 80 },
  { day: 'Sun', steps: 6500, calories: 300, heartRate: 68 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p>{`${payload[0].payload.day}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function StepsChart() {
  return (
    <div className="chart-container">
      <h3>Steps This Week</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="steps"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorSteps)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CaloriesChart() {
  return (
    <div className="chart-container">
      <h3>Calories Burned</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calories" fill="#f59e0b" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HeartRateChart() {
  return (
    <div className="chart-container">
      <h3>Heart Rate Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" domain={[60, 85]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#ec4899"
            dot={{ fill: '#ec4899', r: 4 }}
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
