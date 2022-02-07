// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "organdir-page",
        label: "Organ Directory",
      },
      {
        name: "organdir-alphabase-page",
        label: "Organs Alphabetical Base Page",
      },
      {
        name: "builderdir-page",
        label: "Organ Builder Directory",
      },
      {
        name: "builderdir-alphabase-page",
        label: "Organ Builders Alphabetical Base Page",
      },
    ],
  },
};
