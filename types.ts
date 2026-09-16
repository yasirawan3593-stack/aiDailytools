export type LanguageCode = 'en' | 'ur' | 'hi' | 'ar' | 'es' | 'fr' | 'de';

export type NavTab = 'home' | 'tools' | 'history' | 'favorites' | 'profile';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  isGuest: boolean;
  isPremium: boolean;
  plan: 'free' | 'monthly' | 'yearly';
  creditsRemaining: number;
  maxCredits: number;
  language: LanguageCode;
  darkMode: boolean;
  notificationsEnabled: boolean;
  isBlocked: boolean;
  createdAt: string;
}

export type ToolId =
  | 'text-writer'
  | 'translator'
  | 'photo-to-text'
  | 'pdf-tools'
  | 'voice-to-text'
  | 'text-to-speech'
  | 'study-helper'
  | 'social-assistant'
  | 'photo-enhancer';

export interface ToolMeta {
  id: ToolId;
  name: string;
  nameUrdu: string;
  nameHindi: string;
  nameArabic: string;
  category: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  tags: string[];
  badge?: string;
  popular?: boolean;
}

export interface HistoryItem {
  id: string;
  toolId: ToolId;
  toolName: string;
  inputSnippet: string;
  outputSnippet: string;
  timestamp: string;
  isFavorite?: boolean;
}

export interface CashRewardWinner {
  id: string;
  userId?: string;
  userName: string;
  userEmail: string;
  monthYear: string;
  rewardAmount: number;
  wonAt: string;
  status: 'paid' | 'selected' | 'processing';
}

export interface RewardPoolData {
  currentMonthlyRevenue: number;
  currentRewardAmount: number;
  minimumGuarantee: number;
  nextMilestone: number;
  recentWinners: CashRewardWinner[];
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'reward' | 'system' | 'credit' | 'feature';
}

export interface AdminStats {
  totalUsers: number;
  dailyActive: number;
  monthlyRevenue: number;
  rewardPool: number;
  dailyRequests: number;
}
