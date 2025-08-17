import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AssessmentState, AssessmentAnswer, AssessmentResult } from '@/types/assessment';
import { calculateAssessmentResult } from '@/utils/assessment';

interface AssessmentContextType {
  state: AssessmentState;
  startAssessment: () => void;
  answerQuestion: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToSection: (section: AssessmentState['currentSection']) => void;
  calculateResults: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

type AssessmentAction =
  | { type: 'START_ASSESSMENT' }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; value: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'GO_TO_SECTION'; payload: AssessmentState['currentSection'] }
  | { type: 'CALCULATE_RESULTS'; payload: AssessmentResult };

const initialState: AssessmentState = {
  currentSection: 'intro',
  currentQuestionIndex: 0,
  answers: [],
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'START_ASSESSMENT':
      return {
        ...state,
        currentSection: 'psychometric',
        currentQuestionIndex: 0,
      };
    
    case 'ANSWER_QUESTION':
      const existingAnswerIndex = state.answers.findIndex(
        answer => answer.questionId === action.payload.questionId
      );
      
      let newAnswers;
      if (existingAnswerIndex >= 0) {
        newAnswers = [...state.answers];
        newAnswers[existingAnswerIndex] = action.payload;
      } else {
        newAnswers = [...state.answers, action.payload];
      }
      
      return {
        ...state,
        answers: newAnswers,
      };
    
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
      };
    
    case 'GO_TO_SECTION':
      return {
        ...state,
        currentSection: action.payload,
        currentQuestionIndex: 0,
      };
    
    case 'CALCULATE_RESULTS':
      return {
        ...state,
        currentSection: 'results',
        result: action.payload,
      };
    
    default:
      return state;
  }
}

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  const startAssessment = () => {
    dispatch({ type: 'START_ASSESSMENT' });
  };

  const answerQuestion = (questionId: string, value: number) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, value } });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const previousQuestion = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };

  const goToSection = (section: AssessmentState['currentSection']) => {
    dispatch({ type: 'GO_TO_SECTION', payload: section });
  };

  const calculateResults = () => {
    const result = calculateAssessmentResult(state.answers);
    dispatch({ type: 'CALCULATE_RESULTS', payload: result });
  };

  return (
    <AssessmentContext.Provider
      value={{
        state,
        startAssessment,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        goToSection,
        calculateResults,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}