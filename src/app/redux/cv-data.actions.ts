import { createActionGroup, emptyProps} from '@ngrx/store';

export const OnlineCvActions = createActionGroup({
  source: 'OnlineCvData',
  events: {
    'Load OnlineCvData': emptyProps(),
  },
});