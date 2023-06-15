import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonAccesoriesColumns, PersonAccesoriesRow, PersonAccesoriesService } from '../../ServerTypes/Parameters';
import { PersonAccesoriesDialog } from './PersonAccesoriesDialog';

@Decorators.registerClass()
export class PersonAccesoriesGrid extends EntityGrid<PersonAccesoriesRow, any> {
    protected getColumnsKey() { return PersonAccesoriesColumns.columnsKey; }
    protected getDialogType() { return PersonAccesoriesDialog; }
    protected getIdProperty() { return PersonAccesoriesRow.idProperty; }
    protected getInsertPermission() { return PersonAccesoriesRow.insertPermission; }
    protected getLocalTextPrefix() { return PersonAccesoriesRow.localTextPrefix; }
    protected getService() { return PersonAccesoriesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}