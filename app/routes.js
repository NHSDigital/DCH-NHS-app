// External dependencies
    const express = require('express');

    const router = express.Router();

    // Add your routes here - above the module.exports line

    router.post('/v5.4/pages/opt-out/preferences-1-post', function (req, res) {
        const input = req.session.data['stop-messages']

        if (input === 'Yes') {
            res.redirect('/v5.4/pages/opt-out/confirmation-saved-yes')
        } else {
            res.redirect('/v5.4/pages/opt-out/confirmation-saved-no')
        }
    })

    router.post('/v5.5/pages/opt-in/preferences-1-post', function (req, res) {
        const input = req.session.data['opt-in-preferences']

        if (input === 'receive') {
            res.redirect('/v5.5/pages/opt-in/confirmation-saved-receive')
        } else if (input === 'dont-receive') {
            res.redirect('/v5.5/pages/opt-in/confirmation-saved-dont-receive')
        } else {
            // fallback
            res.redirect('/v5.5/pages/opt-in/preferences-1')
        }
    })

    router.post('/v5.5/pages/opt-in/do-you-know-nhs-number', function (req, res) {
        const input = req.session.data['do-you-know-nhs-number']

        if (input === 'yes') {
            res.redirect('/v5.5/pages/opt-in/enter-your-nhs-number')
        } else if (input === 'no') {
            res.redirect('/v5.5/pages/opt-in/enter-your-date-of-birth')
        } else {
            // fallback
            res.redirect('/v5.5/pages/opt-in/abm-manage-preferences')
        }
    })


    module.exports = router;