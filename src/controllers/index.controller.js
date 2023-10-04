import perfumeSchema from "../models/perfumes.js";

export const renderIndex = async (req, res) => {
  const perfumes = await perfumeSchema
    .find()
    .sort({ createdAt: "desc" })
    .lean();
  res.render("index", { perfumes });
};

export const renderCatalog = (req, res) => {
  res.render("catalogo");
};

export const renderAdmin = (req, res) => {
  const user = req.user;
  const isAdmin = user.isAdmin;
  res.render("indexAdmin", { layout: "admin", isAdmin });
};
