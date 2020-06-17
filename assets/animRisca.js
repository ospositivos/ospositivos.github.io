var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var AnimRisca = document.querySelector('.risca');
var executaRisca = true;
const annotate = RoughNotation.annotate;

window.addEventListener('scroll', function (event) {

    if (isInViewport(AnimRisca)) {

        console.log('In viewport!');

        if (executaRisca) {

            console.log('In viewport!');

            if (executaRisca) {

                const a1 = annotate(document.querySelector('span.risca'), {
                    type: 'crossed-off',
                    color: '#F44336',
                    animationDelay: 1000
                });
                a1.show();

                executaRisca = false;
            }

        }

    } else {
        console.log('Nope...');
    }
}, false);
