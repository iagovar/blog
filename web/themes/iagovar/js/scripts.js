/**
 * Toggles the visibility of the hamburger menu and updates the hamburger icon accordingly.
 *
 * @return {void} This function does not return a value.
 */
function hamburgerMenu() {
    const hamburger = document.querySelector('.nav-header .hamburger');
    const menu = document.querySelector('.nav-header .menu');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.innerText = '☰';
        hamburger.style.color = 'unset';
    } else {
        menu.style.display = 'block';
        hamburger.innerText = '✕';
        hamburger.style.color = 'white';
    }
}

function main() {

    /**
     * Enhances user experience by implementing a "Show More" feature for elements with data-show-more attribute.
     * 
     * It basically looks for any element with data-show-more attribute and inserts a div button as a child of the element.
     * 
     * Then some functionality is added to the button combining the .show-more css class and the event listener.
     * 
     * @returns {void}
     */
    function showMore() {
        
        const showMoreElements = document.querySelectorAll('[data-show-more]');
        for (let i = 0; i < showMoreElements.length; i++) {

            showMoreElements[i].style.overflow = 'hidden';

            let thisElementHeight = showMoreElements[i].offsetHeight
            const showMoreHeight = showMoreElements[i].getAttribute('data-show-more');

            // If the height of the element is greater than the data-show-more value we want to put there show more button, otherwise we don't really want it
            if (thisElementHeight > showMoreHeight) {

                showMoreElements[i].innerHTML += '<div class="show-more">V Show more V</div>';
                const showMoreButton = showMoreElements[i].querySelector('.show-more');

                // The position of the show-more div (relative) should be top: -thisElementHeight + showMoreHeight - 40px (~height of the button) just because this is what looks right to me.

                thisElementHeight = showMoreElements[i].offsetHeight; // Recalculating beacuse we added the button

                const showMorePostion = `${- thisElementHeight + Number(showMoreHeight)}px`;
                
                showMoreButton.style.top = showMorePostion;

                // Now we crop our element to showMoreHeight
                showMoreElements[i].style.height = showMoreHeight + 'px';
                showMoreElements[i].style.marginBottom = '4em';

                // On show less button click we want to return the user where the element begins, as nicety, so we need to keep track where it begins in the viewport
                const thisElementPosition = showMoreElements[i].getBoundingClientRect().top + window.scrollY;
                
                showMoreButton.addEventListener('click', function () {
                    // If current content is 'show more' change to 'show less' and viceversa
                    if (showMoreButton.innerText === 'V Show more V') {
                        showMoreButton.innerText = 'ʌ Show less ʌ';
                        // Change parent height and overflow to unset so it expands
                        showMoreElements[i].style.height = 'unset';
                        showMoreElements[i].style.overflow = 'unset';
                        // Change it's own top property to unset so it moves down with the parent
                        showMoreButton.style.top = 'unset';
                    } else {
                        showMoreButton.innerText = 'V Show more V';
                        // Change parent height to showMoreHeight and overflow to hidden so it collapses
                        showMoreElements[i].style.height = showMoreHeight + 'px';
                        showMoreElements[i].style.overflow = 'hidden';
                        // Change it's own top property to showMorePostion so it moves up with parent
                        showMoreButton.style.top = showMorePostion;
                        // Move the browser scroll to 20px above the element (taking the header height into account) as nicety feature
                        const headerCalculatedHeight = document.querySelector('.nav-header').offsetHeight;
                        window.scrollTo(0, thisElementPosition - 20 - headerCalculatedHeight);

                    }
                })

            }
        }
    }

    showMore();

}