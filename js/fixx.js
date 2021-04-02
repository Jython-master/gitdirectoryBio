$(document).ready(function() {
var chart = new CanvasJS.Chart("chartContainer", { 
        axisY: {
		title: "Fact<--Subjectivity-->Opinion"
	   },
        axisX: {
		title: "Negative<--Sentiment (Polarity)-->Positive"
	   },
		data: [
		{
			type: "scatter",
			dataPoints: [
				{ x: 0.204898, y: 0.461359, label: "01/08/2021", color: "#4e73df" },
				{ x: 0.165018, y:  0.441554, label: "01/15/2021", color: "#4e73df" },
				{x: 0.178367, y: 0.460202, label: "01/22/2021", color: "#4e73df" },
				{ x: 0.143397, y:  0.489541, label: "01/29/2021", color: "#4e73df" },
                { x: 0.144227, y:  0.475953, label: "02/05/2021", color: "#4e73df" }
			]
		}
		]
	});
    chart.render();
    var chart3 = new CanvasJS.Chart("chart3", {
	data: [{        
		type: "column",
		dataPoints: [      
			{ y: 10, label: "Category 1", color: "#4e73df"},
			{ y: 11,  label: "Category 3", color: "#4e73df"},
			{ y: 12,  label: "Category 4", color:"#4e73df" }
		]
	}]
});
    chart3.render();
    var chart4 = new CanvasJS.Chart("chart4", {
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: 11, label: "Category 1", color: "#4e73df"},
			{ y: 12,  label: "Category 3", color: "#4e73df"},
			{ y: 10,  label: "Category 4", color:"#4e73df" }
            ]
	}]
});
    chart4.render();
    var chart5 = new CanvasJS.Chart("chart5", {
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: 12, label: "Category 1", color: "#4e73df"},
			{ y: 11,  label: "Category 3", color: "#4e73df"},
			{ y: 10,  label: "Category 4", color:"#4e73df" }
            ]
	}]
});
    chart5.render();
    var chart2 = new CanvasJS.Chart("chart2", {
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: 11, label: "Category 1", color: "#4e73df"},
			{ y: 12,  label: "Category 3", color: "#4e73df"},
			{ y: 10,  label: "Category 4", color:"#4e73df" }
		]
	}]
});
    chart5.render();
    var chartt = new CanvasJS.Chart("chartt", {
	data: [{        
		type: "column",  
		dataPoints: [      
			{ y: 10, label: "Category 1", color: "#4e73df"},
			{ y: 12,  label: "Category 3", color: "#4e73df"},
			{ y: 11,  label: "Category 4", color:"#4e73df" }
		]
	}]
});
    chartt.render();
});
   var thischart = new CanvasJS.Chart("thischart", {
	data: [{        
		type: "line",  
		dataPoints: [      
			{ y: 0.205, label: "01/08/2021", color: "#4e73df"},
			{ y: 0.165,  label: "01/15/2021", color: "#4e73df"},
			{ y: 0.178,  label: "01/22/2021", color:"#4e73df" },
            { y: 0.143,  label: "01/29/2021", color:"#4e73df" },
            { y: 0.144,  label: "02/05/2021", color:"#4e73df" }
		]
	}]
});
    thischart.render();
