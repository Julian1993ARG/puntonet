import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface AtributesForm {
    Description: StringEditor;
    Value: StringEditor;
}

export class AtributesForm extends PrefixedContext {
    static formKey = 'Parameters.Atributes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AtributesForm.init)  {
            AtributesForm.init = true;

            var w0 = StringEditor;

            initFormType(AtributesForm, [
                'Description', w0,
                'Value', w0
            ]);
        }
    }
}