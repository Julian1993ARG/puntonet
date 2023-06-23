import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface ClothesRow {
    IdClothe?: number;
    Description?: string;
    IdColor?: number;
    ClotheColor?: string;
    IdColorDescription?: string;
}

export abstract class ClothesRow {
    static readonly idProperty = 'IdClothe';
    static readonly nameProperty = 'ClotheColor';
    static readonly localTextPrefix = 'Parameters.Clothes';
    static readonly lookupKey = 'Parameters.Clothes';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ClothesRow>('Parameters.Clothes') }
    static async getLookupAsync() { return getLookupAsync<ClothesRow>('Parameters.Clothes') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ClothesRow>();
}