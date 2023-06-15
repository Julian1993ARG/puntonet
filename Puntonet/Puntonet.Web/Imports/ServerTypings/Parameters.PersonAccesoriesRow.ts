namespace Puntonet.Parameters {
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

    export namespace PersonAccesoriesRow {
        export const idProperty = 'IdPersonAccesory';
        export const localTextPrefix = 'Parameters.PersonAccesories';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPersonAccesory = "IdPersonAccesory",
            IdPerson = "IdPerson",
            IdAccesory = "IdAccesory",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto",
            IdAccesoryDescription = "IdAccesoryDescription"
        }
    }
}
