import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface AccesoriesRow {
    IdAccesory?: number;
    Description?: string;
}

export abstract class AccesoriesRow {
    static readonly idProperty = 'IdAccesory';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Parameters.Accesories';
    static readonly lookupKey = 'Parameters.Accesories';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AccesoriesRow>('Parameters.Accesories') }
    static async getLookupAsync() { return getLookupAsync<AccesoriesRow>('Parameters.Accesories') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AccesoriesRow>();
}
