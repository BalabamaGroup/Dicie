interface NotesProps {}
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import * as Styled from './index.styled';

const Notes = ({}: NotesProps) => {
  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color].notes;

  return (
    <Styled.NotesWrapper theme={componentTheme}>
      <textarea id='notes' placeholder='Write your notes here' />
    </Styled.NotesWrapper>
  );
};

export default Notes;
