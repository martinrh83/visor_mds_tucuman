


var layers = [

		       {
		        source: "local",
			 name: "capas_adicionales:limite_politico_administrativo",
                      group:"ign",
			 visibility: false,
	              }, 
                    {
                      source: "local",
                      name: "capas_adicionales:capabaseargenmap",
                      group:"background",
                      title:"Capa Base IGN",
                      visibility: false
                    }, 

                     {
        		source: "ign",
        		name: "IGN:localidad",
       	        group: "ign",
     		        visibility: false
    			 }, 
               
                     {
                      source:"local",
                      name:"mds:comunas",
                      group:"tucuman",
			 tiled:false,
                      visibility:true  
                     },
                     {
                      source:"local",
                      name:"mds:departamentos",
                      group:"tucuman",
			tiled:false,
                      visibility:false  
                     },
                   
                     {
                      source:"local",
                      name:"mds:PNSA-Familias_criticas",
                      group:"gestion",
			tiled:false,
                      visibility:false  
                     },
{
                      source:"local",
                      name:"mds:Cupo total Argentina Trabaja_cantidad de cooperativas",
                      group:"gestion",
			tiled:false,
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"mds:Cupo total Argentina Trabaja_cantidad de beneficiarios",
                      group:"gestion",
			tiled:false,
                      visibility:false  
                     },
                     {
                      source:"local",
                      name:"mds:celiacos",
                      group:"gestion",
			tiled:false,
                      visibility:false  
                     },
 {
                      source:"local",
                      name:"mds:Total Gobierno Local por Programa",
                      group:"gestion",
			tiled:false,
                      visibility:false  
                     },
                   
			 
			 {
                      source:"local",
                      name:"capas_adicionales:FracyRadiosProvincia",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:GSMT_BARRIOS_CAPITAL",
			tiled:false,
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:rutas_nacionales",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"sf:rutas_provinciales",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"sf:Rios",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"sf:Ferrocarriles",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:Gasoductos",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:Red_Electrica",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:cym",
                      visibility:false  
                     },
			  {
                      source:"local",
                      name:"capas_adicionales:cics_tucuman_2013",
			 group:"territorial",
                      visibility:false  
                     },
			{
                      source:"local",
                      name:"capas_adicionales:estatales",
                      visibility:false  
                     },
{
                      source:"local",
                      name:"capas_adicionales:Comisarias",
                      visibility:false  
                     },



                     /*{
                      source: "google",
			name: "ROADMAP",
                      title: "Google Streets",
			group: "background",
			visibility: false
                     },

			{
			 source: "google",
		  	name: "HYBRID",
		  	title: "Google Hybrid",
			 group: "background",
		         visibility: false
                     },

			{
			 source: "google",
	               name: "SATELLITE",
		        title: "Google Satellite",
      	               group: "background",
			 MAX_ZOOM_LEVEL: 21,
			visibility: false
			},

                     {
                     source: "bing",
                     title: "Bing Road Map",
                     name: "Road",
                     visibility:false
                     },*/
      
			{
                     source: "ol",
			group: "background",
			fixed: true,
			type: "OpenLayers.Layer",
			args: ["En blanco", { visibility: true }]
                     }
            ];	