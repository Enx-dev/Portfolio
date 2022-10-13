export default {
  name: "Project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "project_name",
      type: "string",
      title: "Project Name",
    },
    {
      title: "Project Desktop Img",
      name: "project_desktop_img",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: "Project Mobile Img",
      name: "project_mobile_img",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: "Description",
      type: "text",
      name: "description",
    },
    {
      name: "live_link",
      title: "Live Link",
      type: "url",
    },
    {
      name: "github_link",
      title: "Github Link",
      type: "url",
    },
  ],
};
