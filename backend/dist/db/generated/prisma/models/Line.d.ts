import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Line
 *
 */
export type LineModel = runtime.Types.Result.DefaultSelection<Prisma.$LinePayload>;
export type AggregateLine = {
    _count: LineCountAggregateOutputType | null;
    _avg: LineAvgAggregateOutputType | null;
    _sum: LineSumAggregateOutputType | null;
    _min: LineMinAggregateOutputType | null;
    _max: LineMaxAggregateOutputType | null;
};
export type LineAvgAggregateOutputType = {
    id: number | null;
    pointCount: number | null;
    totalDistance: number | null;
};
export type LineSumAggregateOutputType = {
    id: number | null;
    pointCount: number | null;
    totalDistance: number | null;
};
export type LineMinAggregateOutputType = {
    id: number | null;
    lineId: string | null;
    pointCount: number | null;
    totalDistance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LineMaxAggregateOutputType = {
    id: number | null;
    lineId: string | null;
    pointCount: number | null;
    totalDistance: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LineCountAggregateOutputType = {
    id: number;
    lineId: number;
    coordinates: number;
    pointCount: number;
    totalDistance: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LineAvgAggregateInputType = {
    id?: true;
    pointCount?: true;
    totalDistance?: true;
};
export type LineSumAggregateInputType = {
    id?: true;
    pointCount?: true;
    totalDistance?: true;
};
export type LineMinAggregateInputType = {
    id?: true;
    lineId?: true;
    pointCount?: true;
    totalDistance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LineMaxAggregateInputType = {
    id?: true;
    lineId?: true;
    pointCount?: true;
    totalDistance?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LineCountAggregateInputType = {
    id?: true;
    lineId?: true;
    coordinates?: true;
    pointCount?: true;
    totalDistance?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: Prisma.LineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lines to fetch.
     */
    orderBy?: Prisma.LineOrderByWithRelationInput | Prisma.LineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType;
};
export type GetLineAggregateType<T extends LineAggregateArgs> = {
    [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLine[P]> : Prisma.GetScalarType<T[P], AggregateLine[P]>;
};
export type LineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LineWhereInput;
    orderBy?: Prisma.LineOrderByWithAggregationInput | Prisma.LineOrderByWithAggregationInput[];
    by: Prisma.LineScalarFieldEnum[] | Prisma.LineScalarFieldEnum;
    having?: Prisma.LineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LineCountAggregateInputType | true;
    _avg?: LineAvgAggregateInputType;
    _sum?: LineSumAggregateInputType;
    _min?: LineMinAggregateInputType;
    _max?: LineMaxAggregateInputType;
};
export type LineGroupByOutputType = {
    id: number;
    lineId: string;
    coordinates: runtime.JsonValue;
    pointCount: number;
    totalDistance: number;
    createdAt: Date;
    updatedAt: Date;
    _count: LineCountAggregateOutputType | null;
    _avg: LineAvgAggregateOutputType | null;
    _sum: LineSumAggregateOutputType | null;
    _min: LineMinAggregateOutputType | null;
    _max: LineMaxAggregateOutputType | null;
};
export type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LineGroupByOutputType[P]>;
}>>;
export type LineWhereInput = {
    AND?: Prisma.LineWhereInput | Prisma.LineWhereInput[];
    OR?: Prisma.LineWhereInput[];
    NOT?: Prisma.LineWhereInput | Prisma.LineWhereInput[];
    id?: Prisma.IntFilter<"Line"> | number;
    lineId?: Prisma.StringFilter<"Line"> | string;
    coordinates?: Prisma.JsonFilter<"Line">;
    pointCount?: Prisma.IntFilter<"Line"> | number;
    totalDistance?: Prisma.FloatFilter<"Line"> | number;
    createdAt?: Prisma.DateTimeFilter<"Line"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Line"> | Date | string;
};
export type LineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lineId?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LineWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    lineId?: string;
    AND?: Prisma.LineWhereInput | Prisma.LineWhereInput[];
    OR?: Prisma.LineWhereInput[];
    NOT?: Prisma.LineWhereInput | Prisma.LineWhereInput[];
    coordinates?: Prisma.JsonFilter<"Line">;
    pointCount?: Prisma.IntFilter<"Line"> | number;
    totalDistance?: Prisma.FloatFilter<"Line"> | number;
    createdAt?: Prisma.DateTimeFilter<"Line"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Line"> | Date | string;
}, "id" | "lineId">;
export type LineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lineId?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LineCountOrderByAggregateInput;
    _avg?: Prisma.LineAvgOrderByAggregateInput;
    _max?: Prisma.LineMaxOrderByAggregateInput;
    _min?: Prisma.LineMinOrderByAggregateInput;
    _sum?: Prisma.LineSumOrderByAggregateInput;
};
export type LineScalarWhereWithAggregatesInput = {
    AND?: Prisma.LineScalarWhereWithAggregatesInput | Prisma.LineScalarWhereWithAggregatesInput[];
    OR?: Prisma.LineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LineScalarWhereWithAggregatesInput | Prisma.LineScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Line"> | number;
    lineId?: Prisma.StringWithAggregatesFilter<"Line"> | string;
    coordinates?: Prisma.JsonWithAggregatesFilter<"Line">;
    pointCount?: Prisma.IntWithAggregatesFilter<"Line"> | number;
    totalDistance?: Prisma.FloatWithAggregatesFilter<"Line"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Line"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Line"> | Date | string;
};
export type LineCreateInput = {
    lineId: string;
    coordinates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: number;
    totalDistance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LineUncheckedCreateInput = {
    id?: number;
    lineId: string;
    coordinates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: number;
    totalDistance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LineUpdateInput = {
    lineId?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDistance?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LineUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lineId?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDistance?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LineCreateManyInput = {
    id?: number;
    lineId: string;
    coordinates: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: number;
    totalDistance?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LineUpdateManyMutationInput = {
    lineId?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDistance?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LineUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lineId?: Prisma.StringFieldUpdateOperationsInput | string;
    coordinates?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    pointCount?: Prisma.IntFieldUpdateOperationsInput | number;
    totalDistance?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineId?: Prisma.SortOrder;
    coordinates?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LineAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
};
export type LineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineId?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lineId?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LineSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pointCount?: Prisma.SortOrder;
    totalDistance?: Prisma.SortOrder;
};
export type LineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lineId?: boolean;
    coordinates?: boolean;
    pointCount?: boolean;
    totalDistance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["line"]>;
export type LineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lineId?: boolean;
    coordinates?: boolean;
    pointCount?: boolean;
    totalDistance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["line"]>;
export type LineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lineId?: boolean;
    coordinates?: boolean;
    pointCount?: boolean;
    totalDistance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["line"]>;
export type LineSelectScalar = {
    id?: boolean;
    lineId?: boolean;
    coordinates?: boolean;
    pointCount?: boolean;
    totalDistance?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lineId" | "coordinates" | "pointCount" | "totalDistance" | "createdAt" | "updatedAt", ExtArgs["result"]["line"]>;
export type $LinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Line";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        lineId: string;
        coordinates: runtime.JsonValue;
        pointCount: number;
        totalDistance: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["line"]>;
    composites: {};
};
export type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LinePayload, S>;
export type LineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LineCountAggregateInputType | true;
};
export interface LineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Line'];
        meta: {
            name: 'Line';
        };
    };
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: Prisma.SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: Prisma.SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     *
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lineWithIdOnly = await prisma.line.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LineFindManyArgs>(args?: Prisma.SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     *
     */
    create<T extends LineCreateArgs>(args: Prisma.SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LineCreateManyArgs>(args?: Prisma.SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Lines and returns the data saved in the database.
     * @param {LineCreateManyAndReturnArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     *
     */
    delete<T extends LineDeleteArgs>(args: Prisma.SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LineUpdateArgs>(args: Prisma.SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: Prisma.SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LineUpdateManyArgs>(args: Prisma.SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lines and returns the data updated in the database.
     * @param {LineUpdateManyAndReturnArgs} args - Arguments to update many Lines.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.updateManyAndReturn({
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
    updateManyAndReturn<T extends LineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: Prisma.SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma.Prisma__LineClient<runtime.Types.Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(args?: Prisma.Subset<T, LineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineAggregateArgs>(args: Prisma.Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>;
    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LineGroupByArgs['orderBy'];
    } : {
        orderBy?: LineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Line model
     */
    readonly fields: LineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Line.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the Line model
 */
export interface LineFieldRefs {
    readonly id: Prisma.FieldRef<"Line", 'Int'>;
    readonly lineId: Prisma.FieldRef<"Line", 'String'>;
    readonly coordinates: Prisma.FieldRef<"Line", 'Json'>;
    readonly pointCount: Prisma.FieldRef<"Line", 'Int'>;
    readonly totalDistance: Prisma.FieldRef<"Line", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Line", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Line", 'DateTime'>;
}
/**
 * Line findUnique
 */
export type LineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter, which Line to fetch.
     */
    where: Prisma.LineWhereUniqueInput;
};
/**
 * Line findUniqueOrThrow
 */
export type LineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter, which Line to fetch.
     */
    where: Prisma.LineWhereUniqueInput;
};
/**
 * Line findFirst
 */
export type LineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter, which Line to fetch.
     */
    where?: Prisma.LineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lines to fetch.
     */
    orderBy?: Prisma.LineOrderByWithRelationInput | Prisma.LineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lines.
     */
    cursor?: Prisma.LineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lines.
     */
    distinct?: Prisma.LineScalarFieldEnum | Prisma.LineScalarFieldEnum[];
};
/**
 * Line findFirstOrThrow
 */
export type LineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter, which Line to fetch.
     */
    where?: Prisma.LineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lines to fetch.
     */
    orderBy?: Prisma.LineOrderByWithRelationInput | Prisma.LineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lines.
     */
    cursor?: Prisma.LineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lines.
     */
    distinct?: Prisma.LineScalarFieldEnum | Prisma.LineScalarFieldEnum[];
};
/**
 * Line findMany
 */
export type LineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter, which Lines to fetch.
     */
    where?: Prisma.LineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lines to fetch.
     */
    orderBy?: Prisma.LineOrderByWithRelationInput | Prisma.LineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Lines.
     */
    cursor?: Prisma.LineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lines.
     */
    distinct?: Prisma.LineScalarFieldEnum | Prisma.LineScalarFieldEnum[];
};
/**
 * Line create
 */
export type LineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * The data needed to create a Line.
     */
    data: Prisma.XOR<Prisma.LineCreateInput, Prisma.LineUncheckedCreateInput>;
};
/**
 * Line createMany
 */
export type LineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: Prisma.LineCreateManyInput | Prisma.LineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Line createManyAndReturn
 */
export type LineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * The data used to create many Lines.
     */
    data: Prisma.LineCreateManyInput | Prisma.LineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Line update
 */
export type LineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * The data needed to update a Line.
     */
    data: Prisma.XOR<Prisma.LineUpdateInput, Prisma.LineUncheckedUpdateInput>;
    /**
     * Choose, which Line to update.
     */
    where: Prisma.LineWhereUniqueInput;
};
/**
 * Line updateMany
 */
export type LineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: Prisma.XOR<Prisma.LineUpdateManyMutationInput, Prisma.LineUncheckedUpdateManyInput>;
    /**
     * Filter which Lines to update
     */
    where?: Prisma.LineWhereInput;
    /**
     * Limit how many Lines to update.
     */
    limit?: number;
};
/**
 * Line updateManyAndReturn
 */
export type LineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * The data used to update Lines.
     */
    data: Prisma.XOR<Prisma.LineUpdateManyMutationInput, Prisma.LineUncheckedUpdateManyInput>;
    /**
     * Filter which Lines to update
     */
    where?: Prisma.LineWhereInput;
    /**
     * Limit how many Lines to update.
     */
    limit?: number;
};
/**
 * Line upsert
 */
export type LineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: Prisma.LineWhereUniqueInput;
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: Prisma.XOR<Prisma.LineCreateInput, Prisma.LineUncheckedCreateInput>;
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LineUpdateInput, Prisma.LineUncheckedUpdateInput>;
};
/**
 * Line delete
 */
export type LineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
    /**
     * Filter which Line to delete.
     */
    where: Prisma.LineWhereUniqueInput;
};
/**
 * Line deleteMany
 */
export type LineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: Prisma.LineWhereInput;
    /**
     * Limit how many Lines to delete.
     */
    limit?: number;
};
/**
 * Line without action
 */
export type LineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: Prisma.LineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Line
     */
    omit?: Prisma.LineOmit<ExtArgs> | null;
};
//# sourceMappingURL=Line.d.ts.map