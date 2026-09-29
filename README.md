# NHS App prototype

## About the NHS App prototype

The NHS App prototype enables you to make interactive prototypes that will look like pages on the NHS App. The prototypes you make are a great way to show ideas to others and for conducting user research.

Built using the [NHS prototype kit](https://prototype-kit.service-manual.nhs.uk/) with added code from the [NHS App frontend](https://github.com/nhsuk/nhsapp-frontend) for [NHS App specific components](https://design-system.nhsapp.service.nhs.uk/components/).

### Requirements

- [Node.js](https://nodejs.org/) `^22.11.0` or `^24.11.0` (see `engines` in `package.json`).

### Running the kit

Install dependencies once:

```
npm install
```

Then start the prototype in development mode:

```
npm run dev
```

`npm start`, `npm run dev` and `npm run watch` are equivalent — they all run
the kit with live reload. It watches the `app/` folder, so changes to
templates **and** to `app/routes.js` are picked up automatically (route
changes trigger a server restart via nodemon; view changes reload instantly).

The prototype is then available at http://localhost:3000 (the kit will pick
the next free port if 3000 is in use).

To run it in production mode (no live reload, e.g. for hosting a deployed
prototype):

```
npm run serve
```

### Help improve the NHS App prototype

We welcome feedback and suggestions to help improve the NHS App prototype.

If you have any ideas, feature requests, or issues to report, please [create an issue](https://github.com/nhsuk/nhsapp-prototype/issues).

---

### **[View and discuss NHS App design components and patterns](https://github.com/orgs/nhsuk/projects/8/views/1)**

---
