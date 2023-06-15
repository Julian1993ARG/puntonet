import { IntegerEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface AtributesForm {
    IdPerson: IntegerEditor;
    Description: StringEditor;
}

export class AtributesForm extends PrefixedContext {
    static formKey = 'Parameters.Atributes';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AtributesForm.init)  {
            AtributesForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(AtributesForm, [
                'IdPerson', w0,
                'Description', w1
            ]);
        }
    }
}
