import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonsGrid } from './PersonsGrid';

$(function() {
    initFullHeightGridPage(new PersonsGrid($('#GridDiv')).element);
});