import * as React from 'react';

const ResearchTeam = () => {
    return (
        <div>
            <h1>Research Team</h1>

            <div className="p-4">
                <div className="d-flex flex-row ">
                    <div className="">
                        <img src="https://www.gsic.uva.es/uploaded_files/49111_erkan-small.jpg" width="120" style={{ 'borderWidth': '0' }} />
                    </div>
                    <div className="pl-5 text-info">
                        <h5 className="font-weight-bold">Erkan Er</h5>
                        <div>Marie Curie Research Fellow</div>
                        <div>Universidad de Valladolid, Spain.</div>
                        <div className="small text-dark pt-1">
                            Erkan Er received his PhD degree in Learning, Design, and Technology from the University of Georgia, USA, in 2016. He is currently working as a postdoctoral researcher in GSIC-EMIC research group in the Department of Telecommunications Engineering, in the University of Valladolid, Spain. His recent research interests include using machine learning and educational data mining techniques to understand and support student learning in massive contexts.
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row mt-5">
                    <div className="">
                        <img src="https://0.academia-photos.com/13325057/35497261/30767799/s200_yannis.dimitriadis.png" width="120" style={{ 'borderWidth': '0' }} />
                    </div>
                    <div className="pl-5 text-info">
                        <h5 className="font-weight-bold">Professor Yannis Dimitriadis</h5>
                        <div>Universidad de Valladolid, Spain.</div>
                        <div className="small text-dark pt-1">
                            Yannis A. Dimitriadis received the PhD degree from the University of Valladolid, Spain, in 1992. He is currently a full professor of telematics engineering at the University of Valladolid and coordinator of the multidisciplinary research group GSIC/EMIC. His research interests include technological support to the learning design, MOOCs, learning analytics and orchestration of computer-supported collaborative learning processes.
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row mt-5">
                    <div className="">
                        <img src="https://research.monash.edu/files-asset/232878829/gasevic.jpg?w=160&f=webp" width="120" style={{ 'borderWidth': '0' }} />
                    </div>
                    <div className="pl-5 text-info">
                        <h5 className="font-weight-bold">Professor Dragan Gasevic</h5>
                        <div>Monash University, Australia.</div>
                        <div className="small text-dark pt-1">
                            Dragan Gašević is Professor of Learning Analytics at Monash University. He is a researcher in learning analytics and co-developed several software systems such as P3, rBPMN Editor, LOCO-Analyst, OnTask, OVAL, and ProSolo. He is recognized as Australia's field leader in educational technologies.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResearchTeam;