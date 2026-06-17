module.exports = function (router) {
    ``router.post('/handle-preferences-1', function (req, res) {
    const choice = req.body.choice;

    if (choice === 'Continue') {
        res.redirect('/v5.4/pages/opt-in/confirmation-saved-continue');
    } else if (choice === 'Stop') {
        res.redirect('/v5.4/pages/opt-in/confirmation-saved-stop');
    } else {
        res.redirect('back');
    }
});
``