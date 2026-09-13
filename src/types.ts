/**
 * TradORB Platform Types & Architecture Schema
 * Structured for launch website and future platform expansion.
 */

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  statement: string;
  description: string;
  focusAreas: string[];
}

export interface InfrastructurePrimitive {
  id: string;
  tag: string;
  title: string;
  narrative: string;
  focus: string;
}

export type FuturePlatformSection =
  | 'About'
  | 'Platform'
  | 'Manufacturers'
  | 'Buyers'
  | 'Global Trade'
  | 'Insights'
  | 'Contact';

export interface EarlyAccessInquiry {
  name: string;
  organization: string;
  type: 'manufacturer' | 'buyer' | 'partner' | 'other';
  email: string;
  notes?: string;
}
