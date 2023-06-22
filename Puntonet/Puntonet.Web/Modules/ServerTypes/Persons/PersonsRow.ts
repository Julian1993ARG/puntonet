import { PersonAtributtesRow } from "../Parameters/PersonAtributtesRow";
import { PersonClothesRow } from "../Parameters/PersonClothesRow";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonsRow {
    IdPerson?: number;
    Name?: string;
    Address?: string;
    Phone?: string;
    Identity?: string;
    Photo?: string;
    AccesoriList?: number[];
    Atributtes?: PersonAtributtesRow[];
    ClothesList?: PersonClothesRow[];
}

export abstract class PersonsRow {
    static readonly idProperty = 'IdPerson';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Persons.Persons';
    static readonly lookupKey = 'Persons.Persons';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PersonsRow>('Persons.Persons') }
    static async getLookupAsync() { return getLookupAsync<PersonsRow>('Persons.Persons') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonsRow>();
}