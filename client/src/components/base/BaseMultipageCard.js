import './BaseMultipageCard.scss';
import '../../style/classes.scss';
import { useState, Fragment } from 'react';
import BaseMultipageCardDots from './BaseMultipageCardDots';
import BaseInputText from './BaseInputText';

const BaseMultipageCard = (props) => {
    let [currentPage, setCurrentPage] = useState(1);

    function onClickContinueButton(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    }

    return (
        <article className='base-multipage-card'>
            <div className="form-placeholder">                
            </div>

            <div class='base-multipage-card-footer'>
                {currentPage === props.numberOfPages ? (
                    <button className="glb-base-filled-button">Finish</button>
                ) : (
                    <button className="glb-base-outlined-button" onClick={onClickContinueButton}>Continue</button>
                )}

                <div className='dots'>
                    <BaseMultipageCardDots no_pages={props.numberOfPages} selected_page={currentPage} />
                </div>   
                
                {/* <Fragment>
                    <form>
                        <BaseInputText title='full name' type='text' />
                        <BaseInputText title='email' type='email' />
                        <BaseInputText title='telephone' type='text' />
                    </form>
                </Fragment> */}
            </div>
            
        </article>
    );
}

export default BaseMultipageCard;