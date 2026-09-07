export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'ai' | 'mobile';
  level: 'expert' | 'advanced' | 'intermediate';
  yearsOfExperience?: number;
}

export const technologies: Technology[] = [
  { name: 'React', category: 'frontend', level: 'expert', yearsOfExperience: 5 },
  { name: 'Next.js', category: 'frontend', level: 'expert', yearsOfExperience: 3 },
  { name: 'JavaScript', category: 'frontend', level: 'expert', yearsOfExperience: 5 },
  { name: 'TypeScript', category: 'frontend', level: 'advanced', yearsOfExperience: 3 },
  { name: 'Tailwind CSS', category: 'frontend', level: 'expert', yearsOfExperience: 3 },
  { name: 'Redux', category: 'frontend', level: 'advanced', yearsOfExperience: 4 },
  { name: 'HTML', category: 'frontend', level: 'expert', yearsOfExperience: 5 },
  { name: 'CSS/SASS', category: 'frontend', level: 'expert', yearsOfExperience: 5 },
  
  { name: 'Node.js', category: 'backend', level: 'expert', yearsOfExperience: 5 },
  { name: 'Python', category: 'backend', level: 'advanced', yearsOfExperience: 3 },
  { name: 'PHP', category: 'backend', level: 'advanced', yearsOfExperience: 3 },
  { name: 'Springboot', category: 'backend', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'REST APIs', category: 'backend', level: 'expert', yearsOfExperience: 5 },
  
  { name: 'AWS Lambda', category: 'cloud', level: 'expert', yearsOfExperience: 3 },
  { name: 'AWS DynamoDB', category: 'cloud', level: 'expert', yearsOfExperience: 3 },
  { name: 'AWS AppSync', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  { name: 'AWS Cognito', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  { name: 'AWS S3', category: 'cloud', level: 'expert', yearsOfExperience: 3 },
  { name: 'AWS CloudWatch', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  { name: 'AWS API Gateway', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  { name: 'AWS Amplify', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  { name: 'AWS SNS', category: 'cloud', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'AWS IAM', category: 'cloud', level: 'advanced', yearsOfExperience: 2 },
  
  { name: 'Git', category: 'tools', level: 'expert', yearsOfExperience: 5 },
  { name: 'GitHub', category: 'tools', level: 'expert', yearsOfExperience: 5 },
  { name: 'WordPress', category: 'tools', level: 'advanced', yearsOfExperience: 3 },
  { name: 'Postman', category: 'tools', level: 'advanced', yearsOfExperience: 3 },
  { name: 'DBeaver', category: 'tools', level: 'advanced', yearsOfExperience: 2 },
  { name: 'Supabase', category: 'tools', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'Docker', category: 'tools', level: 'advanced', yearsOfExperience: 2 },
  
  { name: 'LangChain', category: 'ai', level: 'advanced', yearsOfExperience: 1 },
  { name: 'LangGraph', category: 'ai', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'AI Integration', category: 'ai', level: 'advanced', yearsOfExperience: 2 },

  { name: 'Kotlin', category: 'mobile', level: 'advanced', yearsOfExperience: 1 },
  { name: 'Jetpack Compose', category: 'mobile', level: 'advanced', yearsOfExperience: 1 },
  { name: 'Firebase', category: 'mobile', level: 'advanced', yearsOfExperience: 1 },
  { name: 'Room', category: 'mobile', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'CameraX', category: 'mobile', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'OpenStreetMap', category: 'mobile', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'WorkManager', category: 'mobile', level: 'intermediate', yearsOfExperience: 1 },
  { name: 'MVVM', category: 'mobile', level: 'advanced', yearsOfExperience: 1 },
];
