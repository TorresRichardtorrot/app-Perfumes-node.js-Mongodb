import passport from "passport";

import User from "../models/user.js";

//!formulario de registro
export const renderSignUpForm = (req, res) => {
  res.render("users/form-signup", { layout: "form-Seccion" });
};

//!formulario de inicio
export const renderSigninForm = (req, res) => {
  res.render("users/form-signin", { layout: "form-Seccion" });
};

//!formulario de inicio del admin
export const renderSigninFormAdmin = (req, res) => {
  res.render("users/form-admin", { layout: "form-Seccion" });
};

//?datos de registros
export const signup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const errors = [];

  try {
    if (!name || !email || !password) {
      errors.push({ texto: "Los campos no pueden estar vacios." });
      res.render("users/signup", {
        errors,
        name,
        email,
      });
    } else {
      if (password != confirm_password) {
        errors.push({ texto: "la contraseña no coinciden." });
      }
      if (password.length < 4) {
        errors.push({ texto: "la contraceña debe tener mas de 4 caracteres." });
      }
      if (errors.length > 0) {
        console.log(errors);
        res.render("users/signup", {
          errors,
          name,
          email,
        });
      } else {
        const emailUser = await User.findOne({ email });
        if (emailUser) {
          req.flash("error_msg", "El correo ya esta en uso.");
          res.redirect("users/signup");
        } else {
          const newUser = new User({ name, email, password });
          newUser.password = await newUser.encryptPassword(password);
          await newUser.save();
          req.flash("message_msg", "Usuario creado correctamente");
          res.redirect("/users/signin");
        }
      }
    }
  } catch (error) {
    console.log(error);
    errors.push({ texto: "Error en el sevidor intente mas tarde" });
    res.render("users/signup", {
      errors,
      name,
      email,
    });
  }
};

//?datos de inicio
export const signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/client",
  failureFlash: true,
});

//?inicio admin
export const adminSignin = (req, res) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return res.redirect("/");
      }
      if (!user) {
        req.flash("error_msg", "Credenciales incorrectas");
        return res.redirect("/users/signin/admin");
      }
      if (user.isAdmin) {
        req.login(user, (err) => {
          if (err) {
            console.error(err);
            return res.redirect("/");
          }
          return res.redirect("/admin");
        });
      } else {
        req.flash("error_msg", "No tienes permiso para acceder a esta página");
        return res.redirect("/users/signin/admin");
      }
    })(req, res);
  } catch (error) {
    console.error(error);
    return res.redirect("/");
  }
};

//*salir de la app
export const logout = (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        console.error(err);
      }
      req.flash("success_msg", "Estás desconectado.");
      res.redirect("/users/signin");
    });
  } catch (error) {
    console.error(error);
  }
};
