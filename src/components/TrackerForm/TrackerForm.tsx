import './TrackerForm.css';
import { useState } from 'react';

interface TrackerFormProps {
    addTrack: (date: string, distance: number) => void;
}

export const TrackerForm: React.FC<TrackerFormProps> = ({ addTrack }) => {
    const [date, setDate] = useState<string>('');
    const [distance, setDistance] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (date && distance) {
            addTrack(date, parseFloat(distance));
            setDate('');
            setDistance('');
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-date'>
                <label htmlFor="date" className='form-label'>Дата (ДД.ММ.ГГ)</label>
                <input id="name" name="date" className='form-input' type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='form-distance'>
                <label htmlFor="distance" className='form-label'>Пройдено км</label>
                <input id="name" name="distance" className='form-input' type="number" placeholder="Пройдено км" value={distance} onChange={(e) => setDistance(e.target.value)}/>
            </div>
            
            <button type="submit" className='form-btn'>OK</button>
        </form>
    );
};
