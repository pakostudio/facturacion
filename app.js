
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ── DATOS PRECARGADOS ─────────────────────────────────────────────────────
const SEED_DATA = [
  {id:1,folio:"346",uuid:"088E3346-D742-423E-B124-4BC41193ED4F",fecha:"2026-01-03",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing (Mensualidad Ene)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:2,folio:"347",uuid:"C458A915-7D38-49A8-B26C-E62D4E4751F8",fecha:"2026-01-16",rfcReceptor:"NME171017UI2",cliente:"NUEVA MUSICA ESENCIAL",descripcion:"Servicios de Marketing + Campaña Digital",subtotal:24935.75,iva:3989.72,total:28925.47,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:3,folio:"348",uuid:"E71DA6E8-6754-4B07-8C19-7CF7295944D2",fecha:"2026-01-16",rfcReceptor:"NME171017UI2",cliente:"NUEVA MUSICA ESENCIAL",descripcion:"Servicios de Marketing + Campaña Digital",subtotal:26887.57,iva:4302.01,total:31189.58,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:4,folio:"356",uuid:"96267AB3-1307-4B0D-92BB-F752A7ADF916",fecha:"2026-01-23",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"Servicios de Marketing (Mensualidad Ene)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:5,folio:"357",uuid:"56396308-0B97-431D-9894-6299F18A6638",fecha:"2026-01-26",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"Servicios de Marketing",subtotal:67359.60,iva:10777.54,total:78137.14,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:6,folio:"361",uuid:"EDCFB610-CCC2-4D36-93BF-2BFA69D88AE3",fecha:"2026-02-03",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing (Mensualidad Feb)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:7,folio:"363",uuid:"10A62109-5A1C-48C9-B88E-1D4F12115234",fecha:"2026-02-22",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"Servicios de Marketing (Mensualidad Feb)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:8,folio:"365",uuid:"ED39286E-635C-46B3-806B-31F961355A81",fecha:"2026-03-02",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing (Mensualidad Mar)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:9,folio:"366",uuid:"B8D5E825-6803-4EBA-8FB7-AFE42F319F6D",fecha:"2026-03-23",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"Servicios de Marketing (Mensualidad Mar)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:10,folio:"368",uuid:"E6C8C6BD-CD05-4A9C-A7EA-431240E3F4B6",fecha:"2026-04-01",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing (Mensualidad Abr)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:11,folio:"369",uuid:"882AAABA-FB72-4195-9B38-F676BA71170F",fecha:"2026-04-06",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"Servicios de Marketing (Mensualidad Abr)",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:12,folio:"370",uuid:"2ADE5AB9-FEF4-4D8A-89F4-081B11FC3032",fecha:"2026-04-06",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing (Mensualidad Abr)",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:13,folio:"371",uuid:"38218678-F447-43BA-AF9B-3988156BB2AB",fecha:"2026-04-14",rfcReceptor:"CES801003T12",cliente:"CESANTONI",descripcion:"Servicios de Marketing (Mensualidad Abr)",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:14,folio:"372",uuid:"7CB320E1-51B0-45AF-B9C4-101C23DB05B7",fecha:"2026-04-22",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"Servicios de Marketing (Mensualidad Abr)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:15,folio:"373",uuid:"65D40FA4-8F3A-4A66-8F1F-162573C93144",fecha:"2026-04-28",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO FEE DISEÑO",subtotal:5500.00,iva:880.00,total:6380.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032087"},
  {id:16,folio:"374",uuid:"905A7933-C480-4997-BF1E-B92A9F12E78D",fecha:"2026-04-28",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO PUBLICIDAD EN INTERNET",subtotal:200000.00,iva:32000.00,total:232000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032090"},
  {id:17,folio:"375",uuid:"F6C72929-277A-468F-9FE7-EA2D6E34A890",fecha:"2026-04-28",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO PUBLICIDAD EN INTERNET (Pauta Digital META)",subtotal:5590.92,iva:894.55,total:6485.47,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032091"},
  {id:18,folio:"376",uuid:"560AD271-C34C-435E-986D-775788420658",fecha:"2026-04-28",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"FEE DISEÑO (Ene-Abr 2026)",subtotal:300000.00,iva:48000.00,total:348000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032155"},
  {id:19,folio:"377",uuid:"852B1450-E355-458A-90BC-C9C48AF02E94",fecha:"2026-04-29",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO DE ADAPTACIONES DE MATERIALES PUBLICITARIOS",subtotal:11000.00,iva:1760.00,total:12760.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032150"},
  {id:20,folio:"378",uuid:"ADA464FD-6291-42EF-AB16-62EE1A441F1F",fecha:"2026-04-29",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO FEE DISEÑO (Ene-Abr 2026)",subtotal:300000.00,iva:48000.00,total:348000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032153"},
  {id:21,folio:"379",uuid:"249D8392-08FA-4101-892C-E20A687B93F6",fecha:"2026-05-04",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"Servicios de Marketing + Campañas TikTok/Digital Mar",subtotal:21933.00,iva:3509.28,total:25442.28,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:22,folio:"380",uuid:"3D3563B9-31F3-48B7-B212-B68EE409916A",fecha:"2026-05-04",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"Servicios de Marketing + Campaña RAAF Mar",subtotal:25566.00,iva:4090.56,total:29656.56,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:23,folio:"381",uuid:"0C7CF036-3452-4D08-ADE6-0444FED0D0DA",fecha:"2026-05-04",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"Servicios de Marketing",subtotal:123000.00,iva:19680.00,total:142680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:24,folio:"382",uuid:"54CC858A-BAC9-44DF-8660-215202D470FF",fecha:"2026-05-11",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO FEE DISEÑO",subtotal:5500.00,iva:880.00,total:6380.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032424"},
  {id:25,folio:"383",uuid:"3B25928B-2682-45C1-A489-4A00C09DCBC2",fecha:"2026-05-15",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO FEE DISEÑO — Diseño multimarca",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:"OCMAD000032606"},
  {id:26,folio:"384",uuid:"C264E61B-B48A-42DE-9ABE-5152770F4D05",fecha:"2026-05-15",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"Servicios de Marketing",subtotal:50000.00,iva:8000.00,total:58000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:27,folio:"385",uuid:"6B5E123D-5D28-4ACD-B6AE-1D25D7A7A18C",fecha:"2026-05-18",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"SERVICIO FEE DISEÑO",subtotal:5500.00,iva:880.00,total:6380.00,estatusSAT:"cancelada",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:28,folio:"386",uuid:"2259D14C-FF8B-4BF9-8040-3DEEA2747078",fecha:"2026-05-18",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"Servicios de Marketing",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:29,folio:"387",uuid:"CDDD4339-5AF6-48F7-A8AF-B4A9619CAEEE",fecha:"2026-05-20",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"Servicios de Marketing",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:30,folio:"388",uuid:"B4539520-5D01-40B4-A641-F4C48AC73D55",fecha:"2026-05-20",rfcReceptor:"CES801003T12",cliente:"CESANTONI",descripcion:"Servicios de Marketing (Mensualidad May)",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:31,folio:"389",uuid:"1D372AA2-390B-400B-B52F-492CDBF0B823",fecha:"2026-05-20",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"Servicios de Marketing (Mensualidad May)",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:32,folio:"390",uuid:"CDE17E2E-FE7D-474B-B842-319B6968082B",fecha:"2026-05-20",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"Servicios de Marketing",subtotal:123000.00,iva:19680.00,total:142680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:33,folio:"402",uuid:"9E6BDA4D-75A8-4A4D-8104-59B7C3FEDAED",fecha:"2026-06-02",rfcReceptor:"CES801003T12",cliente:"CESANTONI",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:34,folio:"403",uuid:"05B8568B-A301-49B7-8C74-74C0C7FADAD3",fecha:"2026-06-03",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"",subtotal:21933.00,iva:3509.28,total:25442.28,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:35,folio:"404",uuid:"6D7F5519-314A-4E98-9186-85FDBB594AC7",fecha:"2026-06-03",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"",subtotal:25566.00,iva:4090.56,total:29656.56,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:36,folio:"405",uuid:"29D07BCE-9109-48A2-88EC-382A999041CA",fecha:"2026-06-03",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"",subtotal:21933.00,iva:3509.28,total:25442.28,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:37,folio:"406",uuid:"32170734-F724-4408-A3F0-46B1FE6FADB2",fecha:"2026-06-03",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"",subtotal:25566.00,iva:4090.56,total:29656.56,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:38,folio:"409",uuid:"8A9C4BAA-E106-415B-A7CA-71D269856659",fecha:"2026-06-18",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:39,folio:"410",uuid:"AB41A048-C9B6-4560-8453-C24AB15BD68E",fecha:"2026-06-22",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"",subtotal:123000.00,iva:19680.00,total:142680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:40,folio:"411",uuid:"D9956E95-D2C2-463F-B29B-1A74F5247E2D",fecha:"2026-06-22",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:41,folio:"412",uuid:"ABF3497D-DE53-419B-B01B-5D42EF93D484",fecha:"2026-06-22",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:42,folio:"417",uuid:"2F317D8B-BA54-48C7-B2BD-9C0071E3BF02",fecha:"2026-06-24",rfcReceptor:"BIB150316JU8",cliente:"BEBIDAS INTERNACIONALES BEPENSA",descripcion:"",subtotal:48000.00,iva:7680.00,total:55680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:43,folio:"418",uuid:"AFD6C1D5-0DC5-47DC-820C-1622BE96B65E",fecha:"2026-06-26",rfcReceptor:"FPZ990616ES3",cliente:"FONDO PLATA ZACATECAS 158127",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:44,folio:"421",uuid:"39A38DAE-FD1B-45C0-9E7E-9AAD9A4D741D",fecha:"2026-07-06",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:45,folio:"422",uuid:"6271D7B9-442D-43E2-ABE7-981259DDD6CD",fecha:"2026-07-06",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"",subtotal:25082.87,iva:4013.26,total:29096.13,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:46,folio:"423",uuid:"34EEF7AE-64FE-443A-8957-751345BDDFB7",fecha:"2026-07-07",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:1500.00,iva:240.00,total:1740.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:47,folio:"424",uuid:"10CBAEC3-F660-4C3E-919F-97C067DBE986",fecha:"2026-07-08",rfcReceptor:"NODE760130246",cliente:"EDSON JAVIER NOYOLA DIAZ",descripcion:"",subtotal:23500.00,iva:3760.00,total:27260.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:48,folio:"425",uuid:"0F82136F-CFCE-45D6-A49E-FBC64B198D8A",fecha:"2026-07-14",rfcReceptor:"CES801003T12",cliente:"CESANTONI",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:49,folio:"426",uuid:"8902D2AA-7E02-4F9E-8A50-9731CD02615C",fecha:"2026-07-15",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:50,folio:"427",uuid:"1C098AAE-EA88-415D-9586-81C1B1066DEE",fecha:"2026-07-24",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:51,folio:"429",uuid:"DD7DE5C8-675E-45B4-B994-9B18C3AFAEF8",fecha:"2026-07-25",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:52,folio:"430",uuid:"78374C25-7132-4C2E-AB68-8659856ED5E7",fecha:"2026-07-25",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"",subtotal:123000.00,iva:19680.00,total:142680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:53,folio:"431",uuid:"52F1E310-1940-4EF1-8D07-3B2D4C0F591D",fecha:"2026-07-25",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:54,folio:"435",uuid:"9433544B-CF41-4E15-AA5A-271ADDE426F5",fecha:"2026-07-31",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"",subtotal:10000.00,iva:1600.00,total:11600.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:55,folio:"442",uuid:"DC62F687-97CF-4901-8456-68C0D195592D",fecha:"2026-08-11",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:56,folio:"443",uuid:"601BFC14-AF76-4F75-B621-2DFA91FEB3F7",fecha:"2026-08-11",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:57,folio:"444",uuid:"1E66577B-D627-4B8B-B999-B6508610A4FE",fecha:"2026-08-11",rfcReceptor:"CES801003T12",cliente:"CESANTONI",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:58,folio:"445",uuid:"96BD3C8A-06F8-4152-B421-12986F772FAF",fecha:"2026-08-12",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:59,folio:"446",uuid:"ACBAAD6E-5967-4C75-BDB2-7316755535DB",fecha:"2026-08-26",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:75000.00,iva:12000.00,total:87000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:60,folio:"447",uuid:"4EFC50FC-DF94-400C-A5D6-9F612DB71945",fecha:"2026-08-26",rfcReceptor:"BIB150316JU8",cliente:"BEBIDAS INTERNACIONALES BEPENSA",descripcion:"",subtotal:1500.00,iva:240.00,total:1740.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:61,folio:"448",uuid:"E522B2AC-2EED-48ED-B303-DC0A69FCF79F",fecha:"2026-08-26",rfcReceptor:"DIF211028G62",cliente:"DIFERENCIARTE",descripcion:"",subtotal:25000.00,iva:4000.00,total:29000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:62,folio:"449",uuid:"FD209DCF-A65A-40F9-9699-84CECFF3E6E6",fecha:"2026-08-26",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"",subtotal:123000.00,iva:19680.00,total:142680.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:63,folio:"451",uuid:"29C6F3B9-C66B-4EE2-937A-F58DC049443B",fecha:"2026-08-31",rfcReceptor:"MAD841018U49",cliente:"LA MADRILEÑA",descripcion:"",subtotal:200000.00,iva:32000.00,total:232000.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:64,folio:"452",uuid:"47E392D0-9777-4A43-ACF2-4974E33CADA2",fecha:"2026-09-02",rfcReceptor:"ATR050303H42",cliente:"ALDAFA TRANSPORTES",descripcion:"",subtotal:20000.00,iva:3200.00,total:23200.00,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:65,folio:"453",uuid:"4E588350-119D-4117-9E20-3855AB97740B",fecha:"2026-09-02",rfcReceptor:"PSO820923UH8",cliente:"LA PUERTA DEL SOL",descripcion:"",subtotal:134989.60,iva:21598.34,total:156587.94,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""},
  {id:66,folio:"455",uuid:"44923BFD-296B-4E3F-893E-910FB80DD707",fecha:"2026-09-02",rfcReceptor:"RSL180402KH6",cliente:"RAAF SERVICIOS LOGISTICOS",descripcion:"",subtotal:24956.00,iva:3992.96,total:28948.96,estatusSAT:"vigente",estatusPago:"pendiente",fechaPago:"",montoPago:"",fechaComplemento:"",oc:""}
];

const CLIENTES_SEED = {
  'MAD841018U49':{name:'LA MADRILEÑA',regimen:'623',cond:30,requiresOC:true,active:true},
  'ATR050303H42':{name:'ALDAFA TRANSPORTES',regimen:'624',cond:30,requiresOC:false,active:true},
  'RSL180402KH6':{name:'RAAF SERVICIOS LOGISTICOS',regimen:'601',cond:30,requiresOC:false,active:true},
  'NME171017UI2':{name:'NUEVA MUSICA ESENCIAL',regimen:'601',cond:30,requiresOC:false,active:true},
  'DIF211028G62':{name:'DIFERENCIARTE',regimen:'601',cond:30,requiresOC:false,active:true},
  'CES801003T12':{name:'CESANTONI',regimen:'601',cond:30,requiresOC:false,active:true},
  'PSO820923UH8':{name:'LA PUERTA DEL SOL',regimen:'601',cond:30,requiresOC:false,active:true},
};
let CLIENTES_CATALOG = JSON.parse(localStorage.getItem('tdi_clientes')||'null') || structuredClone(CLIENTES_SEED);
Object.entries(CLIENTES_SEED).forEach(([rfc,c])=>{if(!CLIENTES_CATALOG[rfc]) CLIENTES_CATALOG[rfc]=c;});
function saveClientes(){localStorage.setItem('tdi_clientes',JSON.stringify(CLIENTES_CATALOG));}

// Inicializar: si no hay datos en localStorage o el seed tiene más registros, cargar seed
let facturas = JSON.parse(localStorage.getItem('tdi_facturas')||'null');
if(!facturas||facturas.length===0||facturas.length<SEED_DATA.length){
  // Preservar estatus de pago de registros existentes
  const existing = {};
  if(facturas) facturas.forEach(f=>{ existing[f.folio]=f; });
  facturas = SEED_DATA.map(f=>({
    ...f,
    createdAt: existing[f.folio]?.createdAt||new Date().toISOString(),
    estatusPago: existing[f.folio]?.estatusPago||f.estatusPago,
    fechaPago:   existing[f.folio]?.fechaPago||f.fechaPago,
    montoPago:   existing[f.folio]?.montoPago||f.montoPago,
    fechaComplemento: existing[f.folio]?.fechaComplemento||f.fechaComplemento,
    fechaPagoComp:    existing[f.folio]?.fechaPagoComp||'',
    complementoUuid: existing[f.folio]?.complementoUuid||'',
  }));
  localStorage.setItem('tdi_facturas',JSON.stringify(facturas));
}

let pendingFactura=null,pendingOC=null,pendingComplemento=null,pendingFacturaFile=null,editingId=null,selectedStatus=null;
function save(){localStorage.setItem('tdi_facturas',JSON.stringify(facturas));}

// ── AUDITORÍA DE CONCILIACIÓN · CORTE AGOSTO 2026 ─────────────────────────────
// Regla: sólo se marca PAGADO cuando existe evidencia bancaria/complemento o conciliación ya validada.
// Agosto 2026 incorporado. Sólo se marca PAGADO con referencia bancaria suficientemente identificable.
const AUDIT_VERSION='2026-09-30-r4';
const VERIFIED_PAYMENTS={
  '346':{fecha:'2026-01-27',monto:29000,fuente:'BBVA enero 2026'},
  '356':{fecha:'2026-01-26',monto:29000,fuente:'BBVA enero 2026'},
  '357':{fecha:'2026-02-03',monto:78137.14,fuente:'BBVA febrero 2026'},
  '361':{fecha:'2026-02-26',monto:29000,fuente:'BBVA febrero 2026'},
  '363':{fecha:'2026-02-24',monto:29000,fuente:'BBVA febrero 2026'},
  '365':{fecha:'2026-03-10',monto:29000,fuente:'BBVA marzo 2026'},
  '366':{fecha:'2026-03-24',monto:29000,fuente:'BBVA marzo 2026'},
  '371':{fecha:'2026-05-08',monto:23200,fuente:'Conciliación validada · Cesantoni'},
  '388':{fecha:'2026-06-08',monto:23200,fuente:'Conciliación validada · Cesantoni'},
  '402':{fecha:'2026-07-23',monto:23200,fuente:'BBVA julio 2026 · Pago agregado Cesantoni'},
  '425':{fecha:'2026-07-23',monto:23200,fuente:'BBVA julio 2026 · Pago agregado Cesantoni'},
  '406':{fecha:'2026-07-10',monto:29656.56,fuente:'BBVA julio 2026 · FACT 406'},
  '409':{fecha:'2026-07-28',monto:87000,fuente:'Complemento de pago / BBVA julio 2026'},
  '410':{fecha:'2026-07-08',monto:142680,fuente:'BBVA julio 2026 · FACT 410'},
  '411':{fecha:'2026-07-22',monto:29000,fuente:'BBVA julio 2026 · F 411'},
  '412':{fecha:'2026-07-28',monto:87000,fuente:'Complemento de pago / BBVA julio 2026'},
  '429':{fecha:'2026-07-27',monto:29000,fuente:'BBVA julio 2026 · F 429'},
  '442':{fecha:'2026-08-26',monto:23200,fuente:'BBVA agosto 2026 · ALDAFA TRANSPORTES'},
  '444':{fecha:'2026-08-20',monto:23200,fuente:'BBVA agosto 2026 · PAGO MARKETING TDI DE CESANTONI'}
};
function applyAuditRevision(){
  const previous=localStorage.getItem('tdi_audit_version');
  if(previous===AUDIT_VERSION) return;
  facturas=facturas.map(f=>{
    const seed=SEED_DATA.find(x=>String(x.folio)===String(f.folio));
    if(!seed) return f;
    const base={...f};
    const v=VERIFIED_PAYMENTS[String(seed.folio)];
    if(seed.fecha>='2026-08-01' && !v){
      base.estatusPago='por_conciliar'; base.fechaPago=''; base.montoPago=''; base.bancoArchivo=''; base.conciliacionVerificada=false;
      return base;
    }
    if(v){
      base.estatusPago='pagado'; base.fechaPago=v.fecha; base.montoPago=v.monto; base.bancoArchivo=v.fuente; base.conciliacionVerificada=true;
    }else{
      base.estatusPago='pendiente'; base.fechaPago=''; base.montoPago=''; base.bancoArchivo=''; base.conciliacionVerificada=false;
      base.fechaComplemento=''; base.fechaPagoComp=''; base.complementoUuid='';
    }
    return base;
  });
  localStorage.setItem('tdi_facturas',JSON.stringify(facturas));
  localStorage.setItem('tdi_audit_version',AUDIT_VERSION);
}
applyAuditRevision();

document.getElementById('topbar-date').textContent=
  new Date().toLocaleDateString('es-MX',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

function showView(id,el){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
  if(el) el.classList.add('active');
  if(id==='dashboard'){ renderDashboard(); renderBillingNotices(); }
  if(id==='facturas')  renderFacturasTable();
  if(id==='clientes')  renderClientes();
  if(id==='alertas')   renderAlertas();
  if(id==='nueva')     resetNueva();
  if(id==='conciliacion') renderStatementLibrary();
}

function toast(msg,emoji='✅'){
  const t=document.getElementById('toast');
  t.innerHTML=emoji+' '+msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeDashboardDetail();});

function fmt(n){return '$'+(n||0).toLocaleString('es-MX',{minimumFractionDigits:2,maximumFractionDigits:2});}

function isVencido(f){
  if(f.estatusPago!=='pendiente') return false;
  const d=new Date(f.fecha);if(!d) return false;
  return (Date.now()-d.getTime())>30*24*3600*1000;
}
function isProximoVencer(f){
  if(f.estatusPago!=='pendiente') return false;
  const d=new Date(f.fecha);if(!d) return false;
  const diff=30*24*3600*1000-(Date.now()-d.getTime());
  return diff>0&&diff<=5*24*3600*1000;
}
function statusBadge(f){
  if(isVencido(f))                    return '<span class="badge badge-red">❌ Vencida</span>';
  if(f.estatusPago==='pagado')        return '<span class="badge badge-green">✅ Pagado</span>';
  if(f.estatusPago==='complemento')   return '<span class="badge badge-green">✅ Pagado</span>';
  if(f.estatusPago==='por_conciliar') return '<span class="badge badge-purple">🔎 Por conciliar</span>';
  return '<span class="badge badge-yellow">⏳ Pendiente</span>';
}
function complementoBadge(f){
  if(f.estatusPago==='complemento')   return '<span class="badge badge-purple">📄 Elaborado</span>';
  if(f.fechaComplemento)              return '<span class="badge badge-purple">📄 Elaborado</span>';
  return '<span class="badge badge-gray">—</span>';
}


let activeDashboardType='total';
function handleStatKey(e,type){if(e.key==='Enter'||e.key===' '){e.preventDefault();openDashboardDetail(type);}}
function daysSince(fecha){const d=new Date(fecha);if(isNaN(d)) return 0;return Math.max(0,Math.floor((Date.now()-d.getTime())/(24*3600*1000)));}
function getDashboardItems(type){
  if(type==='cobrado') return facturas.filter(f=>f.estatusPago==='pagado'||f.estatusPago==='complemento');
  if(type==='pendiente') return facturas.filter(f=>f.estatusPago==='pendiente'&&!isVencido(f));
  if(type==='vencido') return facturas.filter(f=>isVencido(f));
  return [...facturas];
}
function groupSum(items,keyFn){
  const map={};
  items.forEach(f=>{const k=keyFn(f)||'Sin dato';map[k]=(map[k]||0)+(Number(f.total)||0);});
  return Object.entries(map).sort((a,b)=>b[1]-a[1]);
}
function dashboardMeta(type){
  return {
    total:{title:'Total facturado',sub:'Todas las facturas registradas en el control.',color:'purple'},
    cobrado:{title:'Total cobrado',sub:'Facturas marcadas como pagadas o con complemento.',color:'green'},
    pendiente:{title:'Pendiente de cobro',sub:'Facturas pendientes que todavía no superan 30 días.',color:'yellow'},
    vencido:{title:'Vencidas +30 días',sub:'Pendientes con más de 30 días desde emisión.',color:'red'}
  }[type]||{title:'Resumen',sub:'Detalle ejecutivo',color:'purple'};
}
function openDashboardDetail(type){
  activeDashboardType=type;
  const items=getDashboardItems(type).sort((a,b)=>new Date(b.fecha)-new Date(a.fecha));
  const meta=dashboardMeta(type);
  const total=items.reduce((s,f)=>s+(Number(f.total)||0),0);
  const avg=items.length?total/items.length:0;
  const max=items.length?items.reduce((a,b)=>(Number(a.total)||0)>(Number(b.total)||0)?a:b):null;
  const clientes=groupSum(items,f=>f.cliente).slice(0,5);
  const meses=groupSum(items,f=>(f.fecha||'').substring(0,7)).slice(0,5);
  const pendientesOC=items.filter(f=>!f.oc).length;
  document.getElementById('drawer-title').textContent=meta.title;
  document.getElementById('drawer-sub').textContent=meta.sub;
  document.getElementById('drawer-kpis').innerHTML=`
    <div class="drawer-kpi"><div class="drawer-kpi-label">Monto</div><div class="drawer-kpi-value">${fmt(total)}</div></div>
    <div class="drawer-kpi"><div class="drawer-kpi-label">Facturas</div><div class="drawer-kpi-value">${items.length}</div></div>
    <div class="drawer-kpi"><div class="drawer-kpi-label">Promedio</div><div class="drawer-kpi-value">${fmt(avg)}</div></div>
  `;
  const topFacturas=items.slice(0,10).map(f=>{
    const extra= type==='vencido'?` · ${daysSince(f.fecha)-30} días vencida`: type==='pendiente'?` · ${daysSince(f.fecha)} días transcurridos`: f.fechaPago?` · pago ${f.fechaPago}`:'';
    return `<div class="drawer-row"><div><div class="drawer-row-title">Folio ${f.folio} · ${f.cliente}</div><div class="drawer-row-meta">${f.fecha}${extra} · OC: ${f.oc||'—'} · ${f.rfcReceptor}</div></div><div class="drawer-row-amount">${fmt(f.total)}</div></div>`;
  }).join('') || '<div class="drawer-empty">No hay facturas en esta ficha.</div>';
  const clientRows=clientes.map(([c,v])=>`<div class="drawer-row"><div class="drawer-row-title">${c}</div><div class="drawer-row-amount">${fmt(v)}</div></div>`).join('') || '<div class="drawer-empty">Sin clientes para mostrar.</div>';
  const monthRows=meses.map(([m,v])=>`<div class="drawer-row"><div class="drawer-row-title">${m}</div><div class="drawer-row-amount">${fmt(v)}</div></div>`).join('') || '<div class="drawer-empty">Sin meses para mostrar.</div>';
  const nota = type==='pendiente' ? `<div class="drawer-section"><div class="drawer-section-title">Riesgo operativo</div><div class="drawer-row"><div class="drawer-row-title">Facturas sin OC en este grupo</div><div class="drawer-row-amount">${pendientesOC}</div></div></div>` : '';
  document.getElementById('drawer-body').innerHTML=`
    <div class="drawer-section"><div class="drawer-section-title">Top clientes</div><div class="drawer-list">${clientRows}</div></div>
    <div class="drawer-section"><div class="drawer-section-title">Por mes</div><div class="drawer-list">${monthRows}</div></div>
    ${nota}
    <div class="drawer-section"><div class="drawer-section-title">Facturas incluidas</div><div class="drawer-list">${topFacturas}</div></div>
  `;
  document.getElementById('dashboard-drawer').classList.add('open');
}
function closeDashboardDetail(){document.getElementById('dashboard-drawer').classList.remove('open');}
function applyDashboardFilter(){
  closeDashboardDetail();
  const nav=[...document.querySelectorAll('.nav-item')].find(n=>n.textContent.includes('Facturas'));
  showView('facturas',nav);
  document.getElementById('search-input').value='';
  document.getElementById('filter-cliente').value='';
  document.getElementById('filter-mes').value='';
  document.getElementById('filter-status').value= activeDashboardType==='vencido'?'vencido': activeDashboardType==='pendiente'?'pendiente': activeDashboardType==='cobrado'?'pagado':'';
  renderFacturasTable();
  toast('Vista filtrada aplicada');
}
function exportDashboardDetail(){
  const meta=dashboardMeta(activeDashboardType);
  const items=getDashboardItems(activeDashboardType);
  const rows=[['Resumen',meta.title],['Monto total',items.reduce((s,f)=>s+(Number(f.total)||0),0)],['Facturas',items.length],[],['Folio','UUID','Fecha','RFC','Cliente','Descripción','Total','OC','Estatus Pago','Fecha Pago','Fecha Complemento']];
  items.forEach(f=>rows.push([f.folio,f.uuid,f.fecha,f.rfcReceptor,f.cliente,f.descripcion,f.total,f.oc||'',isVencido(f)?'vencida':f.estatusPago,f.fechaPago||'',f.fechaComplemento||'']));
  const ws=XLSX.utils.aoa_to_sheet(rows);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,meta.title.substring(0,30));
  XLSX.writeFile(wb,`Resumen_${meta.title.replace(/\s+/g,'_')}.xlsx`);
  toast('Resumen exportado');
}

function renderDashboard(){
  const total    =facturas.reduce((s,f)=>s+f.total,0);
  const cobrado  =facturas.filter(f=>f.estatusPago==='pagado'||f.estatusPago==='complemento').reduce((s,f)=>s+f.total,0);
  const pendiente=facturas.filter(f=>f.estatusPago==='pendiente'&&!isVencido(f)).reduce((s,f)=>s+f.total,0);
  const vencido  =facturas.filter(f=>isVencido(f)).reduce((s,f)=>s+f.total,0);
  document.getElementById('stat-total').textContent=fmt(total);
  document.getElementById('stat-count').textContent=facturas.length+' facturas';
  document.getElementById('stat-cobrado').textContent=fmt(cobrado);
  document.getElementById('stat-cobrado-count').textContent=facturas.filter(f=>f.estatusPago==='pagado'||f.estatusPago==='complemento').length+' facturas';
  document.getElementById('stat-pendiente').textContent=fmt(pendiente);
  document.getElementById('stat-pendiente-count').textContent=facturas.filter(f=>f.estatusPago==='pendiente'&&!isVencido(f)).length+' facturas';
  document.getElementById('stat-vencido').textContent=fmt(vencido);
  document.getElementById('stat-vencido-count').textContent=facturas.filter(f=>isVencido(f)).length+' facturas';
  const proximas=facturas.filter(isProximoVencer);
  const alertBox=document.getElementById('alerts-box');
  if(proximas.length){
    alertBox.style.display='block';
    document.getElementById('alerts-list').innerHTML=proximas.map(f=>`<div class="alert-item">Factura ${f.folio} · ${f.cliente} · <span>${fmt(f.total)}</span></div>`).join('');
  } else { alertBox.style.display='none'; }
  const tbody=document.getElementById('dash-table-body');
  tbody.innerHTML=facturas.map(f=>`<tr>
    <td class="mono">${f.folio}</td>
    <td class="mono">${f.fecha}</td>
    <td>${f.cliente}</td>
    <td class="mono"><strong>${fmt(f.total)}</strong></td>
    <td>${statusBadge(f)}</td>
    <td class="mono">${f.oc||'—'}</td>
  </tr>`).join('');
}

function renderFacturasTable(){
  const search =document.getElementById('search-input').value.toLowerCase();
  const cliente=document.getElementById('filter-cliente').value;
  const status =document.getElementById('filter-status').value;
  const mes    =document.getElementById('filter-mes').value;

  const selC=document.getElementById('filter-cliente');
  if(selC.children.length<=1){
    [...new Set(facturas.map(f=>f.rfcReceptor))].forEach(rfc=>{
      const o=document.createElement('option');o.value=rfc;
      o.textContent=CLIENTES_CATALOG[rfc]?.name||rfc;selC.appendChild(o);
    });
  }
  const selM=document.getElementById('filter-mes');
  if(selM.children.length<=1){
    [...new Set(facturas.map(f=>f.fecha?.substring(0,7)).filter(Boolean))].sort().reverse().forEach(m=>{
      const o=document.createElement('option');o.value=m;o.textContent=m;selM.appendChild(o);
    });
  }

  let data=facturas.filter(f=>{
    if(search&&!((f.folio||'').toLowerCase().includes(search)||(f.cliente||'').toLowerCase().includes(search)||(f.oc||'').toLowerCase().includes(search))) return false;
    if(cliente&&f.rfcReceptor!==cliente) return false;
    if(mes&&!f.fecha?.startsWith(mes)) return false;
    if(status==='vencido'&&!isVencido(f)) return false;
    if(status&&status!=='vencido'&&f.estatusPago!==status) return false;
    return true;
  });

  const tbody=document.getElementById('facturas-table-body');
  if(!data.length){tbody.innerHTML='<tr><td colspan="9" class="empty">No hay facturas que coincidan</td></tr>';return;}
  tbody.innerHTML=data.map(f=>`<tr>
    <td class="mono">${f.folio}</td>
    <td class="mono">${f.fecha}</td>
    <td title="${f.cliente} · ${f.rfcReceptor}"><strong>${f.cliente}</strong><div class="mini-cell mono">${f.rfcReceptor}</div></td>
    <td class="mono"><strong>${fmt(f.total)}</strong></td>
    <td class="mono" title="${f.oc||''}">${f.oc||'—'}</td>
    <td>${statusBadge(f)}</td>
    <td class="mono">${f.fechaPago||'—'}</td>
    <td>${complementoBadge(f)}${f.fechaComplemento?`<div class="mini-cell mono">${f.fechaComplemento}</div>`:''}</td>
    <td><div class="action-group"><button class="btn btn-outline btn-sm" onclick="openInvoiceEdit(${f.id})" title="Editar factura">✏️</button><button class="btn btn-outline btn-sm" onclick="openModal(${f.id})" title="Estatus de pago">💳</button><button class="btn btn-outline btn-sm" onclick="downloadInvoicePdf(${f.id})" title="Abrir/descargar PDF">PDF</button><button class="btn btn-danger btn-sm" onclick="deleteInvoice(${f.id})" title="Eliminar factura">🗑</button></div></td>
  </tr>`).join('');
}

function openModal(id){
  editingId=id;
  const f=facturas.find(x=>x.id===id);
  document.getElementById('modal-folio').textContent=`Factura ${f.folio} · ${f.cliente} · ${fmt(f.total)}`;
  selectedStatus=f.estatusPago||'pendiente';
  highlightStatus(selectedStatus);
  document.getElementById('input-fecha-pago').value=f.fechaPago||'';
  document.getElementById('input-monto-pago').value=f.montoPago||'';
  document.getElementById('input-fecha-pago-comp').value=f.fechaPagoComp||f.fechaPago||'';
  document.getElementById('input-fecha-complemento').value=f.fechaComplemento||'';
  document.getElementById('status-modal').classList.add('open');
}
function closeModal(){document.getElementById('status-modal').classList.remove('open');editingId=null;selectedStatus=null;}
function selectStatus(s){selectedStatus=s;highlightStatus(s);}
function highlightStatus(s){
  ['pendiente','pagado','complemento'].forEach(x=>{
    document.getElementById('opt-'+x).classList.toggle('selected',x===s);
  });
  document.getElementById('extra-pagado').classList.toggle('show',s==='pagado');
  document.getElementById('extra-complemento').classList.toggle('show',s==='complemento');
}
function saveStatus(){
  if(!editingId||!selectedStatus) return;
  const f=facturas.find(x=>x.id===editingId);
  f.estatusPago=selectedStatus;
  if(selectedStatus==='pagado'){f.fechaPago=document.getElementById('input-fecha-pago').value;f.montoPago=document.getElementById('input-monto-pago').value;}
  if(selectedStatus==='complemento'){f.fechaPagoComp=document.getElementById('input-fecha-pago-comp').value;f.fechaComplemento=document.getElementById('input-fecha-complemento').value;if(f.fechaPagoComp&&!f.fechaPago) f.fechaPago=f.fechaPagoComp;}
  save();closeModal();toast('Estatus actualizado');
  renderFacturasTable();renderDashboard();
}

function renderClientes(){
  const grid=document.getElementById('clients-grid');
  grid.innerHTML=Object.entries(CLIENTES_CATALOG).map(([rfc,c])=>{
    const fs=facturas.filter(f=>f.rfcReceptor===rfc);
    const total=fs.reduce((s,f)=>s+f.total,0);
    return `<div class="client-card ${c.active===false?'inactive':''}">
      <div class="client-card-head"><div><div class="client-name">${c.name}</div><div class="client-rfc">${rfc} · Reg. ${c.regimen}</div></div><div class="client-actions"><button class="btn btn-outline btn-sm" onclick="openClientModal('${rfc}')">Editar</button><button class="btn btn-outline btn-sm" onclick="toggleClient('${rfc}')">${c.active===false?'Activar':'Desactivar'}</button><button class="btn btn-danger btn-sm" onclick="deleteClient('${rfc}')">Eliminar</button></div></div>
      <div style="margin-bottom:.75rem">${c.active===false?'<span class="badge badge-gray">Inactivo</span> ':''}${c.requiresOC?'<span class="badge badge-purple">Requiere OC</span>':'<span class="badge badge-gray">Solo factura</span>'}<span class="badge badge-gray" style="margin-left:.25rem">Pago ${c.cond} días</span></div>
      <div class="client-stats"><div class="client-stat"><div class="client-stat-val">${fs.length}</div><div class="client-stat-lbl">Facturas</div></div><div class="client-stat"><div class="client-stat-val" style="font-size:.85rem">${fmt(total)}</div><div class="client-stat-lbl">Total</div></div></div>
    </div>`;
  }).join('');
}
let editingClientRfc=null;
function openClientModal(rfc=null){
  editingClientRfc=rfc; const c=rfc?CLIENTES_CATALOG[rfc]:null;
  document.getElementById('client-modal-title').textContent=c?'Editar cliente':'Nuevo cliente';
  document.getElementById('client-name').value=c?.name||''; document.getElementById('client-rfc').value=rfc||''; document.getElementById('client-rfc').disabled=!!c;
  document.getElementById('client-regimen').value=c?.regimen||''; document.getElementById('client-cond').value=c?.cond??30; document.getElementById('client-dia').value=(alertConfig[rfc]?.dia)||c?.diaFacturacion||1;
  document.getElementById('client-oc').value=String(!!c?.requiresOC); document.getElementById('client-active').value=String(c?.active!==false);
  document.getElementById('client-modal').classList.add('open');
}
function closeClientModal(){document.getElementById('client-modal').classList.remove('open');editingClientRfc=null;}
function saveClient(){
  const rfc=document.getElementById('client-rfc').value.trim().toUpperCase(), name=document.getElementById('client-name').value.trim(); if(!rfc||!name){toast('Nombre y RFC son obligatorios','⚠️');return;}
  if(!editingClientRfc&&CLIENTES_CATALOG[rfc]){toast('Ese RFC ya existe','⚠️');return;}
  CLIENTES_CATALOG[rfc]={name,regimen:document.getElementById('client-regimen').value.trim(),cond:parseInt(document.getElementById('client-cond').value)||0,requiresOC:document.getElementById('client-oc').value==='true',active:document.getElementById('client-active').value==='true'};
  alertConfig[rfc]={...(alertConfig[rfc]||{}),active:alertConfig[rfc]?.active||false,dia:parseInt(document.getElementById('client-dia').value)||1}; localStorage.setItem('tdi_alertas',JSON.stringify(alertConfig)); saveClientes(); closeClientModal(); renderClientes(); renderAlertas(); renderBillingNotices(); toast('Cliente guardado');
}
function toggleClient(rfc){CLIENTES_CATALOG[rfc].active=CLIENTES_CATALOG[rfc].active===false?true:false;saveClientes();renderClientes();renderAlertas();renderBillingNotices();toast(CLIENTES_CATALOG[rfc].active?'Cliente activado':'Cliente desactivado');}
function deleteClient(rfc){const n=facturas.filter(f=>f.rfcReceptor===rfc).length;if(n){toast('No se puede eliminar: tiene '+n+' factura(s). Desactívalo.','⚠️');return;}if(!confirm('¿Eliminar definitivamente este cliente?'))return;delete CLIENTES_CATALOG[rfc];delete alertConfig[rfc];saveClientes();localStorage.setItem('tdi_alertas',JSON.stringify(alertConfig));renderClientes();renderAlertas();renderBillingNotices();toast('Cliente eliminado');}

// Edición y archivo PDF de facturas
let invoiceEditId=null;
async function openInvoiceEdit(id){const f=facturas.find(x=>x.id===id);if(!f)return;invoiceEditId=id;['folio','fecha','rfc','cliente','descripcion','subtotal','iva','total','oc'].forEach(k=>{const map={rfc:'rfcReceptor'};document.getElementById('edit-'+k).value=f[map[k]||k]??'';});const input=document.getElementById('edit-pdf');input.value='';const existing=await getPdfBlob(id);document.getElementById('edit-pdf-status').textContent=existing?'PDF almacenado. Puedes reemplazarlo seleccionando otro archivo.':'No hay PDF almacenado. Selecciona el PDF original para asociarlo a esta factura.';document.getElementById('invoice-edit-modal').classList.add('open');}
function closeInvoiceEdit(){document.getElementById('invoice-edit-modal').classList.remove('open');invoiceEditId=null;}
async function saveInvoiceEdit(){const f=facturas.find(x=>x.id===invoiceEditId);if(!f)return;const pdf=document.getElementById('edit-pdf').files[0];if(pdf&&pdf.type&&pdf.type!=='application/pdf'){toast('Selecciona un archivo PDF válido','⚠️');return;}f.folio=document.getElementById('edit-folio').value.trim();f.fecha=document.getElementById('edit-fecha').value;f.rfcReceptor=document.getElementById('edit-rfc').value.trim().toUpperCase();f.cliente=document.getElementById('edit-cliente').value.trim();f.descripcion=document.getElementById('edit-descripcion').value.trim();f.subtotal=parseFloat(document.getElementById('edit-subtotal').value)||0;f.iva=parseFloat(document.getElementById('edit-iva').value)||0;f.total=parseFloat(document.getElementById('edit-total').value)||0;f.oc=document.getElementById('edit-oc').value.trim();if(pdf)await storePdfBlob(f.id,pdf);save();closeInvoiceEdit();renderFacturasTable();renderDashboard();toast(pdf?'Factura y PDF actualizados':'Factura actualizada');}
async function deleteInvoice(id){const f=facturas.find(x=>x.id===id);if(!f||!confirm(`¿Eliminar la factura ${f.folio} de ${f.cliente}? Esta acción no se puede deshacer.`))return;facturas=facturas.filter(x=>x.id!==id);save();await deletePdfBlob(id);renderFacturasTable();renderDashboard();renderClientes();renderBillingNotices();toast('Factura eliminada');}
function pdfDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open('tdi_archivos',2);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains('pdfs'))db.createObjectStore('pdfs');if(!db.objectStoreNames.contains('statements'))db.createObjectStore('statements');};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function storePdfBlob(id,file){const db=await pdfDb();return new Promise((res,rej)=>{const tx=db.transaction('pdfs','readwrite');tx.objectStore('pdfs').put(file,id);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
async function getPdfBlob(id){const db=await pdfDb();return new Promise((res,rej)=>{const r=db.transaction('pdfs').objectStore('pdfs').get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function deletePdfBlob(id){try{const db=await pdfDb();const tx=db.transaction('pdfs','readwrite');tx.objectStore('pdfs').delete(id);}catch(e){}}
async function downloadInvoicePdf(id){const f=facturas.find(x=>x.id===id);const blob=await getPdfBlob(id);if(!blob){toast('Esta factura no tiene PDF almacenado. Los PDFs subidos antes de esta actualización deben volver a cargarse.','⚠️');return;}const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`Factura_${f?.folio||id}.pdf`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);}

// PDF upload para nuevas facturas
async function extractText(file){
  const ab=await file.arrayBuffer();
  const pdf=await pdfjsLib.getDocument({data:ab}).promise;
  let text='';
  for(let i=1;i<=pdf.numPages;i++){
    const pg=await pdf.getPage(i);
    const tc=await pg.getTextContent();
    const items=tc.items;
    if(!items.length) continue;
    // Agrupar por posición Y (redondeada a 2px para tolerar variaciones)
    const byY={};
    for(const item of items){
      if(!item.str.trim()) continue;
      const y=Math.round(item.transform[5]/2)*2;
      if(!byY[y]) byY[y]=[];
      byY[y].push({x:item.transform[4],str:item.str});
    }
    // Ordenar líneas de arriba a abajo
    const ys=Object.keys(byY).map(Number).sort((a,b)=>b-a);
    for(const y of ys){
      const lineText=byY[y].sort((a,b)=>a.x-b.x).map(it=>it.str).join(' ').trim();
      if(lineText) text+=lineText+'\n';
    }
  }
  return text;
}
function parseFactura(text){
  const get=(patterns)=>{for(const p of patterns){const m=text.match(p);if(m) return m[1]?.trim();}return '';};
  const uuid=get([/([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i]);
  const fecha=get([/(\d{4}-\d{2}-\d{2})T/]);
  const rfcR=get([/RFC:\s*((?!MTD)[A-Z]{3,4}\d{6}[A-Z0-9]{3})/]);
  const folioM=text.match(/(?:^|\s)(\d{3,4})\s/m);
  const folio=folioM?folioM[1]:'';
  const cliente=CLIENTES_CATALOG[rfcR]?.name||rfcR||'';
  const desc=get([/SERVICIO[^\n]{3,60}/i,/FEE[^\n]{3,40}/i])||'Servicios de Marketing';
  // Extraccion robusta de montos — busca la seccion de totales del CFDI
  const toMXN=s=>parseFloat((s||'0').replace(/,/g,''));
  const subtotalM=text.match(/Subtotal\s+([\d,]+\.\d{2})\s+MXN/i);
  const ivaM    =text.match(/IVAT?\s+[\d.]{3,10}\s+([\d,]+\.\d{2})\s+MXN/i);
  const totalM  =text.match(/\bTotal\s+([\d,]+\.\d{2})\s+MXN/i);
  // Fallback: si no matchea con MXN, usar los ultimos 3 numeros grandes del doc
  const allNums=[...text.matchAll(/([\d]{1,3}(?:,\d{3})*\.\d{2})/g)]
    .map(m=>parseFloat(m[1].replace(/,/g,''))).filter(n=>n>=100);
  const subtotal=subtotalM?toMXN(subtotalM[1]):(allNums.length>=3?allNums[allNums.length-3]:0);
  const iva     =ivaM    ?toMXN(ivaM[1])    :(allNums.length>=2?allNums[allNums.length-2]:0);
  const total   =totalM  ?toMXN(totalM[1])  :(allNums.length>=1?allNums[allNums.length-1]:0);
  return {folio,uuid,fecha,rfcReceptor:rfcR,cliente,descripcion:desc.trim().substring(0,80),
    subtotal,iva,total,
    estatusSAT:'vigente',estatusPago:'pendiente',fechaPago:'',montoPago:'',fechaComplemento:'',oc:'',
    createdAt:new Date().toISOString()};
}
function parseOC(text){
  const toMXN=s=>parseFloat((s||'0').replace(/,/g,''));
  const ocM=text.match(/(OCMAD\d+)/);
  const oc=ocM?ocM[1]:'';
  const subtotalM=text.match(/Subtotal:\s*([\d,]+\.\d{2})/i);
  const totalM=text.match(/Total:\s*([\d,]+\.\d{2})/i);
  const ivaM=text.match(/IVA:\s*([\d,]+\.\d{2})/i);
  const subtotal=subtotalM?toMXN(subtotalM[1]):0;
  const total=totalM?toMXN(totalM[1]):0;
  const iva=ivaM?toMXN(ivaM[1]):0;
  return {oc,subtotal,iva,total};
}
function handleDrop(ev,type){
  ev.preventDefault();
  document.getElementById('drop-'+type).classList.remove('drag');
  const files=[...ev.dataTransfer.files];
  if(!files.length) return;
  if(type==='complemento') return processComplementoBatch(files);
  processFile(files[0],type);
}
async function handleFile(input,type){
  const files=[...input.files];
  if(!files.length) return;
  if(type==='complemento'){
    await processComplementoBatch(files);
    input.value='';
    return;
  }
  await processFile(files[0],type);
}
async function processFile(file,type){
  try{
    if(type==='complemento'){
      const text=await file.text();
      pendingComplemento=parseComplementoPagoXML(text,file.name);
      showPreviewComplemento();
      return;
    }
    const text=await extractText(file);
    if(type==='factura'){
      pendingFactura=parseFactura(text);
      pendingFacturaFile=file;
      showPreviewFactura();
    }else{
      pendingOC=parseOC(text);
      showPreviewOC();
    }
  }catch(e){
    console.error(e);
    toast(type==='complemento'?'Error al leer el XML':'Error al leer el PDF','❌');
  }
}
function normTxt(s){
  return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/@/g,'Ñ').toUpperCase().replace(/[^A-Z0-9]+/g,' ').trim();
}
function parseMoney(s){return parseFloat(String(s||'0').replace(/,/g,''))||0;}
function toISOFromCfdiDate(s){return (s||'').substring(0,10);}
function parseComplementoPagoXML(xmlText,fileName){
  const doc=new DOMParser().parseFromString(xmlText,'application/xml');
  const parseErr=doc.querySelector('parsererror');
  if(parseErr) throw new Error('XML inválido');
  const getAttr=(el,names)=>{for(const n of names){const v=el?.getAttribute(n);if(v) return v;}return '';};
  const comprobante=doc.documentElement;
  const timbre=[...doc.getElementsByTagName('*')].find(el=>el.localName==='TimbreFiscalDigital');
  const pago=[...doc.getElementsByTagName('*')].find(el=>el.localName==='Pago');
  const doctos=[...doc.getElementsByTagName('*')].filter(el=>el.localName==='DoctoRelacionado');
  const fechaComplemento=toISOFromCfdiDate(getAttr(comprobante,['Fecha','fecha']));
  const fechaPago=toISOFromCfdiDate(getAttr(pago,['FechaPago','fechaPago']));
  const uuidComplemento=getAttr(timbre,['UUID','Uuid','uuid']);
  const relacionados=doctos.map(d=>({
    uuid:getAttr(d,['IdDocumento','idDocumento']).toUpperCase(),
    folio:getAttr(d,['Folio','folio']),
    moneda:getAttr(d,['MonedaDR','monedaDR']),
    metodo:getAttr(d,['MetodoDePagoDR','metodoDePagoDR']),
    parcialidad:getAttr(d,['NumParcialidad','numParcialidad']),
    importePagado:parseFloat(getAttr(d,['ImpPagado','impPagado'])||'0'),
    saldoAnterior:parseFloat(getAttr(d,['ImpSaldoAnt','impSaldoAnt'])||'0'),
    saldoInsoluto:parseFloat(getAttr(d,['ImpSaldoInsoluto','impSaldoInsoluto'])||'0')
  }));
  if(!relacionados.length) throw new Error('No encontré DoctoRelacionado en el complemento');
  return {archivo:fileName,uuidComplemento,fechaComplemento,fechaPago,relacionados};
}
function aplicarComplementoPago(comp){
  const aplicados=[];
  const noEncontrados=[];
  const duplicados=[];
  comp.relacionados.forEach(dr=>{
    const f=facturas.find(x=>String(x.uuid||'').toUpperCase()===dr.uuid || (dr.folio&&String(x.folio)===String(dr.folio)));
    if(!f){noEncontrados.push(dr);return;}
    if(f.complementoUuid && f.complementoUuid===comp.uuidComplemento){duplicados.push(f);return;}
    f.estatusPago='complemento';
    f.fechaPago=comp.fechaPago||f.fechaPago||'';
    f.fechaPagoComp=comp.fechaPago||f.fechaPagoComp||'';
    f.fechaComplemento=comp.fechaComplemento||f.fechaComplemento||'';
    f.montoPago=dr.importePagado||f.montoPago||f.total;
    f.complementoUuid=comp.uuidComplemento||f.complementoUuid||'';
    aplicados.push({factura:f,dr});
  });
  if(aplicados.length){save();renderDashboard();renderFacturasTable();}
  return {aplicados,noEncontrados,duplicados};
}
async function processComplementoBatch(files){
  const xmls=files.filter(f=>/\.xml$/i.test(f.name) || /xml/i.test(f.type||''));
  if(!xmls.length){toast('Selecciona archivos XML válidos','⚠️');return;}
  const resumen={archivos:xmls.length,aplicados:[],duplicados:[],noEncontrados:[],errores:[]};
  for(const file of xmls){
    try{
      const text=await file.text();
      const comp=parseComplementoPagoXML(text,file.name);
      pendingComplemento=comp;
      const res=aplicarComplementoPago(comp);
      resumen.aplicados.push(...res.aplicados.map(x=>({...x,archivo:file.name})));
      resumen.duplicados.push(...res.duplicados.map(f=>({factura:f,archivo:file.name})));
      resumen.noEncontrados.push(...res.noEncontrados.map(dr=>({...dr,archivo:file.name})));
    }catch(e){
      console.error(e);
      resumen.errores.push({archivo:file.name,error:e.message||'Error al leer XML'});
    }
  }
  showPreviewComplementoBatch(resumen);
}
function showPreviewComplementoBatch(resumen){
  const total=resumen.aplicados.reduce((s,x)=>s+(x.dr.importePagado||x.factura.total||0),0);
  document.getElementById('preview-complemento-grid').innerHTML=[
    ['XML procesados',resumen.archivos],['Facturas aplicadas',resumen.aplicados.length],
    ['Duplicados',resumen.duplicados.length],['Sin match',resumen.noEncontrados.length],
    ['Errores',resumen.errores.length],['Monto aplicado',fmt(total)]
  ].map(([l,v])=>`<div class="preview-field"><div class="preview-label">${l}</div><div class="preview-value">${v}</div></div>`).join('');
  let html='';
  if(resumen.aplicados.length){
    html+=`<div class="match-badge match-ok">✅ Aplicados · ${resumen.aplicados.map(x=>'Folio '+x.factura.folio+' '+fmt(x.dr.importePagado||x.factura.total)).join(' · ')}</div>`;
  }
  if(resumen.duplicados.length){
    html+=`<div class="match-badge match-ok">ℹ️ Duplicados / ya cargados · ${resumen.duplicados.map(x=>'Folio '+x.factura.folio).join(' · ')}</div>`;
  }
  if(resumen.noEncontrados.length){
    html+=`<div class="match-badge match-err">⚠️ Sin match · ${resumen.noEncontrados.map(x=>(x.archivo||'XML')+': '+(x.uuid||'').substring(0,8)+'…').join(' · ')}</div>`;
  }
  if(resumen.errores.length){
    html+=`<div class="match-badge match-err">❌ Errores · ${resumen.errores.map(x=>x.archivo+': '+x.error).join(' · ')}</div>`;
  }
  document.getElementById('complemento-match-result').innerHTML=html||'<div class="match-badge match-err">⚠️ No se aplicó ningún complemento</div>';
  document.getElementById('preview-complemento').style.display='block';
  toast(resumen.aplicados.length?'Complementos aplicados':'XML procesados, revisar match',resumen.aplicados.length?'✅':'⚠️');
}
function showPreviewComplemento(){
  const c=pendingComplemento;
  const total=c.relacionados.reduce((s,r)=>s+(r.importePagado||0),0);
  document.getElementById('preview-complemento-grid').innerHTML=[
    ['Archivo',c.archivo||'—'],['UUID complemento',(c.uuidComplemento||'—').substring(0,20)+'…'],
    ['Fecha pago',c.fechaPago||'—'],['Fecha complemento',c.fechaComplemento||'—'],
    ['Documentos relacionados',c.relacionados.length],['Monto pagado',fmt(total)]
  ].map(([l,v])=>`<div class="preview-field"><div class="preview-label">${l}</div><div class="preview-value">${v}</div></div>`).join('');
  const res=aplicarComplementoPago(c);
  let html='';
  if(res.aplicados.length){
    html+=`<div class="match-badge match-ok">✅ Complemento aplicado · ${res.aplicados.map(x=>'Folio '+x.factura.folio+' '+fmt(x.dr.importePagado||x.factura.total)).join(' · ')}</div>`;
  }
  if(res.duplicados.length){
    html+=`<div class="match-badge match-ok">ℹ️ Complemento ya estaba cargado · ${res.duplicados.map(f=>'Folio '+f.folio).join(' · ')}</div>`;
  }
  if(res.noEncontrados.length){
    html+=`<div class="match-badge match-err">⚠️ Sin match para UUID: ${res.noEncontrados.map(x=>(x.uuid||'').substring(0,8)+'…').join(', ')}</div>`;
  }
  document.getElementById('complemento-match-result').innerHTML=html;
  document.getElementById('preview-complemento').style.display='block';
  toast(res.aplicados.length?'Complemento aplicado':'Complemento leído, revisar match',res.aplicados.length?'✅':'⚠️');
}
function showPreviewFactura(){
  const f=pendingFactura;
  document.getElementById('preview-factura-grid').innerHTML=[
    ['Folio',f.folio||'—'],['UUID',(f.uuid||'—').substring(0,20)+'…'],
    ['Fecha',f.fecha||'—'],['RFC',f.rfcReceptor||'—'],
    ['Cliente',f.cliente||'—'],['Subtotal',fmt(f.subtotal)],
    ['IVA',fmt(f.iva)],['Total',fmt(f.total)],
  ].map(([l,v])=>`<div class="preview-field"><div class="preview-label">${l}</div><div class="preview-value">${v}</div></div>`).join('');
  document.getElementById('preview-factura').style.display='block';
  document.getElementById('save-section').style.display='block';
}
function showPreviewOC(){
  const o=pendingOC;
  document.getElementById('preview-oc-grid').innerHTML=[
    ['No. OC',o.oc||'—'],['Subtotal OC',fmt(o.subtotal)],['IVA OC',fmt(o.iva)],['Total OC c/IVA',fmt(o.total)],
  ].map(([l,v])=>`<div class="preview-field"><div class="preview-label">${l}</div><div class="preview-value">${v}</div></div>`).join('');
  document.getElementById('preview-oc').style.display='block';
  if(pendingFactura){
    // Comparar total OC con total factura (ambos con IVA)
    const ocTotal=o.total||o.subtotal;
    const facTotal=pendingFactura.total;
    const ok=Math.abs(facTotal-ocTotal)<1;
    document.getElementById('match-result').innerHTML=`<div class="match-badge ${ok?'match-ok':'match-err'}">${ok?'✅ Montos coinciden · Total OC y Factura: '+fmt(facTotal):'⚠️ Montos no coinciden · OC: '+fmt(ocTotal)+' / Factura: '+fmt(facTotal)}</div>`;
  }
}
async function saveFactura(){
  if(!pendingFactura) return;
  if(pendingOC){pendingFactura.oc=pendingOC.oc;pendingFactura.totalOC=pendingOC.total;}
  pendingFactura.id=Date.now();
  facturas.unshift(pendingFactura);
  if(pendingFacturaFile){try{await storePdfBlob(pendingFactura.id,pendingFacturaFile);pendingFactura.hasPdf=true;}catch(e){console.warn(e);}}
  save();toast('Factura '+pendingFactura.folio+' guardada');
  resetNueva();renderDashboard();
}
function resetNueva(){
  pendingFactura=null;pendingOC=null;pendingComplemento=null;pendingFacturaFile=null;
  document.getElementById('preview-factura').style.display='none';
  document.getElementById('preview-oc').style.display='none';
  document.getElementById('preview-complemento').style.display='none';
  document.getElementById('save-section').style.display='none';
  document.getElementById('input-factura').value='';
  document.getElementById('input-oc').value='';
  document.getElementById('input-complemento').value='';
}

function exportExcel(){
  const rows=[['Folio','UUID','Fecha','RFC Receptor','Cliente','Descripción','Subtotal','IVA','Total','OC','Estatus SAT','Estatus Pago','Fecha Pago','Monto Pago','Fecha Complemento','UUID Complemento']];
  facturas.forEach(f=>rows.push([f.folio,f.uuid,f.fecha,f.rfcReceptor,f.cliente,f.descripcion,f.subtotal,f.iva,f.total,f.oc,'Vigente',isVencido(f)?'Vencida':f.estatusPago,f.fechaPago||'',f.montoPago||'',f.fechaComplemento||'',f.complementoUuid||'']));
  const ws=XLSX.utils.aoa_to_sheet(rows);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Facturas');
  XLSX.writeFile(wb,'Control_Facturacion_TDI.xlsx');
  toast('Excel exportado');
}

renderDashboard();
setTimeout(()=>renderBillingNotices(),100);

// ── CORREO ──────────────────────────────────────────────────────────────────
// EmailJS retirado. El envío automático se conectará a Resend mediante una función segura en Vercel.

// ── ALERTAS CONFIG ────────────────────────────────────────────────────────────
let alertConfig = JSON.parse(localStorage.getItem('tdi_alertas')||'{}');
Object.keys(CLIENTES_CATALOG).forEach(rfc=>{
  if(!alertConfig[rfc]) alertConfig[rfc]={active:false,dia:1};
});

function saveAlertConfig(){
  Object.keys(CLIENTES_CATALOG).forEach(rfc=>{
    const chk=document.getElementById('alert-chk-'+rfc);
    const dia=document.getElementById('alert-dia-'+rfc);
    if(chk&&dia) alertConfig[rfc]={active:chk.checked,dia:parseInt(dia.value)||1};
  });
  localStorage.setItem('tdi_alertas',JSON.stringify(alertConfig));
  renderBillingNotices();
  toast('Configuración guardada');
}

function renderAlertas(){
  const grid=document.getElementById('alertas-grid');
  grid.innerHTML=Object.entries(CLIENTES_CATALOG).map(([rfc,c])=>{
    const cfg=alertConfig[rfc]||{active:false,dia:1};
    const hoy=new Date();
    const proxFecha=new Date(hoy.getFullYear(),hoy.getMonth(),cfg.dia);
    if(proxFecha<=hoy) proxFecha.setMonth(proxFecha.getMonth()+1);
    const diff=Math.ceil((proxFecha-hoy)/(1000*60*60*24));
    const status=cfg.active?(diff<=3?'⚠️ Alerta en '+diff+' días':'✅ Próxima: día '+cfg.dia):'—';
    return `<div class="alert-cfg-card">
      <div class="alert-cfg-header">
        <div style="display:flex;align-items:center;gap:.75rem">
          <span class="alert-status-dot ${cfg.active?'dot-active':'dot-inactive'}"></span>
          <div class="alert-cfg-name">${c.name}</div>
          <span style="font-family:var(--mono);font-size:.7rem;color:var(--muted)">${rfc}</span>
        </div>
        <div class="alert-cfg-toggle">
          <label class="toggle-switch">
            <input type="checkbox" id="alert-chk-${rfc}" ${cfg.active?'checked':''} onchange="saveAlertConfig();renderAlertas()">
            <span class="toggle-slider"></span>
          </label>
          <span>Activa</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:.5rem;font-size:.82rem">
          <span style="color:var(--muted)">Facturar el día</span>
          <input class="alert-day-input" type="number" min="1" max="28" id="alert-dia-${rfc}" value="${cfg.dia}" onchange="saveAlertConfig()">
          <span style="color:var(--muted)">de cada mes</span>
        </div>
        <span style="font-size:.78rem;color:${cfg.active&&diff<=3?'#d97706':'var(--muted)'}">${status}</span>
      </div>
    </div>`;
  }).join('');
}

async function checkAndSendAlerts(){
  const log=document.getElementById('alert-log'); const due=getBillingAlerts(3);
  if(log) log.innerHTML=due.length?'🔔 Recordatorios detectados:<br>'+due.map(x=>`· ${x.cliente} — ${x.diff===0?'facturar hoy':'facturar en '+x.diff+' día(s)'}`).join('<br>')+'<br><br><strong>Correo:</strong> pendiente de conectar a Resend/Vercel.':'ℹ️ Sin alertas próximas esta vez.';
  renderBillingNotices(); if(due.length) toast(due.length+' recordatorio(s) de facturación','🔔');
}
function hasInvoiceThisPeriod(rfc,date){return facturas.some(f=>f.rfcReceptor===rfc&&f.fecha&&new Date(f.fecha+'T12:00:00').getFullYear()===date.getFullYear()&&new Date(f.fecha+'T12:00:00').getMonth()===date.getMonth());}
function getBillingAlerts(daysAhead=0){const hoy=new Date();hoy.setHours(0,0,0,0);const out=[];Object.entries(alertConfig).forEach(([rfc,cfg])=>{const c=CLIENTES_CATALOG[rfc];if(!cfg?.active||!c||c.active===false)return;let target=new Date(hoy.getFullYear(),hoy.getMonth(),Math.min(28,cfg.dia||1));target.setHours(0,0,0,0);if(target<hoy){target=new Date(hoy.getFullYear(),hoy.getMonth()+1,Math.min(28,cfg.dia||1));target.setHours(0,0,0,0);}const diff=Math.round((target-hoy)/86400000);if(diff>=0&&diff<=daysAhead&&!hasInvoiceThisPeriod(rfc,target))out.push({rfc,cliente:c.name,diff,target});});return out.sort((a,b)=>a.diff-b.diff);}
function renderBillingNotices(){const box=document.getElementById('billing-notice');if(!box)return;const due=getBillingAlerts(3);if(!due.length){box.classList.remove('show');box.innerHTML='';return;}box.classList.add('show');box.innerHTML=`<div class="billing-notice-title">🔔 ${due.some(x=>x.diff===0)?'Facturación pendiente hoy':'Próximas facturas por emitir'}</div>${due.map(x=>`<div class="billing-notice-row"><span><strong>${x.cliente}</strong> · ${x.diff===0?'Hoy':x.diff===1?'Mañana':'En '+x.diff+' días'}</span><button class="btn btn-primary btn-sm" onclick="goNewInvoice()">Crear factura</button></div>`).join('')}`;}
function goNewInvoice(){const nav=[...document.querySelectorAll('.nav-item')].find(n=>n.textContent.includes('Nueva Factura'));showView('nueva',nav);}


// Biblioteca persistente de estados de cuenta
const PRELOADED_STATEMENTS=[
  {id:'pre_jan_2026',bank:'BBVA México',period:'01/01/2026 – 31/01/2026',name:'0120791334_202601-001.pdf',assetUrl:'assets/statements/2026-01.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:924087,locked:false},
  {id:'pre_feb_2026',bank:'BBVA México',period:'01/02/2026 – 28/02/2026',name:'0120791334_202602.pdf',assetUrl:'assets/statements/2026-02.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:640989,locked:true},
  {id:'pre_mar_2026',bank:'BBVA México',period:'01/03/2026 – 31/03/2026',name:'0120791334_202603.pdf',assetUrl:'assets/statements/2026-03.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:639991,locked:true},
  {id:'pre_apr_2026',bank:'BBVA México',period:'01/04/2026 – 30/04/2026',name:'0120791334_202604.pdf',assetUrl:'assets/statements/2026-04.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:639767,locked:true},
  {id:'pre_may_2026',bank:'BBVA México',period:'01/05/2026 – 31/05/2026',name:'0120791334_202605.pdf',assetUrl:'assets/statements/2026-05.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:640258,locked:true},
  {id:'pre_jun_2026',bank:'BBVA México',period:'01/06/2026 – 30/06/2026',name:'0120791334_202606.pdf',assetUrl:'assets/statements/2026-06.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:642601,locked:true},
  {id:'pre_jul_2026',bank:'BBVA México',period:'01/07/2026 – 31/07/2026',name:'0120791334_202607.pdf',assetUrl:'assets/statements/2026-07.pdf',uploadedAt:'2026-09-15T00:00:00.000Z',size:927089,locked:false},
  {id:'pre_aug_2026',bank:'BBVA México',period:'01/08/2026 – 31/08/2026',name:'Estado de cuenta agosto 2026.pdf',assetUrl:'assets/statements/2026-08.pdf',uploadedAt:'2026-09-30T00:00:00.000Z',size:0,locked:false}
];
let statementMeta=JSON.parse(localStorage.getItem('tdi_estados_cuenta')||'[]'), replacingStatementId=null;
PRELOADED_STATEMENTS.forEach(p=>{if(!statementMeta.some(x=>x.id===p.id||x.assetUrl===p.assetUrl||x.period===p.period)) statementMeta.push({...p});});
localStorage.setItem('tdi_estados_cuenta',JSON.stringify(statementMeta));
function saveStatementMeta(){localStorage.setItem('tdi_estados_cuenta',JSON.stringify(statementMeta));}
async function storeStatementBlob(id,file){const db=await pdfDb();return new Promise((res,rej)=>{const tx=db.transaction('statements','readwrite');tx.objectStore('statements').put(file,id);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
async function getStatementBlob(id){const db=await pdfDb();return new Promise((res,rej)=>{const r=db.transaction('statements').objectStore('statements').get(id);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
async function deleteStatementBlob(id){const db=await pdfDb();return new Promise((res,rej)=>{const tx=db.transaction('statements','readwrite');tx.objectStore('statements').delete(id);tx.oncomplete=res;tx.onerror=()=>rej(tx.error);});}
function extractStatementPeriod(text,fileName){let m=text.match(/Periodo\s+DEL\s+(\d{2})\/(\d{2})\/(\d{4})\s+AL\s+(\d{2})\/(\d{2})\/(\d{4})/i);if(m)return `${m[1]}/${m[2]}/${m[3]} – ${m[4]}/${m[5]}/${m[6]}`;m=String(fileName||'').match(/_(20\d{2})(\d{2})/);if(m)return `${m[2]}/${m[1]}`;return 'Sin identificar';}
async function saveStatementToLibrary(file,text){const period=extractStatementPeriod(text,file.name);let existing=statementMeta.find(x=>x.name===file.name&&x.period===period);const id=existing?.id||('st_'+Date.now()+'_'+Math.random().toString(36).slice(2,7));await storeStatementBlob(id,file);if(existing){existing.uploadedAt=new Date().toISOString();existing.size=file.size;}else statementMeta.unshift({id,bank:'BBVA México',period,name:file.name,uploadedAt:new Date().toISOString(),size:file.size});saveStatementMeta();}
function renderStatementLibrary(){const body=document.getElementById('statement-library-body');if(!body)return;if(!statementMeta.length){body.innerHTML='<tr><td colspan="5" style="padding:1.2rem;text-align:center;color:var(--muted)">Aún no hay estados de cuenta guardados. Los próximos PDFs que subas en Conciliación quedarán aquí.</td></tr>';return;}body.innerHTML=statementMeta.map(x=>`<tr style="border-top:1px solid var(--border)"><td style="padding:.75rem">${x.bank||'BBVA México'}</td><td style="padding:.75rem;font-weight:600">${x.period||'—'}</td><td style="padding:.75rem">${x.name}${x.locked?'<div style=\"font-size:.68rem;color:var(--muted);margin-top:.18rem\">🔒 PDF protegido</div>':''}${x.assetUrl?'<div style=\"font-size:.68rem;color:#2563eb;margin-top:.18rem\">✓ Incluido en esta versión</div>':''}</td><td style="padding:.75rem">${new Date(x.uploadedAt).toLocaleDateString('es-MX')}</td><td style="padding:.75rem"><div class="action-group"><button class="btn btn-outline btn-sm" onclick="viewStatement('${x.id}')">Ver PDF</button><button class="btn btn-outline btn-sm" onclick="downloadStatement('${x.id}')">Descargar</button><button class="btn btn-outline btn-sm" onclick="chooseReplaceStatement('${x.id}')">Reemplazar</button><button class="btn btn-danger btn-sm" onclick="deleteStatement('${x.id}')">Eliminar</button></div></td></tr>`).join('');}
async function viewStatement(id){const x=statementMeta.find(s=>s.id===id);if(x?.assetUrl){window.open(x.assetUrl,'_blank');return;}const b=await getStatementBlob(id);if(!b){toast('No se encontró el PDF almacenado','⚠️');return;}const u=URL.createObjectURL(b);window.open(u,'_blank');setTimeout(()=>URL.revokeObjectURL(u),60000);}
async function downloadStatement(id){const x=statementMeta.find(s=>s.id===id);if(x?.assetUrl){const a=document.createElement('a');a.href=x.assetUrl;a.download=x.name||'estado_cuenta.pdf';a.click();return;}const b=await getStatementBlob(id);if(!b){toast('No se encontró el PDF almacenado','⚠️');return;}const u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=x?.name||'estado_cuenta.pdf';a.click();setTimeout(()=>URL.revokeObjectURL(u),2000);}
function chooseReplaceStatement(id){replacingStatementId=id;const i=document.getElementById('statement-replace-input');i.value='';i.click();}
async function replaceStatementFile(input){const f=input.files[0],x=statementMeta.find(s=>s.id===replacingStatementId);if(!f||!x)return;if(f.type&&f.type!=='application/pdf'){toast('Selecciona un PDF válido','⚠️');return;}const text=await extractText(f);await storeStatementBlob(x.id,f);x.name=f.name;x.period=extractStatementPeriod(text,f.name);x.uploadedAt=new Date().toISOString();x.size=f.size;saveStatementMeta();renderStatementLibrary();toast('Estado de cuenta reemplazado');replacingStatementId=null;}
async function deleteStatement(id){const x=statementMeta.find(s=>s.id===id);if(!x||!confirm(`¿Eliminar el estado de cuenta ${x.period}?`))return;await deleteStatementBlob(id);statementMeta=statementMeta.filter(s=>s.id!==id);saveStatementMeta();renderStatementLibrary();toast('Estado de cuenta eliminado');}

async function reconcileAllSavedStatements(){
  if(!statementMeta.length){toast('No hay estados de cuenta guardados','⚠️');return;}
  document.getElementById('conc-loading').style.display='block';
  document.getElementById('conc-results').innerHTML='';
  try{
    let allMovimientos=[], processed=0;
    for(const meta of statementMeta){
      const blob=await getStatementBlob(meta.id);
      if(!blob){ if(meta.assetUrl) continue; else continue; }
      const file=new File([blob],meta.name||'estado.pdf',{type:blob.type||'application/pdf'});
      const text=await extractText(file);
      const year=extractStatementYear(text,file.name);
      const movs=parseBBVA(text,year);
      movs.forEach(m=>m.archivo=file.name);
      allMovimientos=allMovimientos.concat(movs);processed++;
    }
    const seen=new Set();
    allMovimientos=allMovimientos.filter(m=>{const key=`${m.fecha}-${m.monto}-${normTxt(m.desc)}`;if(seen.has(key))return false;seen.add(key);return true;});
    renderConciliacion(allMovimientos,processed);
    renderDashboard();renderFacturas();
    toast('Conciliación completa con '+processed+' estado(s) de cuenta');
  }catch(e){console.error(e);document.getElementById('conc-results').innerHTML='<div style="color:var(--red);padding:1rem">❌ Error al conciliar estados guardados: '+e.message+'</div>';}
  document.getElementById('conc-loading').style.display='none';
}

// ── CONCILIACIÓN ──────────────────────────────────────────────────────────────
function handleConcDrop(ev){
  ev.preventDefault();
  document.getElementById('conc-drop').classList.remove('drag');
  const files=Array.from(ev.dataTransfer.files).filter(f=>/pdf$/i.test(f.name)||f.type==='application/pdf'||!f.type);
  if(files.length) processBancoPDFs(files.slice(0,5));
}
function handleConcFile(input){
  const files=Array.from(input.files).filter(f=>/pdf$/i.test(f.name)||f.type==='application/pdf'||!f.type);
  if(files.length) processBancoPDFs(files.slice(0,5));
}
function extractStatementYear(text,fileName){
  const byPeriod=text.match(/DEL\s+\d{2}\/\d{2}\/(\d{4})\s+AL/i);
  if(byPeriod) return parseInt(byPeriod[1],10);
  const byName=String(fileName||'').match(/_(20\d{2})(\d{2})/);
  if(byName) return parseInt(byName[1],10);
  return new Date().getFullYear();
}
async function processBancoPDFs(files){
  document.getElementById('conc-loading').style.display='block';
  document.getElementById('conc-results').innerHTML='';
  const fileList=document.getElementById('conc-file-list');
  fileList.innerHTML=files.map(f=>`<div style="display:inline-flex;align-items:center;gap:.4rem;background:#f1f5f9;border:1px solid var(--border);border-radius:6px;padding:.3rem .75rem;margin:.25rem;font-size:.78rem">📄 ${f.name}</div>`).join('');
  try{
    let allMovimientos=[];
    for(const file of files){
      const text=await extractText(file);
      await saveStatementToLibrary(file,text);
      const year=extractStatementYear(text,file.name);
      const movs=parseBBVA(text,year);
      movs.forEach(m=>m.archivo=file.name);
      allMovimientos=allMovimientos.concat(movs);
    }
    const seen=new Set();
    allMovimientos=allMovimientos.filter(m=>{
      const key=`${m.fecha}-${m.monto}-${normTxt(m.desc)}`;
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    renderConciliacion(allMovimientos, files.length);
    renderStatementLibrary();
  }catch(e){
    console.error(e);
    document.getElementById('conc-results').innerHTML='<div style="color:var(--red);padding:1rem">❌ Error: '+e.message+'</div>';
  }
  document.getElementById('conc-loading').style.display='none';
}
function parseBBVA(text,statementYear){
  const movs=[];
  const meses={ENE:'01',FEB:'02',MAR:'03',ABR:'04',MAY:'05',JUN:'06',JUL:'07',AGO:'08',SEP:'09',OCT:'10',NOV:'11',DIC:'12'};
  const lines=text.split('\n').map(x=>x.trim()).filter(Boolean);
  const isStart=l=>/^\d{2}\/[A-Z]{3}\s+\d{2}\/[A-Z]{3}\s+\w+\s+/i.test(l);
  const blocks=[];
  let current=null;
  for(const line of lines){
    if(isStart(line)){
      if(current) blocks.push(current);
      current=[line];
    }else if(current){
      current.push(line);
    }
  }
  if(current) blocks.push(current);
  blocks.forEach(block=>{
    const first=block[0];
    if(!/RECIBIDO/i.test(first)) return;
    const fechaM=first.match(/^(\d{2})\/([A-Z]{3})/i);
    if(!fechaM) return;
    const dia=fechaM[1];
    const mes=meses[fechaM[2].toUpperCase()];
    if(!mes) return;
    const montos=first.match(/([\d,]+\.\d{2})/g);
    if(!montos||!montos.length) return;
    const monto=parseMoney(montos[0]);
    if(monto<100) return;
    const fecha=`${dia}/${mes}/${statementYear}`;
    const desc=block.join(' ').replace(/\s+/g,' ').trim();
    const ref=(desc.match(/Ref\.\s*([0-9]+)/i)||[])[1]||'';
    movs.push({fecha,desc:desc.substring(0,180),monto,ref});
  });
  return movs;
}
function dateFromMov(fechaMov){
  const p=fechaMov.split('/');
  if(p.length===3) return new Date(`${p[2]}-${p[1]}-${p[0]}T00:00:00`);
  return null;
}
function matchScoreFactura(f,mov,usedFacturas){
  if(usedFacturas.has(f.id)) return -9999;
  if(f.estatusPago==='pagado'||f.estatusPago==='complemento'||f.estatusSAT==='cancelada') return -9999;
  const diff=Math.abs((f.total||0)-mov.monto);
  if(diff>=1) return -9999;
  const movDate=dateFromMov(mov.fecha),facDate=new Date(f.fecha+'T00:00:00');
  if(movDate&&!isNaN(facDate)&&movDate<facDate) return -9999;
  let score=1000-diff;
  const movTxt=normTxt(mov.desc),cli=normTxt(f.cliente),rfc=normTxt(f.rfcReceptor);
  const clientHit=!!(cli&&movTxt.includes(cli.substring(0,Math.min(cli.length,14))));
  const rfcHit=!!(rfc&&movTxt.includes(rfc));
  if(clientHit) score+=700;if(rfcHit) score+=500;
  if(movDate&&!isNaN(facDate)){const days=(movDate-facDate)/86400000;score+=Math.max(0,180-Math.min(days,180));}
  return score;
}
function findFacturaMatch(mov,usedFacturas){
  const candidates=facturas.filter(f=>matchScoreFactura(f,mov,usedFacturas)>0);
  if(!candidates.length)return null;
  const movTxt=normTxt(mov.desc);
  const identified=candidates.filter(f=>{const cli=normTxt(f.cliente),rfc=normTxt(f.rfcReceptor);return (cli&&movTxt.includes(cli.substring(0,Math.min(cli.length,14))))||(rfc&&movTxt.includes(rfc));});
  const pool=identified.length?identified:candidates;
  // Si el banco no identifica al cliente y hay varias facturas del mismo importe, no adivinar.
  if(!identified.length&&pool.length!==1)return null;
  let best=null,bestScore=-9999;pool.forEach(f=>{const sc=matchScoreFactura(f,mov,usedFacturas);if(sc>bestScore){best=f;bestScore=sc;}});
  return best?{factura:best,score:bestScore}:null;
}
function autoAplicarConciliacion(exactos){
  let count=0;
  exactos.forEach(({mov,factura})=>{
    if(factura.estatusPago==='pagado'||factura.estatusPago==='complemento') return;
    aplicarConciliacion(factura.id,mov.fecha,mov.monto,true,mov);
    count++;
  });
  return count;
}
function renderConciliacion(movimientos, numArchivos){
  numArchivos=numArchivos||1;
  const exactos=[],sinMatchMov=[];
  const usedFacturas=new Set();
  movimientos.forEach(mov=>{
    const match=findFacturaMatch(mov,usedFacturas);
    if(match){
      exactos.push({mov,factura:match.factura});
      usedFacturas.add(match.factura.id);
    }else{
      sinMatchMov.push(mov);
    }
  });
  const auto=autoAplicarConciliacion(exactos);
  const pendientes=facturas.filter(f=>f.estatusPago==='pendiente');
  const totalAbonos=movimientos.reduce((s,m)=>s+m.monto,0);
  let html=`<div style="font-size:.78rem;color:var(--muted);margin-bottom:1rem">📂 ${numArchivos} archivo${numArchivos>1?'s':''} procesado${numArchivos>1?'s':''} · ${movimientos.length} abonos leídos · ${auto} factura${auto===1?'':'s'} marcada${auto===1?'':'s'} como pagada</div>
  <div style="display:flex;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap">
    <div class="stat-card green" style="flex:1;min-width:140px"><div class="stat-label">Abonos leídos</div><div class="stat-value green">${movimientos.length}</div><div class="stat-sub">${fmt(totalAbonos)}</div></div>
    <div class="stat-card green" style="flex:1;min-width:140px"><div class="stat-label">Match aplicado</div><div class="stat-value green">${exactos.length}</div></div>
    <div class="stat-card yellow" style="flex:1;min-width:140px"><div class="stat-label">Abonos sin match</div><div class="stat-value yellow">${sinMatchMov.length}</div></div>
    <div class="stat-card red" style="flex:1;min-width:140px"><div class="stat-label">Pendientes restantes</div><div class="stat-value red">${pendientes.length}</div></div>
  </div>`;
  if(exactos.length){
    html+=`<div class="conc-section conc-ok"><div class="conc-section-title">✅ Coincidencias aplicadas automáticamente</div>`;
    exactos.forEach(({mov,factura})=>{
      html+=`<div class="conc-row"><div class="conc-row-info"><span><strong>Folio ${factura.folio}</strong> · ${factura.cliente}</span><span class="conc-row-fecha">${mov.fecha} · ${mov.desc}${mov.archivo?' · '+mov.archivo:''}</span></div>
      <div style="display:flex;align-items:center;gap:.75rem"><span class="conc-row-monto">${fmt(mov.monto)}</span><span class="conc-applied">✅ Pagada</span></div></div>`;
    });
    html+='</div>';
  }
  if(sinMatchMov.length){
    html+=`<div class="conc-section conc-warn"><div class="conc-section-title">⚠️ Abonos leídos sin factura exacta pendiente</div>`;
    sinMatchMov.forEach(m=>{
      html+=`<div class="conc-row"><div class="conc-row-info"><span><strong>${fmt(m.monto)}</strong></span><span class="conc-row-fecha">${m.fecha} · ${m.desc}${m.archivo?' · '+m.archivo:''}</span></div></div>`;
    });
    html+='</div>';
  }
  if(pendientes.length){
    html+=`<div class="conc-section conc-err"><div class="conc-section-title">❌ Facturas que siguen pendientes</div>`;
    pendientes.forEach(f=>{html+=`<div class="conc-row"><div class="conc-row-info"><span><strong>Folio ${f.folio}</strong> · ${f.cliente}</span><span class="conc-row-fecha">${f.fecha}</span></div><span class="conc-row-monto" style="color:var(--red)">${fmt(f.total)}</span></div>`;});
    html+='</div>';
  }
  if(!movimientos.length) html='<div style="text-align:center;padding:2rem;color:var(--muted)">No se encontraron abonos en los PDFs. Verifica que sean estados de cuenta BBVA México con movimientos tipo SPEI RECIBIDO.</div>';
  document.getElementById('conc-results').innerHTML=html;
  if(auto) toast(auto+' factura(s) marcadas como pagadas');
}
function aplicarConciliacion(facturaId,fechaMov,monto,silent=false,mov=null){
  const f=facturas.find(x=>x.id===facturaId);if(!f) return;
  let fechaPago='';
  const p=fechaMov.split('/');
  if(p.length===3) fechaPago=`${p[2]}-${p[1]}-${p[0]}`;
  else if(p.length===2){const hoy=new Date();fechaPago=`${hoy.getFullYear()}-${p[1]}-${p[0]}`;}
  f.estatusPago='pagado';
  f.fechaPago=fechaPago;
  f.montoPago=monto;
  f.bancoArchivo=mov?.archivo||f.bancoArchivo||'';
  f.bancoReferencia=mov?.ref||f.bancoReferencia||'';
  save();
  const btn=document.getElementById('conc-btn-'+facturaId);
  if(btn) btn.outerHTML='<span class="conc-applied">✅ Aplicado</span>';
  if(!silent) toast('Folio '+f.folio+' marcado como pagado');
  renderDashboard();
}

// Verificar alertas al cargar (silencioso)
setTimeout(()=>checkAndSendAlerts(),3000);
