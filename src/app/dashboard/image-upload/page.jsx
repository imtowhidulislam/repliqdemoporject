"use client";
import React, { useState } from "react";
import ButtonFilled from "@/common/ButtonFilled";
import FormData from "form-data";

const page = () => {
    const [image, setImage] = useState(null);
    const [imageBgRemove, setImageBgRemove] = useState(null);

    const handleImage = async (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submiting the form");

        const bgRemoveUrl = "https://api.remove.bg/v1.0/removebg";
        const apiKey = "q38WwAuUeFkJykgSjcEHC8Cx";

        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", "auto");

        const response = fetch(bgRemoveUrl, {
            method: "POST",
            headers: {
                "X-Api-Key": apiKey,
            },
            body: formData,
        });
        response
            .then((res) => res.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.onload = () => setImageBgRemove(reader.result);
                reader.readAsDataURL(blob);
            });
    };
    return (
        <>
            <div className="grid place-items-center">
                <form
                    className="w-full max-w-xl rounded-md bg-nutral3 p-4 drop-shadow-md"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4 text-center text-3xl font-bold">
                        <h2>Image Upload</h2>
                    </div>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        placeholder="enter an image"
                        onChange={handleImage}
                    />
                    <ButtonFilled
                        btnType="submit"
                        btnLebel="Upload"
                        onClick={handleSubmit}
                        classNames="py-2 px-4 rounded-md bg-primary text-nutral3 hover:bg-[#1b3b8b] cursor-pointer transition-all w-full ease-in-out duration-300 mt-8"
                    />
                </form>
            </div>
            <div className="grid place-items-center py-4">
                {imageBgRemove && (
                    <img
                        src={imageBgRemove}
                        className="w-full max-w-[200px] rounded-md p-4 shadow-md"
                        alt="random image"
                    />
                )}
            </div>
        </>
    );
};

export default page;
