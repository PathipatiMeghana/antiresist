import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout } from '@/app/components/MainLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { PieChart as PieChartIcon, Grid3x3, TrendingUp, Download, Share2, Filter, BarChart3, AlertCircle } from 'lucide-react';

interface TestResult {
  antibiotic: string;
  classification: 'sensitive' | 'intermediate' | 'resistant';
  bacteria?: string;
  date?: string;
}

export default function BarChartVisualization() {
  const navigate = useNavigate();
  const [chartType, setChartType] = useState<'resistance' | 'sensitivity' | 'comparison'>('resistance');
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [hasData, setHasData] = useState(false);

  // Load test results from localStorage
  useEffect(() => {
    const loadTestResults = () => {
      try {
        // Try to load from localStorage
        const stored = localStorage.getItem('antibioticTestResults');
        if (stored) {
          const results: TestResult[] = JSON.parse(stored);
          if (results.length > 0) {
            setTestResults(results);
            setHasData(true);
            return;
          }
        }
        
        // If no data, use sample data for demonstration
        const sampleData: TestResult[] = [
          { antibiotic: 'Amoxicillin', classification: 'resistant', bacteria: 'E. coli' },
          { antibiotic: 'Amoxicillin', classification: 'sensitive', bacteria: 'Streptococcus' },
          { antibiotic: 'Ciprofloxacin', classification: 'sensitive', bacteria: 'E. coli' },
          { antibiotic: 'Ciprofloxacin', classification: 'sensitive', bacteria: 'P. aeruginosa' },
          { antibiotic: 'Ceftriaxone', classification: 'intermediate', bacteria: 'E. coli' },
          { antibiotic: 'Ceftriaxone', classification: 'sensitive', bacteria: 'K. pneumoniae' },
          { antibiotic: 'Gentamicin', classification: 'sensitive', bacteria: 'E. coli' },
          { antibiotic: 'Gentamicin', classification: 'sensitive', bacteria: 'S. aureus' },
          { antibiotic: 'Vancomycin', classification: 'sensitive', bacteria: 'S. aureus' },
          { antibiotic: 'Azithromycin', classification: 'resistant', bacteria: 'E. coli' },
          { antibiotic: 'Doxycycline', classification: 'sensitive', bacteria: 'Streptococcus' },
        ];
        setTestResults(sampleData);
        setHasData(false);
      } catch (error) {
        console.error('Error loading test results:', error);
        setTestResults([]);
        setHasData(false);
      }
    };

    loadTestResults();
  }, []);

  // Process data for resistance pattern chart
  const getResistanceData = () => {
    const antibioticMap = new Map<string, { sensitive: number; intermediate: number; resistant: number }>();
    
    testResults.forEach(result => {
      if (!antibioticMap.has(result.antibiotic)) {
        antibioticMap.set(result.antibiotic, { sensitive: 0, intermediate: 0, resistant: 0 });
      }
      const counts = antibioticMap.get(result.antibiotic)!;
      counts[result.classification]++;
    });

    return Array.from(antibioticMap.entries())
      .map(([name, counts]) => ({ name, ...counts }))
      .slice(0, 7); // Show top 7
  };

  // Process data for sensitivity percentage chart
  const getSensitivityData = () => {
    const antibioticMap = new Map<string, { total: number; sensitive: number }>();
    
    testResults.forEach(result => {
      if (!antibioticMap.has(result.antibiotic)) {
        antibioticMap.set(result.antibiotic, { total: 0, sensitive: 0 });
      }
      const counts = antibioticMap.get(result.antibiotic)!;
      counts.total++;
      if (result.classification === 'sensitive') {
        counts.sensitive++;
      }
    });

    const data = Array.from(antibioticMap.entries())
      .map(([name, counts]) => ({
        name,
        percentage: Math.round((counts.sensitive / counts.total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .map(item => ({
        ...item,
        color: item.percentage >= 70 ? '#10b981' : 
               item.percentage >= 50 ? '#84cc16' :
               item.percentage >= 30 ? '#f59e0b' : '#ef4444'
      }));

    return data;
  };

  // Process data for bacteria comparison
  const getComparisonData = () => {
    const bacteriaMap = new Map<string, { sensitive: number; resistant: number; total: number }>();
    
    testResults.forEach(result => {
      const bacteria = result.bacteria || 'Unknown';
      if (!bacteriaMap.has(bacteria)) {
        bacteriaMap.set(bacteria, { sensitive: 0, resistant: 0, total: 0 });
      }
      const counts = bacteriaMap.get(bacteria)!;
      counts.total++;
      if (result.classification === 'sensitive') {
        counts.sensitive++;
      } else if (result.classification === 'resistant') {
        counts.resistant++;
      }
    });

    return Array.from(bacteriaMap.entries())
      .map(([bacteria, counts]) => ({
        bacteria,
        sensitive: Math.round((counts.sensitive / counts.total) * 100),
        resistant: Math.round((counts.resistant / counts.total) * 100),
      }))
      .slice(0, 5);
  };

  // Calculate overall statistics
  const getStatistics = () => {
    if (testResults.length === 0) return { sensitive: 0, intermediate: 0, resistant: 0 };
    
    const counts = testResults.reduce((acc, result) => {
      acc[result.classification]++;
      return acc;
    }, { sensitive: 0, intermediate: 0, resistant: 0 });

    const total = testResults.length;
    return {
      sensitive: Math.round((counts.sensitive / total) * 100),
      intermediate: Math.round((counts.intermediate / total) * 100),
      resistant: Math.round((counts.resistant / total) * 100),
    };
  };

  const resistanceData = getResistanceData();
  const sensitivityData = getSensitivityData();
  const comparisonData = getComparisonData();
  const statistics = getStatistics();
  
  return (
    <MainLayout title="Bar Chart Analysis">
      <div className="space-y-6 mt-6">
        {/* Visual Showcase Banner */}
        <Card className="overflow-hidden">
          <div className="relative h-40">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMTM3MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical Data Visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-5 h-5" />
                  <h2 className="font-bold text-lg">Advanced Analytics</h2>
                </div>
                <p className="text-sm text-gray-200">Interactive resistance pattern visualization</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Chart Type Selector */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex gap-2 overflow-x-auto">
            <Button
              onClick={() => setChartType('resistance')}
              variant={chartType === 'resistance' ? 'default' : 'outline'}
              className="rounded-xl whitespace-nowrap"
            >
              Resistance Pattern
            </Button>
            <Button
              onClick={() => setChartType('sensitivity')}
              variant={chartType === 'sensitivity' ? 'default' : 'outline'}
              className="rounded-xl whitespace-nowrap"
            >
              Sensitivity %
            </Button>
            <Button
              onClick={() => setChartType('comparison')}
              variant={chartType === 'comparison' ? 'default' : 'outline'}
              className="rounded-xl whitespace-nowrap"
            >
              By Bacteria
            </Button>
          </div>
        </div>

        {/* Resistance Pattern Chart */}
        {chartType === 'resistance' && (
          <Card className="p-4">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Antibiotic Resistance Pattern</h3>
              <p className="text-sm text-gray-600">Distribution across sensitivity categories</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={resistanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100} 
                  fontSize={11}
                  stroke="#6b7280"
                />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }} 
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="sensitive" fill="#10b981" name="Sensitive" radius={[8, 8, 0, 0]} />
                <Bar dataKey="intermediate" fill="#f59e0b" name="Intermediate" radius={[8, 8, 0, 0]} />
                <Bar dataKey="resistant" fill="#ef4444" name="Resistant" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            
            {/* Statistics */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-700">{statistics.sensitive}%</div>
                <div className="text-xs text-green-600">Sensitive</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-orange-700">{statistics.intermediate}%</div>
                <div className="text-xs text-orange-600">Intermediate</div>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-700">{statistics.resistant}%</div>
                <div className="text-xs text-red-600">Resistant</div>
              </div>
            </div>
          </Card>
        )}

        {/* Sensitivity Percentage Chart */}
        {chartType === 'sensitivity' && (
          <Card className="p-4">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Sensitivity Percentage</h3>
              <p className="text-sm text-gray-600">Ranked by effectiveness</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={sensitivityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={100}
                  fontSize={11}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
                  {sensitivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Top 3 Recommendations */}
            <div className="mt-4 space-y-2">
              <div className="text-sm font-semibold text-gray-700 mb-2">🏆 Most Effective Antibiotics:</div>
              <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div className="flex-1 text-sm font-medium">Ciprofloxacin</div>
                <div className="text-sm font-bold text-green-700">90%</div>
              </div>
              <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div className="flex-1 text-sm font-medium">Gentamicin</div>
                <div className="text-sm font-bold text-green-700">80%</div>
              </div>
              <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div className="flex-1 text-sm font-medium">Vancomycin</div>
                <div className="text-sm font-bold text-green-700">70%</div>
              </div>
            </div>
          </Card>
        )}

        {/* Comparison by Bacteria Chart */}
        {chartType === 'comparison' && (
          <Card className="p-4">
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Resistance by Bacteria Type</h3>
              <p className="text-sm text-gray-600">Comparing different bacterial strains</p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="bacteria" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100} 
                  fontSize={11}
                  stroke="#6b7280"
                />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="sensitive" fill="#10b981" name="Sensitive" stackId="a" radius={[0, 0, 0, 0]} />
                <Bar dataKey="resistant" fill="#ef4444" name="Resistant" stackId="a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            {/* Bacteria Analysis */}
            <div className="mt-4 space-y-2">
              <div className="text-sm font-semibold text-gray-700 mb-2">🦠 Bacteria Risk Assessment:</div>
              <div className="flex items-center gap-2 bg-red-50 p-2 rounded-lg">
                <div className="text-xl">⚠️</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">P. aeruginosa</div>
                  <div className="text-xs text-gray-600">Highest resistance (60%)</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded-lg">
                <div className="text-xl">⚡</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">S. aureus</div>
                  <div className="text-xs text-gray-600">High resistance (55%)</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                <div className="text-xl">✅</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Streptococcus</div>
                  <div className="text-xs text-gray-600">Most treatable (70% sensitive)</div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="py-5 rounded-xl border-2">
            <Download className="w-5 h-5 mr-2" />
            Export Data
          </Button>
          <Button variant="outline" className="py-5 rounded-xl border-2">
            <Share2 className="w-5 h-5 mr-2" />
            Share Report
          </Button>
        </div>

        {/* Other Visualizations */}
        <Card className="p-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-3">Other Visualizations</h4>
          <div className="grid grid-cols-3 gap-3">
            <Button 
              onClick={() => navigate('/visualization/pie-chart')} 
              variant="outline" 
              className="flex-col h-20 rounded-xl"
            >
              <PieChartIcon className="w-6 h-6 mb-1" />
              <span className="text-xs">Pie Chart</span>
            </Button>
            <Button 
              onClick={() => navigate('/visualization/heat-map')} 
              variant="outline" 
              className="flex-col h-20 rounded-xl"
            >
              <Grid3x3 className="w-6 h-6 mb-1" />
              <span className="text-xs">Heat Map</span>
            </Button>
            <Button 
              onClick={() => navigate('/visualization/trend-graph')} 
              variant="outline" 
              className="flex-col h-20 rounded-xl"
            >
              <TrendingUp className="w-6 h-6 mb-1" />
              <span className="text-xs">Trends</span>
            </Button>
          </div>
        </Card>
        
        <div className="grid grid-cols-2 gap-3 pb-6">
          <Button 
            onClick={() => navigate('/reports/generate')} 
            variant="outline" 
            className="py-6 rounded-xl"
          >
            Generate Report
          </Button>
          <Button 
            onClick={() => navigate('/home')} 
            className="bg-blue-600 py-6 rounded-xl hover:bg-blue-700"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}