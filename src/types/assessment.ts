export interface Question {
  id: string;
  text: string;
  type: 'psychometric' | 'technical';
  category: 'interest' | 'personality' | 'aptitude' | 'knowledge';
  dimension?: 'will' | 'interest' | 'skill' | 'cognitive' | 'ability' | 'real_world';
  options: QuestionOption[];
  weight: number;
}

export interface QuestionOption {
  value: number;
  text: string;
}

export interface AssessmentAnswer {
  questionId: string;
  value: number;
}

export interface AssessmentResult {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorldAlignment: number;
  };
  confidenceScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  recommendationReason: string;
  nextSteps: string[];
  careerRoles: CareerRole[];
  learningPath: string[];
}

export interface CareerRole {
  title: string;
  description: string;
  matchScore: number;
}

export interface AssessmentState {
  currentSection: 'intro' | 'psychometric' | 'technical' | 'results';
  currentQuestionIndex: number;
  answers: AssessmentAnswer[];
  result?: AssessmentResult;
}