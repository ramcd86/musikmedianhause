module.exports = {
  extend: "@apostrophecms/page-type",
  fields: {
    add: {
      subtitle: {
        type: "string",
      },
      main: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
          },
        },
      },
    },
    group: {
      basics: {
        fields: ["title", "subtitle", "main"],
      },
    },
  },
};
