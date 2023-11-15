import { IconName } from '../components/other/Icon';
import CaughtFishesWithTool from '../pages/CaughtFishesWithTool';
import CurrentFishing from '../pages/CurrentFishing';
import CurrentFishingTools from '../pages/CurrentFishingTools';
import CurrentFishingWeight from '../pages/CurrentFishingWeight';
import Profiles from '../pages/Profiles';
import Research from '../pages/Research';
import Tool from '../pages/Tool';
import Tools from '../pages/Tools';
import UserForm from '../pages/User';
import Users from '../pages/Users';
import FishingJournal from '../pages/FishingJournal';
import Fishing from '../pages/Fishing';

export const slugs = {
  login: `/prisijungimas`,
  profiles: '/profiliai',
  cantLogin: '/negalima_jungtis',
  fishingLocation: '/zvejyba/vieta',
  fishingCurrent: `/zvejyba/mano`,
  fishing: (fishingId: string) => `/zvejyba/${fishingId}`,
  fishingTools: `/zvejyba/mano/irankiai`,
  fishingWeight: `/zvejyba/mono/svoris`,
  fishingToolCaughtFishes: (toolId: string) => `/zvejyba/mano/irankiai/${toolId}/sugautos-zuvys`,
  fishingToolConnect: (toolId: string) => `/zvejyba/mano/irankiai/${toolId}/irankiu_jungimas`,
  tools: '/irankiai',
  tool: (id: string) => `/irankiai/${id}`,
  users: '/nariai',
  user: (id: string) => `/nariai/${id}`,
  profile: '/profilis',
  researches: '/moksliniai-tyrimai',
  updateResearch: (id: number | string) => `/moksliniai-tyrimai/${id}`,
  newResearch: `/moksliniai-tyrimai/naujas`,
  fishingJournal: '/zvejybos_zurnalas',
};

export type RouteType = (typeof routes)[0];

export enum Ids {
  FISHING_ID = ':fishingId',
  TOOL_ID = ':toolId',
  ID = ':id',
}

export const routes = [
  {
    slug: slugs.profiles,
    component: <Profiles />,
    regExp: new RegExp('^/profiliai$'),
  },
  {
    title: 'Mano žvejyba',
    subtitle: 'Pasirinkite žvejybos vietą',
    slug: slugs.fishingLocation,
    iconName: IconName.home,
    component: <CurrentFishing />,
    regExp: new RegExp('^/zvejyba/vieta$'),
  },
  {
    title: 'Mano žvejyba',
    subtitle: 'Pasirinkite žvejybos veiksmą',
    slug: slugs.fishingCurrent,
    component: <CurrentFishing />,
    regExp: new RegExp('^/zvejyba/mano$'),
  },
  {
    slug: slugs.fishingTools,
    component: <CurrentFishingTools />,
    back: true,
  },
  {
    slug: slugs.fishingToolConnect(':toolId'),
    component: <CurrentFishing />,
    regExp: new RegExp('^/zvejyba/mano/irankiai[0-9]+/irankiu_jungimas$'),
    back: true,
  },
  {
    title: 'Tikslus svoris, kg',
    slug: slugs.fishingWeight,
    component: <CurrentFishingWeight />,
    back: true,
  },
  {
    title: 'Žvejybos žurnalas',
    subtitle: 'Žvejybos istorija',
    slug: slugs.fishingJournal,
    component: <FishingJournal />,
    regExp: new RegExp('^/zvevybos_zurnalas$'),
    iconName: IconName.journal,
  },
  {
    title: 'Žvejybos informacija',
    slug: slugs.fishing(':fishingId'),
    iconName: IconName.home,
    component: <Fishing />,
    regExp: new RegExp('^/zvejyba/[0-9]+$'),
  },
  {
    title: 'Nariai',
    subtitle: 'Valdykite įmonės darbuotojų sąrašą',
    slug: slugs.users,
    component: <Users />,
    tenantOwner: true,
    iconName: IconName.members,
  },
  {
    title: 'Nario informacija',
    slug: slugs.user(Ids.ID),
    component: <UserForm />,
    tenantOwner: true,
    back: true,
  },
  {
    title: 'Nario informacija',
    slug: slugs.user(Ids.ID),
    component: <UserForm />,
    tenantOwner: true,
    back: true,
  },
  {
    title: 'Įrankiai',
    subtitle: 'Valdykite leidžiamų naudoti įrankių sąrašą',
    slug: slugs.tools,
    component: <Tools />,
    regExp: new RegExp('^/irankiai$'),
    iconName: IconName.tools,
  },
  {
    title: 'Nustatymai',
    subtitle: 'Pagindiniai nustatymai',
    slug: slugs.tools,
    component: <Tools />,
    regExp: new RegExp('^/irankiai$'),
    iconName: IconName.settings,
  },
  {
    title: 'Įrankio informacija',
    slug: slugs.tool(Ids.ID),
    component: <Tool />,
  },
  {
    title: 'Apytikslis svoris, kg',
    slug: slugs.fishingToolCaughtFishes(Ids.TOOL_ID),
    component: <CaughtFishesWithTool />,
    back: true,
  },
  {
    title: 'Moksliniai tyrimai',
    subtitle: 'Mokslinių tyrimų duomenys',
    slug: slugs.researches,
    component: <Research />,
    iconName: IconName.researches,
    isInvestigator: true,
  },
  {
    title: 'Mokslinio tyrimo ataskaita',
    subtitle: 'Įveskite duomenis iš savo mokslinio tyrimo',
    back: true,
    slug: slugs.newResearch,
    component: <Research />,
    isInvestigator: true,
  },
  {
    title: 'Mokslinio tyrimo ataskaita',
    subtitle: 'Atnaujinkite duomenis iš savo mokslinio tyrimo',
    back: true,
    slug: slugs.updateResearch(Ids.ID),
    component: <Research />,
    isInvestigator: true,
  },
];
