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

    // Website (non-app) opt-out journey routes

    router.post('/website/pages/opt-out/do-you-know-nhs-number-answer', function (req, res) {
        const input = req.session.data.knowsNhsNumber

        if (input === 'Yes') {
            res.redirect('/website/pages/opt-out/enter-your-nhs-number')
        } else if (input === 'No') {
            res.redirect('/website/pages/opt-out/enter-your-name')
        } else {
            // Validation fallback if they select nothing
            res.render('website/pages/opt-out/do-you-know-nhs-number', {
                error: true
            })
        }
    })

    router.post('/website/pages/opt-out/enter-your-nhs-number-answer', function (req, res) {
        const input = req.session.data.nhsNumber

        if (!input || input.trim() === '') {
            res.render('website/pages/opt-out/enter-your-nhs-number', {
                error: true
            })
        } else {
            res.redirect('/website/pages/opt-out/check-your-details-nhs-number')
        }
    })

    router.post('/website/pages/opt-out/enter-your-name-answer', function (req, res) {
        const { firstName, lastName } = req.session.data

        if (!firstName || !lastName) {
            res.render('website/pages/opt-out/enter-your-name', {
                error: true
            })
        } else {
            res.redirect('/website/pages/opt-out/enter-date-of-birth')
        }
    })

    router.post('/website/pages/opt-out/enter-date-of-birth-answer', function (req, res) {
        const { day, month, year } = req.session.data.dateOfBirth || {}

        if (!day || !month || !year) {
            res.render('website/pages/opt-out/enter-date-of-birth', {
                error: true
            })
        } else {
            res.redirect('/website/pages/opt-out/enter-your-postcode')
        }
    })

    // Postcode is only collected in the "no NHS number" branch, so after a
    // valid postcode we always continue to the full check-your-details page.
    router.post('/website/pages/opt-out/enter-your-postcode-answer', function (req, res) {
        const { postcode } = req.session.data

        if (!postcode || postcode.trim() === '') {
            res.render('website/pages/opt-out/enter-your-postcode', {
                error: true
            })
        } else {
            res.redirect('/website/pages/opt-out/check-your-details')
        }
    })

    router.post('/website/pages/opt-out/check-your-details-nhs-number-answer', function (req, res) {
        // The NHS number itself identifies the patient in this branch, so no
        // further identity verification is simulated here.
        res.redirect('/website/pages/opt-out/confirm-unsubscribe-request')
    })

    router.post('/website/pages/opt-out/check-your-details-answer', function (req, res) {
        // Simulate an identity check: any non-blank postcode passes
        const postcode = (req.session.data.postcode || '').trim()

        if (!postcode) {
            res.redirect('/website/pages/opt-out/identity-details-error')
        } else {
            res.redirect('/website/pages/opt-out/confirm-unsubscribe-request')
        }
    })

    router.post('/website/pages/opt-out/confirm-unsubscribe-request-answer', function (req, res) {
        const input = req.session.data.confirmUnsubscribe

        if (input === 'Unsubscribe from age-based messages') {
            res.redirect('/website/pages/opt-out/confirmation-saved-yes')
        } else if (input === 'Keep receiving age-based messages') {
            res.redirect('/website/pages/opt-out/confirmation-saved-no')
        } else {
            // Validation fallback if they select nothing
            res.render('website/pages/opt-out/confirm-unsubscribe-request', {
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