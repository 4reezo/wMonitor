export interface Weather {
    main: string,
    description: string,
    temp: {
        c: [ number, number, number ], // main, min, max - cel
        f: [ number, number, number ]  // main, min, max - fah
    },
    wind: [ number, number ] // speed, degree
}
