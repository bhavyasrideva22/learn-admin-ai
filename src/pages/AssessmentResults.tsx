import React from 'react';
import { useAssessment } from '@/contexts/AssessmentContext';
import { ScoreCard } from '@/components/ScoreCard';
import { WISCARRadarChart } from '@/components/WISCARRadarChart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Trophy, BookOpen, ArrowRight } from 'lucide-react';

export function AssessmentResults() {
  const { state } = useAssessment();
  const result = state.result;

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>No results available</div>
      </div>
    );
  }

  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'yes':
        return <CheckCircle className="h-8 w-8 text-success" />;
      case 'maybe':
        return <AlertTriangle className="h-8 w-8 text-warning" />;
      case 'no':
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'success';
      case 'maybe':
        return 'warning';
      case 'no':
        return 'destructive';
    }
  };

  const getRecommendationTitle = () => {
    switch (result.recommendation) {
      case 'yes':
        return 'Excellent Fit!';
      case 'maybe':
        return 'Good Potential';
      case 'no':
        return 'Consider Alternatives';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Your Assessment Results</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your LMS Administration career readiness
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className={`gradient-card shadow-strong border-0 ${
          result.recommendation === 'yes' ? 'ring-2 ring-success/20' :
          result.recommendation === 'maybe' ? 'ring-2 ring-warning/20' :
          'ring-2 ring-destructive/20'
        }`}>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon()}
            </div>
            <CardTitle className="text-2xl">
              {getRecommendationTitle()}
            </CardTitle>
            <div className="flex justify-center">
              <Badge 
                className={`text-lg px-4 py-2 ${
                  result.recommendation === 'yes' ? 'bg-success text-success-foreground' :
                  result.recommendation === 'maybe' ? 'bg-warning text-warning-foreground' :
                  'bg-destructive text-destructive-foreground'
                }`}
              >
                {result.confidenceScore}% Confidence Score
              </Badge>
            </div>
            <CardDescription className="text-base mt-4">
              {result.recommendationReason}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Score Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScoreCard
            title="Psychometric Score"
            score={result.psychometricScore}
            description="Personality traits, interests, and work style compatibility with LMS administration"
          />
          <ScoreCard
            title="Technical Readiness"
            score={result.technicalScore}
            description="Current technical knowledge and aptitude for LMS administration tasks"
          />
        </div>

        {/* WISCAR Analysis */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              WISCAR Framework Analysis
            </CardTitle>
            <CardDescription>
              Detailed breakdown of your readiness across six key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <WISCARRadarChart scores={result.wiscarScores} />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.will}%</div>
                    <div className="text-sm text-muted-foreground">Will</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.interest}%</div>
                    <div className="text-sm text-muted-foreground">Interest</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.skill}%</div>
                    <div className="text-sm text-muted-foreground">Skill</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.cognitive}%</div>
                    <div className="text-sm text-muted-foreground">Cognitive</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.ability}%</div>
                    <div className="text-sm text-muted-foreground">Ability</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.wiscarScores.realWorldAlignment}%</div>
                    <div className="text-sm text-muted-foreground">Real World</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Roles */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle>Recommended Career Roles</CardTitle>
            <CardDescription>
              Roles that align with your assessment profile, ranked by compatibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.careerRoles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {role.matchScore}% match
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Recommended Next Steps
            </CardTitle>
            <CardDescription>
              Personalized action plan based on your assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle>Your Learning Pathway</CardTitle>
            <CardDescription>
              Recommended progression based on your current skill level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-4">
              {result.learningPath.map((stage, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium">{stage}</div>
                  </div>
                  {index < result.learningPath.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Ready to Take the Next Step?</h2>
          <p className="text-muted-foreground">
            Use these insights to guide your career development and learning journey
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.reload()}
          >
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
}