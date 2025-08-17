import React from 'react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Target, BookOpen, CheckCircle } from 'lucide-react';

export function AssessmentIntro() {
  const { startAssessment } = useAssessment();

  const careers = [
    'LMS Administrator',
    'Learning Technologist', 
    'E-learning Support Specialist',
    'Training Coordinator',
    'Digital Learning Analyst'
  ];

  const skills = [
    'Technical troubleshooting',
    'System administration',
    'User support',
    'Analytical thinking',
    'Communication skills',
    'Technology adaptation'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-hero py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Is LMS Administration the Right Career Path for You?
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover your potential in Learning Management System administration through our comprehensive assessment
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span>20-30 minutes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span>Scientifically validated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Target className="h-5 w-5" />
              <span>Personalized results</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* What is LMS Administration */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="h-6 w-6 text-primary" />
              What is LMS Administration?
            </CardTitle>
            <CardDescription className="text-lg">
              LMS Administrators manage and maintain digital learning platforms that deliver, track, and report on e-learning courses. 
              They ensure smooth operation, user support, and data integrity of systems like Moodle, Blackboard, Canvas, or TalentLMS.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Assessment Overview */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Assessment Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Psychometric Section</h4>
                    <p className="text-sm text-muted-foreground">Personality traits, interests, and work preferences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Technical Assessment</h4>
                    <p className="text-sm text-muted-foreground">LMS knowledge, troubleshooting skills, and technical aptitude</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">WISCAR Analysis</h4>
                    <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive, Ability, Real-world alignment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">What You'll Get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Career Fit Score</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive analysis of your suitability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Personalized Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Next steps and learning pathways</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Career Alternatives</h4>
                    <p className="text-sm text-muted-foreground">Related roles that match your profile</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Roles */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Typical Career Paths</CardTitle>
            <CardDescription>
              Successful completion can lead to various roles in educational technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {careers.map((career, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Required */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Key Skills for Success</CardTitle>
            <CardDescription>
              Essential abilities that contribute to LMS administration success
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-accent/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Discover Your Potential?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take our comprehensive assessment to get personalized insights into your career readiness 
            and receive tailored recommendations for your professional development.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={startAssessment}
            className="font-semibold"
          >
            Start Assessment
          </Button>
          <p className="text-sm text-muted-foreground">
            No registration required • Results available immediately
          </p>
        </div>
      </div>
    </div>
  );
}