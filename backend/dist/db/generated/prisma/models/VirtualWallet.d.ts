import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VirtualWallet
 *
 */
export type VirtualWalletModel = runtime.Types.Result.DefaultSelection<Prisma.$VirtualWalletPayload>;
export type AggregateVirtualWallet = {
    _count: VirtualWalletCountAggregateOutputType | null;
    _avg: VirtualWalletAvgAggregateOutputType | null;
    _sum: VirtualWalletSumAggregateOutputType | null;
    _min: VirtualWalletMinAggregateOutputType | null;
    _max: VirtualWalletMaxAggregateOutputType | null;
};
export type VirtualWalletAvgAggregateOutputType = {
    id: number | null;
    balance: number | null;
    lowBalanceThreshold: number | null;
    totalRecharges: number | null;
    totalSpent: number | null;
    tripCount: number | null;
    userId: number | null;
};
export type VirtualWalletSumAggregateOutputType = {
    id: number | null;
    balance: number | null;
    lowBalanceThreshold: number | null;
    totalRecharges: number | null;
    totalSpent: number | null;
    tripCount: number | null;
    userId: number | null;
};
export type VirtualWalletMinAggregateOutputType = {
    id: number | null;
    balance: number | null;
    cardNumber: string | null;
    status: $Enums.WalletStatus | null;
    lowBalanceThreshold: number | null;
    totalRecharges: number | null;
    totalSpent: number | null;
    tripCount: number | null;
    lastRecharge: Date | null;
    lastTransaction: Date | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VirtualWalletMaxAggregateOutputType = {
    id: number | null;
    balance: number | null;
    cardNumber: string | null;
    status: $Enums.WalletStatus | null;
    lowBalanceThreshold: number | null;
    totalRecharges: number | null;
    totalSpent: number | null;
    tripCount: number | null;
    lastRecharge: Date | null;
    lastTransaction: Date | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VirtualWalletCountAggregateOutputType = {
    id: number;
    balance: number;
    cardNumber: number;
    status: number;
    lowBalanceThreshold: number;
    totalRecharges: number;
    totalSpent: number;
    tripCount: number;
    lastRecharge: number;
    lastTransaction: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VirtualWalletAvgAggregateInputType = {
    id?: true;
    balance?: true;
    lowBalanceThreshold?: true;
    totalRecharges?: true;
    totalSpent?: true;
    tripCount?: true;
    userId?: true;
};
export type VirtualWalletSumAggregateInputType = {
    id?: true;
    balance?: true;
    lowBalanceThreshold?: true;
    totalRecharges?: true;
    totalSpent?: true;
    tripCount?: true;
    userId?: true;
};
export type VirtualWalletMinAggregateInputType = {
    id?: true;
    balance?: true;
    cardNumber?: true;
    status?: true;
    lowBalanceThreshold?: true;
    totalRecharges?: true;
    totalSpent?: true;
    tripCount?: true;
    lastRecharge?: true;
    lastTransaction?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VirtualWalletMaxAggregateInputType = {
    id?: true;
    balance?: true;
    cardNumber?: true;
    status?: true;
    lowBalanceThreshold?: true;
    totalRecharges?: true;
    totalSpent?: true;
    tripCount?: true;
    lastRecharge?: true;
    lastTransaction?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VirtualWalletCountAggregateInputType = {
    id?: true;
    balance?: true;
    cardNumber?: true;
    status?: true;
    lowBalanceThreshold?: true;
    totalRecharges?: true;
    totalSpent?: true;
    tripCount?: true;
    lastRecharge?: true;
    lastTransaction?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VirtualWalletAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualWallet to aggregate.
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualWallets to fetch.
     */
    orderBy?: Prisma.VirtualWalletOrderByWithRelationInput | Prisma.VirtualWalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VirtualWalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualWallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualWallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VirtualWallets
    **/
    _count?: true | VirtualWalletCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VirtualWalletAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VirtualWalletSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VirtualWalletMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VirtualWalletMaxAggregateInputType;
};
export type GetVirtualWalletAggregateType<T extends VirtualWalletAggregateArgs> = {
    [P in keyof T & keyof AggregateVirtualWallet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVirtualWallet[P]> : Prisma.GetScalarType<T[P], AggregateVirtualWallet[P]>;
};
export type VirtualWalletGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VirtualWalletWhereInput;
    orderBy?: Prisma.VirtualWalletOrderByWithAggregationInput | Prisma.VirtualWalletOrderByWithAggregationInput[];
    by: Prisma.VirtualWalletScalarFieldEnum[] | Prisma.VirtualWalletScalarFieldEnum;
    having?: Prisma.VirtualWalletScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VirtualWalletCountAggregateInputType | true;
    _avg?: VirtualWalletAvgAggregateInputType;
    _sum?: VirtualWalletSumAggregateInputType;
    _min?: VirtualWalletMinAggregateInputType;
    _max?: VirtualWalletMaxAggregateInputType;
};
export type VirtualWalletGroupByOutputType = {
    id: number;
    balance: number;
    cardNumber: string | null;
    status: $Enums.WalletStatus;
    lowBalanceThreshold: number;
    totalRecharges: number;
    totalSpent: number;
    tripCount: number;
    lastRecharge: Date | null;
    lastTransaction: Date | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: VirtualWalletCountAggregateOutputType | null;
    _avg: VirtualWalletAvgAggregateOutputType | null;
    _sum: VirtualWalletSumAggregateOutputType | null;
    _min: VirtualWalletMinAggregateOutputType | null;
    _max: VirtualWalletMaxAggregateOutputType | null;
};
export type GetVirtualWalletGroupByPayload<T extends VirtualWalletGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VirtualWalletGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VirtualWalletGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VirtualWalletGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VirtualWalletGroupByOutputType[P]>;
}>>;
export type VirtualWalletWhereInput = {
    AND?: Prisma.VirtualWalletWhereInput | Prisma.VirtualWalletWhereInput[];
    OR?: Prisma.VirtualWalletWhereInput[];
    NOT?: Prisma.VirtualWalletWhereInput | Prisma.VirtualWalletWhereInput[];
    id?: Prisma.IntFilter<"VirtualWallet"> | number;
    balance?: Prisma.FloatFilter<"VirtualWallet"> | number;
    cardNumber?: Prisma.StringNullableFilter<"VirtualWallet"> | string | null;
    status?: Prisma.EnumWalletStatusFilter<"VirtualWallet"> | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFilter<"VirtualWallet"> | number;
    totalRecharges?: Prisma.FloatFilter<"VirtualWallet"> | number;
    totalSpent?: Prisma.FloatFilter<"VirtualWallet"> | number;
    tripCount?: Prisma.IntFilter<"VirtualWallet"> | number;
    lastRecharge?: Prisma.DateTimeNullableFilter<"VirtualWallet"> | Date | string | null;
    lastTransaction?: Prisma.DateTimeNullableFilter<"VirtualWallet"> | Date | string | null;
    userId?: Prisma.IntFilter<"VirtualWallet"> | number;
    createdAt?: Prisma.DateTimeFilter<"VirtualWallet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VirtualWallet"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    transactions?: Prisma.TransactionListRelationFilter;
};
export type VirtualWalletOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    lastRecharge?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
};
export type VirtualWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    cardNumber?: string;
    userId?: number;
    AND?: Prisma.VirtualWalletWhereInput | Prisma.VirtualWalletWhereInput[];
    OR?: Prisma.VirtualWalletWhereInput[];
    NOT?: Prisma.VirtualWalletWhereInput | Prisma.VirtualWalletWhereInput[];
    balance?: Prisma.FloatFilter<"VirtualWallet"> | number;
    status?: Prisma.EnumWalletStatusFilter<"VirtualWallet"> | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFilter<"VirtualWallet"> | number;
    totalRecharges?: Prisma.FloatFilter<"VirtualWallet"> | number;
    totalSpent?: Prisma.FloatFilter<"VirtualWallet"> | number;
    tripCount?: Prisma.IntFilter<"VirtualWallet"> | number;
    lastRecharge?: Prisma.DateTimeNullableFilter<"VirtualWallet"> | Date | string | null;
    lastTransaction?: Prisma.DateTimeNullableFilter<"VirtualWallet"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"VirtualWallet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VirtualWallet"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    transactions?: Prisma.TransactionListRelationFilter;
}, "id" | "cardNumber" | "userId">;
export type VirtualWalletOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    lastRecharge?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastTransaction?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VirtualWalletCountOrderByAggregateInput;
    _avg?: Prisma.VirtualWalletAvgOrderByAggregateInput;
    _max?: Prisma.VirtualWalletMaxOrderByAggregateInput;
    _min?: Prisma.VirtualWalletMinOrderByAggregateInput;
    _sum?: Prisma.VirtualWalletSumOrderByAggregateInput;
};
export type VirtualWalletScalarWhereWithAggregatesInput = {
    AND?: Prisma.VirtualWalletScalarWhereWithAggregatesInput | Prisma.VirtualWalletScalarWhereWithAggregatesInput[];
    OR?: Prisma.VirtualWalletScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VirtualWalletScalarWhereWithAggregatesInput | Prisma.VirtualWalletScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"VirtualWallet"> | number;
    balance?: Prisma.FloatWithAggregatesFilter<"VirtualWallet"> | number;
    cardNumber?: Prisma.StringNullableWithAggregatesFilter<"VirtualWallet"> | string | null;
    status?: Prisma.EnumWalletStatusWithAggregatesFilter<"VirtualWallet"> | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatWithAggregatesFilter<"VirtualWallet"> | number;
    totalRecharges?: Prisma.FloatWithAggregatesFilter<"VirtualWallet"> | number;
    totalSpent?: Prisma.FloatWithAggregatesFilter<"VirtualWallet"> | number;
    tripCount?: Prisma.IntWithAggregatesFilter<"VirtualWallet"> | number;
    lastRecharge?: Prisma.DateTimeNullableWithAggregatesFilter<"VirtualWallet"> | Date | string | null;
    lastTransaction?: Prisma.DateTimeNullableWithAggregatesFilter<"VirtualWallet"> | Date | string | null;
    userId?: Prisma.IntWithAggregatesFilter<"VirtualWallet"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VirtualWallet"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VirtualWallet"> | Date | string;
};
export type VirtualWalletCreateInput = {
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWalletInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutWalletInput;
};
export type VirtualWalletUncheckedCreateInput = {
    id?: number;
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutWalletInput;
};
export type VirtualWalletUpdateInput = {
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWalletNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutWalletNestedInput;
};
export type VirtualWalletUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutWalletNestedInput;
};
export type VirtualWalletCreateManyInput = {
    id?: number;
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VirtualWalletUpdateManyMutationInput = {
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VirtualWalletUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VirtualWalletNullableScalarRelationFilter = {
    is?: Prisma.VirtualWalletWhereInput | null;
    isNot?: Prisma.VirtualWalletWhereInput | null;
};
export type VirtualWalletCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    lastRecharge?: Prisma.SortOrder;
    lastTransaction?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VirtualWalletAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type VirtualWalletMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    lastRecharge?: Prisma.SortOrder;
    lastTransaction?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VirtualWalletMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    lastRecharge?: Prisma.SortOrder;
    lastTransaction?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VirtualWalletSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    lowBalanceThreshold?: Prisma.SortOrder;
    totalRecharges?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    tripCount?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type VirtualWalletScalarRelationFilter = {
    is?: Prisma.VirtualWalletWhereInput;
    isNot?: Prisma.VirtualWalletWhereInput;
};
export type VirtualWalletCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutUserInput;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
};
export type VirtualWalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutUserInput;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
};
export type VirtualWalletUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VirtualWalletUpsertWithoutUserInput;
    disconnect?: Prisma.VirtualWalletWhereInput | boolean;
    delete?: Prisma.VirtualWalletWhereInput | boolean;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VirtualWalletUpdateToOneWithWhereWithoutUserInput, Prisma.VirtualWalletUpdateWithoutUserInput>, Prisma.VirtualWalletUncheckedUpdateWithoutUserInput>;
};
export type VirtualWalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VirtualWalletUpsertWithoutUserInput;
    disconnect?: Prisma.VirtualWalletWhereInput | boolean;
    delete?: Prisma.VirtualWalletWhereInput | boolean;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VirtualWalletUpdateToOneWithWhereWithoutUserInput, Prisma.VirtualWalletUpdateWithoutUserInput>, Prisma.VirtualWalletUncheckedUpdateWithoutUserInput>;
};
export type EnumWalletStatusFieldUpdateOperationsInput = {
    set?: $Enums.WalletStatus;
};
export type VirtualWalletCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
};
export type VirtualWalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.VirtualWalletCreateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.VirtualWalletCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.VirtualWalletUpsertWithoutTransactionsInput;
    connect?: Prisma.VirtualWalletWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VirtualWalletUpdateToOneWithWhereWithoutTransactionsInput, Prisma.VirtualWalletUpdateWithoutTransactionsInput>, Prisma.VirtualWalletUncheckedUpdateWithoutTransactionsInput>;
};
export type VirtualWalletCreateWithoutUserInput = {
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionCreateNestedManyWithoutWalletInput;
};
export type VirtualWalletUncheckedCreateWithoutUserInput = {
    id?: number;
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutWalletInput;
};
export type VirtualWalletCreateOrConnectWithoutUserInput = {
    where: Prisma.VirtualWalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
};
export type VirtualWalletUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.VirtualWalletUpdateWithoutUserInput, Prisma.VirtualWalletUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VirtualWalletCreateWithoutUserInput, Prisma.VirtualWalletUncheckedCreateWithoutUserInput>;
    where?: Prisma.VirtualWalletWhereInput;
};
export type VirtualWalletUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.VirtualWalletWhereInput;
    data: Prisma.XOR<Prisma.VirtualWalletUpdateWithoutUserInput, Prisma.VirtualWalletUncheckedUpdateWithoutUserInput>;
};
export type VirtualWalletUpdateWithoutUserInput = {
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUpdateManyWithoutWalletNestedInput;
};
export type VirtualWalletUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutWalletNestedInput;
};
export type VirtualWalletCreateWithoutTransactionsInput = {
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWalletInput;
};
export type VirtualWalletUncheckedCreateWithoutTransactionsInput = {
    id?: number;
    balance?: number;
    cardNumber?: string | null;
    status?: $Enums.WalletStatus;
    lowBalanceThreshold?: number;
    totalRecharges?: number;
    totalSpent?: number;
    tripCount?: number;
    lastRecharge?: Date | string | null;
    lastTransaction?: Date | string | null;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VirtualWalletCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.VirtualWalletWhereUniqueInput;
    create: Prisma.XOR<Prisma.VirtualWalletCreateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedCreateWithoutTransactionsInput>;
};
export type VirtualWalletUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.VirtualWalletUpdateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.VirtualWalletCreateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.VirtualWalletWhereInput;
};
export type VirtualWalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.VirtualWalletWhereInput;
    data: Prisma.XOR<Prisma.VirtualWalletUpdateWithoutTransactionsInput, Prisma.VirtualWalletUncheckedUpdateWithoutTransactionsInput>;
};
export type VirtualWalletUpdateWithoutTransactionsInput = {
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWalletNestedInput;
};
export type VirtualWalletUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.FloatFieldUpdateOperationsInput | number;
    cardNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumWalletStatusFieldUpdateOperationsInput | $Enums.WalletStatus;
    lowBalanceThreshold?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalRecharges?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalSpent?: Prisma.FloatFieldUpdateOperationsInput | number;
    tripCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastRecharge?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lastTransaction?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type VirtualWalletCountOutputType
 */
