module.exports = {
  fields: {
    add: {
      // Adding our array field, `primaryNav`
      organsNav: {
        label: "Organs by Alphabet Navigation",
        type: "array",
        titleField: "label",
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: "Nav item label",
              type: "string",
            },
            _page: {
              label: "Page to link",
              type: "relationship",
              withType: "@apostrophecms/page",
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1,
                },
              },
            },
          },
        },
      },
      buildersNav: {
        label: "Organ Builders",
        type: "array",
        titleField: "label",
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: "Nav item label",
              type: "string",
            },
            _page: {
              label: "Page to link",
              type: "relationship",
              withType: "@apostrophecms/page",
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1,
                },
              },
            },
          },
        },
      },
      musiciansNav: {
        label: "Church Musicians",
        type: "array",
        titleField: "label",
        // The array schema for each item
        fields: {
          add: {
            label: {
              label: "Nav item label",
              type: "string",
            },
            _page: {
              label: "Page to link",
              type: "relationship",
              withType: "@apostrophecms/page",
              max: 1,
              required: false,
              builders: {
                project: {
                  title: 1,
                  _url: 1,
                },
              },
            },
          },
        },
      },
    },
  },
};
