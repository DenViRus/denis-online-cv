import { createActionGroup, props } from '@ngrx/store';

import { LangToggler } from '../online-cv/components/lang-toggler/models/lang-toggler.model';
import { IOnlineCv } from '../online-cv/models/online-cv.model';

export const OnlineCvActions = createActionGroup({
  source: 'OnlineCvState',
  events: {
    'Load LangTogglerData': props<{ langTogglerData: LangToggler }>(),
    'Load OnlineCvData': props<{ onlineCvData: IOnlineCv }>(),
  },
});
