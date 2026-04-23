import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SavedRoute
 *
 */
export type SavedRouteModel = runtime.Types.Result.DefaultSelection<Prisma.$SavedRoutePayload>;
export type AggregateSavedRoute = {
    _count: SavedRouteCountAggregateOutputType | null;
    _avg: SavedRouteAvgAggregateOutputType | null;
    _sum: SavedRouteSumAggregateOutputType | null;
    _min: SavedRouteMinAggregateOutputType | null;
    _max: SavedRouteMaxAggregateOutputType | null;
};
export type SavedRouteAvgAggregateOutputType = {
    id: number | null;
    originLat: number | null;
    originLng: number | null;
    destLat: number | null;
    destLng: number | null;
    timesUsed: number | null;
    averageTime: number | null;
    averageCost: number | null;
    notifyDays: number | null;
    userId: number | null;
};
export type SavedRouteSumAggregateOutputType = {
    id: number | null;
    originLat: number | null;
    originLng: number | null;
    destLat: number | null;
    destLng: number | null;
    timesUsed: number | null;
    averageTime: number | null;
    averageCost: number | null;
    notifyDays: number[];
    userId: number | null;
};
export type SavedRouteMinAggregateOutputType = {
    id: number | null;
    routeName: string | null;
    originName: string | null;
    originStopId: string | null;
    originLat: number | null;
    originLng: number | null;
    destName: string | null;
    destStopId: string | null;
    destLat: number | null;
    destLng: number | null;
    optimizationPreference: $Enums.OptimizationPreference | null;
    timesUsed: number | null;
    lastUsed: Date | null;
    averageTime: number | null;
    averageCost: number | null;
    notificationsEnabled: boolean | null;
    notifyTime: string | null;
    isActive: boolean | null;
    color: string | null;
    notes: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedRouteMaxAggregateOutputType = {
    id: number | null;
    routeName: string | null;
    originName: string | null;
    originStopId: string | null;
    originLat: number | null;
    originLng: number | null;
    destName: string | null;
    destStopId: string | null;
    destLat: number | null;
    destLng: number | null;
    optimizationPreference: $Enums.OptimizationPreference | null;
    timesUsed: number | null;
    lastUsed: Date | null;
    averageTime: number | null;
    averageCost: number | null;
    notificationsEnabled: boolean | null;
    notifyTime: string | null;
    isActive: boolean | null;
    color: string | null;
    notes: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SavedRouteCountAggregateOutputType = {
    id: number;
    routeName: number;
    originName: number;
    originStopId: number;
    originLat: number;
    originLng: number;
    destName: number;
    destStopId: number;
    destLat: number;
    destLng: number;
    optimizationPreference: number;
    timesUsed: number;
    lastUsed: number;
    averageTime: number;
    averageCost: number;
    notificationsEnabled: number;
    notifyDays: number;
    notifyTime: number;
    isActive: number;
    tags: number;
    color: number;
    notes: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SavedRouteAvgAggregateInputType = {
    id?: true;
    originLat?: true;
    originLng?: true;
    destLat?: true;
    destLng?: true;
    timesUsed?: true;
    averageTime?: true;
    averageCost?: true;
    notifyDays?: true;
    userId?: true;
};
export type SavedRouteSumAggregateInputType = {
    id?: true;
    originLat?: true;
    originLng?: true;
    destLat?: true;
    destLng?: true;
    timesUsed?: true;
    averageTime?: true;
    averageCost?: true;
    notifyDays?: true;
    userId?: true;
};
export type SavedRouteMinAggregateInputType = {
    id?: true;
    routeName?: true;
    originName?: true;
    originStopId?: true;
    originLat?: true;
    originLng?: true;
    destName?: true;
    destStopId?: true;
    destLat?: true;
    destLng?: true;
    optimizationPreference?: true;
    timesUsed?: true;
    lastUsed?: true;
    averageTime?: true;
    averageCost?: true;
    notificationsEnabled?: true;
    notifyTime?: true;
    isActive?: true;
    color?: true;
    notes?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedRouteMaxAggregateInputType = {
    id?: true;
    routeName?: true;
    originName?: true;
    originStopId?: true;
    originLat?: true;
    originLng?: true;
    destName?: true;
    destStopId?: true;
    destLat?: true;
    destLng?: true;
    optimizationPreference?: true;
    timesUsed?: true;
    lastUsed?: true;
    averageTime?: true;
    averageCost?: true;
    notificationsEnabled?: true;
    notifyTime?: true;
    isActive?: true;
    color?: true;
    notes?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SavedRouteCountAggregateInputType = {
    id?: true;
    routeName?: true;
    originName?: true;
    originStopId?: true;
    originLat?: true;
    originLng?: true;
    destName?: true;
    destStopId?: true;
    destLat?: true;
    destLng?: true;
    optimizationPreference?: true;
    timesUsed?: true;
    lastUsed?: true;
    averageTime?: true;
    averageCost?: true;
    notificationsEnabled?: true;
    notifyDays?: true;
    notifyTime?: true;
    isActive?: true;
    tags?: true;
    color?: true;
    notes?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SavedRouteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRoute to aggregate.
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedRoutes to fetch.
     */
    orderBy?: Prisma.SavedRouteOrderByWithRelationInput | Prisma.SavedRouteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SavedRouteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedRoutes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedRoutes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SavedRoutes
    **/
    _count?: true | SavedRouteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SavedRouteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SavedRouteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SavedRouteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SavedRouteMaxAggregateInputType;
};
export type GetSavedRouteAggregateType<T extends SavedRouteAggregateArgs> = {
    [P in keyof T & keyof AggregateSavedRoute]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavedRoute[P]> : Prisma.GetScalarType<T[P], AggregateSavedRoute[P]>;
};
export type SavedRouteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedRouteWhereInput;
    orderBy?: Prisma.SavedRouteOrderByWithAggregationInput | Prisma.SavedRouteOrderByWithAggregationInput[];
    by: Prisma.SavedRouteScalarFieldEnum[] | Prisma.SavedRouteScalarFieldEnum;
    having?: Prisma.SavedRouteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavedRouteCountAggregateInputType | true;
    _avg?: SavedRouteAvgAggregateInputType;
    _sum?: SavedRouteSumAggregateInputType;
    _min?: SavedRouteMinAggregateInputType;
    _max?: SavedRouteMaxAggregateInputType;
};
export type SavedRouteGroupByOutputType = {
    id: number;
    routeName: string;
    originName: string;
    originStopId: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference: $Enums.OptimizationPreference;
    timesUsed: number;
    lastUsed: Date | null;
    averageTime: number | null;
    averageCost: number | null;
    notificationsEnabled: boolean;
    notifyDays: number[];
    notifyTime: string | null;
    isActive: boolean;
    tags: string[];
    color: string;
    notes: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SavedRouteCountAggregateOutputType | null;
    _avg: SavedRouteAvgAggregateOutputType | null;
    _sum: SavedRouteSumAggregateOutputType | null;
    _min: SavedRouteMinAggregateOutputType | null;
    _max: SavedRouteMaxAggregateOutputType | null;
};
export type GetSavedRouteGroupByPayload<T extends SavedRouteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavedRouteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavedRouteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavedRouteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavedRouteGroupByOutputType[P]>;
}>>;
export type SavedRouteWhereInput = {
    AND?: Prisma.SavedRouteWhereInput | Prisma.SavedRouteWhereInput[];
    OR?: Prisma.SavedRouteWhereInput[];
    NOT?: Prisma.SavedRouteWhereInput | Prisma.SavedRouteWhereInput[];
    id?: Prisma.IntFilter<"SavedRoute"> | number;
    routeName?: Prisma.StringFilter<"SavedRoute"> | string;
    originName?: Prisma.StringFilter<"SavedRoute"> | string;
    originStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    originLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    originLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    destName?: Prisma.StringFilter<"SavedRoute"> | string;
    destStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    destLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    destLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFilter<"SavedRoute"> | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFilter<"SavedRoute"> | number;
    lastUsed?: Prisma.DateTimeNullableFilter<"SavedRoute"> | Date | string | null;
    averageTime?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    averageCost?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    notificationsEnabled?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    notifyDays?: Prisma.IntNullableListFilter<"SavedRoute">;
    notifyTime?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    tags?: Prisma.StringNullableListFilter<"SavedRoute">;
    color?: Prisma.StringFilter<"SavedRoute"> | string;
    notes?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    userId?: Prisma.IntFilter<"SavedRoute"> | number;
    createdAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SavedRouteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    routeName?: Prisma.SortOrder;
    originName?: Prisma.SortOrder;
    originStopId?: Prisma.SortOrderInput | Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destName?: Prisma.SortOrder;
    destStopId?: Prisma.SortOrderInput | Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    optimizationPreference?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    lastUsed?: Prisma.SortOrderInput | Prisma.SortOrder;
    averageTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    averageCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    notificationsEnabled?: Prisma.SortOrder;
    notifyDays?: Prisma.SortOrder;
    notifyTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SavedRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_originLat_originLng_destLat_destLng?: Prisma.SavedRouteUserIdOriginLatOriginLngDestLatDestLngCompoundUniqueInput;
    AND?: Prisma.SavedRouteWhereInput | Prisma.SavedRouteWhereInput[];
    OR?: Prisma.SavedRouteWhereInput[];
    NOT?: Prisma.SavedRouteWhereInput | Prisma.SavedRouteWhereInput[];
    routeName?: Prisma.StringFilter<"SavedRoute"> | string;
    originName?: Prisma.StringFilter<"SavedRoute"> | string;
    originStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    originLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    originLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    destName?: Prisma.StringFilter<"SavedRoute"> | string;
    destStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    destLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    destLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFilter<"SavedRoute"> | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFilter<"SavedRoute"> | number;
    lastUsed?: Prisma.DateTimeNullableFilter<"SavedRoute"> | Date | string | null;
    averageTime?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    averageCost?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    notificationsEnabled?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    notifyDays?: Prisma.IntNullableListFilter<"SavedRoute">;
    notifyTime?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    tags?: Prisma.StringNullableListFilter<"SavedRoute">;
    color?: Prisma.StringFilter<"SavedRoute"> | string;
    notes?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    userId?: Prisma.IntFilter<"SavedRoute"> | number;
    createdAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_originLat_originLng_destLat_destLng">;
export type SavedRouteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    routeName?: Prisma.SortOrder;
    originName?: Prisma.SortOrder;
    originStopId?: Prisma.SortOrderInput | Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destName?: Prisma.SortOrder;
    destStopId?: Prisma.SortOrderInput | Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    optimizationPreference?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    lastUsed?: Prisma.SortOrderInput | Prisma.SortOrder;
    averageTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    averageCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    notificationsEnabled?: Prisma.SortOrder;
    notifyDays?: Prisma.SortOrder;
    notifyTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SavedRouteCountOrderByAggregateInput;
    _avg?: Prisma.SavedRouteAvgOrderByAggregateInput;
    _max?: Prisma.SavedRouteMaxOrderByAggregateInput;
    _min?: Prisma.SavedRouteMinOrderByAggregateInput;
    _sum?: Prisma.SavedRouteSumOrderByAggregateInput;
};
export type SavedRouteScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavedRouteScalarWhereWithAggregatesInput | Prisma.SavedRouteScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavedRouteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavedRouteScalarWhereWithAggregatesInput | Prisma.SavedRouteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SavedRoute"> | number;
    routeName?: Prisma.StringWithAggregatesFilter<"SavedRoute"> | string;
    originName?: Prisma.StringWithAggregatesFilter<"SavedRoute"> | string;
    originStopId?: Prisma.StringNullableWithAggregatesFilter<"SavedRoute"> | string | null;
    originLat?: Prisma.FloatWithAggregatesFilter<"SavedRoute"> | number;
    originLng?: Prisma.FloatWithAggregatesFilter<"SavedRoute"> | number;
    destName?: Prisma.StringWithAggregatesFilter<"SavedRoute"> | string;
    destStopId?: Prisma.StringNullableWithAggregatesFilter<"SavedRoute"> | string | null;
    destLat?: Prisma.FloatWithAggregatesFilter<"SavedRoute"> | number;
    destLng?: Prisma.FloatWithAggregatesFilter<"SavedRoute"> | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceWithAggregatesFilter<"SavedRoute"> | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntWithAggregatesFilter<"SavedRoute"> | number;
    lastUsed?: Prisma.DateTimeNullableWithAggregatesFilter<"SavedRoute"> | Date | string | null;
    averageTime?: Prisma.FloatNullableWithAggregatesFilter<"SavedRoute"> | number | null;
    averageCost?: Prisma.FloatNullableWithAggregatesFilter<"SavedRoute"> | number | null;
    notificationsEnabled?: Prisma.BoolWithAggregatesFilter<"SavedRoute"> | boolean;
    notifyDays?: Prisma.IntNullableListFilter<"SavedRoute">;
    notifyTime?: Prisma.StringNullableWithAggregatesFilter<"SavedRoute"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"SavedRoute"> | boolean;
    tags?: Prisma.StringNullableListFilter<"SavedRoute">;
    color?: Prisma.StringWithAggregatesFilter<"SavedRoute"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"SavedRoute"> | string | null;
    userId?: Prisma.IntWithAggregatesFilter<"SavedRoute"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SavedRoute"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SavedRoute"> | Date | string;
};
export type SavedRouteCreateInput = {
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSavedRoutesInput;
};
export type SavedRouteUncheckedCreateInput = {
    id?: number;
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedRouteUpdateInput = {
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSavedRoutesNestedInput;
};
export type SavedRouteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteCreateManyInput = {
    id?: number;
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedRouteUpdateManyMutationInput = {
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteListRelationFilter = {
    every?: Prisma.SavedRouteWhereInput;
    some?: Prisma.SavedRouteWhereInput;
    none?: Prisma.SavedRouteWhereInput;
};
export type SavedRouteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type SavedRouteUserIdOriginLatOriginLngDestLatDestLngCompoundUniqueInput = {
    userId: number;
    originLat: number;
    originLng: number;
    destLat: number;
    destLng: number;
};
export type SavedRouteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeName?: Prisma.SortOrder;
    originName?: Prisma.SortOrder;
    originStopId?: Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destName?: Prisma.SortOrder;
    destStopId?: Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    optimizationPreference?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    lastUsed?: Prisma.SortOrder;
    averageTime?: Prisma.SortOrder;
    averageCost?: Prisma.SortOrder;
    notificationsEnabled?: Prisma.SortOrder;
    notifyDays?: Prisma.SortOrder;
    notifyTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedRouteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    averageTime?: Prisma.SortOrder;
    averageCost?: Prisma.SortOrder;
    notifyDays?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type SavedRouteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeName?: Prisma.SortOrder;
    originName?: Prisma.SortOrder;
    originStopId?: Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destName?: Prisma.SortOrder;
    destStopId?: Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    optimizationPreference?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    lastUsed?: Prisma.SortOrder;
    averageTime?: Prisma.SortOrder;
    averageCost?: Prisma.SortOrder;
    notificationsEnabled?: Prisma.SortOrder;
    notifyTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedRouteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    routeName?: Prisma.SortOrder;
    originName?: Prisma.SortOrder;
    originStopId?: Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destName?: Prisma.SortOrder;
    destStopId?: Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    optimizationPreference?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    lastUsed?: Prisma.SortOrder;
    averageTime?: Prisma.SortOrder;
    averageCost?: Prisma.SortOrder;
    notificationsEnabled?: Prisma.SortOrder;
    notifyTime?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SavedRouteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    originLat?: Prisma.SortOrder;
    originLng?: Prisma.SortOrder;
    destLat?: Prisma.SortOrder;
    destLng?: Prisma.SortOrder;
    timesUsed?: Prisma.SortOrder;
    averageTime?: Prisma.SortOrder;
    averageCost?: Prisma.SortOrder;
    notifyDays?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type SavedRouteCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput> | Prisma.SavedRouteCreateWithoutUserInput[] | Prisma.SavedRouteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedRouteCreateOrConnectWithoutUserInput | Prisma.SavedRouteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedRouteCreateManyUserInputEnvelope;
    connect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
};
export type SavedRouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput> | Prisma.SavedRouteCreateWithoutUserInput[] | Prisma.SavedRouteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedRouteCreateOrConnectWithoutUserInput | Prisma.SavedRouteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedRouteCreateManyUserInputEnvelope;
    connect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
};
export type SavedRouteUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput> | Prisma.SavedRouteCreateWithoutUserInput[] | Prisma.SavedRouteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedRouteCreateOrConnectWithoutUserInput | Prisma.SavedRouteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedRouteUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedRouteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedRouteCreateManyUserInputEnvelope;
    set?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    disconnect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    delete?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    connect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    update?: Prisma.SavedRouteUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedRouteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedRouteUpdateManyWithWhereWithoutUserInput | Prisma.SavedRouteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedRouteScalarWhereInput | Prisma.SavedRouteScalarWhereInput[];
};
export type SavedRouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput> | Prisma.SavedRouteCreateWithoutUserInput[] | Prisma.SavedRouteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedRouteCreateOrConnectWithoutUserInput | Prisma.SavedRouteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedRouteUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedRouteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedRouteCreateManyUserInputEnvelope;
    set?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    disconnect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    delete?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    connect?: Prisma.SavedRouteWhereUniqueInput | Prisma.SavedRouteWhereUniqueInput[];
    update?: Prisma.SavedRouteUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedRouteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedRouteUpdateManyWithWhereWithoutUserInput | Prisma.SavedRouteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedRouteScalarWhereInput | Prisma.SavedRouteScalarWhereInput[];
};
export type SavedRouteCreatenotifyDaysInput = {
    set: number[];
};
export type SavedRouteCreatetagsInput = {
    set: string[];
};
export type EnumOptimizationPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.OptimizationPreference;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SavedRouteUpdatenotifyDaysInput = {
    set?: number[];
    push?: number | number[];
};
export type SavedRouteUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type SavedRouteCreateWithoutUserInput = {
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedRouteUncheckedCreateWithoutUserInput = {
    id?: number;
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedRouteCreateOrConnectWithoutUserInput = {
    where: Prisma.SavedRouteWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput>;
};
export type SavedRouteCreateManyUserInputEnvelope = {
    data: Prisma.SavedRouteCreateManyUserInput | Prisma.SavedRouteCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SavedRouteUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedRouteWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedRouteUpdateWithoutUserInput, Prisma.SavedRouteUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SavedRouteCreateWithoutUserInput, Prisma.SavedRouteUncheckedCreateWithoutUserInput>;
};
export type SavedRouteUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedRouteWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedRouteUpdateWithoutUserInput, Prisma.SavedRouteUncheckedUpdateWithoutUserInput>;
};
export type SavedRouteUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SavedRouteScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedRouteUpdateManyMutationInput, Prisma.SavedRouteUncheckedUpdateManyWithoutUserInput>;
};
export type SavedRouteScalarWhereInput = {
    AND?: Prisma.SavedRouteScalarWhereInput | Prisma.SavedRouteScalarWhereInput[];
    OR?: Prisma.SavedRouteScalarWhereInput[];
    NOT?: Prisma.SavedRouteScalarWhereInput | Prisma.SavedRouteScalarWhereInput[];
    id?: Prisma.IntFilter<"SavedRoute"> | number;
    routeName?: Prisma.StringFilter<"SavedRoute"> | string;
    originName?: Prisma.StringFilter<"SavedRoute"> | string;
    originStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    originLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    originLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    destName?: Prisma.StringFilter<"SavedRoute"> | string;
    destStopId?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    destLat?: Prisma.FloatFilter<"SavedRoute"> | number;
    destLng?: Prisma.FloatFilter<"SavedRoute"> | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFilter<"SavedRoute"> | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFilter<"SavedRoute"> | number;
    lastUsed?: Prisma.DateTimeNullableFilter<"SavedRoute"> | Date | string | null;
    averageTime?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    averageCost?: Prisma.FloatNullableFilter<"SavedRoute"> | number | null;
    notificationsEnabled?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    notifyDays?: Prisma.IntNullableListFilter<"SavedRoute">;
    notifyTime?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    isActive?: Prisma.BoolFilter<"SavedRoute"> | boolean;
    tags?: Prisma.StringNullableListFilter<"SavedRoute">;
    color?: Prisma.StringFilter<"SavedRoute"> | string;
    notes?: Prisma.StringNullableFilter<"SavedRoute"> | string | null;
    userId?: Prisma.IntFilter<"SavedRoute"> | number;
    createdAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SavedRoute"> | Date | string;
};
export type SavedRouteCreateManyUserInput = {
    id?: number;
    routeName: string;
    originName: string;
    originStopId?: string | null;
    originLat: number;
    originLng: number;
    destName: string;
    destStopId?: string | null;
    destLat: number;
    destLng: number;
    optimizationPreference?: $Enums.OptimizationPreference;
    timesUsed?: number;
    lastUsed?: Date | string | null;
    averageTime?: number | null;
    averageCost?: number | null;
    notificationsEnabled?: boolean;
    notifyDays?: Prisma.SavedRouteCreatenotifyDaysInput | number[];
    notifyTime?: string | null;
    isActive?: boolean;
    tags?: Prisma.SavedRouteCreatetagsInput | string[];
    color?: string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SavedRouteUpdateWithoutUserInput = {
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    routeName?: Prisma.StringFieldUpdateOperationsInput | string;
    originName?: Prisma.StringFieldUpdateOperationsInput | string;
    originStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    originLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    destName?: Prisma.StringFieldUpdateOperationsInput | string;
    destStopId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destLat?: Prisma.FloatFieldUpdateOperationsInput | number;
    destLng?: Prisma.FloatFieldUpdateOperationsInput | number;
    optimizationPreference?: Prisma.EnumOptimizationPreferenceFieldUpdateOperationsInput | $Enums.OptimizationPreference;
    timesUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsed?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    averageTime?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    averageCost?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notificationsEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notifyDays?: Prisma.SavedRouteUpdatenotifyDaysInput | number[];
    notifyTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tags?: Prisma.SavedRouteUpdatetagsInput | string[];
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedRouteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeName?: boolean;
    originName?: boolean;
    originStopId?: boolean;
    originLat?: boolean;
    originLng?: boolean;
    destName?: boolean;
    destStopId?: boolean;
    destLat?: boolean;
    destLng?: boolean;
    optimizationPreference?: boolean;
    timesUsed?: boolean;
    lastUsed?: boolean;
    averageTime?: boolean;
    averageCost?: boolean;
    notificationsEnabled?: boolean;
    notifyDays?: boolean;
    notifyTime?: boolean;
    isActive?: boolean;
    tags?: boolean;
    color?: boolean;
    notes?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedRoute"]>;
export type SavedRouteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeName?: boolean;
    originName?: boolean;
    originStopId?: boolean;
    originLat?: boolean;
    originLng?: boolean;
    destName?: boolean;
    destStopId?: boolean;
    destLat?: boolean;
    destLng?: boolean;
    optimizationPreference?: boolean;
    timesUsed?: boolean;
    lastUsed?: boolean;
    averageTime?: boolean;
    averageCost?: boolean;
    notificationsEnabled?: boolean;
    notifyDays?: boolean;
    notifyTime?: boolean;
    isActive?: boolean;
    tags?: boolean;
    color?: boolean;
    notes?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedRoute"]>;
export type SavedRouteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    routeName?: boolean;
    originName?: boolean;
    originStopId?: boolean;
    originLat?: boolean;
    originLng?: boolean;
    destName?: boolean;
    destStopId?: boolean;
    destLat?: boolean;
    destLng?: boolean;
    optimizationPreference?: boolean;
    timesUsed?: boolean;
    lastUsed?: boolean;
    averageTime?: boolean;
    averageCost?: boolean;
    notificationsEnabled?: boolean;
    notifyDays?: boolean;
    notifyTime?: boolean;
    isActive?: boolean;
    tags?: boolean;
    color?: boolean;
    notes?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedRoute"]>;
export type SavedRouteSelectScalar = {
    id?: boolean;
    routeName?: boolean;
    originName?: boolean;
    originStopId?: boolean;
    originLat?: boolean;
    originLng?: boolean;
    destName?: boolean;
    destStopId?: boolean;
    destLat?: boolean;
    destLng?: boolean;
    optimizationPreference?: boolean;
    timesUsed?: boolean;
    lastUsed?: boolean;
    averageTime?: boolean;
    averageCost?: boolean;
    notificationsEnabled?: boolean;
    notifyDays?: boolean;
    notifyTime?: boolean;
    isActive?: boolean;
    tags?: boolean;
    color?: boolean;
    notes?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SavedRouteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "routeName" | "originName" | "originStopId" | "originLat" | "originLng" | "destName" | "destStopId" | "destLat" | "destLng" | "optimizationPreference" | "timesUsed" | "lastUsed" | "averageTime" | "averageCost" | "notificationsEnabled" | "notifyDays" | "notifyTime" | "isActive" | "tags" | "color" | "notes" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["savedRoute"]>;
export type SavedRouteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SavedRouteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SavedRouteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SavedRoutePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavedRoute";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        routeName: string;
        originName: string;
        originStopId: string | null;
        originLat: number;
        originLng: number;
        destName: string;
        destStopId: string | null;
        destLat: number;
        destLng: number;
        optimizationPreference: $Enums.OptimizationPreference;
        timesUsed: number;
        lastUsed: Date | null;
        averageTime: number | null;
        averageCost: number | null;
        notificationsEnabled: boolean;
        notifyDays: number[];
        notifyTime: string | null;
        isActive: boolean;
        tags: string[];
        color: string;
        notes: string | null;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["savedRoute"]>;
    composites: {};
};
export type SavedRouteGetPayload<S extends boolean | null | undefined | SavedRouteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload, S>;
export type SavedRouteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavedRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavedRouteCountAggregateInputType | true;
};
export interface SavedRouteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavedRoute'];
        meta: {
            name: 'SavedRoute';
        };
    };
    /**
     * Find zero or one SavedRoute that matches the filter.
     * @param {SavedRouteFindUniqueArgs} args - Arguments to find a SavedRoute
     * @example
     * // Get one SavedRoute
     * const savedRoute = await prisma.savedRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedRouteFindUniqueArgs>(args: Prisma.SelectSubset<T, SavedRouteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SavedRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedRouteFindUniqueOrThrowArgs} args - Arguments to find a SavedRoute
     * @example
     * // Get one SavedRoute
     * const savedRoute = await prisma.savedRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedRouteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavedRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavedRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteFindFirstArgs} args - Arguments to find a SavedRoute
     * @example
     * // Get one SavedRoute
     * const savedRoute = await prisma.savedRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedRouteFindFirstArgs>(args?: Prisma.SelectSubset<T, SavedRouteFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SavedRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteFindFirstOrThrowArgs} args - Arguments to find a SavedRoute
     * @example
     * // Get one SavedRoute
     * const savedRoute = await prisma.savedRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedRouteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavedRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SavedRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedRoutes
     * const savedRoutes = await prisma.savedRoute.findMany()
     *
     * // Get first 10 SavedRoutes
     * const savedRoutes = await prisma.savedRoute.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const savedRouteWithIdOnly = await prisma.savedRoute.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SavedRouteFindManyArgs>(args?: Prisma.SelectSubset<T, SavedRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SavedRoute.
     * @param {SavedRouteCreateArgs} args - Arguments to create a SavedRoute.
     * @example
     * // Create one SavedRoute
     * const SavedRoute = await prisma.savedRoute.create({
     *   data: {
     *     // ... data to create a SavedRoute
     *   }
     * })
     *
     */
    create<T extends SavedRouteCreateArgs>(args: Prisma.SelectSubset<T, SavedRouteCreateArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SavedRoutes.
     * @param {SavedRouteCreateManyArgs} args - Arguments to create many SavedRoutes.
     * @example
     * // Create many SavedRoutes
     * const savedRoute = await prisma.savedRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SavedRouteCreateManyArgs>(args?: Prisma.SelectSubset<T, SavedRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SavedRoutes and returns the data saved in the database.
     * @param {SavedRouteCreateManyAndReturnArgs} args - Arguments to create many SavedRoutes.
     * @example
     * // Create many SavedRoutes
     * const savedRoute = await prisma.savedRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SavedRoutes and only return the `id`
     * const savedRouteWithIdOnly = await prisma.savedRoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SavedRouteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavedRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SavedRoute.
     * @param {SavedRouteDeleteArgs} args - Arguments to delete one SavedRoute.
     * @example
     * // Delete one SavedRoute
     * const SavedRoute = await prisma.savedRoute.delete({
     *   where: {
     *     // ... filter to delete one SavedRoute
     *   }
     * })
     *
     */
    delete<T extends SavedRouteDeleteArgs>(args: Prisma.SelectSubset<T, SavedRouteDeleteArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SavedRoute.
     * @param {SavedRouteUpdateArgs} args - Arguments to update one SavedRoute.
     * @example
     * // Update one SavedRoute
     * const savedRoute = await prisma.savedRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SavedRouteUpdateArgs>(args: Prisma.SelectSubset<T, SavedRouteUpdateArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SavedRoutes.
     * @param {SavedRouteDeleteManyArgs} args - Arguments to filter SavedRoutes to delete.
     * @example
     * // Delete a few SavedRoutes
     * const { count } = await prisma.savedRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SavedRouteDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavedRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavedRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedRoutes
     * const savedRoute = await prisma.savedRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SavedRouteUpdateManyArgs>(args: Prisma.SelectSubset<T, SavedRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SavedRoutes and returns the data updated in the database.
     * @param {SavedRouteUpdateManyAndReturnArgs} args - Arguments to update many SavedRoutes.
     * @example
     * // Update many SavedRoutes
     * const savedRoute = await prisma.savedRoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SavedRoutes and only return the `id`
     * const savedRouteWithIdOnly = await prisma.savedRoute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SavedRouteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavedRouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SavedRoute.
     * @param {SavedRouteUpsertArgs} args - Arguments to update or create a SavedRoute.
     * @example
     * // Update or create a SavedRoute
     * const savedRoute = await prisma.savedRoute.upsert({
     *   create: {
     *     // ... data to create a SavedRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedRoute we want to update
     *   }
     * })
     */
    upsert<T extends SavedRouteUpsertArgs>(args: Prisma.SelectSubset<T, SavedRouteUpsertArgs<ExtArgs>>): Prisma.Prisma__SavedRouteClient<runtime.Types.Result.GetResult<Prisma.$SavedRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SavedRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteCountArgs} args - Arguments to filter SavedRoutes to count.
     * @example
     * // Count the number of SavedRoutes
     * const count = await prisma.savedRoute.count({
     *   where: {
     *     // ... the filter for the SavedRoutes we want to count
     *   }
     * })
    **/
    count<T extends SavedRouteCountArgs>(args?: Prisma.Subset<T, SavedRouteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavedRouteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SavedRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedRouteAggregateArgs>(args: Prisma.Subset<T, SavedRouteAggregateArgs>): Prisma.PrismaPromise<GetSavedRouteAggregateType<T>>;
    /**
     * Group by SavedRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SavedRouteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavedRouteGroupByArgs['orderBy'];
    } : {
        orderBy?: SavedRouteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavedRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SavedRoute model
     */
    readonly fields: SavedRouteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SavedRoute.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SavedRouteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the SavedRoute model
 */
export interface SavedRouteFieldRefs {
    readonly id: Prisma.FieldRef<"SavedRoute", 'Int'>;
    readonly routeName: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly originName: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly originStopId: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly originLat: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly originLng: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly destName: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly destStopId: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly destLat: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly destLng: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly optimizationPreference: Prisma.FieldRef<"SavedRoute", 'OptimizationPreference'>;
    readonly timesUsed: Prisma.FieldRef<"SavedRoute", 'Int'>;
    readonly lastUsed: Prisma.FieldRef<"SavedRoute", 'DateTime'>;
    readonly averageTime: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly averageCost: Prisma.FieldRef<"SavedRoute", 'Float'>;
    readonly notificationsEnabled: Prisma.FieldRef<"SavedRoute", 'Boolean'>;
    readonly notifyDays: Prisma.FieldRef<"SavedRoute", 'Int[]'>;
    readonly notifyTime: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly isActive: Prisma.FieldRef<"SavedRoute", 'Boolean'>;
    readonly tags: Prisma.FieldRef<"SavedRoute", 'String[]'>;
    readonly color: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly notes: Prisma.FieldRef<"SavedRoute", 'String'>;
    readonly userId: Prisma.FieldRef<"SavedRoute", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"SavedRoute", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SavedRoute", 'DateTime'>;
}
/**
 * SavedRoute findUnique
 */
export type SavedRouteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter, which SavedRoute to fetch.
     */
    where: Prisma.SavedRouteWhereUniqueInput;
};
/**
 * SavedRoute findUniqueOrThrow
 */
export type SavedRouteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter, which SavedRoute to fetch.
     */
    where: Prisma.SavedRouteWhereUniqueInput;
};
/**
 * SavedRoute findFirst
 */
export type SavedRouteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter, which SavedRoute to fetch.
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedRoutes to fetch.
     */
    orderBy?: Prisma.SavedRouteOrderByWithRelationInput | Prisma.SavedRouteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavedRoutes.
     */
    cursor?: Prisma.SavedRouteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedRoutes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedRoutes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedRoutes.
     */
    distinct?: Prisma.SavedRouteScalarFieldEnum | Prisma.SavedRouteScalarFieldEnum[];
};
/**
 * SavedRoute findFirstOrThrow
 */
export type SavedRouteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter, which SavedRoute to fetch.
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedRoutes to fetch.
     */
    orderBy?: Prisma.SavedRouteOrderByWithRelationInput | Prisma.SavedRouteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SavedRoutes.
     */
    cursor?: Prisma.SavedRouteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedRoutes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedRoutes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedRoutes.
     */
    distinct?: Prisma.SavedRouteScalarFieldEnum | Prisma.SavedRouteScalarFieldEnum[];
};
/**
 * SavedRoute findMany
 */
export type SavedRouteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter, which SavedRoutes to fetch.
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SavedRoutes to fetch.
     */
    orderBy?: Prisma.SavedRouteOrderByWithRelationInput | Prisma.SavedRouteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SavedRoutes.
     */
    cursor?: Prisma.SavedRouteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SavedRoutes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SavedRoutes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SavedRoutes.
     */
    distinct?: Prisma.SavedRouteScalarFieldEnum | Prisma.SavedRouteScalarFieldEnum[];
};
/**
 * SavedRoute create
 */
export type SavedRouteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * The data needed to create a SavedRoute.
     */
    data: Prisma.XOR<Prisma.SavedRouteCreateInput, Prisma.SavedRouteUncheckedCreateInput>;
};
/**
 * SavedRoute createMany
 */
