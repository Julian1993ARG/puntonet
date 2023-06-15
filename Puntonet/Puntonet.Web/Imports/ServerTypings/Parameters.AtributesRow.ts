namespace Puntonet.Parameters {
    export interface AtributesRow {
        IdAtribute?: number;
        Description?: string;
        Value?: string;
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
            Description = "Description",
            Value = "Value"
        }
    }
}