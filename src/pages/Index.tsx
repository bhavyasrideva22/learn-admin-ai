import React from 'react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { AssessmentIntro } from './AssessmentIntro';
import { AssessmentQuestions } from './AssessmentQuestions';
import { AssessmentResults } from './AssessmentResults';

const Index = () => {
  const { state } = useAssessment();

  switch (state.currentSection) {
    case 'intro':
      return <AssessmentIntro />;
    case 'psychometric':
    case 'technical':
      return <AssessmentQuestions />;
    case 'results':
      return <AssessmentResults />;
    default:
      return <AssessmentIntro />;
  }
};

export default Index;
