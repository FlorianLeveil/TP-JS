const express = require("express")
const router = express.Router()
const db = require('../models')

// Post pour crééer un nouveau perso 

router.post("/", async (req, res, next) => {

    try {
  
      const nom = req.body.name
      const lvl = req.body.lvl
  
      const perso = await db.perso.create({
        nom: nom,
        lvl: lvl,
		userId: req.user.id,
		capeId: 3,
        coifId: 3,
        botteId: 3,
        anneauId: 3,
        dofuId: 5,
        ceintureId: 3,
        amuletteId: 3,
        montureId: 3,
		familierId: 3,
		tropheeId: 4,
		cacId: 3,
		bouclierId: 3,


      })
    
      res.format({
  
        html: function () {
		  res.redirect('/perso')
        },
  
        json: function () {
          res.json(perso)
        }
      })
  
    } catch (Err) {
      next(Err)
    }
})

// Pour suprimer un perso 

router.delete("/:persoId", async (req, res, next) => {

    try {
  
      const result = await db.perso.destroy({
			where: {
				id: req.params.persoId,
				userId: req.user.id
        	}
      	}) ? {
        	status: "success"
      	} : {
        	status: "failure"
      	}
  
      res.format({
  
        html: () => {
          	res.redirect('/perso')
        },
  
        json: () => {
          	res.json(result)
        }
      })
  
    } catch (Err) {
      next(Err)
    }
  })


// Get modify pour un perso

