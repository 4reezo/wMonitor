export interface Weather {
    main: string;
    description: string;
    temp: WeatherTemp;
    wind: Wind;
    iconCode: WeatherIconCode;
}

export interface WeatherTemp {
    c: [ number, number, number ]; // main, min, max - cel
    f: [ number, number, number ];  // main, min, max - fah
}

export type TempUnits = keyof WeatherTemp;

export interface Wind {
    m: [ number, number ], // speed, degree - meters/sec
    i: [ number, number ] // speed, degree - mph
}

export type SpeedUnits = keyof Wind;

export type WeatherIconCode =
    '01d' |
    '02d' |
    '03d' |
    '04d' |
    '09d' |
    '10d' |
    '11d' |
    '13d' |
    '50d' |
    '01n' |
    '02n' |
    '03n' |
    '04n' |
    '09n' |
    '10n' |
    '11n' |
    '13n' |
    '50n';
