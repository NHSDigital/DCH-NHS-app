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
            // Validation fallback if they select nothing
            res.render('v5.5/pages/opt-in/preferences-1', {
                error: true
            })
        }
    })

    // Catch the redirect specifically from the enter-your-name form
    router.post('/v5.5/pages/opt-in/enter-your-name-post', function (req, res) {
        const knowsNhsNumber = req.session.data['do-you-know-nhs-number'];
        if (knowsNhsNumber === 'yes') {
             res.redirect('/v5.5/pages/opt-in/nhs-check-details');
        } else {
             res.redirect('/v5.5/pages/opt-in/enter-date-of-birth');
        }
    })

    router.post('/v5.5/pages/opt-in/do-you-know-nhs-number', function (req, res) {
        const input = req.session.data['do-you-know-nhs-number']

        if (input === 'yes') {
            res.redirect('/v5.5/pages/opt-in/enter-your-nhs-number')
        } else if (input === 'no') {
            res.redirect('/v5.5/pages/opt-in/enter-your-name')
        } else {
            // Validation fallback if they select nothing
            res.render('v5.5/pages/opt-in/do-you-know-nhs-number', {
                error: true
            })
        }
    })

    router.post('/v5.5/pages/opt-in/do-you-know-nhs-number-post', function (req, res) {
        const input = req.session.data['do-you-know-nhs-number']

        if (input === 'yes') {
            res.redirect('/v5.5/pages/opt-in/enter-your-nhs-number')
        } else if (input === 'no') {
            res.redirect('/v5.5/pages/opt-in/enter-your-name')
        } else {
            // Validation fallback if they select nothing
            res.render('v5.5/pages/opt-in/do-you-know-nhs-number', {
                error: true
            })
        }
    })

    // V6 Routes

    router.post('/v6/pages/opt-in/preferences-1-post', function (req, res) {
        const input = req.session.data['opt-in-preferences']

        if (input === 'receive') {
            res.redirect('/v6/pages/opt-in/confirmation-saved-receive')
        } else if (input === 'dont-receive') {
            res.redirect('/v6/pages/opt-in/confirmation-saved-dont-receive')
        } else {
            // Validation fallback if they select nothing
            res.render('v6/pages/opt-in/preferences-1', {
                error: true
            })
        }
    })

    router.post('/v6/pages/opt-in/enter-your-name-post', function (req, res) {
        const knowsNhsNumber = req.session.data['do-you-know-nhs-number'];
        if (knowsNhsNumber === 'yes') {
             res.redirect('/v6/pages/opt-in/nhs-check-details');
        } else {
             res.redirect('/v6/pages/opt-in/enter-date-of-birth');
        }
    })

    router.post('/v6/pages/opt-in/do-you-know-nhs-number', function (req, res) {
        const input = req.session.data['do-you-know-nhs-number']

        if (input === 'yes') {
            res.redirect('/v6/pages/opt-in/enter-your-nhs-number')
        } else if (input === 'no') {
            res.redirect('/v6/pages/opt-in/enter-your-name')
        } else {
            // Validation fallback if they select nothing
            res.render('v6/pages/opt-in/do-you-know-nhs-number', {
                error: true
            })
        }
    })

    router.post('/v6/pages/opt-in/do-you-know-nhs-number-post', function (req, res) {
        const input = req.session.data['do-you-know-nhs-number']

        if (input === 'yes') {
            res.redirect('/v6/pages/opt-in/enter-your-nhs-number')
        } else if (input === 'no') {
            res.redirect('/v6/pages/opt-in/enter-your-name')
        } else {
            // Validation fallback if they select nothing
            res.render('v6/pages/opt-in/do-you-know-nhs-number', {
                error: true
            })
        }
    })

    router.post('/v6/pages/opt-in/enter-your-nhs-number-post', function (req, res) {
        const input = req.session.data['your-nhs-number']

        if (!input || input.trim() === '') {
            // Render specific template manually passing in the error property
            res.render('v6/pages/opt-in/enter-your-nhs-number', {
                error: true
            })
        } else {
            res.redirect('/v6/pages/opt-in/enter-your-name')
        }
    })


    module.exports = router;