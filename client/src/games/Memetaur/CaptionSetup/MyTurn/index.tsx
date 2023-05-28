import { useState } from 'react';
import { useQuery } from 'react-query';

import MemetaurAPI from '@/api/game/memetaur';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Scroll from '@/components/Scroll';

import * as Styled from './index.styled';

interface MyTurnProps {}

const MyTurn = ({}: MyTurnProps) => {
  const [caption, setCaption] = useState<string>('');
  const onChangeCaption = (e: any) => setCaption(e.target.value);

  const { data: presetCaptions, isLoading: presetCaptionsIsLoading } = useQuery(
    'presetCaptionsMemetaur',
    MemetaurAPI.getPresetCaptions,
    {
      refetchInterval: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }
  );

  const onSubmitCaption = () => MemetaurAPI.setCaption({ word: caption });

  return (
    <Styled.MyTurn>
      <div className='header'>
        <div className='main'>Сome up with some funny meme caption</div>
        <div className='sub'>
          Or choose one of the randomly generated down below
        </div>
      </div>

      <Styled.Form>
        <Input
          className='custom-preset-input'
          size='large'
          color='lime'
          placeholder='Enter your caption'
          value={caption}
          onChange={onChangeCaption}
          onEnter={onSubmitCaption}
        />
        <Button
          isDisabled={!caption}
          isScale
          isPrimary
          size='large'
          color='lime'
          onClick={onSubmitCaption}
        >
          Submit
        </Button>
      </Styled.Form>

      <Styled.CaptionPresets>
        {presetCaptions && (
          <Scroll className='presets-scroll' color='lime'>
            {presetCaptions.map((preset, i) => (
              <div
                key={i}
                className='preset'
                onClick={() => setCaption(preset)}
              >
                <div className='preset-caption'>{preset}</div>
              </div>
            ))}
          </Scroll>
        )}
      </Styled.CaptionPresets>
    </Styled.MyTurn>
  );
};

export default MyTurn;
