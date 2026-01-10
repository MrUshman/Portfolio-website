import { Play, Square } from 'lucide-react';

const notebookCells = [
  {
    type: 'code',
    number: 1,
    code: `import pandas as pd
import numpy as np

life_df = pd.read_csv('life.csv')
life_df.head(3)`,
    output: `   Year  Projects  Skills
0  2022        18      62
1  2023        24      78
2  2024        31      89`,
  },
  {
    type: 'code',
    number: 2,
    code: `print(f"Projects: {life_df['Projects'].iloc[-1]}")
print(f"Skills: {life_df['Skills'].iloc[-1]}")`,
    output: `Projects: 31
Skills: 89`,
  },
  {
    type: 'markdown',
    content: '**Philosophy:** _Less is more. Clean code, clean design._',
  },
];

export function JupyterNotebook() {
  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Notebook Header */}
      <div className="px-4 py-2.5 border-b border-gray-200 flex items-center justify-between bg-[#F5F5F5]">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></div>
          <span className="text-xs font-mono text-gray-600">life.ipynb</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Play className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-400">Python 3</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        {notebookCells.map((cell, idx) => (
          <div key={idx} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
            {cell.type === 'code' ? (
              <div className="flex">
                {/* Execution Number */}
                <div className="w-12 bg-gray-50/50 flex items-start justify-center pt-2 border-r border-gray-100">
                  <span className="text-xs font-mono text-[#FF6B6B]">[{cell.number}]</span>
                </div>
                
                {/* Code + Output */}
                <div className="flex-1">
                  {/* Code Block */}
                  <div className="bg-white p-2.5">
                    <pre className="text-xs font-mono text-gray-700 leading-relaxed">
                      <code>{cell.code}</code>
                    </pre>
                  </div>
                  
                  {/* Output Block */}
                  {cell.output && (
                    <div className="bg-[#FAFAFA] p-2.5 border-t border-gray-100">
                      <pre className="text-xs font-mono text-gray-600 leading-relaxed">
                        {cell.output}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex">
                <div className="w-12 bg-gray-50/50 border-r border-gray-100"></div>
                <div className="flex-1 p-2.5 bg-white">
                  <p className="text-xs text-gray-700">
                    <strong>Philosophy:</strong> <em>Less is more. Clean code, clean design.</em>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Kernel Footer */}
      <div className="px-4 py-2 bg-[#F5F5F5] border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500 font-mono">Idle</span>
        </div>
        <span className="text-xs text-gray-400">3.11.5</span>
      </div>
    </div>
  );
}