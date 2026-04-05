export type JourneyItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export type DetailsCardProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
  isLeft?: boolean;
  index?: number;
};
