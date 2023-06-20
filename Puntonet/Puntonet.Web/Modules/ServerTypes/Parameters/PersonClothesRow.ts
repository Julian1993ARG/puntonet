import { fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonClothesRow {
    IdPersonClothe?: number;
    IdPerson?: number;
    IdClothe?: number;
    IdPersonName?: string;
    IdPersonAddress?: string;
    IdPersonPhone?: string;
    IdPersonIdentity?: string;
    IdPersonPhoto?: string;
    IdColorDescription?: string;
    IdClotheDescription?: string;
    IdClotheIdColor?: number;
}

export abstract class PersonClothesRow {
    static readonly idProperty = 'IdPersonClothe';
    static readonly localTextPrefix = 'Parameters.PersonClothes';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonClothesRow>();
}