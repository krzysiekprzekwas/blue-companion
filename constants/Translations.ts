export type Language = 'en' | 'pl';

export type Translations = {
  [key in Language]: {
    // Navigation
    categories: string;
    settings: string;
    
    // Categories
    lights: string;
    flags: string;
    daySigns: string;
    buoys: string;
    sounds: string;
    train: string;

    // Settings
    language: string;
    selectLanguage: string;
    english: string;
    polish: string;

    // Sound Signals
    warningsAndManeuvers: string;
    lowVisibility: string;
    turningRight: string;
    turningLeft: string;
    goingBackwards: string;
    powerShipMoving: string;
    powerShipNotMoving: string;
    anchoredLessThan100: string;
    anchoredOver100: string;

    // Buoys
    ialaA: string;
    ialaB: string;
    cardinalMarks: string;
    isolatedDangerMarks: string;
    safeWaterMarks: string;
    specialMarks: string;
    newDangers: string;
  };
};

export const translations: Translations = {
  en: {
    categories: 'Categories',
    settings: 'Settings',
    lights: 'Lights',
    flags: 'Flags',
    daySigns: 'Day Signs',
    buoys: 'Buoys',
    sounds: 'Sounds',
    train: 'Training',
    language: 'Language',
    selectLanguage: 'Select Language',
    english: 'English',
    polish: 'Polish',
    warningsAndManeuvers: 'Warnings & Maneuvers',
    lowVisibility: 'Low Visibility',
    turningRight: 'Turning Right',
    turningLeft: 'Turning Left',
    goingBackwards: 'Going Backwards',
    powerShipMoving: 'Power Ship Moving',
    powerShipNotMoving: 'Power Ship Not Moving',
    anchoredLessThan100: 'Anchored Less Than 100m',
    anchoredOver100: 'Anchored Over 100m',
    ialaA: 'IALA A',
    ialaB: 'IALA B',
    cardinalMarks: 'Cardinal Marks',
    isolatedDangerMarks: 'Isolated Danger Marks',
    safeWaterMarks: 'Safe Water Marks',
    specialMarks: 'Special Marks',
    newDangers: 'New Dangers',
  },
  pl: {
    categories: 'Kategorie',
    settings: 'Ustawienia',
    lights: 'Światła',
    flags: 'Flagami',
    daySigns: 'Znaki Dziennie',
    buoys: 'Boje',
    sounds: 'Dźwięki',
    train: 'Trening',
    language: 'Język',
    selectLanguage: 'Wybierz Język',
    english: 'Angielski',
    polish: 'Polski',
    warningsAndManeuvers: 'Ostrzeżenia i Manewry',
    lowVisibility: 'Słaba Widoczność',
    turningRight: 'Skręt w Prawo',
    turningLeft: 'Skręt w Lewo',
    goingBackwards: 'Ruch Wsteczny',
    powerShipMoving: 'Statek z Napędem w Ruchu',
    powerShipNotMoving: 'Statek z Napędem w Bezruchu',
    anchoredLessThan100: 'Zakotwiczony Poniżej 100m',
    anchoredOver100: 'Zakotwiczony Powyżej 100m',
    ialaA: 'IALA A',
    ialaB: 'IALA B',
    cardinalMarks: 'Znaki Kardynalne',
    isolatedDangerMarks: 'Znaki Izolowanego Niebezpieczeństwa',
    safeWaterMarks: 'Znaki Wody Bezpiecznej',
    specialMarks: 'Znaki Specjalne',
    newDangers: 'Nowe Niebezpieczeństwa',
  },
}; 