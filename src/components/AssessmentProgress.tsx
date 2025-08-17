import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle } from 'lucide-react';

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
  sectionTitle: string;
}

export function AssessmentProgress({ currentStep, totalSteps, sectionTitle }: AssessmentProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">{sectionTitle}</h2>
        <span className="text-sm text-muted-foreground">
          {currentStep} of {totalSteps}
        </span>
      </div>
      
      <Progress value={progressPercentage} className="h-3" />
      
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center space-x-1">
            {i < currentStep ? (
              <CheckCircle className="h-4 w-4 text-success" />
            ) : i === currentStep ? (
              <Circle className="h-4 w-4 text-primary fill-current" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground/50" />
            )}
            {i < totalSteps - 1 && <div className="w-2 h-px bg-border" />}
          </div>
        ))}
      </div>
    </div>
  );
}