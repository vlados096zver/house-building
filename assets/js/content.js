const servicesList = document.querySelector(".services__list");

fetch("../content.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
       
            const sliderGr = document.querySelector(".swiper-galary");



            sliderGr.addEventListener("click", (event) => {


                const slider = event.target.closest(".swiper-slide-active");
                if (!slider) return;

                const serviceId = slider.getAttribute("data-id-slide");
                const serviceData = data.find((item) => item.id == serviceId);
                let modalS = document.createElement("div");
                modalS.classList.add("modal", "modal--project", "modal--active");


                modalS.innerHTML = `
        <div class="modal-inner">
        <div class="modal__header">
            <h2>${serviceData.title_modal}</h2>
            <button class="btn__modal-close">
                <img src="./assets/img/close.svg" alt="close icon" />
            </button>
        </div>

        <p class="project__text text-medium">
            ${serviceData.content_modal}
        </p>
    </div>

    <div class="container-large">
        <div class="swiper project-modal">
            <div class="slider__header">
                <div class="slider__controls">
                    <button class="slider-btn slider-btn--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                            <g opacity="0.3">
                                <path
                                    d="M20.1322 30.3451L24.6775 34.8905C24.8408 35.0811 25.1278 35.1034 25.3184 34.9401C25.5091 34.7768 25.5313 34.4898 25.368 34.2992C25.3528 34.2814 25.3362 34.2648 25.3184 34.2496L21.5503 30.4769L39.5455 30.4769C39.7965 30.4769 40 30.2734 40 30.0224C40 29.7713 39.7965 29.5678 39.5455 29.5678L21.5503 29.5678L25.3184 25.7998C25.5091 25.6365 25.5313 25.3495 25.368 25.1589C25.2047 24.9682 24.9178 24.946 24.7271 25.1093C24.7093 25.1245 24.6927 25.1411 24.6775 25.1589L20.1322 29.7043C19.9559 29.8815 19.9559 30.1678 20.1322 30.3451Z"
                                    fill="#010101" />
                            </g>
                            <path
                                d="M2.05448 40.9109C4.57878 47.3763 9.26675 52.7663 15.3196 56.1627C21.3725 59.5591 28.4158 60.7516 35.2494 59.5372C42.0829 58.3227 48.284 54.7764 52.796 49.5024C57.308 44.2284 59.8517 37.5531 59.9937 30.6139C60.1358 23.6747 57.8673 16.9009 53.5749 11.4468C49.2825 5.99257 43.2318 2.19545 36.4536 0.702374C29.6754 -0.790703 22.5893 0.112644 16.4025 3.2585C10.2157 6.40436 5.3111 11.5981 2.52436 17.9547L3.26538 18.2796C5.97697 12.0944 10.7493 7.04074 16.7692 3.97973C22.7891 0.91872 29.6842 0.0397339 36.2796 1.49254C42.8749 2.94535 48.7625 6.64006 52.9391 11.9471C57.1157 17.2542 59.323 23.8453 59.1848 30.5974C59.0466 37.3494 56.5715 43.8447 52.1812 48.9764C47.7909 54.1081 41.7571 57.5588 35.1078 58.7405C28.4585 59.9222 21.6052 58.7619 15.7156 55.4571C9.82594 52.1523 5.2644 46.9076 2.80819 40.6166L2.05448 40.9109Z"
                                fill="#010101" fill-opacity="0.3" />
                        </svg>
                    </button>
                    <button class="slider-btn slider-btn--next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                            <path
                                d="M39.8678 29.7043L35.3225 25.1589C35.1592 24.9682 34.8722 24.946 34.6816 25.1093C34.4909 25.2726 34.4687 25.5595 34.632 25.7502C34.6472 25.768 34.6638 25.7846 34.6816 25.7998L38.4497 29.5724H20.4545C20.2035 29.5724 20 29.776 20 30.027C20 30.2781 20.2035 30.4815 20.4545 30.4815H38.4497L34.6816 34.2496C34.4909 34.4129 34.4687 34.6999 34.632 34.8905C34.7953 35.0812 35.0822 35.1034 35.2729 34.9401C35.2907 34.9248 35.3073 34.9083 35.3225 34.8905L39.8678 30.3451C40.0441 30.1679 40.0441 29.8816 39.8678 29.7043Z"
                                fill="#222222" />
                            <path
                                d="M57.9455 19.0891C55.4212 12.6237 50.7332 7.23368 44.6804 3.8373C38.6275 0.440921 31.5842 -0.751634 24.7506 0.462833C17.9171 1.6773 11.716 5.22365 7.20401 10.4976C2.69203 15.7716 0.148316 22.4469 0.00628231 29.3861C-0.135752 36.3253 2.13268 43.0991 6.42508 48.5532C10.7175 54.0074 16.7682 57.8046 23.5464 59.2976C30.3246 60.7907 37.4107 59.8874 43.5975 56.7415C49.7843 53.5956 54.6889 48.4019 57.4756 42.0453L56.7346 41.7204C54.023 47.9056 49.2507 52.9593 43.2308 56.0203C37.2109 59.0813 30.3158 59.9603 23.7204 58.5075C17.1251 57.0546 11.2375 53.3599 7.0609 48.0529C2.88428 42.7458 0.677022 36.1547 0.815225 29.4026C0.953429 22.6506 3.42854 16.1553 7.81883 11.0236C12.2091 5.89188 18.2429 2.44118 24.8922 1.25946C31.5415 0.0777505 38.3948 1.23814 44.2844 4.54292C50.1741 7.8477 54.7356 13.0924 57.1918 19.3834L57.9455 19.0891Z"
                                fill="#222222" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="swiper-wrapper">
            ${serviceData.images.map(image => `
                <div class="swiper-slide">
                    <img src="${image}" alt="house photo" />
                </div>
            `).join('')}
        </div>
        </div>
    </div>

    <div class="modal-inner">
        <div class="modal__grid-table text-medium">
            <div class="modal__grid-item">Usable Area:  ${serviceData.usableArea} m²</div>
            <div class="modal__grid-item">Bathrooms: ${serviceData.bathrooms}</div>
            <div class="modal__grid-item">Terrace: ${serviceData.terrace} m²</div>
            <div class="modal__grid-item">
                Premium Thermo Insulation: ${serviceData.premiumThermoInsulation}
            </div>
            <div class="modal__grid-item">Number of Rooms: ${serviceData.numberOfRooms}</div>
            <div class="modal__grid-item">Optimal Room Height: ${serviceData.optimalRoomHeight}</div>
        </div>

        <p class="modal__bottom-text text-medium">
        ${serviceData.bottom_modal}
        </p>
    </div>
        `;


                const observer = new MutationObserver((mutations, observer) => {
                    const modal = document.querySelector('.project-modal');
                    if (modal) {
                        new Swiper(".project-modal", {
                            loop: true,
                            speed: 500,
                            spaceBetween: 40,
                            navigation: {
                                nextEl: ".slider-btn--next",
                                prevEl: ".slider-btn--prev",
                            },
                            breakpoints: {

                                0: {
                                    centeredSlides: true,
                                    slidesPerView: 1.2,
                                    spaceBetween: 15,
                                },

                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },

                                1180: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                }
                            }
                        });
                        observer.disconnect();
                    }
                });


                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });


                document.body.appendChild(modalS);
                document.body.style.overflow = "hidden";

                const closeModal = modalS.querySelector(".btn__modal-close");


                closeModal.addEventListener("click", () => {
                    modalS.remove();
                    document.body.style.overflow = "auto";
                });

            });
     

    })
    .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
    });
