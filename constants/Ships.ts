export type Ship = {
  type: string;
  id: string;
  name: string;
  category: string;
  lightDescription: string;
  top: any;
  front: any;
  back: any;
  right: any;
  left: any;
};

export const ships: Ship[] = [
    // Power vessels
    {
      id: 'power-small',
      name: 'Small Power Vessel',
      type: 'Power Vessel',
      category: 'Less than 12m',
      lightDescription: 'A small power-driven vessel under 12 meters long shall exhibit side, stern and mast lights. The side lights may be combined in one lantern. The mast and stern light may be replaced by one light visible from all sides',
      top: require('@/assets/images/ships/power-small.png'),
      front: require('@/assets/images/ships/power-small-front.png'),
      back: require('@/assets/images/ships/power-small-back.png'),
      right: require('@/assets/images/ships/power-small-right.png'),
      left: require('@/assets/images/ships/power-small-left.png'),
    },
    {
      id: 'power-medium',
      name: 'Medium Power Vessel',
      type: 'Power Vessel',
      category: 'Less than 50m',
      lightDescription: 'A medium power-driven vessel under 50 meters long shall exhibit side, stern and mast lights. Lights must be separate, cannot be combined. It is allowed to light up additional mast light, usually used to indicate direction where the vessel is heading.',
      'top': require('@/assets/images/ships/power-medium.png'),
      'front': require('@/assets/images/ships/power-medium-front.png'),
      'back': require('@/assets/images/ships/power-medium-back.png'),
      'right': require('@/assets/images/ships/power-medium-right.png'),
      'left': require('@/assets/images/ships/power-medium-left.png'),
    },
    {
      id: 'power-large',
      name: 'Large Power Vessel',
      type: 'Power Vessel',
      category: 'More than 50m',
      lightDescription: 'A large power-driven vessel under 50 meters long shall exhibit side, stern and 2 mast lights. It carries all the lights from medium sized vessel with additional, obligatory mast light.',
      'top': require('@/assets/images/ships/power-large.png'),
      'front': require('@/assets/images/ships/power-large-front.png'),
      'back': require('@/assets/images/ships/power-large-back.png'),
      'right': require('@/assets/images/ships/power-large-right.png'),
      'left': require('@/assets/images/ships/power-large-left.png'),
    },
    // Fishing vessels
    {
      id: 'fishing-trawler',
      name: 'Fishing Trawler',
      type: 'Fishing Vessel',
      category: 'Any size',
      lightDescription: 'A large power-driven vessel under 50 meters long shall exhibit side, stern and 2 mast lights. It carries all the lights from medium sized vessel with additional, obligatory mast light.',
      'top': require('@/assets/images/ships/power-large.png'),
      'front': require('@/assets/images/ships/power-large-front.png'),
      'back': require('@/assets/images/ships/power-large-back.png'),
      'right': require('@/assets/images/ships/power-large-right.png'),
      'left': require('@/assets/images/ships/power-large-left.png'),
    },
    {
      id: 'fishing-other',
      name: 'Other Fishing Vessel',
      type: 'Fishing Vessel',
      category: 'Any size',
      lightDescription: 'A large power-driven vessel under 50 meters long shall exhibit side, stern and 2 mast lights. It carries all the lights from medium sized vessel with additional, obligatory mast light.',
      'top': require('@/assets/images/ships/power-large.png'),
      'front': require('@/assets/images/ships/power-large-front.png'),
      'back': require('@/assets/images/ships/power-large-back.png'),
      'right': require('@/assets/images/ships/power-large-right.png'),
      'left': require('@/assets/images/ships/power-large-left.png'),
    },
  ];