import { Decorators } from "@serenity-is/corelib";
import { Formatter } from "@serenity-is/corelib/slick";
import { htmlEncode } from "@serenity-is/corelib/q";
import { FormatterContext } from "@serenity-is/sleekgrid";
import { AccesoriesRow } from "../../ServerTypes/Parameters";
import { PersonsRow } from "../../ServerTypes/Persons";

@Decorators.registerFormatter("Puntonet.Persons.Persons.GenderFormatter")
export class GenderFormatter implements Formatter {
    format(ctx: FormatterContext) {
        // ctx.value es un array de los ids de los accesorios
        // [1,5,8,4]
        console.log(ctx)
        let id = ctx.value as number;
        if (!id)
            return "There is an error";

        return '<i class="fa fa-' + ((id == 1) ? 'female text-danger' : 'male text-primary') + '></i>'
    }
}