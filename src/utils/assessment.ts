import { AssessmentAnswer, AssessmentResult, Question } from '@/types/assessment';
import { psychometricQuestions, technicalQuestions } from '@/data/questions';

export function calculateAssessmentResult(answers: AssessmentAnswer[]): AssessmentResult {
  const answerMap = new Map(answers.map(a => [a.questionId, a.value]));
  
  // Calculate psychometric score
  const psychometricAnswers = psychometricQuestions.map(q => ({
    question: q,
    answer: answerMap.get(q.id) || 0
  }));
  
  const psychometricScore = calculateWeightedScore(psychometricAnswers);
  
  // Calculate technical score
  const technicalAnswers = technicalQuestions.map(q => ({
    question: q,
    answer: answerMap.get(q.id) || 0
  }));
  
  const technicalScore = calculateWeightedScore(technicalAnswers);
  
  // Calculate WISCAR scores
  const wiscarScores = calculateWISCARScores(psychometricAnswers, technicalAnswers);
  
  // Calculate overall confidence score
  const confidenceScore = Math.round((psychometricScore * 0.4 + technicalScore * 0.6));
  
  // Determine recommendation
  const recommendation = getRecommendation(confidenceScore, psychometricScore, technicalScore);
  
  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    confidenceScore,
    recommendation: recommendation.level,
    recommendationReason: recommendation.reason,
    nextSteps: getNextSteps(recommendation.level, technicalScore),
    careerRoles: getCareerRoles(confidenceScore),
    learningPath: getLearningPath(technicalScore)
  };
}

function calculateWeightedScore(questionAnswers: { question: Question; answer: number }[]): number {
  const totalWeight = questionAnswers.reduce((sum, qa) => sum + qa.question.weight, 0);
  const weightedSum = questionAnswers.reduce((sum, qa) => {
    const normalizedScore = (qa.answer - 1) / 4 * 100; // Convert 1-5 scale to 0-100
    return sum + (normalizedScore * qa.question.weight);
  }, 0);
  
  return Math.round(weightedSum / totalWeight);
}

function calculateWISCARScores(
  psychometricAnswers: { question: Question; answer: number }[],
  technicalAnswers: { question: Question; answer: number }[]
) {
  const allAnswers = [...psychometricAnswers, ...technicalAnswers];
  
  const dimensions = ['will', 'interest', 'skill', 'cognitive', 'ability', 'real_world'] as const;
  const scores: any = {};
  
  dimensions.forEach(dimension => {
    const dimensionQuestions = allAnswers.filter(qa => qa.question.dimension === dimension);
    if (dimensionQuestions.length > 0) {
      scores[dimension === 'real_world' ? 'realWorldAlignment' : dimension] = calculateWeightedScore(dimensionQuestions);
    } else {
      // Default scores based on overall performance
      scores[dimension === 'real_world' ? 'realWorldAlignment' : dimension] = Math.round((psychometricAnswers.length > 0 ? calculateWeightedScore(psychometricAnswers) : 50));
    }
  });
  
  return scores;
}

function getRecommendation(confidenceScore: number, psychometricScore: number, technicalScore: number) {
  if (confidenceScore >= 75 && psychometricScore >= 70 && technicalScore >= 70) {
    return {
      level: 'yes' as const,
      reason: 'Excellent alignment with LMS Administration. You demonstrate strong technical aptitude and the right personality traits for success in this field.'
    };
  } else if (confidenceScore >= 55 && (psychometricScore >= 60 || technicalScore >= 60)) {
    return {
      level: 'maybe' as const,
      reason: 'Good potential for LMS Administration with some development needed. Focus on strengthening your technical skills or gaining more experience with learning technologies.'
    };
  } else {
    return {
      level: 'no' as const,
      reason: 'LMS Administration may not be the ideal fit based on current assessment. Consider exploring related roles or developing foundational skills first.'
    };
  }
}

function getNextSteps(recommendation: 'yes' | 'maybe' | 'no', technicalScore: number): string[] {
  if (recommendation === 'yes') {
    return [
      'Complete "Moodle Administration Basics" course',
      'Practice LMS user support scenarios',
      'Earn Moodle Certified Administrator credential',
      'Gain hands-on experience with LMS setup and configuration'
    ];
  } else if (recommendation === 'maybe') {
    if (technicalScore < 60) {
      return [
        'Take foundational IT and networking courses',
        'Practice basic database and server management',
        'Learn about SCORM and xAPI standards',
        'Volunteer for tech support roles to build experience'
      ];
    } else {
      return [
        'Develop communication and user support skills',
        'Practice explaining technical concepts to non-technical users',
        'Consider customer service or help desk experience',
        'Take courses in educational technology'
      ];
    }
  } else {
    return [
      'Explore roles like Instructional Designer or Help Desk Support',
      'Consider Educational Technology Support Specialist positions',
      'Look into Content Management roles in EdTech companies',
      'Develop foundational technical skills before reassessing'
    ];
  }
}

function getCareerRoles(confidenceScore: number) {
  const baseRoles = [
    {
      title: 'LMS Administrator',
      description: 'Manage and troubleshoot LMS systems, ensuring smooth operation and user support',
      matchScore: confidenceScore
    },
    {
      title: 'Learning Technologist',
      description: 'Implement new learning technologies and integrate educational tools',
      matchScore: Math.max(0, confidenceScore - 10)
    },
    {
      title: 'E-learning Support Specialist',
      description: 'Provide technical support to educators and learners using digital platforms',
      matchScore: Math.max(0, confidenceScore - 15)
    },
    {
      title: 'Training Coordinator',
      description: 'Schedule, track, and manage training activities and learning programs',
      matchScore: Math.max(0, confidenceScore - 20)
    },
    {
      title: 'Digital Learning Analyst',
      description: 'Analyze LMS data and learner metrics to improve educational outcomes',
      matchScore: Math.max(0, confidenceScore - 25)
    }
  ];
  
  return baseRoles.filter(role => role.matchScore >= 30).sort((a, b) => b.matchScore - a.matchScore);
}

function getLearningPath(technicalScore: number): string[] {
  if (technicalScore >= 80) {
    return ['Advanced', 'Job-ready', 'Specialization'];
  } else if (technicalScore >= 60) {
    return ['Intermediate', 'Advanced', 'Job-ready'];
  } else {
    return ['Beginner', 'Intermediate', 'Advanced'];
  }
}