﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface AtributtesRow {
    IdAtributte?: number;
    Description?: string;
}

export abstract class AtributtesRow {
    static readonly idProperty = 'IdAtributte';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Parameters.Atributtes';
    static readonly lookupKey = 'Parameters.Atributtes';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AtributtesRow>('Parameters.Atributtes') }
    static async getLookupAsync() { return getLookupAsync<AtributtesRow>('Parameters.Atributtes') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AtributtesRow>();
}