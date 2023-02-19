import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedDispatch, useTypedSelector } from '../../../../hooks/redux';
import { settingsActions } from '../../../../store/reducers/settingsSlice';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const { language } = useTypedSelector((state) => state.settings);
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const handleToggle = (_: MouseEvent<HTMLElement>, newLang: string) => {
    if (newLang !== null) {
      dispatch(settingsActions.settingsToggleLanguage(newLang));
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={language}
      size="small"
      exclusive
      onChange={handleToggle}
      aria-label="text alignment"
    >
      <ToggleButton value="en" aria-label="left aligned">
        {t('language.en')}
      </ToggleButton>
      <ToggleButton value="ua" aria-label="centered">
        {t('language.ua')}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageSwitch;
