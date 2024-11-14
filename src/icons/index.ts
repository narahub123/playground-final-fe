import {
  FaEarthAfrica as africa,
  FaEarthAmericas as americas,
  FaEarthAsia as asia,
  FaEarthEurope as europe,
  FaEarthOceania as oceania,
} from "react-icons/fa6";

import { BsEnvelopePlus as addMessage } from "react-icons/bs";

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
  LuSettings as setting,
  LuMoreHorizontal as more,
  LuPin as pin,
  LuBellOff as block,
  LuFlag as report,
  LuTrash2 as delConversation,
  LuArrowLeft as backward,
  LuUser as users,
  LuUsers as groups,
  LuMessageSquare as conversations,
  LuCircle as circleEmpty,
  LuCheckCircle2 as circleChecked,
  LuSquare as squareEmpty,
  LuChevronDownSquare as squareChecked,
  LuInfo as info,
  LuSend as talkReply,
  LuCopy as copy,
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
  messageIcons: {
    setting,
    addMessage,
    more,
    pin,
    block,
    report,
    delConversation,
    backward,
    users,
    groups,
    conversations,
    circleEmpty,
    circleChecked,
    squareEmpty,
    squareChecked,
    info,
    talkReply,
    talkReport: report,
    talkCopy: copy,
    talkDelete: delConversation,
  },
};

export default ICONS;
