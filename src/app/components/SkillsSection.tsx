import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

const skillData = [
  { name: 'Python', value: 95, color: '#FF6B6B' },
  { name: 'ML/AI', value: 88, color: '#4ECDC4' },
  { name: 'Data', value: 92, color: '#95E1D3' },
  { name: 'Web', value: 78, color: '#FFE66D' },
];

const toolsData = [
  { name: 'TF', score: 90 },
  { name: 'PT', score: 85 },
  { name: 'SK', score: 95 },
  { name: 'PD', score: 98 },
];

const techStack = [
  ['TensorFlow', 'PyTorch', 'Scikit'],
  ['Pandas', 'NumPy', 'SQL'],
  ['React', 'TypeScript', 'Node'],
  ['Docker', 'AWS', 'Git'],
];

export function SkillsSection() {
  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Compact Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <h3 className="text-xs text-gray-500 uppercase tracking-wide">Skills Distribution</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Doughnut Chart */}
        <div className="bg-gray-50 rounded-lg p-3">
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={skillData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={55}
                paddingAngle={2}
                dataKey="value"
              >
                {skillData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {skillData.map((skill) => (
              <div key={skill.name} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
                <span className="text-xs text-gray-600">{skill.name}</span>
                <span className="text-xs text-gray-400 ml-auto font-mono">{skill.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Bar Chart */}
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-2">Framework Proficiency</p>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={toolsData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <Bar dataKey="score" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Heatmap-style Grid */}
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-2">Tech Stack Matrix</p>
          <div className="space-y-1.5">
            {techStack.map((row, i) => (
              <div key={i} className="flex gap-1.5">
                {row.map((tech) => (
                  <div
                    key={tech}
                    className="flex-1 bg-black text-white text-center py-1.5 rounded text-xs hover:bg-[#FF6B6B] transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="p-3 border-t border-gray-200 bg-[#1E1E1E]">
        <code className="text-[#00FF00] font-mono text-xs block">
          <span className="text-gray-500">$</span> pip install -r requirements.txt
        </code>
      </div>
    </div>
  );
}