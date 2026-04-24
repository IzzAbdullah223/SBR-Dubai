export declare const Language: {
    readonly en: "en";
    readonly ar: "ar";
};
export type Language = (typeof Language)[keyof typeof Language];
export declare const Theme: {
    readonly light: "light";
    readonly dark: "dark";
};
export type Theme = (typeof Theme)[keyof typeof Theme];
export declare const OptimizationMode: {
    readonly fastest: "fastest";
    readonly cheapest: "cheapest";
    readonly less_walking: "less_walking";
    readonly fewest_transfers: "fewest_transfers";
};
export type OptimizationMode = (typeof OptimizationMode)[keyof typeof OptimizationMode];
export declare const SignupSource: {
    readonly web: "web";
    readonly mobile: "mobile";
    readonly admin: "admin";
};
export type SignupSource = (typeof SignupSource)[keyof typeof SignupSource];
export declare const StopStatus: {
    readonly active: "active";
    readonly inactive: "inactive";
    readonly maintenance: "maintenance";
};
export type StopStatus = (typeof StopStatus)[keyof typeof StopStatus];
export declare const StopType: {
    readonly stop: "stop";
    readonly station: "station";
    readonly terminal: "terminal";
};
export type StopType = (typeof StopType)[keyof typeof StopType];
export declare const OptimizationPreference: {
    readonly fastest: "fastest";
    readonly cheapest: "cheapest";
    readonly minimal_walking: "minimal_walking";
    readonly minimal_transfers: "minimal_transfers";
};
export type OptimizationPreference = (typeof OptimizationPreference)[keyof typeof OptimizationPreference];
export declare const WalletStatus: {
    readonly active: "active";
    readonly suspended: "suspended";
    readonly closed: "closed";
};
export type WalletStatus = (typeof WalletStatus)[keyof typeof WalletStatus];
export declare const TransactionType: {
    readonly recharge: "recharge";
    readonly deduction: "deduction";
    readonly refund: "refund";
    readonly transfer: "transfer";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const TransactionStatus: {
    readonly pending: "pending";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly refunded: "refunded";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
//# sourceMappingURL=enums.d.ts.map