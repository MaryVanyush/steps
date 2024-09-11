import './TrackersTable.css';

interface Track {
    date: string;
    distance: number;
}

interface TrackersTableProps {
    tracks: Track[];
    removeTrack: (date: string) => void;
}

export const TrackersTable: React.FC<TrackersTableProps> = ({ tracks, removeTrack }) => {
    return (
        <div>
            <div className='box'>
                <div className='box-info'>
                        <div className="info-date">Дата (ДД.ММ.ГГ)</div>
                        <div className="info-distance">Пройдено км</div>
                        <div className="info-actions">Действия</div>
                </div>
            </div>
            <div>
                {tracks.map((track, index) => (
                    <div className='box-data' key={index}>
                        <div className="date">{track.date}</div>
                        <div className="distance">{track.distance} км</div>
                        <div className="actions">
                            <button className="actions-btn btn-close" onClick={() => removeTrack(track.date)}></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
