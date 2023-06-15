namespace Puntonet.Parameters {
    export interface AtributesForm {
        Description: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    export class AtributesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Atributes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AtributesForm.init)  {
                AtributesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AtributesForm, [
                    'Description', w0,
                    'Value', w0
                ]);
            }
        }
    }
}