const express = require("express");
const algoliasearch = require("algoliasearch");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
/*
const algolia = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);

app.post("/api/algolia", async (req, res) => {
  if (!req.body) {
    return res.status(422).json({ message: "Invalid webhook payload" });
  }
  const {
    event,
    payload: { id: objectID, ...payload },
  } = req.body;

  const [resource, trigger] = event.split(".");

  try {
    const index = algolia.initIndex(resource);

    if (trigger === "delete") {
      await index.deleteObject(objectID);
      return res.status(204).end();
    }

    if (!["create", "update"].includes(trigger)) {
      return res.status(422).json({ message: `${trigger} is not a valid trigger}` });
    }

    return res.status(trigger === "create" ? 201 : 202).json(
      await index.saveObject({
        objectID,
        ...payload,
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
*/

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "client", "index.html")));
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
