export const getShipImage = (shipId: string, side: string = 'top') => {
  const shipImages: Record<string, Record<string, any>> = {
    'power-small': {
      'top': require('@/assets/images/ships/power-small.png'),
      'front': require('@/assets/images/ships/power-small-front.png'),
      'back': require('@/assets/images/ships/power-small-back.png'),
      'right': require('@/assets/images/ships/power-small-right.png'),
      'left': require('@/assets/images/ships/power-small-left.png'),
    },
    'power-medium': {
      'top': require('@/assets/images/ships/power-medium.png'),
      'front': require('@/assets/images/ships/power-medium-front.png'),
      'back': require('@/assets/images/ships/power-medium-back.png'),
      'right': require('@/assets/images/ships/power-medium-right.png'),
      'left': require('@/assets/images/ships/power-medium-left.png'),
    },
    'power-large': {
      'top': require('@/assets/images/ships/power-large.png'),
      'front': require('@/assets/images/ships/power-large-front.png'),
      'back': require('@/assets/images/ships/power-large-back.png'),
      'right': require('@/assets/images/ships/power-large-right.png'),
      'left': require('@/assets/images/ships/power-large-left.png'),
    }
  };
  
  return shipImages[shipId]?.[side] || require('@/assets/images/ships/power-small.png');
}; 