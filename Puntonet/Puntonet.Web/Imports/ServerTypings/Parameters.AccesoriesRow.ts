namespace Puntonet.Parameters {
    export interface AccesoriesRow {
        IdAccesory?: number;
        Description?: string;
    }

    export namespace AccesoriesRow {
        export const idProperty = 'IdAccesory';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Parameters.Accesories';
        export const lookupKey = 'Parameters.Accesories';

        export function getLookup(): Q.Lookup<AccesoriesRow> {
            return Q.getLookup<AccesoriesRow>('Parameters.Accesories');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAccesory = "IdAccesory",
            Description = "Description"
        }
    }
}
