"use client";
import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePiker({ label, name }) {
  const inputRef = useRef();
  const [pickImage, setPickImage] = useState();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No Image picked yet</p>}
          {pickImage && <Image src={pickImage} alt="" fill/>}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={inputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
}
