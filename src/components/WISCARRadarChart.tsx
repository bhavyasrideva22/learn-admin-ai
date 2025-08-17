import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface WISCARRadarChartProps {
  scores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorldAlignment: number;
  };
}

export function WISCARRadarChart({ scores }: WISCARRadarChartProps) {
  const data = [
    { dimension: 'Will', score: scores.will },
    { dimension: 'Interest', score: scores.interest },
    { dimension: 'Skill', score: scores.skill },
    { dimension: 'Cognitive', score: scores.cognitive },
    { dimension: 'Ability', score: scores.ability },
    { dimension: 'Real World', score: scores.realWorldAlignment },
  ];

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid 
            stroke="hsl(var(--border))" 
            strokeWidth={1}
          />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ 
              fontSize: 12, 
              fill: 'hsl(var(--foreground))',
              fontWeight: 500
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ 
              fontSize: 10, 
              fill: 'hsl(var(--muted-foreground))' 
            }}
          />
          <Radar
            name="WISCAR Scores"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}