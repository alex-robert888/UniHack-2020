import './ThreeDots.scss';
import emptyDot from '../../assets/img/elements/empty-dot.svg';
import filledDot from '../../assets/img/elements/filled-dot.svg';

const ThreeDots = (props) => { // props: no_pages, selected_page
    var vec = new Array(props.no_pages); // [0 1 0] for page 2
    for(var i=0;i<props.no_pages;i++){
        vec[i] = 0;
    }
    vec[props.selected_page - 1] = 1;
    return (
        <article className='threeDots'>
            {vec.map(bit => (
                <img className='dot' src={bit === 1 ? filledDot : emptyDot} alt={bit === 1 ? "filled_dot" : "empty_dot"} />
            ))
            }
        </article>
    );
}

export default ThreeDots;