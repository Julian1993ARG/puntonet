﻿import { fieldsProxy } from "@serenity-is/corelib/q";

export interface ColorsRow {
    IdColor?: number;
    Description?: string;
}

export abstract class ColorsRow {
    static readonly idProperty = 'IdColor';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Parameters.Colors';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ColorsRow>();
}
