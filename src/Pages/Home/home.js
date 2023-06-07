import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <div class="py-4">
        <div class="container-fluid body-padding">
            <div class="row justify-content-around">

                <main class="col col-xl-7 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                    <div class="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
                        <div class="wrapper">
                            <div class="icon"><i id="left" class="feather-arrow-left"></i></div>
                            <ul class="tabs-box">
                                <li class="tab">Coding</li>
                                <li class="tab active">JavaScript</li>
                                <li class="tab">Podcasts</li>
                                <li class="tab">Databases</li>
                                <li class="tab">Web Development</li>
                                <li class="tab">Unboxing</li>
                                <li class="tab">History</li>
                                <li class="tab">Programming</li>
                                <li class="tab">Gadgets</li>
                                <li class="tab">Algorithms</li>
                                <li class="tab">Comedy</li>
                                <li class="tab">Gaming</li>
                                <li class="tab">Share Market</li>
                                <li class="tab">Smartphones</li>
                                <li class="tab">Data Structure</li>
                            </ul>
                            <div class="icon"><i id="right" class="feather-arrow-right"></i></div>
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="p-3 d-flex w-100" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/icon/smile.svg" alt="" />
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="w-100">
                                        <textarea placeholder="Write your thoughts..." class="form-control shadow-none"
                                            oninput="auto_grow(this)"></textarea>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="border-top p-3 d-flex align-items-center">
                            <div class="mr-auto"><a href="#" class="text-link"><i class="feather-users"></i> Tag
                                    Buddies</a></div>
                            <div class="flex-shrink-1">
                                <button type="button" class="btn btn-sm post-btn">Post</button>
                            </div>
                        </div>
                    </div>
                    <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/icon/smile.svg" alt="" />
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold">
                                <div class="text-truncate">Tobia Crivellari</div>
                                <div class="small text-gray-500">Product Designer at askbootstrap</div>
                            </div>
                            <span class="ml-auto small">3 hours</span>
                        </div>
                        <div class="p-3 border-bottom osahan-post-body">
                            <p class="mb-0">Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco <a href="#">laboris consequat.</a></p>
                        </div>
                        <div class="p-3 osahan-post-footer text-center d-flex jcc"
                            >
                            <a href="#" class="mr-3 text-secondary"><i class="feather-heart text-danger icon-font"></i>
                                16</a>
                            <a href="#" class="mr-3 text-secondary"><i class="feather-message-square icon-font"></i>
                                8</a>
                            <a href="#" class="mr-3 text-secondary"><img src="img/icon/whatsapp.png" alt=""
                                    class="icon-image" /></a>
                        </div>
                    </div>


                </main>
                <aside class="col col-xl-2 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                    <div class="border rounded bg-white mb-3">
                        <div class="shadow-sm pt-4 pb-4">
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <i class="feather-user left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">User Name</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <i class="feather-edit left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Edit Profile</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <img src="img/icon/smile.svg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">User Profile</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <i class="feather-users left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">My Buddies</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <i class="feather-briefcase left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Jobs</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile">
                                        <i class="feather-save left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">My Jobs</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </aside>
                <aside class="col col-xl-2 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="border rounded bg-white mb-3">
                        <div class="shadow-sm">
                            <h6 class="pt-3 text-center">Other Option</h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <i class="feather-settings left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Settings</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <i class="feather-log-out left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Sign Out</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <i class="feather-file-text left-menu-icon"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Simple Resume</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <img src="img/icon/training.png" alt="" class="icon-image"/>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Trainings</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <img src="img/icon/2255545.png" alt="" class="icon-image"/>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Fresher Jobs</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle-profile border-rm">
                                        <img src="https://static.thenounproject.com/png/960899-200.png" alt=""
                                            class="icon-image"/>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-weight-bold">Internship</span>
                                </div>
                            </a>

                        </div>
                    </div>


                </aside>
            </div>
        </div>
    </div>
    </div>
  );
}
