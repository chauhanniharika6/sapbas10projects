sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function(Controller, MessageBox, JSONModel) {
	"use strict";

	return Controller.extend("NE.nmallpro.controller.countdown.Countdown", {
		onInit: function(){
			this.timer = {
				"days":0,
				"hours":0,
				"min":0,
				"sec":0
			};


			var myTimerModel = new JSONModel(this.timer);
			this.getView().setModel(myTimerModel,"timer");
			setInterval(this.calculateTime.bind(this), 1000);
		},

		calculateTime: function(){
			let techedDate = new Date("March 20 2023");
			let currDate = new Date();
			let diff = techedDate.getTime() - currDate.getTime();
			this.timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
			this.timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ) );
			this.timer.min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			this.timer.sec = Math.floor((diff % (1000 * 60)) / 1000);
			//debugger;
			 this.getView().getModel("timer").setData(this.timer);
	 	}
		
	});
});