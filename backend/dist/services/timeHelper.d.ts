interface Schedule {
    weekday: {
        firstBus: string;
        lastBus: string;
        frequency: number;
    };
    weekend: {
        firstBus: string;
        lastBus: string;
        frequency: number;
    };
}
export declare const getDubaiTime: () => Date;
export declare const formatTime: (date: Date) => string;
export declare const formatTime24: (date: Date) => string;
export declare const getMinutesFromNow: (futureTime: Date, currentTime: Date) => number;
export declare const isWithinServiceHours: (schedule: Schedule, currentTime: Date) => boolean;
export declare const isWeekendInDubai: (currentTime: Date) => boolean;
export declare const addMinutes: (date: Date, minutes: number) => Date;
export {};
//# sourceMappingURL=timeHelper.d.ts.map