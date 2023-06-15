import { fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonAccesoriesRow {
    IdPersonAccesory?: number;
    IdPerson?: number;
    IdAccesory?: number;
    IdPersonName?: string;
    IdPersonAddress?: string;
    IdPersonPhone?: string;
    IdPersonIdentity?: string;
    IdPersonPhoto?: string;
    IdAccesoryDescription?: string;
}

export abstract class PersonAccesoriesRow {
    static readonly idProperty = 'IdPersonAccesory';
    static readonly localTextPrefix = 'Parameters.PersonAccesories';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonAccesoriesRow>();
}