export type VirtualWalletCountOutputType = {
    transactions: number;
};
export type VirtualWalletCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | VirtualWalletCountOutputTypeCountTransactionsArgs;
};
/**
 * VirtualWalletCountOutputType without action
 */
export type VirtualWalletCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWalletCountOutputType
     */
    select?: Prisma.VirtualWalletCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VirtualWalletCountOutputType without action
 */
export type VirtualWalletCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type VirtualWalletSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    balance?: boolean;
    cardNumber?: boolean;
    status?: boolean;
    lowBalanceThreshold?: boolean;
    totalRecharges?: boolean;
    totalSpent?: boolean;
    tripCount?: boolean;
    lastRecharge?: boolean;
    lastTransaction?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.VirtualWallet$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.VirtualWalletCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["virtualWallet"]>;
export type VirtualWalletSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    balance?: boolean;
    cardNumber?: boolean;
    status?: boolean;
    lowBalanceThreshold?: boolean;
    totalRecharges?: boolean;
    totalSpent?: boolean;
    tripCount?: boolean;
    lastRecharge?: boolean;
    lastTransaction?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["virtualWallet"]>;
export type VirtualWalletSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    balance?: boolean;
    cardNumber?: boolean;
    status?: boolean;
    lowBalanceThreshold?: boolean;
    totalRecharges?: boolean;
    totalSpent?: boolean;
    tripCount?: boolean;
    lastRecharge?: boolean;
    lastTransaction?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["virtualWallet"]>;
