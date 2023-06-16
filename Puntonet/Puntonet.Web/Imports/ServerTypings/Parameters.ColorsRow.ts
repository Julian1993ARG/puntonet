namespace Puntonet.Parameters {
    export interface ColorsRow {
        IdColor?: number;
        Description?: string;
    }

    export namespace ColorsRow {
        export const idProperty = 'IdColor';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Parameters.Colors';
        export const lookupKey = 'Parameters.Color';

        export function getLookup(): Q.Lookup<ColorsRow> {
            return Q.getLookup<ColorsRow>('Parameters.Color');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdColor = "IdColor",
            Description = "Description"
        }
    }
}