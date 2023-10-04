import perfumeSchema from "../models/perfumes.js";
import fs from "fs/promises";

//?form para crear un perfume
export const renderPerfumeForm = (req, res) => {
  try {
    const user = req.user;
    const isAdmin = user.isAdmin;
    res.render("perfumes/form-perfumes-add", { layout: "admin", isAdmin });
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

//!crear perfume
export const createNewPerfume = async (req, res) => {
  const user = req.user;
  const isAdmin = user.isAdmin;
  try {
    const { brand, name, description, price, category } = req.body;
    const image = req.file.filename;

    if ((image, brand, name, description, price)) {
      const newPerfume = new perfumeSchema({
        image,
        brand,
        name,
        description,
        price,
        category,
      });
      await newPerfume.save();

      req.flash("success_msg", "Perfume creado con éxito.");
      res.redirect("/perfumes/add", isAdmin);
    } else {
      req.flash("error_msg", "los campos no pueden estar vacíos");
      res.redirect("/perfumes/add", isAdmin);
    }
  } catch (error) {
    console.error(error);
    req.flash("error_msg", "Error");
    res.redirect("/perfumes/add");
  }
};

//?mostrar un perfume
export const renderPerfume = async (req, res) => {
  try {
    const { id } = req.params;
    const Perfumes = await perfumeSchema.find().lean();
    const Perfume = await perfumeSchema.findById(id).lean();
    res.render("perfumes/perfume", Perfume);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

//?mostrar perfumes
export const renderPerfumes = async (req, res) => {
  try {
    const Perfumes = await perfumeSchema.find().lean();
    const user = req.user;
    const isAdmin = user.isAdmin;
    res.render("perfumes/perfumes_render", {
      layout: "admin",
      Perfumes,
      isAdmin,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/admin");
  }
};

//?formulario de edicion de perfume
export const renderEditForm = async (req, res) => {
  const user = req.user;
  const isAdmin = user.isAdmin;
  const { id } = req.params;
  try {
    const Perfume = await perfumeSchema.findById(id).lean();
    res.render("perfumes/form-perfumes-edit", {
      layout: "admin",
      Perfume,
      isAdmin,
    });
  } catch (error) {
    console.log(error);
    req.flash("error_msg", "error");
    res.redirect("/perfumes");
  }
};

//?actualizar perfume
export const updatePerfume = async (req, res) => {
  try {
    const { brand, name, description, price } = req.body;
    await perfumeSchema.findByIdAndUpdate(req.params.id, {
      brand,
      name,
      description,
      price,
    });
    req.flash("success_msg", "Perfume actualizado con éxito.");
    res.redirect("/perfumes");
  } catch (error) {
    console.log(error);
    req.flash("error_msg", "error");
  }
};

//?eliminar perfume
export const deletePerfume = async (req, res) => {
  try {
    const { id, name } = req.params;
    const rutaArchivo = `src/public/img/${name}`;

    await fs.unlink(rutaArchivo);
    await perfumeSchema.findByIdAndDelete(id);

    req.flash("success_msg", "Perfume eliminado con éxito.");
    res.redirect("/perfumes");
  } catch (error) {
    console.log(error);
    req.flash("error_msg", "error");
    require("/perfumes");
  }
};