export type VirtualWalletSelectScalar = {
    id?: boolean;
    balance?: boolean;
    cardNumber?: boolean;
    status?: boolean;
    lowBalanceThreshold?: boolean;
    totalRecharges?: boolean;
    totalSpent?: boolean;
    tripCount?: boolean;
    lastRecharge?: boolean;
    lastTransaction?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VirtualWalletOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "balance" | "cardNumber" | "status" | "lowBalanceThreshold" | "totalRecharges" | "totalSpent" | "tripCount" | "lastRecharge" | "lastTransaction" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["virtualWallet"]>;
export type VirtualWalletInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.VirtualWallet$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.VirtualWalletCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VirtualWalletIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VirtualWalletIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VirtualWalletPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VirtualWallet";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        balance: number;
        cardNumber: string | null;
        status: $Enums.WalletStatus;
        lowBalanceThreshold: number;
        totalRecharges: number;
        totalSpent: number;
        tripCount: number;
        lastRecharge: Date | null;
        lastTransaction: Date | null;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["virtualWallet"]>;
    composites: {};
};
export type VirtualWalletGetPayload<S extends boolean | null | undefined | VirtualWalletDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload, S>;
export type VirtualWalletCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VirtualWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VirtualWalletCountAggregateInputType | true;
};
export interface VirtualWalletDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VirtualWallet'];
        meta: {
            name: 'VirtualWallet';
        };
    };
    /**
     * Find zero or one VirtualWallet that matches the filter.
     * @param {VirtualWalletFindUniqueArgs} args - Arguments to find a VirtualWallet
     * @example
     * // Get one VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualWalletFindUniqueArgs>(args: Prisma.SelectSubset<T, VirtualWalletFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VirtualWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualWalletFindUniqueOrThrowArgs} args - Arguments to find a VirtualWallet
     * @example
     * // Get one VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualWalletFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VirtualWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VirtualWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletFindFirstArgs} args - Arguments to find a VirtualWallet
     * @example
     * // Get one VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualWalletFindFirstArgs>(args?: Prisma.SelectSubset<T, VirtualWalletFindFirstArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VirtualWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletFindFirstOrThrowArgs} args - Arguments to find a VirtualWallet
     * @example
     * // Get one VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualWalletFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VirtualWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VirtualWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualWallets
     * const virtualWallets = await prisma.virtualWallet.findMany()
     *
     * // Get first 10 VirtualWallets
     * const virtualWallets = await prisma.virtualWallet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const virtualWalletWithIdOnly = await prisma.virtualWallet.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VirtualWalletFindManyArgs>(args?: Prisma.SelectSubset<T, VirtualWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VirtualWallet.
     * @param {VirtualWalletCreateArgs} args - Arguments to create a VirtualWallet.
     * @example
     * // Create one VirtualWallet
     * const VirtualWallet = await prisma.virtualWallet.create({
     *   data: {
     *     // ... data to create a VirtualWallet
     *   }
     * })
     *
     */
    create<T extends VirtualWalletCreateArgs>(args: Prisma.SelectSubset<T, VirtualWalletCreateArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VirtualWallets.
     * @param {VirtualWalletCreateManyArgs} args - Arguments to create many VirtualWallets.
     * @example
     * // Create many VirtualWallets
     * const virtualWallet = await prisma.virtualWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VirtualWalletCreateManyArgs>(args?: Prisma.SelectSubset<T, VirtualWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VirtualWallets and returns the data saved in the database.
     * @param {VirtualWalletCreateManyAndReturnArgs} args - Arguments to create many VirtualWallets.
     * @example
     * // Create many VirtualWallets
     * const virtualWallet = await prisma.virtualWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VirtualWallets and only return the `id`
     * const virtualWalletWithIdOnly = await prisma.virtualWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VirtualWalletCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VirtualWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VirtualWallet.
     * @param {VirtualWalletDeleteArgs} args - Arguments to delete one VirtualWallet.
     * @example
     * // Delete one VirtualWallet
     * const VirtualWallet = await prisma.virtualWallet.delete({
     *   where: {
     *     // ... filter to delete one VirtualWallet
     *   }
     * })
     *
     */
    delete<T extends VirtualWalletDeleteArgs>(args: Prisma.SelectSubset<T, VirtualWalletDeleteArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VirtualWallet.
     * @param {VirtualWalletUpdateArgs} args - Arguments to update one VirtualWallet.
     * @example
     * // Update one VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VirtualWalletUpdateArgs>(args: Prisma.SelectSubset<T, VirtualWalletUpdateArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VirtualWallets.
     * @param {VirtualWalletDeleteManyArgs} args - Arguments to filter VirtualWallets to delete.
     * @example
     * // Delete a few VirtualWallets
     * const { count } = await prisma.virtualWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VirtualWalletDeleteManyArgs>(args?: Prisma.SelectSubset<T, VirtualWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VirtualWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualWallets
     * const virtualWallet = await prisma.virtualWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VirtualWalletUpdateManyArgs>(args: Prisma.SelectSubset<T, VirtualWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VirtualWallets and returns the data updated in the database.
     * @param {VirtualWalletUpdateManyAndReturnArgs} args - Arguments to update many VirtualWallets.
     * @example
     * // Update many VirtualWallets
     * const virtualWallet = await prisma.virtualWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VirtualWallets and only return the `id`
     * const virtualWalletWithIdOnly = await prisma.virtualWallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends VirtualWalletUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VirtualWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VirtualWallet.
     * @param {VirtualWalletUpsertArgs} args - Arguments to update or create a VirtualWallet.
     * @example
     * // Update or create a VirtualWallet
     * const virtualWallet = await prisma.virtualWallet.upsert({
     *   create: {
     *     // ... data to create a VirtualWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualWallet we want to update
     *   }
     * })
     */
    upsert<T extends VirtualWalletUpsertArgs>(args: Prisma.SelectSubset<T, VirtualWalletUpsertArgs<ExtArgs>>): Prisma.Prisma__VirtualWalletClient<runtime.Types.Result.GetResult<Prisma.$VirtualWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VirtualWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletCountArgs} args - Arguments to filter VirtualWallets to count.
     * @example
     * // Count the number of VirtualWallets
     * const count = await prisma.virtualWallet.count({
     *   where: {
     *     // ... the filter for the VirtualWallets we want to count
     *   }
     * })
    **/
    count<T extends VirtualWalletCountArgs>(args?: Prisma.Subset<T, VirtualWalletCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VirtualWalletCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VirtualWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VirtualWalletAggregateArgs>(args: Prisma.Subset<T, VirtualWalletAggregateArgs>): Prisma.PrismaPromise<GetVirtualWalletAggregateType<T>>;
    /**
     * Group by VirtualWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualWalletGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VirtualWalletGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VirtualWalletGroupByArgs['orderBy'];
    } : {
        orderBy?: VirtualWalletGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VirtualWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VirtualWallet model
     */
    readonly fields: VirtualWalletFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VirtualWallet.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VirtualWalletClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.VirtualWallet$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VirtualWallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the VirtualWallet model
 */
export interface VirtualWalletFieldRefs {
    readonly id: Prisma.FieldRef<"VirtualWallet", 'Int'>;
    readonly balance: Prisma.FieldRef<"VirtualWallet", 'Float'>;
    readonly cardNumber: Prisma.FieldRef<"VirtualWallet", 'String'>;
    readonly status: Prisma.FieldRef<"VirtualWallet", 'WalletStatus'>;
    readonly lowBalanceThreshold: Prisma.FieldRef<"VirtualWallet", 'Float'>;
    readonly totalRecharges: Prisma.FieldRef<"VirtualWallet", 'Float'>;
    readonly totalSpent: Prisma.FieldRef<"VirtualWallet", 'Float'>;
    readonly tripCount: Prisma.FieldRef<"VirtualWallet", 'Int'>;
    readonly lastRecharge: Prisma.FieldRef<"VirtualWallet", 'DateTime'>;
    readonly lastTransaction: Prisma.FieldRef<"VirtualWallet", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"VirtualWallet", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"VirtualWallet", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VirtualWallet", 'DateTime'>;
}
/**
 * VirtualWallet findUnique
 */
export type VirtualWalletFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualWallet to fetch.
     */
    where: Prisma.VirtualWalletWhereUniqueInput;
};
/**
 * VirtualWallet findUniqueOrThrow
 */
export type VirtualWalletFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualWallet to fetch.
     */
    where: Prisma.VirtualWalletWhereUniqueInput;
};
/**
 * VirtualWallet findFirst
 */
export type VirtualWalletFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualWallet to fetch.
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualWallets to fetch.
     */
    orderBy?: Prisma.VirtualWalletOrderByWithRelationInput | Prisma.VirtualWalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VirtualWallets.
     */
    cursor?: Prisma.VirtualWalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualWallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualWallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VirtualWallets.
     */
    distinct?: Prisma.VirtualWalletScalarFieldEnum | Prisma.VirtualWalletScalarFieldEnum[];
};
/**
 * VirtualWallet findFirstOrThrow
 */
export type VirtualWalletFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualWallet to fetch.
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualWallets to fetch.
     */
    orderBy?: Prisma.VirtualWalletOrderByWithRelationInput | Prisma.VirtualWalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VirtualWallets.
     */
    cursor?: Prisma.VirtualWalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualWallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualWallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VirtualWallets.
     */
    distinct?: Prisma.VirtualWalletScalarFieldEnum | Prisma.VirtualWalletScalarFieldEnum[];
};
/**
 * VirtualWallet findMany
 */
export type VirtualWalletFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter, which VirtualWallets to fetch.
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VirtualWallets to fetch.
     */
    orderBy?: Prisma.VirtualWalletOrderByWithRelationInput | Prisma.VirtualWalletOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VirtualWallets.
     */
    cursor?: Prisma.VirtualWalletWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VirtualWallets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VirtualWallets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VirtualWallets.
     */
    distinct?: Prisma.VirtualWalletScalarFieldEnum | Prisma.VirtualWalletScalarFieldEnum[];
};
/**
 * VirtualWallet create
 */
