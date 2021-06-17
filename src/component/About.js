import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import foto from '../foto.JPG';
import Footer from './Footer';

function About() {
    return (
        <div>
            <Navbar />
            <br/><br/><br/><br/>
            <div class="page-content page-container bg-white" id="page-content">
                <div class="container">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-10 col-md-10">
                            <div class="card user-card-full bg-white">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                        <br/><br/>
                                            <div class="m-b-25"> <img src={foto} class="card-image" alt="User-Profile-Image" width="150px" height="200px"/> </div>
                                            <br/>
                                            <h5 class="f-w-600 text-info">Atrina Salsabil Nengkoda</h5>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                        <br/><br/>
                                            <h4 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h4>
                                            <br/>
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <h5 class="m-b-10 f-w-600 text-info">Email</h5>
                                                    <h6 class="text-muted f-w-400">atrina.nengkoda@gmail.com</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600 text-info">Phone</h5>
                                                    <h6 class="text-muted f-w-400">081334005504</h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <h5 class="m-b-10 f-w-600 text-info">NIM</h5>
                                                    <h6 class="text-muted f-w-400">1841720216</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600 text-info">Major</h5>
                                                    <h6 class="text-muted f-w-400">Informatic Technology</h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-5">
                                                    <h5 class="m-b-10 f-w-600 text-info">Email</h5>
                                                    <h6 class="text-muted f-w-400">atrina.nengkoda@gmail.com</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600 text-info">Address</h5>
                                                    <h6 class="text-muted f-w-400">Jl Teuku Umar, Banjarejo, Pagelaran, Malang</h6>
                                                    <br/><br/>
                                                </div>
                                            </div>
                                            <br/><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <Footer />
        </div>

    );
}

export default About;