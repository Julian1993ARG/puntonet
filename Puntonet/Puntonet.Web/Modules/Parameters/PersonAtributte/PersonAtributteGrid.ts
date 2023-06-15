import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonAtributteColumns, PersonAtributteRow, PersonAtributteService } from '../../ServerTypes/Parameters';
import { PersonAtributteDialog } from './PersonAtributteDialog';

@Decorators.registerClass('Puntonet.Parameters.PersonAtributteGrid')
export class PersonAtributteGrid extends EntityGrid<PersonAtributteRow, any> {
    protected getColumnsKey() { return PersonAtributteColumns.columnsKey; }
    protected getDialogType() { return PersonAtributteDialog; }
    protected getRowDefinition() { return PersonAtributteRow; }
    protected getService() { return PersonAtributteService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}