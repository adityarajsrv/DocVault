import express from "express";
import {
    uploadDocument,
    getDocuments,
    updateDocument,
    starDocument,
    deleteDocument,
    restoreDocument,
} from "../controllers/document.controller.js";
import { upload } from "../utils/fileUpload.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, upload.single("file"), uploadDocument);
router.get("/", auth, getDocuments);
router.patch("/:id", auth, updateDocument);
router.patch("/:id/star", auth, starDocument);
router.delete("/:id", auth, deleteDocument);
router.patch("/:id/restore", auth, restoreDocument);
router.post("/:id/version", auth, upload.single("file"), addVersion);


export default router;
