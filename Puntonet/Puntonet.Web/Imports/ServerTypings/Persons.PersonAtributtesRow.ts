namespace Puntonet.Persons {
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

    export namespace PersonAtributtesRow {
        export const idProperty = 'IdPersonAtributte';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Persons.PersonAtributtes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPersonAtributte = "IdPersonAtributte",
            Description = "Description",
            Value = "Value",
            IdPerson = "IdPerson",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto"
        }
    }
}