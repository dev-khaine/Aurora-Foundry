import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Download, Filter, MoreHorizontal, TrendingUp, Users, Zap } from 'lucide-react';

const data = [
  { name: 'Mon', active: 4000, new: 2400 },
  { name: 'Tue', active: 3000, new: 1398 },
  { name: 'Wed', active: 2000, new: 9800 },
  { name: 'Thu', active: 2780, new: 3908 },
  { name: 'Fri', active: 1890, new: 4800 },
  { name: 'Sat', active: 2390, new: 3800 },
  { name: 'Sun', active: 3490, new: 4300 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 opacity-0 animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-bold text-ink-900">Overview</h1>
          <p className="text-ink-500 text-sm">Welcome back, Architect.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm" icon={<Filter size={14}/>}>Filter</Button>
          <Button variant="secondary" size="sm" icon={<Download size={14}/>}>Export</Button>
          <Button variant="primary" size="sm" icon={<Zap size={14}/>}>New Project</Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="opacity-0 animate-fade-in-up stagger-1">
          <Card>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-ink-500 text-sm">Total Revenue</p>
                <h3 className="text-3xl font-bold mt-2 text-ink-900">$84,232</h3>
              </div>
              <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <TrendingUp size={20} />
              </span>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                +12.5%
              </span>
              <span className="text-ink-400 ml-2">from last month</span>
            </div>
          </Card>
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-2">
          <Card>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-ink-500 text-sm">Active Users</p>
                <h3 className="text-3xl font-bold mt-2 text-ink-900">12.4k</h3>
              </div>
              <span className="p-2 bg-ocean-50 rounded-lg text-ocean-600">
                <Users size={20} />
              </span>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-emerald-600 font-medium flex items-center gap-1">
                +4.3%
              </span>
              <span className="text-ink-400 ml-2">from last month</span>
            </div>
          </Card>
        </div>

        <div className="opacity-0 animate-fade-in-up stagger-3">
          <Card>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-ink-500 text-sm">Compute Usage</p>
                <h3 className="text-3xl font-bold mt-2 text-ink-900">89%</h3>
              </div>
              <span className="p-2 bg-coral-50 rounded-lg text-coral-500">
                <Zap size={20} />
              </span>
            </div>
            <div className="mt-4 w-full bg-ink-100 rounded-full h-1.5">
              <div className="bg-coral-500 h-1.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </Card>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in-up stagger-4">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
             <h3 className="font-semibold text-lg text-ink-900">Activity Stream</h3>
             <Button variant="ghost" size="sm"><MoreHorizontal size={16}/></Button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0B4F6C" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#0B4F6C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" tick={{fill: '#71717a', fontSize: 12}} />
                <YAxis stroke="#71717a" tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderColor: '#e4e4e7', borderRadius: '8px', color: '#000' }}
                  itemStyle={{ color: '#0F1724' }}
                />
                <Area type="monotone" dataKey="active" stroke="#0B4F6C" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" animationDuration={2000} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
           <div className="flex items-center justify-between mb-6">
             <h3 className="font-semibold text-lg text-ink-900">Acquisition</h3>
          </div>
           <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                   cursor={{fill: '#f4f4f5'}}
                   contentStyle={{ backgroundColor: '#fff', borderColor: '#e4e4e7', borderRadius: '8px' }}
                   itemStyle={{ color: '#0F1724' }}
                />
                <Bar dataKey="new" fill="#FF8A6B" radius={[4, 4, 0, 0]} animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};