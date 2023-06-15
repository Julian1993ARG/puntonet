namespace Puntonet.Parameters {
    export interface ClothesRow {
        IdClothe?: number;
        Description?: string;
        IdColor?: number;
        IdColorDescription?: string;
    }

    export namespace ClothesRow {
        export const idProperty = 'IdClothe';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Parameters.Clothes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdClothe = "IdClothe",
            Description = "Description",
            IdColor = "IdColor",
            IdColorDescription = "IdColorDescription"
        }
    }
}
