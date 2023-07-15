import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "m8g3wr034n15",
  environment: "master",
  accessToken: "98xJta9gXoAT3VrjcJnXJS2-TkYT_yWwSUXLXHCEK5A",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { url, title, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};

/*client.getEntries({ content_type: "projects" }).then((response) => {
  console.log(
    response.items.map((item) => {
      console.log(item);
    })
  );
});*/
