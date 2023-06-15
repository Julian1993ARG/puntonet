import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AccesoriesColumns, AccesoriesRow, AccesoriesService } from '../../ServerTypes/Parameters';
import { AccesoriesDialog } from './AccesoriesDialog';

@Decorators.registerClass()
export class AccesoriesGrid extends EntityGrid<AccesoriesRow, any> {
    protected getColumnsKey() { return AccesoriesColumns.columnsKey; }
    protected getDialogType() { return AccesoriesDialog; }
    protected getIdProperty() { return AccesoriesRow.idProperty; }
    protected getInsertPermission() { return AccesoriesRow.insertPermission; }
    protected getLocalTextPrefix() { return AccesoriesRow.localTextPrefix; }
    protected getService() { return AccesoriesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}