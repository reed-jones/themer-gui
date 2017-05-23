// Actions

export const COLOR_CHANGE = 'COLOR_CHANGE';
export const FOCUS_MODE_TOGGLE = 'FOCUS_MODE_TOGGLE ';
export const EXPORT_DIALOG_OPEN = 'EXPORT_DIALOG_OPEN';
export const HELP_DIALOG_OPEN = 'HELP_DIALOG_OPEN';
export const CLOSE_DIALOGS = 'CLOSE_DIALOGS';
export const SET_EXPORT_OPTION = 'SET_EXPORT_OPTION';
export const EXPORT_PROGRESS_DIALOG_OPEN = 'EXPORT_PROGRESS_DIALOG_OPEN';
export const EXPORT_CANCELLED = 'EXPORT_CANCELLED';
export const EXPORT_PROGRESS = 'EXPORT_PROGRESS';
export const EXPORT_ERROR = 'EXPORT_ERROR';
export const EXPORT_COMPLETE = 'EXPORT_COMPLETE';
export const EXPORT_RESET = 'EXPORT_RESET';

// Action generators

export const colorChange = (colorSetKey, colorKey, value) => ({
  type: COLOR_CHANGE,
  colorSetKey,
  colorKey,
  value,
});

export const focusModeToggle = (isLight) => ({
  type: FOCUS_MODE_TOGGLE,
  isLight,
});

export const exportDialogOpen = () => ({
  type: EXPORT_DIALOG_OPEN,
});

export const helpDialogOpen = () => ({
  type: HELP_DIALOG_OPEN,
});

export const closeDialogs = () => ({
  type: CLOSE_DIALOGS,
});

export const setExportOption = (option, value) => ({
  type: SET_EXPORT_OPTION,
  option,
  value,
});

export const exportProgressDialogOpen = () => ({
  type: EXPORT_PROGRESS_DIALOG_OPEN,
});

export const exportCancelled = () => ({
  type: EXPORT_CANCELLED,
});

export const exportProgress = (status) => ({
  type: EXPORT_PROGRESS,
  status,
});

export const exportError = (message) => ({
  type: EXPORT_ERROR,
  message,
});

export const exportComplete = (exportedPath) => ({
  type: EXPORT_COMPLETE,
  exportedPath,
});

export const exportReset = () => ({
  type: EXPORT_RESET,
});