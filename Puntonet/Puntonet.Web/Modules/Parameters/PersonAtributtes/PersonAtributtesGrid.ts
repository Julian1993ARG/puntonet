import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonAtributtesColumns, PersonAtributtesRow, PersonAtributtesService } from '../../ServerTypes/Parameters';
import { PersonAtributtesDialog } from './PersonAtributtesDialog';

@Decorators.registerClass('Puntonet.Parameters.PersonAtributtesGrid')
export class PersonAtributtesGrid extends EntityGrid<PersonAtributtesRow, any> {
    protected getColumnsKey() { return PersonAtributtesColumns.columnsKey; }
    protected getDialogType() { return PersonAtributtesDialog; }
    protected getRowDefinition() { return PersonAtributtesRow; }
    protected getService() { return PersonAtributtesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}