import { fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonAtributtesRow {
    IdPersonAtributte?: number;
    Description?: string;
    Value?: string;
    IdPerson?: number;
    IdPersonName?: string;
    IdPersonAddress?: string;
    IdPersonPhone?: string;
    IdPersonIdentity?: string;
    IdPersonPhoto?: string;
}

export abstract class PersonAtributtesRow {
    static readonly idProperty = 'IdPersonAtributte';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Persons.PersonAtributtes';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonAtributtesRow>();
}