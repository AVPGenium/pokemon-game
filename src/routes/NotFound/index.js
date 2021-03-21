import stl from './style.module.css';

const NotFoundPage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app')
    }

    return (
        <div className={stl.gamepage}>
            <p>Hello from Game Page</p>

            <button onClick={handleClick}>
                Back to homepage
            </button>
        </div>
    )
}

export default NotFoundPage;