export type JourneyItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  link: string;
  linkedin: string;
};

export type DetailsCardProps = JourneyItem & {
  isLeft?: boolean;
  index?: number;
};
