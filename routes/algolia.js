const express = require("express");
const router = express.Router();
const algoliasearch = require("algoliasearch");

const algolia = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);

router.post("/", async (req, res) => {
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

module.exports = router;
