import React from 'react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { AssessmentQuestion } from '@/components/AssessmentQuestion';
import { AssessmentProgress } from '@/components/AssessmentProgress';
import { Button } from '@/components/ui/button';
import { psychometricQuestions, technicalQuestions } from '@/data/questions';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function AssessmentQuestions() {
  const { state, answerQuestion, nextQuestion, previousQuestion, goToSection, calculateResults } = useAssessment();
  
  const isPsychometric = state.currentSection === 'psychometric';
  const questions = isPsychometric ? psychometricQuestions : technicalQuestions;
  const currentQuestion = questions[state.currentQuestionIndex];
  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion?.id)?.value;
  
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = state.currentQuestionIndex === 0;
  const hasAnswer = currentAnswer !== undefined;

  const handleNext = () => {
    if (isLastQuestion) {
      if (isPsychometric) {
        goToSection('technical');
      } else {
        calculateResults();
      }
    } else {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    if (isFirstQuestion && !isPsychometric) {
      goToSection('psychometric');
      // Navigate to last question of psychometric section
      // This would need additional logic to set the correct question index
    } else {
      previousQuestion();
    }
  };

  const handleAnswer = (value: number) => {
    answerQuestion(currentQuestion.id, value);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const sectionTitle = isPsychometric ? 'Psychometric Assessment' : 'Technical Assessment';
  const totalQuestions = questions.length;
  const currentQuestionNumber = state.currentQuestionIndex + 1;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Progress */}
        <AssessmentProgress
          currentStep={currentQuestionNumber}
          totalSteps={totalQuestions}
          sectionTitle={sectionTitle}
        />

        {/* Question */}
        <div className="space-y-6">
          <AssessmentQuestion
            question={currentQuestion}
            currentAnswer={currentAnswer}
            onAnswer={handleAnswer}
          />

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstQuestion && isPsychometric}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="text-sm text-muted-foreground">
              Question {currentQuestionNumber} of {totalQuestions}
            </div>

            <Button
              variant="assessment"
              onClick={handleNext}
              disabled={!hasAnswer}
              className="flex items-center gap-2"
            >
              {isLastQuestion ? (
                isPsychometric ? 'Continue to Technical' : 'View Results'
              ) : (
                'Next'
              )}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Section indicator */}
        <div className="flex justify-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isPsychometric 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-success text-success-foreground'
          }`}>
            {isPsychometric ? 'Psychometric' : 'Technical'}
          </div>
          {!isPsychometric && (
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              Psychometric ✓
            </div>
          )}
        </div>
      </div>
    </div>
  );
}