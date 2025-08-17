import React from 'react';
import { Question } from '@/types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface AssessmentQuestionProps {
  question: Question;
  currentAnswer?: number;
  onAnswer: (value: number) => void;
}

export function AssessmentQuestion({ question, currentAnswer, onAnswer }: AssessmentQuestionProps) {
  return (
    <Card className="gradient-card shadow-medium border-0">
      <CardHeader>
        <CardTitle className="text-lg leading-relaxed text-foreground">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={currentAnswer?.toString()}
          onValueChange={(value) => onAnswer(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-smooth cursor-pointer">
              <RadioGroupItem 
                value={option.value.toString()} 
                id={`option-${index}`}
                className="border-2 border-primary/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
              />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer text-sm leading-relaxed"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}