import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ScoreCardProps {
  title: string;
  score: number;
  description: string;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

export function ScoreCard({ title, score, description, variant = 'default' }: ScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'destructive';
  };

  const scoreVariant = variant === 'default' ? getScoreColor(score) : variant;

  return (
    <Card className="gradient-card shadow-soft border-0 h-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <Badge 
            variant={scoreVariant === 'success' ? 'default' : 'secondary'}
            className={
              scoreVariant === 'success' 
                ? 'bg-success text-success-foreground' 
                : scoreVariant === 'warning'
                ? 'bg-warning text-warning-foreground'
                : 'bg-destructive text-destructive-foreground'
            }
          >
            {score}%
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${
                scoreVariant === 'success' 
                  ? 'bg-success' 
                  : scoreVariant === 'warning'
                  ? 'bg-warning'
                  : 'bg-destructive'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}