export type SavedRouteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedRoutes.
     */
    data: Prisma.SavedRouteCreateManyInput | Prisma.SavedRouteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SavedRoute createManyAndReturn
 */
export type SavedRouteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * The data used to create many SavedRoutes.
     */
    data: Prisma.SavedRouteCreateManyInput | Prisma.SavedRouteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SavedRoute update
 */
export type SavedRouteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * The data needed to update a SavedRoute.
     */
    data: Prisma.XOR<Prisma.SavedRouteUpdateInput, Prisma.SavedRouteUncheckedUpdateInput>;
    /**
     * Choose, which SavedRoute to update.
     */
    where: Prisma.SavedRouteWhereUniqueInput;
};
/**
 * SavedRoute updateMany
 */
export type SavedRouteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedRoutes.
     */
    data: Prisma.XOR<Prisma.SavedRouteUpdateManyMutationInput, Prisma.SavedRouteUncheckedUpdateManyInput>;
    /**
     * Filter which SavedRoutes to update
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * Limit how many SavedRoutes to update.
     */
    limit?: number;
};
/**
 * SavedRoute updateManyAndReturn
 */
export type SavedRouteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * The data used to update SavedRoutes.
     */
    data: Prisma.XOR<Prisma.SavedRouteUpdateManyMutationInput, Prisma.SavedRouteUncheckedUpdateManyInput>;
    /**
     * Filter which SavedRoutes to update
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * Limit how many SavedRoutes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SavedRoute upsert
 */
