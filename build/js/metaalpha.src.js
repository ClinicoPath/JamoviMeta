
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"ai","title":"Cronbach's Alpha","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"mi","title":"Number of Items","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"ni","title":"Sample Size","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"slab","title":"Study Label","suggested":["nominaltext"],"type":"Variable"},{"name":"moderatorcor","title":"Moderator","suggested":["continuous"],"permitted":["continuous"],"type":"Variable"},{"name":"includemods","title":"Include Moderator","type":"Bool","default":false},{"name":"methodmetacor","title":"Model Estimator","type":"List","options":[{"name":"DL","title":"DerSimonian-Laird"},{"name":"HE","title":"Hedges"},{"name":"HS","title":"Hunter-Schmidt"},{"name":"SJ","title":"Sidik-Jonkman"},{"name":"ML","title":"Maximum-Likelihood"},{"name":"REML","title":"Restricted Maximum-Likelihood"},{"name":"EB","title":"Empirical Bayes"},{"name":"PM","title":"Paule-Mandel"},{"name":"FE","title":"Fixed-Effect"}],"default":"REML"},{"name":"cormeasure","title":"Effect Size Model Measures","type":"List","options":[{"name":"ARAW","title":"Raw Alpha Values"},{"name":"AHW","title":"Transformed Alpha Values (Hakstian & Whalen, 1976)"},{"name":"ABI","title":"Transformed Alpha Values (Bonett, 2002)"},{"name":"ROM","title":"Log Transformed Ratio of Means"}],"default":"ARAW"},{"name":"level","type":"Number","title":"Confidence interval level","min":50,"max":99.9,"default":95},{"name":"showModelFit","title":"Display model fit","type":"Bool","default":false},{"name":"addcred","title":"Prediction interval","type":"Bool","default":false},{"name":"addfit","title":"Summary estimate","type":"Bool","default":true},{"name":"showweights","title":"Model fitting weights","type":"Bool","default":false},{"name":"xAxisTitle","title":"x-axis Title","type":"String"},{"name":"forestOrder","title":"Study Order","type":"List","options":[{"name":"obs","title":"Observed Effect Sizes"},{"name":"fit","title":"Fitted Values"},{"name":"prec","title":"Sampling Variances"},{"name":"resid","title":"Residuals"},{"name":"abs.resid","title":"Absolute Residuals"}],"default":"fit"},{"name":"fsntype","title":"Fail-Safe N Method","type":"List","options":[{"name":"Rosenthal","title":"Rosenthal"},{"name":"Orwin","title":"Orwin"},{"name":"Rosenberg","title":"Rosenberg"}],"default":"Rosenthal"},{"name":"yaxis","title":"Funnel Plot y-axis Options","type":"List","options":[{"name":"sei","title":"Standard Error"},{"name":"vi","title":"Sampling Variance"},{"name":"ni","title":"Sample Size"},{"name":"sqrtni","title":"Square Root Sample Size"},{"name":"lni","title":"Log of the Sample Size"}],"default":"sei"},{"name":"yaxisInv","title":"Funnel Plot y-axis Inverse","type":"Bool","default":false},{"name":"enhanceFunnel","title":"Contour-Enhanced","type":"Bool","default":false}];

const view = View.extend({
    jus: "2.0",

    events: [

	]

});

view.layout = ui.extend({

    label: "Reliability Generalization",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Cronbach's Alpha",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "ai",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Number of Items",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "mi",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Sample Size",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "ni",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Study Label",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "slab",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					label: "Moderator",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							name: "moderatorcor",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					name: "includemods"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Model Options",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "methodmetacor",
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							name: "cormeasure",
							useSingleCell: true
						},
						{
							type: DefaultControls.TextBox,
							name: "level",
							format: FormatDef.number,
							inputPattern: "[0-9]+",
							useSingleCell: true,
							suffix: "%"
						},
						{
							type: DefaultControls.CheckBox,
							name: "showModelFit",
							useSingleCell: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Plots",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.Label,
					label: "Forest Plot",
					controls: [
						{
							type: DefaultControls.CheckBox,
							name: "addcred"
						},
						{
							type: DefaultControls.CheckBox,
							name: "addfit"
						},
						{
							type: DefaultControls.CheckBox,
							name: "showweights"
						},
						{
							type: DefaultControls.TextBox,
							label: "X-Axis Title",
							name: "xAxisTitle",
							format: FormatDef.string,
							stretchFactor: 2,
							useSingleCell: true
						},
						{
							type: DefaultControls.ComboBox,
							name: "forestOrder",
							useSingleCell: true
						}
					]
				},
				{
					type: DefaultControls.Label,
					label: "Funnel Plot",
					controls: [
						{
							type: DefaultControls.LayoutBox,
							margin: "none",
							style: "inline",
							controls: [
								{
									type: DefaultControls.ComboBox,
									name: "yaxis",
									label: "Y-Axis"
								},
								{
									type: DefaultControls.CheckBox,
									name: "yaxisInv",
									label: "Inverse",
									verticalAlignment: "center",
									enable: "(!yaxis:lni)"
								},
								{
									type: DefaultControls.CheckBox,
									name: "enhanceFunnel",
									label: "Contour-Enhanced",
									verticalAlignment: "center",
									enable: "(yaxis:sei || yaxis:vi)"
								}
							]
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			label: "Publication Bias",
			collapsed: true,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							name: "fsntype"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
