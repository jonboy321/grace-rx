const router = require("express").Router();
const { Inventory, Advocate } = require("../../models");

router.get("/", async (req, res) => {
	try {
		const inventoryData = await Inventory.get({
			include: [{ model: Advocate }],
		});
		res.status(200).json(inventoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const inventoryData = await Inventory.findByPk(req.params.id, {
			include: [{ model: Advocate }],
		});

		if (!inventoryData) {
			res
				.status(404)
				.json({ message: "there's no inventory found with that id" });
			return;
		}

		res.status(200).json(inventoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.post("/", async (req, res) => {
	try {
		const inventoryData = await Inventory.create(req.body);
        
		res.status(200).json(inventoryData);
       
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "delete" route
router.delete("/:id", async (req, res) => {
	try {
		const inventoryData = await Inventory.destroy({
			where: { id: req.params.id },
		});
		res.status(200).json(inventoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// create "update" route
router.put("/:id", async (req, res) => {
	try {
		const inventoryData = await Inventory.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!inventoryData[0]) {
			res.status(404).json({ message: "No Advocate with this id!" });
			return;
		}
		res.status(200).json(inventoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
