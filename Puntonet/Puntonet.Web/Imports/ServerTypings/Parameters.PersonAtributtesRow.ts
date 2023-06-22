namespace Puntonet.Parameters {
    export interface PersonAtributtesRow {
        IdPersonAtributte?: number;
        Value?: string;
        IdPerson?: number;
        IdAtributte?: number;
        IdPersonName?: string;
        IdPersonAddress?: string;
        IdPersonPhone?: string;
        IdPersonIdentity?: string;
        IdPersonPhoto?: string;
        IdAtributteDescription?: string;
    }

    export namespace PersonAtributtesRow {
        export const idProperty = 'IdPersonAtributte';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Parameters.PersonAtributtes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPersonAtributte = "IdPersonAtributte",
            Value = "Value",
            IdPerson = "IdPerson",
            IdAtributte = "IdAtributte",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto",
            IdAtributteDescription = "IdAtributteDescription"
        }
    }
}