export type VirtualWalletCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * The data needed to create a VirtualWallet.
     */
    data: Prisma.XOR<Prisma.VirtualWalletCreateInput, Prisma.VirtualWalletUncheckedCreateInput>;
};
/**
 * VirtualWallet createMany
 */
export type VirtualWalletCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualWallets.
     */
    data: Prisma.VirtualWalletCreateManyInput | Prisma.VirtualWalletCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VirtualWallet createManyAndReturn
 */
export type VirtualWalletCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * The data used to create many VirtualWallets.
     */
    data: Prisma.VirtualWalletCreateManyInput | Prisma.VirtualWalletCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VirtualWallet update
 */
export type VirtualWalletUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * The data needed to update a VirtualWallet.
     */
    data: Prisma.XOR<Prisma.VirtualWalletUpdateInput, Prisma.VirtualWalletUncheckedUpdateInput>;
    /**
     * Choose, which VirtualWallet to update.
     */
    where: Prisma.VirtualWalletWhereUniqueInput;
};
/**
 * VirtualWallet updateMany
 */
export type VirtualWalletUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualWallets.
     */
    data: Prisma.XOR<Prisma.VirtualWalletUpdateManyMutationInput, Prisma.VirtualWalletUncheckedUpdateManyInput>;
    /**
     * Filter which VirtualWallets to update
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * Limit how many VirtualWallets to update.
     */
    limit?: number;
};
/**
 * VirtualWallet updateManyAndReturn
 */
