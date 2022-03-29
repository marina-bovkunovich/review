interface IProps {
type: string
}
export const Image: React.FC<IProps> = ({type}) => {
    switch(type) {
        case 'list': {
            return <div> list </div>
        }
        default : return null;
    }
};