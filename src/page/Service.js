import { Fragment, useEffect } from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'
import Connection from '../component/Connection';
import inokufuLogo from '../assets/logos/inokufu.png'
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncService } from '../features/reducers/visionsSlice';
import { fetchAsyncServices } from '../features/reducers/serviceSlice';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchAsyncServices());
	}, [dispatch])
	const servicesList = useSelector((state) => state.servicesList.service);
	const service = servicesList[0];
	
	if (!servicesList.length) return <h3>Loading...</h3>;
    console.log(service);


    const data = {
        provider: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweEM4NDM5YjRhMmE2Y2EwMTg1M2E4ZTA1OTcxNzdiNTk5QUYyZkYzQmYiLCJnaXZlbk5hbWUiOiJQZXJyaW4iLCJmYW1pbHlOYW1lIjoiR1JBTkRORSIsImVtYWlsT3duZXIiOiJwZXJyaW4uZ3JhbmRuZUBlZHVjYXRpb24uZ291di5mciIsImNvbXBhbnlOYW1lIjoiTUVOSlMiLCJjb21wYW55QWRyZXNzIjoiMTEwIFJ1ZSBkZSBHcmVuZWxsZSwgNzUwMDYgUGFyaXMiLCJsZWdhbFJlcHJlc2VudGF0aXZlIjoiSm9obiBEb2UiLCJlbWFpbExlZ2FsUmVwcmVzZW50YXRpdmUiOiJqb2huLmRvZUBlZHVjYXRpb24uZ291di5mciJ9fX0sInN1YiI6ImRpZDpldGhyOjB4NDoweEM4NDM5YjRhMmE2Y2EwMTg1M2E4ZTA1OTcxNzdiNTk5QUYyZkYzQmYiLCJuYmYiOjE2NDY0MjUxMjksImlzcyI6ImRpZDpldGhyOnJpbmtlYnk6MHhjNUE3NWJhODc4NzZiMjM3MjY1YjA1Rjg0ODE2MGY1NGQzNkNhMDY1In0.q0TGHow5mJyPhbFcItJ0nRyCxiTtVfOBxkutjjcLXmZlf-XFxqZTDC9OnZL71cHx0MEXSRoqwTOom-SZ9yz_4wA',
        selfdescription: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiU2VsZkRlc2NyaXB0aW9uIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InN0YXRlbWVudCI6eyJoYXNTZXJ2aWNlVGl0bGUiOiJGb3JtYXRpb25zIGluaXRpYWxlcyBlbiBGcmFuY2UiLCJoYXNTZXJ2aWNlRGVzY3JpcHRpb24iOiJDZSBqZXUgZGUgZG9ubsOpZXMgZXN0IHJlcHJpcyBkZSBsYSBwbGF0ZWZvcm1lIG9wZW5kYXRhIGRlIGwnT05JU0VQIiwiaGFzS2V5d29yZCI6WyJlZHVjYXRpb24iLCJ0cmFpbmluZyJdLCJwcm92aWRlZEJ5IjoiTUVOSlMiLCJoYXNQcm92aXNpb25UeXBlIjoiUHVibGljUHJvdmlzaW9uaW5nIiwiaGFzU2VydmljZU1vZGVsIjoiRGFhUyIsImhhc1dlYkFkZHJlc3MiOiJodHRwczovL2RhdGEuZWR1Y2F0aW9uLmdvdXYuZnIvZXhwbG9yZS9kYXRhc2V0L2ZyLWVuLWZvcm1hdGlvbnMtaW5pdGlhbGVzLWVuLWZyYW5jZS9pbmZvcm1hdGlvbiIsInR5cGVTZXJ2aWNlT2ZmZXJpbmciOiJEYXRhIiwiZGlkT3duZXIiOiJkaWQ6ZXRocjoweDQ6MHhDODQzOWI0YTJhNmNhMDE4NTNhOGUwNTk3MTc3YjU5OUFGMmZGM0JmIiwibmFtZU93bmVyIjoiUGVycmluIEdSQU5ETkUiLCJjb21wYW55T3duZXIiOiJNRU5KUyIsImVtYWlsT3duZXIiOiJwZXJyaW4uZ3JhbmRuZUBlZHVjYXRpb24uZ291di5mciJ9fX0sInN1YiI6ImRpZDpldGhyOjB4NDoweEM4NDM5YjRhMmE2Y2EwMTg1M2E4ZTA1OTcxNzdiNTk5QUYyZkYzQmYiLCJuYmYiOjE2NDY0MjUxMjksImlzcyI6ImRpZDpldGhyOnJpbmtlYnk6MHhjNUE3NWJhODc4NzZiMjM3MjY1YjA1Rjg0ODE2MGY1NGQzNkNhMDY1In0.NYOfFcwVUllnGoKZIGIQF271JuC-L8-pu2Kr9n79t-vB9XZ1wZTTVyqOzrvG37YudJoM5tzqrnMLAcRP99LCWgA',
        user: 'eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRGFzZXNJZGVudGl0eSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJzdGF0ZW1lbnQiOnsidHlwZSI6IkNlcnRpZmljYXQgUGFydGljaXBhbnQgREFTRVMiLCJkaWRPd25lciI6ImRpZDpldGhyOjB4NDoweDI0NDRiQURmQTc2Q2JDMzA3NkRDNUZFOERCMmFkRjY1OTUwRTdlYkYiLCJnaXZlbk5hbWUiOiJNaWNoZWwiLCJmYW1pbHlOYW1lIjoiQkxBTkMiLCJlbWFpbE93bmVyIjoibWljaGVsLmJsYW5jQGNvbnRhY3QuY29tIiwiY29tcGFueU5hbWUiOiJFZFRlY2gxIiwiY29tcGFueUFkcmVzcyI6IjEwIFJ1ZSBRdWluY2FtcG9peCwgNzUwMDMgUGFyaXMiLCJsZWdhbFJlcHJlc2VudGF0aXZlIjoiSm9obiBEb2UiLCJlbWFpbExlZ2FsUmVwcmVzZW50YXRpdmUiOiJqb2huLmRvZUBlZHVjYXRpb24uZ291di5mciJ9fX0sInN1YiI6ImRpZDpldGhyOjB4NDoweEM4NDM5YjRhMmE2Y2EwMTg1M2E4ZTA1OTcxNzdiNTk5QUYyZkYzQmYiLCJuYmYiOjE2NDY0MjUxMjksImlzcyI6ImRpZDpldGhyOnJpbmtlYnk6MHhjNUE3NWJhODc4NzZiMjM3MjY1YjA1Rjg0ODE2MGY1NGQzNkNhMDY1In0.D75-bHzpUOCNE9ThhogYKt_ALg0-XF1qx3fghKdHXGYQt-PVeEn3mWNhUSoQBzEjKS81h5e7HoKhP1F5WS13FQE'
    }
    const buttonName = "Demander l'intégration";
    const handleBack = () => {
        navigate(-1);
    }

    const handleIntegration = () => {
        console.log(data)
        dispatch(addAsyncService(data));

    }

    return (
        <Fragment>
            <Header />
            <ul className="container breadcrumb flex row">
                <li className="back"><button onClick={handleBack}>retour</button></li>
                <li><button onClick={handleBack}>catalogue</button></li>
                <li className="current"><button onClick={handleBack}>Inokufu Competency V2</button></li>
            </ul>

            <main className="container sectionContent">

                <section className="container servicePageTitle flex row">
                    <img src={inokufuLogo} alt="" />
                    <div>
                        <h1>{service.title}</h1>
                        <a href={service.documentation}>Documentation</a>
                    </div>
                    <ul className="ctas">
                        <li><a className="useService button blackButton" href="/">Demander l'intégration</a></li>
                    </ul>
                </section>

                <section className="container servicePageContent flex wrap column">
                    <div className="serviceDetails flex-1">
                        <table>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <h2>Détails</h2>
                                    </td>
                                </tr>
                            </thead>
                            <tr>
                                <td>Type</td>
                                <td>{service.typeData}</td>
                            </tr>
                            <tr>
                                <td>Niveau</td>
                                <td>{service.levelData}</td>
                            </tr>
                            <tr>
                                <td>STANDARD</td>
                                <td>{service.formatData}</td>
                            </tr>
                            <tr>
                                <td>LICENCE</td>
                                <td>MIT</td>
                            </tr>
                            <tr>
                                <td>Données personnelles</td>
                                <td>{service.personalData}</td>
                            </tr>
                            <tr>
                                <td>Label Gaia-X</td>
                                <td>{service.labelData}</td>
                            </tr>
                            <tr>
                                <td>Conditions d’utilisation</td>
                                <td><a href={service.conditions} className="button whiteButton external block">{service.conditions}</a></td>
                            </tr>

                        </table>
                    </div>
                    <div className="serviceDescription flex-1">
                        <h2>Description</h2>
                        <p>{service.description}</p>
                    </div>
                </section>

            </main>
            <Footer />
        </Fragment>

    )
}

export default Service;
