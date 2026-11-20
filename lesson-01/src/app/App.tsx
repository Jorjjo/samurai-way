import { Footer } from '@/app/ui/Footer';
import { Header } from '@/app/ui/Header';
import './App.css';
import { Main } from './Main';


export function App() {
    return (
        <div className={'app'}>
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
}
