import { fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonAtributteRow {
    IdPersonAtributte?: number;
    IdPerson?: number;
    IdAtribute?: number;
    IdPersonName?: string;
    IdPersonAddress?: string;
    IdPersonPhone?: string;
    IdPersonIdentity?: string;
    IdPersonPhoto?: string;
    IdAtributeDescription?: string;
    IdAtributeValue?: string;
}

export abstract class PersonAtributteRow {
    static readonly idProperty = 'IdPersonAtributte';
    static readonly localTextPrefix = 'Parameters.PersonAtributte';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonAtributteRow>();
}