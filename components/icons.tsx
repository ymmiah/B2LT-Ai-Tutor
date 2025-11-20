import React from 'react';
import {
  Home,
  Sparkles,
  User,
  GraduationCap,
  BookOpen,
  Landmark,
  Mic,
  Square,
  Volume2,
  Send,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Languages,
  LogOut,
  AudioLines,
  TrendingUp,
  BarChart,
  BadgeCheck,
  Star,
  // FIX: Import Sun, Moon, and Laptop icons from lucide-react
  Sun,
  Moon,
  Laptop,
} from 'lucide-react';

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => <Home {...props} />;
export const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => <Sparkles {...props} />;
export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => <User {...props} />;
export const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => <GraduationCap {...props} />;
export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => <BookOpen {...props} />;
export const LandmarkIcon = (props: React.SVGProps<SVGSVGElement>) => <Landmark {...props} />;
export const MicrophoneIcon = (props: React.SVGProps<SVGSVGElement>) => <Mic {...props} />;
export const StopIcon = (props: React.SVGProps<SVGSVGElement>) => <Square {...props} />;
export const SoundOnIcon = (props: React.SVGProps<SVGSVGElement>) => <Volume2 {...props} />;
export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => <Send {...props} />;
export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <CheckCircle2 {...props} />;
export const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <XCircle {...props} />;
export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => <ChevronLeft {...props} />;
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => <ChevronRight {...props} />;
export const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => <Trophy {...props} />;
export const LanguageIcon = (props: React.SVGProps<SVGSVGElement>) => <Languages {...props} />;
export const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => <LogOut {...props} />;

export const SpeechToTextIcon = (props: React.SVGProps<SVGSVGElement>) => <AudioLines {...props} />;
export const TrendingDownIcon = (props: React.SVGProps<SVGSVGElement>) => <TrendingUp {...props} />;
export const ChartPieIcon = (props: React.SVGProps<SVGSVGElement>) => <BarChart {...props} />;
export const BadgeCheckIcon = (props: React.SVGProps<SVGSVGElement>) => <BadgeCheck {...props} />;
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => <Star {...props} />;
// FIX: Export SunIcon, MoonIcon, and LaptopIcon for use in ThemeSwitcher
export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => <Sun {...props} />;
export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => <Moon {...props} />;
export const LaptopIcon = (props: React.SVGProps<SVGSVGElement>) => <Laptop {...props} />;
