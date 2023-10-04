export const renderClient = (req, res) => {
  try {
    const user = req.user;
    const isAdmin = user.isAdmin;
    res.render("indexAdmin", { layout: "admin", isAdmin });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};
