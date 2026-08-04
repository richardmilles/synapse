import {
  CalendarDays,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Music2,
  Youtube,
} from "lucide-react";
import type { BioIcon } from "@/config/bio";

const icons = {
  calendar: CalendarDays,
  youtube: Youtube,
  instagram: Instagram,
  tiktok: Music2,
  facebook: Facebook,
  linkedin: Linkedin,
  website: Globe2,
};

export const BioLinkIcon = ({ icon, className = "h-5 w-5" }: { icon: BioIcon; className?: string }) => {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden="true" />;
};

