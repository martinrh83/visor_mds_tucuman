 
var sources= {

			/*ign: {
                       ptype: "gxp_wmscsource",
			//url: "http://wms.ign.gov.ar/geoserver/ows?",
                      url: "./scripts/wms/ign.xml",
                      // version: "1.1.1"
                          },*/

                 	local:{
                    	ptype:"gxp_wmscsource",
                    	url:"http://10.10.0.6/geoserver/wms?",
                    	//version: "1.1.1"
                    	      },

                         educacion :{
                      ptype:"gxp_wmscsource",
                      url:"http://www.educaciontuc.gov.ar/sistema/sistemas/wms?",
                      //version: "1.1.1"
                           },

                          idet:{
                      ptype:"gxp_wmscsource",
                      url:"./scripts/wms/servicioidet.xml",
                      //version: "1.3.0"
                           },
                           catastro:{
                      ptype:"gxp_wmscsource",
                      url:"./scripts/wms/catastro11.xml",
                      //version: "1.3.0"
                           },
			   
                  	ol:{
                       ptype: "gxp_olsource"
                       },
			   
                    google:{
                       ptype: "gxp_googlesource"
                       },
			   
			        osm:{
                       ptype: "gxp_osmsource"
                       },

                  "bing": {
                    ptype: "gxp_bingsource"
                    }
                 
              };