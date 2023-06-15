namespace Puntonet.Persons {
    export interface PersonsRow {
        IdPerson?: number;
        Name?: string;
        Address?: string;
        Phone?: string;
        Identity?: string;
        Photo?: string;
        AccesoriList?: number[];
    }

    export namespace PersonsRow {
        export const idProperty = 'IdPerson';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Persons.Persons';
        export const lookupKey = 'Persons.Persons';

        export function getLookup(): Q.Lookup<PersonsRow> {
            return Q.getLookup<PersonsRow>('Persons.Persons');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPerson = "IdPerson",
            Name = "Name",
            Address = "Address",
            Phone = "Phone",
            Identity = "Identity",
            Photo = "Photo",
            AccesoriList = "AccesoriList"
        }
    }
}
