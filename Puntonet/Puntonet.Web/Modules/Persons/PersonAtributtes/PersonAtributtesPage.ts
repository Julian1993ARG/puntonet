import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonAtributtesGrid } from './PersonAtributtesGrid';

export default function pageInit() {
    initFullHeightGridPage(new PersonAtributtesGrid($('#GridDiv')).element);
}