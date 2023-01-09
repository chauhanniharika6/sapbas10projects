sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("NE.nmallpro.controller.portfolio.Portfolio", {
		onInit: function(){

			var myPortfolioModel = new JSONModel("../model/portfolio.json");
			this.getView().setModel(myPortfolioModel,"portfolio");
		}
	});
});