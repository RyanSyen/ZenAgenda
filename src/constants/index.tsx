import {
  LockClosedIcon,
  CalendarIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Calendar Integration",
    desc: "Keep track of events, meetings and agendas",
    icon: <CalendarIcon width={32} height={32} />,
  },
  {
    title: "End-to-end encryption",
    desc: "Only you can access your notes",
    icon: <LockClosedIcon width={32} height={32} />,
  },
  {
    title: "Instant Publishing",
    desc: "Sharing anything you write with one click",
    icon: <MagicWandIcon width={32} height={32} />,
  },
  {
    title: "Seamless Search",
    desc: "Easily search past notes and ideas",
    icon: <MagnifyingGlassIcon width={32} height={32} />,
  },
];

export { features };
