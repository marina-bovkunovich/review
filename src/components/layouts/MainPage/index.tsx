interface IProps {
    children: JSX.Element
}
const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <header>
            </header >
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    );
};

export default MainLayout;