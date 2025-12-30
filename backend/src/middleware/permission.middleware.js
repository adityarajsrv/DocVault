export const canEdit = async (req, res, next) => {
  const doc = await Document.findById(req.params.id);

  if (
    doc.owner.equals(req.user.id) ||
    doc.permissions.editors.includes(req.user.id)
  ) {
    return next();
  }

  return res.status(403).json({ message: "Access denied" });
};
