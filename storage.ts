import { HistoryItem, LanguageCode, UserProfile } from '../types';

const USER_KEY = 'ai_daily_tools_user';
const HISTORY_KEY = 'ai_daily_tools_history';
const FAVORITES_KEY = 'ai_daily_tools_favorites';
const SETTINGS_KEY = 'ai_daily_tools_settings';
const ONBOARDING_KEY = 'ai_daily_tools_onboarded';

export const defaultUser: UserProfile = {
  id: 'usr-default',
  name: 'Guest User',
  email: 'guest@aidailytools.com',
  isGuest: true,
  isPremium: false,
  plan: 'free',
  creditsRemaining: 10,
  maxCredits: 10,
  language: 'en',
  darkMode: true,
  notificationsEnabled: true,
  isBlocked: false,
  createdAt: new Date().toISOString(),
};

export function getStoredUser(): UserProfile {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return defaultUser;
    const user = JSON.parse(raw);
    return { ...defaultUser, ...user };
  } catch {
    return defaultUser;
  }
}

export function saveStoredUser(user: UserProfile) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Failed to save user:', e);
  }
}

export function getStoredHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return getDefaultHistory();
    return JSON.parse(raw);
  } catch {
    return getDefaultHistory();
  }
}

export function saveStoredHistory(items: HistoryItem[]) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save history:', e);
  }
}

export function getStoredFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return ['text-writer', 'translator', 'photo-to-text'];
    return JSON.parse(raw);
  } catch {
    return ['text-writer', 'translator', 'photo-to-text'];
  }
}

export function saveStoredFavorites(favs: string[]) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error('Failed to save favorites:', e);
  }
}

export function isOnboardingCompleted(): boolean {
  return localStorage.getItem(ONBOARDING_KEY) === 'true';
}

export function setOnboardingCompleted() {
  localStorage.setItem(ONBOARDING_KEY, 'true');
}

function getDefaultHistory(): HistoryItem[] {
  return [
    {
      id: 'hist-1',
      toolId: 'text-writer',
      toolName: 'AI Text Writer',
      inputSnippet: 'Write a warm professional follow-up email to client after product demo',
      outputSnippet: 'Subject: Thank you for your time today - Next steps for AI Daily Tools rollout...',
      timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
      isFavorite: true,
    },
    {
      id: 'hist-2',
      toolId: 'translator',
      toolName: 'AI Translator',
      inputSnippet: 'Welcome to our modern mobile application!',
      outputSnippet: 'ہماری جدید موبائل ایپلی کیشن میں خوش آمدید!',
      timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
      isFavorite: false,
    },
    {
      id: 'hist-3',
      toolId: 'social-assistant',
      toolName: 'Social Media Assistant',
      inputSnippet: 'Instagram caption for launching productivity daily checklist',
      outputSnippet: 'Stop scrolling, start building! 🚀 Here are 3 habits that doubled my output this month...',
      timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
      isFavorite: true,
    },
  ];
}
