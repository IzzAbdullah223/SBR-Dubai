import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly FavoriteStop: "FavoriteStop";
    readonly BusStop: "BusStop";
    readonly BusRoute: "BusRoute";
    readonly RouteStop: "RouteStop";
    readonly Line: "Line";
    readonly SavedRoute: "SavedRoute";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "favoriteStop" | "busStop" | "busRoute" | "routeStop" | "line" | "savedRoute";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        FavoriteStop: {
            payload: Prisma.$FavoriteStopPayload<ExtArgs>;
            fields: Prisma.FavoriteStopFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FavoriteStopFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FavoriteStopFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                findFirst: {
                    args: Prisma.FavoriteStopFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FavoriteStopFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                findMany: {
                    args: Prisma.FavoriteStopFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>[];
                };
                create: {
                    args: Prisma.FavoriteStopCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                createMany: {
                    args: Prisma.FavoriteStopCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FavoriteStopCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>[];
                };
                delete: {
                    args: Prisma.FavoriteStopDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                update: {
                    args: Prisma.FavoriteStopUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                deleteMany: {
                    args: Prisma.FavoriteStopDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FavoriteStopUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FavoriteStopUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>[];
                };
                upsert: {
                    args: Prisma.FavoriteStopUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriteStopPayload>;
                };
                aggregate: {
                    args: Prisma.FavoriteStopAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavoriteStop>;
                };
                groupBy: {
                    args: Prisma.FavoriteStopGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteStopGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FavoriteStopCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteStopCountAggregateOutputType> | number;
                };
            };
        };
        BusStop: {
            payload: Prisma.$BusStopPayload<ExtArgs>;
            fields: Prisma.BusStopFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusStopFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusStopFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                findFirst: {
                    args: Prisma.BusStopFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusStopFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                findMany: {
                    args: Prisma.BusStopFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>[];
                };
                create: {
                    args: Prisma.BusStopCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                createMany: {
                    args: Prisma.BusStopCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusStopCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>[];
                };
                delete: {
                    args: Prisma.BusStopDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                update: {
                    args: Prisma.BusStopUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                deleteMany: {
                    args: Prisma.BusStopDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusStopUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusStopUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>[];
                };
                upsert: {
                    args: Prisma.BusStopUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusStopPayload>;
                };
                aggregate: {
                    args: Prisma.BusStopAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusStop>;
                };
                groupBy: {
                    args: Prisma.BusStopGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusStopGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusStopCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusStopCountAggregateOutputType> | number;
                };
            };
        };
        BusRoute: {
            payload: Prisma.$BusRoutePayload<ExtArgs>;
            fields: Prisma.BusRouteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusRouteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusRouteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                findFirst: {
                    args: Prisma.BusRouteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusRouteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                findMany: {
                    args: Prisma.BusRouteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>[];
                };
                create: {
                    args: Prisma.BusRouteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                createMany: {
                    args: Prisma.BusRouteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusRouteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>[];
                };
                delete: {
                    args: Prisma.BusRouteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                update: {
                    args: Prisma.BusRouteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                deleteMany: {
                    args: Prisma.BusRouteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusRouteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusRouteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>[];
                };
                upsert: {
                    args: Prisma.BusRouteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusRoutePayload>;
                };
                aggregate: {
                    args: Prisma.BusRouteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusRoute>;
                };
                groupBy: {
                    args: Prisma.BusRouteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusRouteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusRouteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusRouteCountAggregateOutputType> | number;
                };
            };
        };
        RouteStop: {
            payload: Prisma.$RouteStopPayload<ExtArgs>;
            fields: Prisma.RouteStopFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RouteStopFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RouteStopFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                findFirst: {
                    args: Prisma.RouteStopFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RouteStopFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                findMany: {
                    args: Prisma.RouteStopFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                create: {
                    args: Prisma.RouteStopCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                createMany: {
                    args: Prisma.RouteStopCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RouteStopCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                delete: {
                    args: Prisma.RouteStopDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                update: {
                    args: Prisma.RouteStopUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                deleteMany: {
                    args: Prisma.RouteStopDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RouteStopUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RouteStopUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>[];
                };
                upsert: {
                    args: Prisma.RouteStopUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RouteStopPayload>;
                };
                aggregate: {
                    args: Prisma.RouteStopAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRouteStop>;
                };
                groupBy: {
                    args: Prisma.RouteStopGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteStopGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RouteStopCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RouteStopCountAggregateOutputType> | number;
                };
            };
        };
        Line: {
            payload: Prisma.$LinePayload<ExtArgs>;
            fields: Prisma.LineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                findFirst: {
                    args: Prisma.LineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                findMany: {
                    args: Prisma.LineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>[];
                };
                create: {
                    args: Prisma.LineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                createMany: {
                    args: Prisma.LineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>[];
                };
                delete: {
                    args: Prisma.LineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                update: {
                    args: Prisma.LineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                deleteMany: {
                    args: Prisma.LineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>[];
                };
                upsert: {
                    args: Prisma.LineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinePayload>;
                };
                aggregate: {
                    args: Prisma.LineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLine>;
                };
                groupBy: {
                    args: Prisma.LineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineCountAggregateOutputType> | number;
                };
            };
        };
        SavedRoute: {
            payload: Prisma.$SavedRoutePayload<ExtArgs>;
            fields: Prisma.SavedRouteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SavedRouteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SavedRouteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                findFirst: {
                    args: Prisma.SavedRouteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SavedRouteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                findMany: {
                    args: Prisma.SavedRouteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>[];
                };
                create: {
                    args: Prisma.SavedRouteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                createMany: {
                    args: Prisma.SavedRouteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SavedRouteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>[];
                };
                delete: {
                    args: Prisma.SavedRouteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                update: {
                    args: Prisma.SavedRouteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                deleteMany: {
                    args: Prisma.SavedRouteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SavedRouteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SavedRouteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>[];
                };
                upsert: {
                    args: Prisma.SavedRouteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SavedRoutePayload>;
                };
                aggregate: {
                    args: Prisma.SavedRouteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSavedRoute>;
                };
                groupBy: {
                    args: Prisma.SavedRouteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedRouteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SavedRouteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SavedRouteCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly ineId: "ineId";
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
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Language'
 */
export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>;
/**
 * Reference to a field of type 'Language[]'
 */
export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>;
/**
 * Reference to a field of type 'Theme'
 */
export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>;
/**
 * Reference to a field of type 'Theme[]'
 */
export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'OptimizationMode'
 */
export type EnumOptimizationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptimizationMode'>;
/**
 * Reference to a field of type 'OptimizationMode[]'
 */
export type ListEnumOptimizationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptimizationMode[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'SignupSource'
 */
export type EnumSignupSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignupSource'>;
/**
 * Reference to a field of type 'SignupSource[]'
 */
export type ListEnumSignupSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignupSource[]'>;
/**
 * Reference to a field of type 'StopType'
 */
export type EnumStopTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StopType'>;
/**
 * Reference to a field of type 'StopType[]'
 */
export type ListEnumStopTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StopType[]'>;
/**
 * Reference to a field of type 'StopStatus'
 */
export type EnumStopStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StopStatus'>;
/**
 * Reference to a field of type 'StopStatus[]'
 */
export type ListEnumStopStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StopStatus[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'OptimizationPreference'
 */
export type EnumOptimizationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptimizationPreference'>;
/**
 * Reference to a field of type 'OptimizationPreference[]'
 */
export type ListEnumOptimizationPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OptimizationPreference[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    favoriteStop?: Prisma.FavoriteStopOmit;
    busStop?: Prisma.BusStopOmit;
    busRoute?: Prisma.BusRouteOmit;
    routeStop?: Prisma.RouteStopOmit;
    line?: Prisma.LineOmit;
    savedRoute?: Prisma.SavedRouteOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map