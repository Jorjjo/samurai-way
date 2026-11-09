import { Header } from '../common/components/Header/Header';
import './App.css';
import { Main } from './Main';


export function App() {
    return (
        <div className={'app'}>
            <Header/>
            <Main />
        </div>
    );
}

//     const [selectedTrack, setSelectedTrack] = useState<
//         GetTrackResponse['data'] | null
//     >(null);
//     const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
//     const [tracks, setTracks] = useState<Track[] | null>(null);
//     useEffect(() => {
//         fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
//             headers: { 'api-key': '7585a42f-8b1c-467d-9114-a8515ddecc73' },
//         })
//             .then((res) => res.json())
//             .then((json) => setTracks(json.data));
//     }, []);

//     useEffect(() => {
//         if (!selectedTrackId) {
//             return;
//         }
//         fetch(
//             `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
//             {
//                 headers: {
//                     'api-key': '7585a42f-8b1c-467d-9114-a8515ddecc73',
//                 },
//             },
//         )
//             .then((res) => res.json())
//             .then((json: GetTrackResponse) => setSelectedTrack(json.data));
//     }, [selectedTrackId]);

//     if (!tracks) {
//         return (
//             <div>
//                 <h1>Musicfun player</h1>
//                 <span>Loading...</span>
//             </div>
//         );
//     }
//     if (tracks.length === 0) {
//         return (
//             <div>
//                 <h1>Musicfun player</h1>
//                 <span>No tracks</span>
//             </div>
//         );
//     }
//     return (
//         <div>
//             <h1>Musicfun player</h1>
//             <button
//                 onClick={() => {
//                     setSelectedTrack(null);
//                 }}
//             >
//                 reset selection
//             </button>
//             <div
//                 style={{
//                     display: 'grid',
//                     gap: '20px',
//                     gridTemplateColumns: '50% 50%',
//                 }}
//             >
//                 <ul>
//                     {tracks.map((track) => {
//                         return (
//                             <li
//                                 key={track.id}
//                                 style={{
//                                     border:
//                                         track.id === selectedTrack?.id
//                                             ? '1px solid orange'
//                                             : 'none',
//                                 }}
//                             >
//                                 <div
//                                     onClick={() => {
//                                         setSelectedTrackId(track.id);
//                                     }}
//                                 >
//                                     {track.attributes.title}
//                                 </div>
//                                 <audio
//                                     controls
//                                     src={track.attributes.attachments[0].url}
//                                 ></audio>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <div>
//                     <h4>Details</h4>
//                     <div>
//                         <h3>
//                             {selectedTrack
//                                 ? selectedTrack?.attributes.title
//                                 : 'Track is not selected'}
//                         </h3>
//                         <p>{selectedTrack?.attributes.lyrics ?? 'no lyrics'}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
