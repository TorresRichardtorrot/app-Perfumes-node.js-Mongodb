export const isAuthenticated = (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "No estas autenticado");
    res.redirect("/users/signin");
  } catch (error) {
    console.error(error, "10");
    res.redirect("/users/signin");
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      return next();
    } else {
      req.flash("error_msg", "No estas autenticado");
      res.redirect("/");
    }
  } catch (error) {
    console.error(error, "10");
    res.redirect("/");
  }
};
