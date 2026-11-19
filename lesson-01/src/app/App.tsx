import { Header } from '@/common/components/Header/Header';
import  './App.css';
import { Main } from './Main';
import { Footer } from '@/common/components/Footer/Footer';


export function App() {
    return (
        <div className={'app'}>
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
}
