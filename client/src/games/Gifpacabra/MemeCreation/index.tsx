import { useState } from 'react';
import { useQuery } from 'react-query';
import { ReactSVG } from 'react-svg';

import Input from '@/components/Input';
import Scroll from '@/components/Scroll';
import useGameStore from '@/stores/GameStore';

import gifs from './gifs';
import * as Styled from './index.styled';

interface MemeCreationProps {}

const MemeCreation = ({}: MemeCreationProps) => {
  const [gif, setGif] = useState<string>('');

  const [gifQuery, setGifQuery] = useState<string>('папич');
  const onChangeGifQuery = (e: any) => setGifQuery(e.target.value);

  const [isChoosingGif, setIsChoosingGif] = useState<boolean>(false);
  const onStartChooseGif = () => setIsChoosingGif(true);
  const onEndChooseGif = () => setIsChoosingGif(false);

  const caption = useGameStore((s) => s.data!.roomDataDto.phrase);

  //   const tenorKey = import.meta.env.VITE_TENOR_API_KEY;
  //   const tenorSearchUrl = `https://tenor.googleapis.com/v2/search?key=${tenorKey}&contentfilter=off&media_filter=gif&limit=25&q=папич`;
  //   const { data: fetchedGifs } = useQuery('memetaurTenorGifs', async () =>
  //     fetch(tenorSearchUrl)
  //   );

  return (
    <Styled.MemeCreation>
      <Styled.Meme>
        <div className='caption'>{caption}</div>
        <div className='gif'></div>
        <Styled.Gif>
          {!gif && !isChoosingGif ? (
            <div className='nogif' onClick={onStartChooseGif}>
              <ReactSVG src='/images/svgs/plus-rectangle.svg' />
              Select a gif
            </div>
          ) : isChoosingGif ? (
            <Styled.ChooseGif>
              <Input
                className='search-input'
                color='lime'
                value={gifQuery}
                onChange={onChangeGifQuery}
                placeholder='Search for gifs'
              />
              <Scroll className='gifs-scroll' color={'lime'}>
                <div className='gifs-mansory-wrapper'>
                  {gifs.results.map((gif) => (
                    <img
                      key={gif.id}
                      src={gif.media_formats.gif.url}
                      alt={gif.content_description}
                    />
                  ))}
                </div>
              </Scroll>
            </Styled.ChooseGif>
          ) : (
            <>gif</>
          )}
        </Styled.Gif>
      </Styled.Meme>
    </Styled.MemeCreation>
  );
};

export default MemeCreation;
