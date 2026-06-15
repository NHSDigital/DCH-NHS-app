module.exports = {

  // Insert values here

  // Defaults page view to native
  "web": "no",

  // Set linked profile details
  "linkedProfileFirstName": "Teddy",
  "linkedProfileLastName": "Goodall",
  "linkedProfileNhsNumber": "123 456 7891",
  "linkedProfileAge": "0 years 3 weeks old",

  // Set linked profile details
  "linkedProfile2FirstName": "Lucy",
  "linkedProfile2LastName": "Swanson",
  "linkedProfile2NhsNumber": "123 456 7892",
  "linkedProfile2Age": "16",

  // Set linked profile details
  "linkedProfile3FirstName": "Mary",
  "linkedProfile3LastName": "Gibson",
  "linkedProfile3NhsNumber": "123 456 7893",
  "linkedProfile3Age": "77",

  // Set linked profile details
  "linkedProfile4FirstName": "Michael",
  "linkedProfile4LastName": "Goodall",
  "linkedProfile4NhsNumber": "123 456 7894",
  "linkedProfile4Age": "46",

  // Set linked profile details
  "linkedProfile5FirstName": "Ellen",
  "linkedProfile5LastName": "Murphy",
  "linkedProfile5NhsNumber": "123 456 7895",
  "linkedProfile5Age": "53",

  // Set user details
  "userFirstName": "Jane",
  "userLastName": "Goodall",
  "nhsNumber": "123 456 7890",
  "dob": "15 March 1984",

  // Set version of the app
  "version": "2.36.6 (2.36.0)",

  
  // Messages
  // Use true/false booleans (not strings) so Nunjucks truthiness checks work correctly
  "message1read": false,
  "message2read": true,
  "messages": 1, // This displays in the messages badge - set this to the number of unread messages - For example, if 'message1read = true' and 'message2read = false', then set the 'messages' number to 1
  "messageSendingError": true, // Shows 'cannot send your reply' screen for message 2


  // Set account type - p9, p5 or linked-profiles
  "accountType": "p9",

  "gp-appointment-clinician": "",
  "gp-appointment-clinician-sex": "",
  "gp-appointment-location": "",

  "select-medicines": "",

  "message-sender": "",
  "message-status": "",

  // Medicines
  "medicine1": "Felodipine 2.5micrograms tablets",
  "medicine1description": "use as directed - 10 tablets",
  "medicine1quantity": "10 tablets",

  "medicine2": "Atorvastatin 500mg capsules",
  "medicine2description": "Take ONE capsule THREE times daily for 7 days, 28 capsules",
  "medicine2quantity": "28 capsules",

  "medicine3": "Nuelin SA 175mg tablets (Meda Pharmaceuticals Ltd)",
  "medicine3description": "Two to be taken twice a day 60 tablets",
  "medicine3quantity": "60 tablets",

  "medicine4": "Warfarin 500microgram tablets",
  "medicine4description": "take as instructed by anticoagulant clinic 10 tablets",
  "medicine4quantity": "10 tablets",

  "medicine5": "Ramipril 5mg capsules",
  "medicine5description": "take as instructed 10 tablets",
  "medicine5quantity": "10 tablets",

  "medicine6": "Tamsulosin 400microgram modified release capsules",
  "medicine6description": "1 OD - 56 capsules",
  "medicine6quantity": "1 OD - 56 capsules",

  // Upcoming and past appointments
  "appointments": 4,

  // Errors
  // Use string comparisons in templates: {% if data['loginError'] === "yes" %}
  "loginError": "no",
  "gpAppointmentError": "no",

}