export type VirtualWalletUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * The data used to update VirtualWallets.
     */
    data: Prisma.XOR<Prisma.VirtualWalletUpdateManyMutationInput, Prisma.VirtualWalletUncheckedUpdateManyInput>;
    /**
     * Filter which VirtualWallets to update
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * Limit how many VirtualWallets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VirtualWallet upsert
 */
export type VirtualWalletUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * The filter to search for the VirtualWallet to update in case it exists.
     */
    where: Prisma.VirtualWalletWhereUniqueInput;
    /**
     * In case the VirtualWallet found by the `where` argument doesn't exist, create a new VirtualWallet with this data.
     */
    create: Prisma.XOR<Prisma.VirtualWalletCreateInput, Prisma.VirtualWalletUncheckedCreateInput>;
    /**
     * In case the VirtualWallet was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VirtualWalletUpdateInput, Prisma.VirtualWalletUncheckedUpdateInput>;
};
/**
 * VirtualWallet delete
 */
export type VirtualWalletDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
    /**
     * Filter which VirtualWallet to delete.
     */
    where: Prisma.VirtualWalletWhereUniqueInput;
};
/**
 * VirtualWallet deleteMany
 */
export type VirtualWalletDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualWallets to delete
     */
    where?: Prisma.VirtualWalletWhereInput;
    /**
     * Limit how many VirtualWallets to delete.
     */
    limit?: number;
};
/**
 * VirtualWallet.transactions
 */
export type VirtualWallet$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * VirtualWallet without action
 */
export type VirtualWalletDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualWallet
     */
    select?: Prisma.VirtualWalletSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VirtualWallet
     */
    omit?: Prisma.VirtualWalletOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VirtualWalletInclude<ExtArgs> | null;
};
//# sourceMappingURL=VirtualWallet.d.ts.map