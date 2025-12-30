import Document from "../models/Document.js";

export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File is required" });
    }

    const { tags } = req.body;
    
    const document = await Document.create({
      name: req.file.originalname,
      type: req.file.mimetype.split("/")[1],
      tags: tags ? tags.split(",").map(t => t.trim()) : [],
      owner: req.user.id,
      permissions: {
        viewers: [],
        editors: [],
      },
      versions: [
        {
          versionNumber: 1,
          fileUrl: `/uploads/documents/${req.file.filename}`,
          uploadedBy: req.user.id,
        },
      ],
    });
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const { search, tag, type, starred, deleted } = req.query;

    let query = {
      isDeleted: deleted === "true",
      $or: [
        { owner: req.user.id },
        { "permissions.viewers": req.user.id },
        { "permissions.editors": req.user.id },
      ],
    };
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    if (tag) {
      query.tags = tag;
    }
    if (type) {
      query.type = type;
    }
    if (starred === "true") {
      query.isStarred = true;
    }
    const documents = await Document.find(query)
      .sort({ updatedAt: -1 })
      .populate("owner", "name email");

    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDocument = async (req, res) => {
  try {
    const { name, tags } = req.body;
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (
      !document.owner.equals(req.user.id) &&
      !document.permissions.editors.includes(req.user.id)
    ) {
      return res.status(403).json({ message: "Access denied" });
    }
    if (name) document.name = name;
    if (tags) document.tags = tags;
    await document.save();
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const starDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    document.isStarred = !document.isStarred;
    await document.save();
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (!document.owner.equals(req.user.id)) {
      return res.status(403).json({ message: "Only owner can delete" });
    }
    document.isDeleted = true;
    await document.save();
    res.json({ message: "Document moved to trash" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const restoreDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (!document.owner.equals(req.user.id)) {
      return res.status(403).json({ message: "Only owner can restore" });
    }
    document.isDeleted = false;
    await document.save();
    res.json({ message: "Document restored" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addVersion = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File is required" });
    }
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (
      !document.owner.equals(req.user.id) &&
      !document.permissions.editors.includes(req.user.id)
    ) {
      return res.status(403).json({ message: "Access denied" });
    }
    document.versions.push({
      versionNumber: document.versions.length + 1,
      fileUrl: `/uploads/documents/${req.file.filename}`,
      uploadedBy: req.user.id,
    });

    await document.save();
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const shareDocument = async (req, res) => {
  try {
    const { userId, role } = req.body;
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }
    if (!document.owner.equals(req.user.id)) {
      return res.status(403).json({ message: "Only owner can share" });
    }
    if (role === "viewer") {
      document.permissions.viewers.addToSet(userId);
    }
    if (role === "editor") {
      document.permissions.editors.addToSet(userId);
    }
    await document.save();
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
