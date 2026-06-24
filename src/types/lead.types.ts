export type ServiceType = 
  | 'ai'
  | 'automation'
  | 'integrations'
  | 'web-development'
  | 'business-software'
  | 'mvp-saas'
  | 'other';

export type DemoType = 
  | 'ai'
  | 'automation'
  | 'integrations'
  | 'web'
  | 'business'
  | 'mvp';

export interface Lead {
  created_at: string;
  name: string;
  email: string;
  whatsapp: string;
  language: 'es' | 'en';
  detected_service: ServiceType;
  visited_demos: string;
  user_request: string;
  project_summary: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface ConversationContext {
  visitedDemos: DemoType[];
  language: 'es' | 'en';
  messageCount: number;
  detectedService?: ServiceType;
  userRequest?: string;
  projectSummary?: string;
}

export interface LeadCaptureData {
  name: string;
  email: string;
  whatsapp: string;
}
