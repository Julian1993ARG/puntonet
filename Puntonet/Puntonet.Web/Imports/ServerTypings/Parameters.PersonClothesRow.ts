namespace Puntonet.Parameters {
    export interface PersonClothesRow {
        IdPersonClothe?: number;
        IdPerson?: number;
        IdClothe?: number;
        IdPersonName?: string;
        IdPersonAddress?: string;
        IdPersonPhone?: string;
        IdPersonIdentity?: string;
        IdPersonPhoto?: string;
        IdClotheDescription?: string;
        IdClotheIdColor?: number;
    }

    export namespace PersonClothesRow {
        export const idProperty = 'IdPersonClothe';
        export const localTextPrefix = 'Parameters.PersonClothes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdPersonClothe = "IdPersonClothe",
            IdPerson = "IdPerson",
            IdClothe = "IdClothe",
            IdPersonName = "IdPersonName",
            IdPersonAddress = "IdPersonAddress",
            IdPersonPhone = "IdPersonPhone",
            IdPersonIdentity = "IdPersonIdentity",
            IdPersonPhoto = "IdPersonPhoto",
            IdClotheDescription = "IdClotheDescription",
            IdClotheIdColor = "IdClotheIdColor"
        }
    }
}
