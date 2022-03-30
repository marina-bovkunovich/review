import {SearchInput} from '../../atoms';
import logo from '../../../assets/logo.svg';

interface IProps {
    children: JSX.Element
}
const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <header className="flex fixed top-0 left-0 right-0 justify-center p-12 
            shadow-lg rounded-3xl">
                <img src={logo} className="absolute top-6 left-6 h-20 w-20 animate-[spin_20s_linear_infinite]" alt="logo" />
                <SearchInput onSearch={() => {}} />
            </header>
            <main className= "mt-[140px] text-center">
                {children}
            </main>
            <footer>
            </footer>
        </>
    );
};

export default MainLayout;