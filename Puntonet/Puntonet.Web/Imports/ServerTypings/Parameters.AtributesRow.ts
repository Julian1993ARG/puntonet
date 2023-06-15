namespace Puntonet.Parameters {
    export interface AtributesRow {
        IdAtribute?: number;
        IdPerson?: number;
        Description?: string;
        IdPersonName?: string;
        IdPersonAddress?: string;
        IdPersonPhone?: string;
        IdPersonIdentity?: string;
        IdPersonPhoto?: string;
    }

    export namespace AtributesRow {
        export const idProperty = 'IdAtribute';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Parameters.Atributes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAtribute = "IdAtribute",
            IdPerson = "IdPerson",
            Description = "Description",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto"
        }
    }
}
