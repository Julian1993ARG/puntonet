﻿import { fieldsProxy } from "@serenity-is/corelib/q";

export interface AtributesRow {
    IdAtribute?: number;
    IdPerson?: number;
    Description?: string;
    IdPersonName?: string;
    IdPersonAddress?: string;
    IdPersonPhone?: string;
    IdPersonIdentity?: string;
    IdPersonPhoto?: string;
}

export abstract class AtributesRow {
    static readonly idProperty = 'IdAtribute';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Parameters.Atributes';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AtributesRow>();
}
