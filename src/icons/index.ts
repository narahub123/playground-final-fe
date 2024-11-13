import {
  FaEarthAfrica as africa,
  FaEarthAmericas as americas,
  FaEarthAsia as asia,
  FaEarthEurope as europe,
  FaEarthOceania as oceania,
} from "react-icons/fa6";

import {
  LuUserCheck as usercheck,
  LuBadgeCheck as badgecheck,
  LuAtSign as atsign,
  LuImage as image,
  LuListTodo as vote,
  LuSmile as emoji,
  LuCalendarClock as reserve,
  LuMapPin as location,
  LuBell as alarm,
} from "react-icons/lu";

const ICONS = {
  replyOptions: {
    all: {
      africa,
      americas,
      asia,
      europe,
      oceania,
    },
    other: {
      following: usercheck,
      authenticated: badgecheck,
      mention: atsign,
    },
  },
  writeOptions: {
    image,
    vote,
    emoji,
    reserve,
    location,
  },
  notificationIcons: {
    alarm,
  },
};

export default ICONS;
