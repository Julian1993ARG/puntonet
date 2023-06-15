import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonAccesoriesGrid } from './PersonAccesoriesGrid';

$(function() {
    initFullHeightGridPage(new PersonAccesoriesGrid($('#GridDiv')).element);
});