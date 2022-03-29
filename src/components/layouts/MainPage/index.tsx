import {SearchInput} from '../../atoms';
import logo from '../../../assets/logo.svg';

interface IProps {
    children: JSX.Element
}
const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <header className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <SearchInput onSearch={() => {}} />
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    );
};

export default MainLayout;