namespace Puntonet.Parameters {
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

    export namespace PersonAtributteRow {
        export const idProperty = 'IdPersonAtributte';
        export const localTextPrefix = 'Parameters.PersonAtributte';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPersonAtributte = "IdPersonAtributte",
            IdPerson = "IdPerson",
            IdAtribute = "IdAtribute",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto",
            IdAtributeDescription = "IdAtributeDescription",
            IdAtributeValue = "IdAtributeValue"
        }
    }
}