import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import MemetaurAPI from '@/api/game/memetaur';
import RoomAPI from '@/api/room';

import { Gif as GifType } from '@/common/types/gif';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Scroll from '@/components/Scroll';

import useGameStore from '@/stores/GameStore';

import Gif from './Gif';
import * as Styled from './index.styled';

interface MemeCreationProps {}

const MemeCreation = ({}: MemeCreationProps) => {
  const caption = useGameStore((s) => s.data!.roomDataDto.phrase);
  const myGif = useGameStore((s) => s.getMePlayer().state.word);

  const [selectedGif, setSelectedGif] = useState<string>('');

  const [fetchedGifs, setfetchedGifs] = useState<GifType[]>([]);

  const [gifQuery, setGifQuery] = useState<string>('');
  const onChangeGifQuery = (e: any) => setGifQuery(e.target.value);

  const [isChoosingGif, setIsChoosingGif] = useState<boolean>(false);
  const onStartChooseGif = () => setIsChoosingGif(true);
  const onEndChooseGif = () => setIsChoosingGif(false);

  RoomAPI.getRoom(useGameStore((s) => s.data!.id));

  useEffect(() => {
    const fetchGifs = setTimeout(() => {
      MemetaurAPI.searchForGifs({ word: gifQuery }).then((data) => {
        setfetchedGifs(data);
        const scroll = document.getElementById('gifs-scroll');
        if (scroll) scroll.scrollTop = 0;
      });
    }, 500);

    return () => clearTimeout(fetchGifs);
  }, [gifQuery]);

  const onSelectGif = (gifUrl: string) => {
    setSelectedGif(gifUrl);
    onEndChooseGif();
    MemetaurAPI.selectGif({ word: gifUrl });
  };

  const onChangeGif = () => {
    setSelectedGif('');
    onStartChooseGif();
  };

  return (
    <Styled.MemeCreation>
      <Styled.Meme gifIsSelected={!!selectedGif}>
        <div className='caption'>{caption}</div>
        <div className='gif'></div>
        <Styled.Gif>
          {!selectedGif && !isChoosingGif ? (
            <div className='nogif' onClick={onStartChooseGif}>
              <ReactSVG src='/images/svgs/plus-rectangle.svg' />
              Select a gif
            </div>
          ) : isChoosingGif ? (
            <Styled.ChooseGif isSearching={!!gifQuery}>
              <Input
                className='search-input'
                color='lime'
                value={gifQuery}
                onChange={onChangeGifQuery}
                placeholder='Search for gifs'
                focusOnLoad
              />

              <Scroll id='gifs-scroll' className='gifs-scroll' color={'lime'}>
                <div className='gifs-mansory-wrapper'>
                  {fetchedGifs.map((gif) => (
                    <Gif
                      key={gif.id}
                      className='gif'
                      onClick={() => onSelectGif(gif.media_formats.gif.url)}
                      src={gif.media_formats.gif.url}
                      dimensions={gif.media_formats.gif.dims}
                    />
                  ))}
                </div>
              </Scroll>
            </Styled.ChooseGif>
          ) : (
            <Styled.MyGif>
              <div className='overlay'>
                <Button size='medium' color='lime' onClick={onChangeGif}>
                  Change gif
                </Button>
              </div>
              <img src={selectedGif} />
            </Styled.MyGif>
          )}
        </Styled.Gif>
      </Styled.Meme>
    </Styled.MemeCreation>
  );
};

export default MemeCreation;
