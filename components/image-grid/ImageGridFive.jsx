"use client"

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const imageList = [
    {
        img: "/assets/img/imgs-de-la-marca/hydroptima-tubo1.jpg",
        delayAnimation: "0",
        imageOwner: "@element5digital",
        link: "https://element5digital.com/",
    },
    //   {
    //     img: "/assets/img/imgs-de-la-marca/hydroptima-tubo2.jpg",
    //     delayAnimation: "100",
    //     imageOwner: "@insideweather",
    //     link: "https://insideweather.com/",
    //   },
];

const ImageGridTwo = () => {
    return (
        <Gallery>
            <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
                {imageList.map((val, i) => (
                    <div className="col-6" key={i}>
                        <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay={val.delayAnimation}
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <div className="ptf-simple-image">
                                <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={745}
                                    height={600}
                                >
                                    {({ ref, open }) => (
                                        <Image
                                            width={745}
                                            height={600}
                                            style={{ width: '100%', height: '100%' }}
                                            src={val.img}
                                            alt="service"
                                            role="button"
                                            ref={ref}
                                            onClick={open}
                                        />
                                    )}
                                </Item>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Gallery>
    );
};

export default ImageGridTwo;
