namespace Puntonet.Parameters {
    export interface AtributtesRow {
        IdAtributte?: number;
        Description?: string;
    }

    export namespace AtributtesRow {
        export const idProperty = 'IdAtributte';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Parameters.Atributtes';
        export const lookupKey = 'Parameters.Atributtes';

        export function getLookup(): Q.Lookup<AtributtesRow> {
            return Q.getLookup<AtributtesRow>('Parameters.Atributtes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAtributte = "IdAtributte",
            Description = "Description"
        }
    }
}