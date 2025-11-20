
import { UserProgressData, TestResult, Achievement } from '../types';

export const POINTS_PER_LEVEL = 150;
export const POINTS_PER_CORRECT_ANSWER = 10;

export const getInitialAchievements = (): Achievement[] => [
    { id: 'first_test', name: 'First Step', description: 'Complete your first mock test.', unlocked: false, icon: 'BookOpenIcon' },
    { id: 'perfect_score', name: 'Perfectionist', description: 'Get a perfect score on any mock test.', unlocked: false, icon: 'StarIcon' },
    { id: 'high_achiever', name: 'High Achiever', description: 'Score 90% or higher on a mock test.', unlocked: false, icon: 'TrophyIcon' },
    { id: 'b1_starter', name: 'B1 Starter', description: 'Complete one B1 mock test.', unlocked: false, icon: 'BadgeCheckIcon' },
    { id: 'uk_starter', name: 'UK Starter', description: 'Complete one Life in the UK mock test.', unlocked: false, icon: 'BadgeCheckIcon' },
    { id: 'five_tests', name: 'Consistent Learner', description: 'Complete 5 mock tests.', unlocked: false, icon: 'BookOpenIcon' },
    { id: 'ten_tests', name: 'Dedicated Student', description: 'Complete 10 mock tests.', unlocked: false, icon: 'TrophyIcon' },
];

export const checkAchievements = (currentAchievements: Achievement[], history: TestResult[], newResult: TestResult): Achievement[] => {
      const updatedAchievements = currentAchievements.map(a => ({ ...a }));
      const now = new Date().toISOString();

      const unlock = (id: string) => {
          const achievement = updatedAchievements.find(a => a.id === id);
          if (achievement && !achievement.unlocked) {
              achievement.unlocked = true;
              achievement.dateUnlocked = now;
          }
      };
      
      // Calculate stats
      const totalTests = history.length; // includes newResult if passed in history
      const b1Tests = history.filter(t => t.examType === 'B1').length;
      const ukTests = history.filter(t => t.examType === 'Life in the UK').length;

      if (totalTests >= 1) unlock('first_test');
      if (newResult.score === newResult.totalQuestions && newResult.totalQuestions > 0) unlock('perfect_score');
      if (newResult.totalQuestions > 0 && newResult.score / newResult.totalQuestions >= 0.9) unlock('high_achiever');
      if (b1Tests >= 1) unlock('b1_starter');
      if (ukTests >= 1) unlock('uk_starter');
      if (totalTests >= 5) unlock('five_tests');
      if (totalTests >= 10) unlock('ten_tests');
      
      return updatedAchievements;
};

export const upgradeProgressData = (progress: any): UserProgressData => {
      let points = progress.points || 0;
      let achievements = progress.achievements || getInitialAchievements();
      const testHistory: TestResult[] = progress.testHistory || [];

      // If points were not previously tracked, calculate them based on history
      if (progress.points === undefined && testHistory.length > 0) {
        testHistory.forEach(result => {
            points += result.score * POINTS_PER_CORRECT_ANSWER;
        });
        // Re-evaluate achievements based on history
        // Note: accurate achievement dates are lost if re-calculating, so we just ensure unlocks are correct
        // We run a dummy check for each item in history to catch up
        let tempAchievements = getInitialAchievements();
        let tempHistory: TestResult[] = [];
        testHistory.forEach(result => {
             tempHistory.push(result);
             tempAchievements = checkAchievements(tempAchievements, tempHistory, result);
        });
        achievements = tempAchievements;
      }
      
      // Ensure backward compatibility for incorrectQuestions field
      testHistory.forEach(result => {
        if (!result.incorrectQuestions) {
          result.incorrectQuestions = [];
        }
      });
      
      const level = Math.floor(points / POINTS_PER_LEVEL) + 1;

      return {
          email: progress.email,
          testHistory: testHistory,
          points,
          level,
          achievements,
      };
};

export const calculateNewProgress = (currentProgress: UserProgressData, result: TestResult): UserProgressData => {
      const newHistory = [...currentProgress.testHistory, result];
      const pointsGained = result.score * POINTS_PER_CORRECT_ANSWER;
      const newTotalPoints = currentProgress.points + pointsGained;
      const newLevel = Math.floor(newTotalPoints / POINTS_PER_LEVEL) + 1;
      const newAchievements = checkAchievements(currentProgress.achievements, newHistory, result);

      return {
          ...currentProgress,
          testHistory: newHistory,
          points: newTotalPoints,
          level: newLevel,
          achievements: newAchievements,
      };
};
