# NHS website opt-out journey — flow diagram

Non-app, standard NHS website version of the age-based messages opt-out flow.
Routes live under `/website/pages/opt-out/`, views in
`app/views/website/pages/opt-out/`, and POST handlers in `app/routes.js`.

```mermaid
flowchart TD
    start["01 start<br/>Unsubscribe introduction"]
    nhsChoice["05 do-you-know-nhs-number<br/>Do you know your NHS number?"]
    enterNhs["06 enter-your-nhs-number<br/>What is your NHS number?"]
    enterName["09 enter-your-name<br/>Enter your full name"]
    postcode["03 enter-your-postcode<br/>What is your post code"]
    dob["02 enter-date-of-birth<br/>What is your date of birth?"]
    checkNhs["07 check-your-details-nhs-number<br/>Confirm details (NHS number + postcode)"]
    checkNoNhs["08 check-your-details<br/>Confirm details (name, DOB, postcode)"]
    error["04 identity-details-error<br/>We can't identify you"]
    confirmRequest["13 confirm-unsubscribe-request<br/>Keep or unsubscribe?"]
    keep["11 confirmation-saved-no<br/>You will continue to receive messages"]
    unsub["12 confirmation-saved-yes<br/>You will no longer receive messages"]

    start --> nhsChoice
    nhsChoice -- Yes --> enterNhs
    nhsChoice -- No --> enterName
    enterNhs --> postcode
    enterName --> postcode
    postcode -- "has NHS number" --> checkNhs
    postcode -- "no NHS number" --> dob
    dob --> checkNoNhs
    checkNhs -- "identity matched" --> confirmRequest
    checkNhs -- "identity not matched" --> error
    checkNoNhs -- "identity matched" --> confirmRequest
    checkNoNhs -- "identity not matched" --> error
    error -- Continue --> nhsChoice
    confirmRequest -- Keep --> keep
    confirmRequest -- Unsubscribe --> unsub
```

## Notes

- The postcode step is shared by both identity paths (NHS number, or
  name + date of birth).
- The identity check is simulated in `app/routes.js`: enter postcode
  `SW1 2CV` to pass verification on either path; anything else routes to
  the `identity-details-error` page, whose Continue button loops back to
  `do-you-know-nhs-number` to retry.
- Both confirmation pages (`confirmation-saved-yes` / `confirmation-saved-no`)
  use the standard `nhsuk-frontend` panel component, not app-specific styling.
