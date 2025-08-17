import { Question } from '@/types/assessment';

export const psychometricQuestions: Question[] = [
  {
    id: 'p1',
    text: 'I enjoy diagnosing and resolving technical problems.',
    type: 'psychometric',
    category: 'interest',
    dimension: 'interest',
    weight: 1.2,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  },
  {
    id: 'p2',
    text: 'I prefer working with structured processes and clear guidelines.',
    type: 'psychometric',
    category: 'personality',
    dimension: 'cognitive',
    weight: 1.0,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  },
  {
    id: 'p3',
    text: 'I am motivated to support others in their learning journey.',
    type: 'psychometric',
    category: 'personality',
    dimension: 'will',
    weight: 1.1,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  },
  {
    id: 'p4',
    text: 'I enjoy learning new technologies and staying updated with digital tools.',
    type: 'psychometric',
    category: 'interest',
    dimension: 'ability',
    weight: 1.3,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  },
  {
    id: 'p5',
    text: 'I am comfortable communicating technical concepts to non-technical users.',
    type: 'psychometric',
    category: 'personality',
    dimension: 'real_world',
    weight: 1.2,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  },
  {
    id: 'p6',
    text: 'I set goals to improve my technical skills regularly.',
    type: 'psychometric',
    category: 'personality',
    dimension: 'will',
    weight: 1.0,
    options: [
      { value: 1, text: 'Never' },
      { value: 2, text: 'Rarely' },
      { value: 3, text: 'Sometimes' },
      { value: 4, text: 'Often' },
      { value: 5, text: 'Always' }
    ]
  },
  {
    id: 'p7',
    text: 'I follow educational technology updates and LMS developments.',
    type: 'psychometric',
    category: 'interest',
    dimension: 'interest',
    weight: 1.4,
    options: [
      { value: 1, text: 'Never' },
      { value: 2, text: 'Rarely' },
      { value: 3, text: 'Sometimes' },
      { value: 4, text: 'Often' },
      { value: 5, text: 'Always' }
    ]
  },
  {
    id: 'p8',
    text: 'I am patient when helping users with technical difficulties.',
    type: 'psychometric',
    category: 'personality',
    dimension: 'real_world',
    weight: 1.3,
    options: [
      { value: 1, text: 'Strongly Disagree' },
      { value: 2, text: 'Disagree' },
      { value: 3, text: 'Neutral' },
      { value: 4, text: 'Agree' },
      { value: 5, text: 'Strongly Agree' }
    ]
  }
];

export const technicalQuestions: Question[] = [
  {
    id: 't1',
    text: 'What is the primary role of an LMS Administrator?',
    type: 'technical',
    category: 'knowledge',
    dimension: 'skill',
    weight: 1.5,
    options: [
      { value: 1, text: 'Only creating course content' },
      { value: 3, text: 'Managing user accounts and basic troubleshooting' },
      { value: 5, text: 'Complete system management, user support, data integrity, and platform optimization' },
      { value: 2, text: 'Just technical support for users' }
    ]
  },
  {
    id: 't2',
    text: 'How would you resolve a user reporting they cannot log into the LMS?',
    type: 'technical',
    category: 'aptitude',
    dimension: 'cognitive',
    weight: 1.3,
    options: [
      { value: 2, text: 'Tell them to try again later' },
      { value: 5, text: 'Check account status, verify credentials, test login process, and provide step-by-step assistance' },
      { value: 3, text: 'Reset their password immediately' },
      { value: 1, text: 'Refer them to someone else' }
    ]
  },
  {
    id: 't3',
    text: 'What does SCORM compliance mean in LMS context?',
    type: 'technical',
    category: 'knowledge',
    dimension: 'skill',
    weight: 1.4,
    options: [
      { value: 1, text: 'A security protocol' },
      { value: 2, text: 'A user interface standard' },
      { value: 5, text: 'A standard for packaging and delivering e-learning content that ensures interoperability' },
      { value: 3, text: 'A database management system' }
    ]
  },
  {
    id: 't4',
    text: 'Which reports would help evaluate learner progress effectively?',
    type: 'technical',
    category: 'aptitude',
    dimension: 'real_world',
    weight: 1.2,
    options: [
      { value: 2, text: 'Only login frequency reports' },
      { value: 5, text: 'Completion rates, time spent, assessment scores, engagement metrics, and learning path progress' },
      { value: 3, text: 'Just final grades' },
      { value: 1, text: 'User registration dates' }
    ]
  },
  {
    id: 't5',
    text: 'What basic networking knowledge is important for LMS administration?',
    type: 'technical',
    category: 'knowledge',
    dimension: 'skill',
    weight: 1.1,
    options: [
      { value: 1, text: 'No networking knowledge needed' },
      { value: 3, text: 'Basic understanding of internet connectivity' },
      { value: 5, text: 'Understanding of TCP/IP, DNS, SSL certificates, bandwidth, and network troubleshooting' },
      { value: 2, text: 'Only knowing how to use WiFi' }
    ]
  },
  {
    id: 't6',
    text: 'How do you ensure data backup and system security in an LMS?',
    type: 'technical',
    category: 'aptitude',
    dimension: 'cognitive',
    weight: 1.4,
    options: [
      { value: 1, text: 'It\'s not my responsibility' },
      { value: 2, text: 'Just change passwords regularly' },
      { value: 5, text: 'Regular automated backups, user access controls, security updates, monitoring, and incident response plans' },
      { value: 3, text: 'Only backup user data monthly' }
    ]
  }
];

export const allQuestions = [...psychometricQuestions, ...technicalQuestions];