router.get("/modify/:persoId", async (req, res, next) => {

  const id_perso = req.params.persoId
  element = await db.perso.findByPk(id_perso)
  let my_items = []
  console.log(element)

  let all_coifs = await db.coif.findAll()
  let all_amulettes = await db.amulette.findAll()
  let all_anneaux = await db.anneau.findAll()
  let all_bottes = await db.botte.findAll()
  let all_boucliers = await db.bouclier.findAll()
  let all_cacs = await db.cac.findAll()
  let all_ceintures = await db.ceinture.findAll()
  let all_capes = await db.cape.findAll()
  let all_dofus = await db.dofus.findAll()
  let all_familiers = await db.familier.findAll()
  let all_montures = await db.monture.findAll()
  let all_trophees = await db.trophee.findAll()

  my_items.push(element)


  if (element.coifId != null) {
    all_coifs.forEach(coif => {
        if (element.coifId == coif.id) {
            my_items.push(coif)

        }
    });
  } else {
      my_items.push([])
  }

  if (element.amuletteId != null) {
      all_amulettes.forEach(amulette => {
          if (element.amuletteId == amulette.id) {
              my_items.push(amulette)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.anneauId != null) {
      all_anneaux.forEach(anneau => {
          if (element.anneauId == anneau.id) {
              my_items.push(anneau)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.botteId != null) {
      all_bottes.forEach(botte => {
          if (element.botteId == botte.id) {
              my_items.push(botte)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.bouclierId != null) {
      all_boucliers.forEach(bouclier => {
          if (element.bouclierId == bouclier.id) {
              my_items.push(bouclier)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.cacId != null) {
      all_cacs.forEach(cac => {
          if (element.cacId == cac.id) {
              my_items.push(cac)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.capeId != null) {
      all_capes.forEach(cape => {
          if (element.capeId == cape.id) {
              my_items.push(cape)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.ceintureId != null) {
      all_ceintures.forEach(ceinture => {
          if (element.ceintureId == ceinture.id) {
              my_items.push(ceinture)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.dofuId != null) {
      all_dofus.forEach(dofu => {
          if (element.dofuId == dofu.id) {
              my_items.push(dofu)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.montureId != null) {
      all_montures.forEach(monture => {
          if (element.montureId == monture.id) {
              my_items.push(monture)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.familierId != null) {
      all_familiers.forEach(familier => {
          if (element.familierId == familier.id) {
              my_items.push(familier)

          }
      });
  } else {
      my_items.push([])
  }

  if (element.tropheeId != null) {
      all_trophees.forEach(trophee => {
          if (element.tropheeId == trophee.id) {
              my_items.push(trophee)

          }
      });
  } else {
      my_items.push([])
  }

	res.render("perso/set_perso", {
		title: 'Set my perso',
		items: my_items,
		session: req.session,
		user: req.user
	})

 

})

// Le get main perso

router.get("/", async (req, res, next) => {
    let my_items = []

    let all_coifs = await db.coif.findAll()
    let all_amulettes = await db.amulette.findAll()
    let all_anneaux = await db.anneau.findAll()
    let all_bottes = await db.botte.findAll()
    let all_boucliers = await db.bouclier.findAll()
    let all_cacs = await db.cac.findAll()
    let all_ceintures = await db.ceinture.findAll()
    let all_capes = await db.cape.findAll()
    let all_dofus = await db.dofus.findAll()
    let all_familiers = await db.familier.findAll()
    let all_montures = await db.monture.findAll()
    let all_trophees = await db.trophee.findAll()



    let my_persos = await db.perso.findAll({  
        where: {
        userId: req.user.id
        }
    })
    let compteur = 0
    my_persos.forEach(element => {
        my_items.push([])
        my_items[compteur].push(element)

        if (element.coifId != null) {
            all_coifs.forEach(coif => {
                if (element.coifId == coif.id) {
                    my_items[compteur].push(coif)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.amuletteId != null) {
            all_amulettes.forEach(amulette => {
                if (element.amuletteId == amulette.id) {
                    my_items[compteur].push(amulette)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.anneauId != null) {
            all_anneaux.forEach(anneau => {
                if (element.anneauId == anneau.id) {
                    my_items[compteur].push(anneau)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.botteId != null) {
            all_bottes.forEach(botte => {
                if (element.botteId == botte.id) {
                    my_items[compteur].push(botte)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.bouclierId != null) {
            all_boucliers.forEach(bouclier => {
                if (element.bouclierId == bouclier.id) {
                    my_items[compteur].push(bouclier)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.cacId != null) {
            all_cacs.forEach(cac => {
                if (element.cacId == cac.id) {
                    my_items[compteur].push(cac)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.capeId != null) {
            all_capes.forEach(cape => {
                if (element.capeId == cape.id) {
                    my_items[compteur].push(cape)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.ceintureId != null) {
            all_ceintures.forEach(ceinture => {
                if (element.ceintureId == ceinture.id) {
                    my_items[compteur].push(ceinture)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.dofuId != null) {
            all_dofus.forEach(dofu => {
                if (element.dofuId == dofu.id) {
                    my_items[compteur].push(dofu)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.montureId != null) {
            all_montures.forEach(monture => {
                if (element.montureId == monture.id) {
                    my_items[compteur].push(monture)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.familierId != null) {
            all_familiers.forEach(familier => {
                if (element.familierId == familier.id) {
                    my_items[compteur].push(familier)

                }
            });
        } else {
            my_items[compteur].push([])
        }

        if (element.tropheeId != null) {
            all_trophees.forEach(trophee => {
                if (element.tropheeId == trophee.id) {
                    my_items[compteur].push(trophee)

                }
            });
        } else {
            my_items[compteur].push([])
        }


        compteur = compteur + 1
        
    });

    res.render("perso/perso", {
		session: req.session,
		user: req.user,
		title: "Personnages",
		my_items: my_items,
    })
})


// Les get des pages d'items pour les modifier par la suite

router.get("/modify/trophees/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const trophee = await db.trophee.findAll()
		res.render("see_item/v_trophees", {
			title: "Trophées",
			perso: perso,
			trophees: trophee,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/amulettes/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const amulette = await db.amulette.findAll()
		res.render("see_item/v_amulettes", {
			title: "Amulettes",
			perso: perso,
			amulettes: amulette,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/anneaus/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const anneau = await db.anneau.findAll()
		res.render("see_item/v_anneaux", {
			title: "Anneaux",
			perso: perso,
			anneaus: anneau,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/bottes/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const botte = await db.botte.findAll()
		res.render("see_item/v_bottes", {
			title: "Bottes",
			perso: perso,
			bottes: botte,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/boucliers/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const bouclier = await db.bouclier.findAll()
		res.render("see_item/v_boucliers", {
			title: "Boucliers",
			perso: perso,
			boucliers: bouclier,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/cacs/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const cac = await db.cac.findAll()
		res.render("see_item/v_cac", {
			title: "Cac",
			perso: perso,
			cacs: cac,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/capes/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const cape = await db.cape.findAll()
		res.render("see_item/v_capes", {
			title: "Capes",
			perso: perso,
			capes: cape,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/ceintures/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const ceinture = await db.ceinture.findAll()
		res.render("see_item/v_ceintures", {
			title: "Ceintures",
			perso: perso,
			ceintures: ceinture,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/coiffes/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const coiffe = await db.coif.findAll()
		res.render("see_item/v_coiffes", {
			title: "Coiffes",
			perso: perso,
			coifs: coiffe,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/dofus/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const dofus = await db.dofus.findAll()
		res.render("see_item/v_dofus", {
			title: "Dofus",
			perso: perso,
			dofuss: dofus,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/familiers/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
	  	const familier = await db.familier.findAll()
		res.render("see_item/v_familiers", {
			title: "Familiers",
			perso: perso,
			familiers: familier,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})

router.get("/modify/montures/:persoId", async (req, res, next) => {
	try {

	  	const perso = await db.perso.findByPk(req.params.persoId)
		const monture = await db.monture.findAll()
		  
		res.render("see_item/v_montures", {
			title: "Montures",
			perso: perso,
			montures: monture,
			session: req.session,
			user: req.user
		})
  
	} catch (Err) {
	  	next(Err)
	}
})


// Les fonctions d'update pour chaque items

router.patch("/modify/trophees/add/:tropheeId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.tropheeId = req.params.tropheeId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/amulettes/add/:amuletteId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.amuletteId = req.params.amuletteId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/anneaus/add/:anneauId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.anneauId = req.params.anneauId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/bottes/add/:botteId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.botteId = req.params.botteId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/boucliers/add/:bouclierId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.bouclierId = req.params.bouclierId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/cacs/add/:cacId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.cacId = req.params.cacId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/capes/add/:capeId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.capeId = req.params.capeId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/ceintures/add/:ceintureId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.ceintureId = req.params.ceintureId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/coiffes/add/:coiffeId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.coifId = req.params.coiffeId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/dofus/add/:dofusId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.dofuId = req.params.dofusId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/montures/add/:montureId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.montureId = req.params.montureId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})

router.patch("/modify/familiers/add/:familierId", async (req, res, next) => {

	try {

		const perso = await db.perso.findByPk(req.body.id)

  
		let changes = {}
		let where = {
			where: {
				id: perso.id
			}
		}
  
		changes.familierId = req.params.familierId
  
		const result = await db.perso.update(changes, where) ? {
			status: "success"
		} : {
			status: "failure"
		}
  
		res.format({
			html: () => {
				res.redirect('/perso/modify/'+perso.id)
			},
  
			json: () => {
				res.json(result)
			}
	  	})
  
	} catch (Err) {
		next(Err)
	}
})
  
module.exports = router