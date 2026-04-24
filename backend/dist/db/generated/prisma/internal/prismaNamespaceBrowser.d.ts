import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly FavoriteStop: "FavoriteStop";
    readonly BusStop: "BusStop";
    readonly BusRoute: "BusRoute";
    readonly RouteStop: "RouteStop";
    readonly Line: "Line";
    readonly SavedRoute: "SavedRoute";
    readonly VirtualWallet: "VirtualWallet";
    readonly Transaction: "Transaction";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly phone: "phone";
    readonly language: "language";
    readonly theme: "theme";
    readonly walkingSpeed: "walkingSpeed";
    readonly notifyEmail: "notifyEmail";
    readonly notifyPush: "notifyPush";
    readonly notifyBus: "notifyBus";
    readonly optimization: "optimization";
    readonly isActive: "isActive";
    readonly isVerified: "isVerified";
    readonly lastLogin: "lastLogin";
    readonly signupSource: "signupSource";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FavoriteStopScalarFieldEnum: {
    readonly id: "id";
    readonly stopId: "stopId";
    readonly name: "name";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly savedAt: "savedAt";
    readonly userId: "userId";
};
export type FavoriteStopScalarFieldEnum = (typeof FavoriteStopScalarFieldEnum)[keyof typeof FavoriteStopScalarFieldEnum];
export declare const BusStopScalarFieldEnum: {
    readonly id: "id";
    readonly stopId: "stopId";
    readonly name: "name";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly routes: "routes";
    readonly amenities: "amenities";
    readonly type: "type";
    readonly operator: "operator";
    readonly osm_id: "osm_id";
    readonly zone: "zone";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusStopScalarFieldEnum = (typeof BusStopScalarFieldEnum)[keyof typeof BusStopScalarFieldEnum];
export declare const BusRouteScalarFieldEnum: {
    readonly id: "id";
    readonly routeNumber: "routeNumber";
    readonly name: "name";
    readonly schedule: "schedule";
    readonly fare: "fare";
    readonly duration: "duration";
    readonly distance: "distance";
    readonly numStops: "numStops";
    readonly color: "color";
    readonly textColor: "textColor";
    readonly type: "type";
    readonly lineId: "lineId";
    readonly lineIdReturn: "lineIdReturn";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusRouteScalarFieldEnum = (typeof BusRouteScalarFieldEnum)[keyof typeof BusRouteScalarFieldEnum];
export declare const RouteStopScalarFieldEnum: {
    readonly id: "id";
    readonly stopId: "stopId";
    readonly stopSequence: "stopSequence";
    readonly routeId: "routeId";
};
export type RouteStopScalarFieldEnum = (typeof RouteStopScalarFieldEnum)[keyof typeof RouteStopScalarFieldEnum];
export declare const LineScalarFieldEnum: {
    readonly id: "id";
    readonly lineId: "lineId";
    readonly coordinates: "coordinates";
    readonly pointCount: "pointCount";
    readonly totalDistance: "totalDistance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum];
export declare const SavedRouteScalarFieldEnum: {
    readonly id: "id";
    readonly routeName: "routeName";
    readonly originName: "originName";
    readonly originStopId: "originStopId";
    readonly originLat: "originLat";
    readonly originLng: "originLng";
    readonly destName: "destName";
    readonly destStopId: "destStopId";
    readonly destLat: "destLat";
    readonly destLng: "destLng";
    readonly optimizationPreference: "optimizationPreference";
    readonly timesUsed: "timesUsed";
    readonly lastUsed: "lastUsed";
    readonly averageTime: "averageTime";
    readonly averageCost: "averageCost";
    readonly notificationsEnabled: "notificationsEnabled";
    readonly notifyDays: "notifyDays";
    readonly notifyTime: "notifyTime";
    readonly isActive: "isActive";
    readonly tags: "tags";
    readonly color: "color";
    readonly notes: "notes";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SavedRouteScalarFieldEnum = (typeof SavedRouteScalarFieldEnum)[keyof typeof SavedRouteScalarFieldEnum];
export declare const VirtualWalletScalarFieldEnum: {
    readonly id: "id";
    readonly balance: "balance";
    readonly cardNumber: "cardNumber";
    readonly status: "status";
    readonly lowBalanceThreshold: "lowBalanceThreshold";
    readonly totalRecharges: "totalRecharges";
    readonly totalSpent: "totalSpent";
    readonly tripCount: "tripCount";
    readonly lastRecharge: "lastRecharge";
    readonly lastTransaction: "lastTransaction";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VirtualWalletScalarFieldEnum = (typeof VirtualWalletScalarFieldEnum)[keyof typeof VirtualWalletScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly amount: "amount";
    readonly description: "description";
    readonly status: "status";
    readonly balanceAfter: "balanceAfter";
    readonly routeNumber: "routeNumber";
    readonly fromStop: "fromStop";
    readonly toStop: "toStop";
    readonly timestamp: "timestamp";
    readonly walletId: "walletId";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map