import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonsColumns, PersonsRow, PersonsService } from '../../ServerTypes/Persons';
import { PersonsDialog } from './PersonsDialog';

@Decorators.registerClass()
export class PersonsGrid extends EntityGrid<PersonsRow, any> {
    protected getColumnsKey() { return PersonsColumns.columnsKey; }
    protected getDialogType() { return PersonsDialog; }
    protected getIdProperty() { return PersonsRow.idProperty; }
    protected getInsertPermission() { return PersonsRow.insertPermission; }
    protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
    protected getService() { return PersonsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}


