import inokufuLogo from '../../assets/logos/inokufu.png'


const DashboardService = ({ setServiceSelected }) => {
    const serviceHandler = () => {
		setServiceSelected(false)
	}
    
    return (
        <body className="dashboard servicePage">
		<section className="main flex column flex-1">	

			<ul className="breadcrumb flex row">
				<li className="back"><button onClick={serviceHandler}>retour</button></li>
				<li><button onClick={serviceHandler}>Catalogue</button></li>
				<li className="current"><button onClick={serviceHandler}>Inokufu Competency V2</button></li>
			</ul>
			</section>	

			<main className="container sectionContent">

				<section className="container servicePageTitle flex row">
					<img src={inokufuLogo} alt=""/>
					<div>
						<h1>Inokufu Competency V2</h1>
						<a href="https://developer.inokufu.com/">Documentation</a>
					</div>
					<ul className="ctas">
						<li><a className="useService" href="Utiliser">Utiliser</a></li>
					</ul>
				</section>

				<section className="container servicePageContent">
					<h1>Description</h1>
					<p>The Competency API enables you to explore and connect skills, occupations or domains of knowledge from various taxonomies and frameworks such as Wikipedia, ESCO classification, ROME codes from Pôle Emploi, Formacode®, etc.</p>

					<div className="filesExamples">
						
						<ul className="flex">
							<li>Fichier d'exemple n°1</li>
							<li>Télécharger ce fichier d'exemple</li>
						</ul>
						{/* <pre className="prettyprint">
							{
							    "statusCode": 200,
							    "request": {
							        "keywords": "weld",
							        "lang": "en"
							    },
							    "response": [
							        {
							            "label": "welder",
							            "score": 1.0,
							            "source": "Inokufu DomComp index"
							        },
							        {
							            "label": "welding",
							            "source": "Inokufu DomComp synonym"
							        }
							    ]
							}
						</pre>		 */}
					</div>	
				</section>

			</main>
			
	</body>
    )
}

export default DashboardService;