namespace Puntonet.Parameters {
    export interface AtributesForm {
        IdPerson: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    export class AtributesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Atributes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AtributesForm.init)  {
                AtributesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AtributesForm, [
                    'IdPerson', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
