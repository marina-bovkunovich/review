import React from 'react';
import FetchMoreButton from './components/atoms/FetchMoreButton';
import MainLayout from './components/layouts/MainPage';
import ContentList from './components/moleculs/ContentList';

function App() {
    return (
        <MainLayout>
            <div className='content'>
                <h1 className="text-3xl font-bold underline">Simple content list</h1>
                <ContentList characters={[]} />
                <FetchMoreButton onClick={() => { }}>Fetch more</FetchMoreButton>
            </div>
        </MainLayout>

    );
}

export default App;

// TODO
// дебоунс
// модалка,инфинити скролл , табы (инфо и эпизоды)
