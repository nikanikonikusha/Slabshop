function checkInputs(){
    if ($('.inp')[0].value != 0 && $('.inp')[0].value != 0) {
        return true
    } else {
        return false
    }
}

$('button.submit').click(function (e) {
    checkInputs()
    if (checkInputs() == true) {
        $('.transaction-status').addClass('show');
        $('.innercontent p').text(`You've successfully transfered $${$('.inp')[1].value} to ${$('.inp')[0].value}`);
        setTimeout(() => {
            $('.innercontent').addClass('show')
        }, 500);
        setTimeout(() => {
            $('.transaction-status').removeClass('show');
            $('.innercontent').removeClass('show')
            $('.inp').each(function (index, element) {
                element.value = ''
            });
        }, 2000);
    } else {
        alert("Fill missing inputs")
    }
});