export type SavedRouteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * The filter to search for the SavedRoute to update in case it exists.
     */
    where: Prisma.SavedRouteWhereUniqueInput;
    /**
     * In case the SavedRoute found by the `where` argument doesn't exist, create a new SavedRoute with this data.
     */
    create: Prisma.XOR<Prisma.SavedRouteCreateInput, Prisma.SavedRouteUncheckedCreateInput>;
    /**
     * In case the SavedRoute was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SavedRouteUpdateInput, Prisma.SavedRouteUncheckedUpdateInput>;
};
/**
 * SavedRoute delete
 */
export type SavedRouteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
    /**
     * Filter which SavedRoute to delete.
     */
    where: Prisma.SavedRouteWhereUniqueInput;
};
/**
 * SavedRoute deleteMany
 */
export type SavedRouteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRoutes to delete
     */
    where?: Prisma.SavedRouteWhereInput;
    /**
     * Limit how many SavedRoutes to delete.
     */
    limit?: number;
};
/**
 * SavedRoute without action
 */
export type SavedRouteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRoute
     */
    select?: Prisma.SavedRouteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SavedRoute
     */
    omit?: Prisma.SavedRouteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SavedRouteInclude<ExtArgs> | null;
};
//# sourceMappingURL=SavedRoute.d.ts.map