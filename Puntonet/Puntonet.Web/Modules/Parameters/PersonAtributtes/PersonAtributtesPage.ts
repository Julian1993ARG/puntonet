import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonAtributtesGrid } from './PersonAtributtesGrid';

$(function () {
    initFullHeightGridPage(new PersonAtributtesGrid($('#GridDiv')).element)
});