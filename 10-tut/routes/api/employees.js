const express = require("express");
const router = express.Router();
const path = require("path");
const data = {};
data.employees = require("../../model/employees.json");
const employeesController = require("../../controllers/employeesController");

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.updateEmployee);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
