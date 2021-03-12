export default {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectTask",
      title: "Project Task",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectSolution",
      title: "Project Solution",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technology" }] }],
    },
    {
      name: "skillsUsed",
      title: "Skills Used",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
