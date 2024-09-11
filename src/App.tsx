import './App.css'
import { useState } from 'react';
import {TrackerForm} from './components/TrackerForm/TrackerForm';
import {TrackersTable} from './components/TrackersTable/TrackersTable';

interface Track {
  date: string;
  distance: number;
}

export const App = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

    const addTrack = (date: string, distance: number) => {
        setTracks(prevTracks => {
            const existingTrackIndex = prevTracks.findIndex(track => track.date === date);
            if (existingTrackIndex !== -1) {
                const updatedTrack = {
                    ...prevTracks[existingTrackIndex],
                    distance: prevTracks[existingTrackIndex].distance + distance,
                };
                const updatedTracks = [...prevTracks];
                updatedTracks[existingTrackIndex] = updatedTrack;
                return updatedTracks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            } else {
                const newTrack = { date, distance };
                const updatedTracks = [...prevTracks, newTrack];
                return updatedTracks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            }
        });
    };

    const removeTrack = (date: string) => {
        setTracks(prevTracks => prevTracks.filter(track => track.date !== date));
    };

    return (
        <div>
            <h1>Учёт тренировок</h1>
            <TrackerForm addTrack={addTrack} />
            <TrackersTable tracks={tracks} removeTrack={removeTrack} />
        </div>
    );
};
