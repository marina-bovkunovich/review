/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { changeCharName, getCards } from '../../../redux/actions/cardsAction';

const MainPage: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cards);

  const dispatch = useDispatch();

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    dispatch(changeCharName('morty'));
  }, []);

  const clickHandler = () => {
    if (inputRef.current != null && inputRef.current.value != null) {
      dispatch(getCards(inputRef.current.value));
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <div
        style={{
          padding: '10px', border: 'solid black 1px', width: '80px', textAlign: 'center',
        }}
        onClick={clickHandler}
      >
        Click
      </div>
      <div>{cards.cardsList.results.map((e:{name: string}) => e.name)}</div>
    </>
  );
};

export default MainPage;
