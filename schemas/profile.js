export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Mission",
      name: "mission",
      type: "string",
    },
    {
      title: "Picture",
      name: "picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Alt Text",
      name: "altText",
      type: "string",
    },
    {
      title: "Facts",
      name: "facts",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
