const express = require("express")
const router = express.Router()
const bcrypt = require("../utils/bcrypt")
const Token = require("../utils/token")
const db = require('../models')

/*
  Index routes
*/

router.get("/", async (req, res, next) => {

  res.render("index", {
    session: req.session,
    user: req.user,
    title: "Dofus Stuff"
  })
})

router.get("/amulettes", async (req, res, next) => {
  const amulettes = await db.amulette.findAll();

  res.render("see_item/v_amulettes", {
    session: req.session,
    user: req.user,
    title: "Amulettes",
    amulettes: amulettes,
  })
})

router.get("/anneaux", async (req, res, next) => {
  const anneaus = await db.anneau.findAll();

  res.render("see_item/v_anneaux", {
    session: req.session,
    user: req.user,
    title: "Anneaux",
    anneaus: anneaus
  })
})

router.get("/bottes", async (req, res, next) => {
  const bottes = await db.botte.findAll();

  res.render("see_item/v_bottes", {
    session: req.session,
    user: req.user,
    title: "Bottes",
    bottes: bottes
  })
})

router.get("/boucliers", async (req, res, next) => {
  const boucliers = await db.bouclier.findAll();
  res.render("see_item/v_boucliers", {
    session: req.session,
    user: req.user,
    title: "Boucliers",
    boucliers: boucliers,
  })
})

router.get("/cac", async (req, res, next) => {
  const cacs = await db.cac.findAll();
  res.render("see_item/v_cac", {
    session: req.session,
    user: req.user,
    title: "CAC",
    cacs: cacs
  })
})

router.get("/capes", async (req, res, next) => {
  const capes = await db.cape.findAll();
  res.render("see_item/v_capes", {
    session: req.session,
    user: req.user,
    title: "Capes",
    capes: capes,
  })
})
router.get("/ceintures", async (req, res, next) => {
  const ceintures = await db.ceinture.findAll();
  res.render("see_item/v_ceintures", {
    session: req.session,
    user: req.user,
    title: "Ceintures",
    ceintures: ceintures,
  })
})
router.get("/coiffes", async (req, res, next) => {
  const coifs = await db.coif.findAll();
  res.render("see_item/v_coiffes", {
    session: req.session,
    user: req.user,
    title: "Coiffes",
    coifs: coifs,
  })
})

router.get("/dofus", async (req, res, next) => {
  const dofuss = await db.dofus.findAll();

  res.render("see_item/v_dofus", {
    session: req.session,
    user: req.user,
    title: "Dofus",
    dofuss: dofuss,
  })
})

router.get("/familiers", async (req, res, next) => {
  const familiers = await db.familier.findAll();
  res.render("see_item/v_familiers", {
    session: req.session,
    user: req.user,
    title: "Familiers",
    familiers: familiers,
  })
})

router.get("/montures", async (req, res, next) => {
  const montures = await db.monture.findAll();
  res.render("see_item/v_montures", {
    session: req.session,
    user: req.user,
    title: "Montures",
    montures: montures,
  })
})

router.get("/trophees", async (req, res, next) => {
  const trophees = await db.trophee.findAll();
  res.render("see_item/v_trophees", {
    session: req.session,
    user: req.user,
    title: "Trophées",
    trophees: trophees,
  })
})


/*
  Login routes
*/

router.get("/login", (req, res, next) => {

  res.render("user/login", {
    session: req.session,
    user: req.user,
    title: "Login"
  })
})

router.post("/login", async (req, res, next) => {

  try {

    if (!req.body.username || !req.body.password) {
      throw new Error("Missing information")
    }

    let user = await db.User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (!user) {
      throw new Error("Unknown username")
    }

    user = user.dataValues

    const isValidPassword = await bcrypt.compare(req.body.password, user.password)

    if (!isValidPassword) {
      throw new Error("Invalid password")
    }

    const token = await Token.getRandom()
    const now = new Date()
    let expireDate = new Date()

    // 1 hour session max
    expireDate.setHours(now.getHours() + 1)

    await db.Session.create({
      accessToken: token,
      userId: user.id,
      expiresAt: expireDate
    })

    res.format({

      html: () => {
        res.cookie('AccessToken', token, {
          maxAge: 900000,
          httpOnly: true
        })
        res.redirect('/perso')
      },

      json: () => {
        res.json({
          accessToken: token
        })
      }
    })

  } catch (Err) {
    next(Err)
  }
})

/*
  Register routes
*/

router.get("/register", (req, res, next) => {

  res.render("user/form", {
    session: req.session,
    user: req.user,
    title: "Register",
    isNew: true
  })
})

router.post("/register", async (req, res, next) => {

  try {

    if (req.body.username && req.body.firstname && req.body.lastname &&
      req.body.password && req.body.confirmPassword) {

      if (req.body.password === req.body.confirmPassword) {
        hashedPassword = await bcrypt.hash(req.body.password)
      } else {
        throw new Error("Password does not match the confirm password")
      }

    } else {
      throw new Error("Missing information")
    }

    const alreadyTaken = await db.User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (alreadyTaken) {
      throw new Error("Username already taken")
    }

    const user = await db.User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: hashedPassword
    })

    res.format({

      html: () => {
        res.redirect('/login')
      },

      json: () => {
        res.json(user)
      }
    })

  } catch (Err) {
    next(Err)
  }
})



module.exports = router