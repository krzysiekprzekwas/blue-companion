import { getShipImage } from '@/utils/shipImages';

export type ShipSide = 'front' | 'back' | 'left' | 'right';

export type Ship = {
  type: string;
  id: string;
  sides: {
    [key in ShipSide]: {
      image: any;
      description: string;
    };
  };
};

export const ships: Ship[] = [
  {
    type: 'Small Power-driven vessel',
    id: 'power-small',
    sides: {
      front: {
        image: getShipImage('power-small', 'front'),
        description: 'Small power-driven vessel from front - Masthead light (white) visible'
      },
      back: {
        image: getShipImage('power-small', 'back'),
        description: 'Small power-driven vessel from back - Stern light (white) visible'
      },
      left: {
        image: getShipImage('power-small', 'left'),
        description: 'Small power-driven vessel from left - Masthead light (white) and red sidelight visible'
      },
      right: {
        image: getShipImage('power-small', 'right'),
        description: 'Small power-driven vessel from right - Masthead light (white) and green sidelight visible'
      }
    }
  },
  {
    type: 'Medium Power-driven vessel',
    id: 'power-medium',
    sides: {
      front: {
        image: getShipImage('power-medium', 'front'),
        description: 'Medium power-driven vessel from front - Masthead light (white) visible'
      },
      back: {
        image: getShipImage('power-medium', 'back'),
        description: 'Medium power-driven vessel from back - Stern light (white) visible'
      },
      left: {
        image: getShipImage('power-medium', 'left'),
        description: 'Medium power-driven vessel from left - Masthead light (white) and red sidelight visible'
      },
      right: {
        image: getShipImage('power-medium', 'right'),
        description: 'Medium power-driven vessel from right - Masthead light (white) and green sidelight visible'
      }
    }
  },
  {
    type: 'Large Power-driven vessel',
    id: 'power-large',
    sides: {
      front: {
        image: getShipImage('power-large', 'front'),
        description: 'Large power-driven vessel from front - Masthead light (white) visible'
      },
      back: {
        image: getShipImage('power-large', 'back'),
        description: 'Large power-driven vessel from back - Stern light (white) visible'
      },
      left: {
        image: getShipImage('power-large', 'left'),
        description: 'Large power-driven vessel from left - Masthead light (white) and red sidelight visible'
      },
      right: {
        image: getShipImage('power-large', 'right'),
        description: 'Large power-driven vessel from right - Masthead light (white) and green sidelight visible'
      }
    }
  }
]; 