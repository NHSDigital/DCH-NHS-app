
    // External dependencies
    const express = require('express');

    const router = express.Router();

// Add your routes here - above the module.exports line

    router.post('/v5.4/pages/opt-out/preferences-1-post', function (req, res) {
        var input = req.session.data['stop-messages']
        if (input === 'Yes'){
            res.redirect('/v5.4/pages/opt-out/confirmation-saved-yes')
        }else {
            res.redirect('/v5.4/pages/opt-out/confirmation-saved-no')
        }
    })

    router.post('/v5.4/pages/opt-in/preferences-1-post', function (req, res) {
        var input = req.session.data['opt-in-preferences']
        if (input === 'Stop'){
            res.redirect('/v5.4/pages/opt-in/confirmation-saved-stop')
        }else if (input === 'Continue'){
            res.redirect('/v5.4/pages/opt-in/confirmation-saved-continue')
        } else {
            // fallback
            res.redirect('/v5.4/pages/opt-in/preferences-1')
        }
    })

    module.exports = router;